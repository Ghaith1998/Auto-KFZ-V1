import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const PORT = Number(process.env.PORT || 3001);
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const MAIL_FROM =
  process.env.MAIL_FROM || (SMTP_USER ? `Meidlinger Autoteile Website <${SMTP_USER}>` : undefined);
const MAIL_TO = process.env.MAIL_TO || SMTP_USER;

const MAX_BODY = "10mb";
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;

const URGENCY_LABELS = {
  today: "Heute noch benötigt",
  soon: "In 1-2 Tagen",
  quote: "Reine Preisauskunft",
};

if (!SMTP_USER || !SMTP_PASS) {
  console.error(
    "[mail] Missing SMTP_USER/SMTP_PASS. Create a .env file (see .env.example) — Gmail app password required."
  );
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

transporter.verify().then(
  () => console.log(`[mail] SMTP OK — ${SMTP_HOST}:${SMTP_PORT} as ${SMTP_USER}`),
  (error) => console.error(`[mail] SMTP verify failed: ${error.message}`)
);

const app = express();
app.set("trust proxy", 1);
app.use(express.json({ limit: MAX_BODY }));

const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > RATE_MAX;
}

function str(value, max) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function validate(body) {
  const errors = {};
  const data = {
    name: str(body?.name, 120),
    telefon: str(body?.telefon, 40),
    email: str(body?.email, 120),
    marke: str(body?.marke, 60),
    modell: str(body?.modell, 60),
    baujahr: str(body?.baujahr, 10),
    vin: str(body?.vin, 60),
    description: str(body?.description, 4000),
    urgency: URGENCY_LABELS[body?.urgency] ? body.urgency : "quote",
  };

  if (data.name.length < 2) errors.name = "name required";
  const digits = data.telefon.replace(/[^\d+]/g, "");
  if (digits.replace(/[^\d]/g, "").length < 7 || digits.replace(/[^\d]/g, "").length > 15 || !/^\+?\d+$/.test(digits)) {
    errors.telefon = "invalid phone";
  }
  if (data.description.length < 10) errors.description = "description too short";
  if (data.email && !isValidEmail(data.email)) errors.email = "invalid email";

  let file = null;
  const rawFile = body?.file;
  if (rawFile && typeof rawFile === "object") {
    const name = str(rawFile.name, 180);
    const type = str(rawFile.type, 80);
    const data64 = typeof rawFile.data === "string" ? rawFile.data : "";
    const isImage = type.startsWith("image/");
    const isPdf = type === "application/pdf";
    if (!name || (!isImage && !isPdf)) {
      errors.file = "invalid file type";
    } else if (!/^[A-Za-z0-9+/=\r\n]+$/.test(data64) || data64.length === 0) {
      errors.file = "invalid file data";
    } else {
      const bytes = Buffer.from(data64, "base64");
      if (bytes.length === 0) errors.file = "invalid file data";
      else if (bytes.length > MAX_FILE_BYTES) errors.file = "file too large";
      else file = { filename: name, content: bytes, contentType: type };
    }
  }

  return { data, errors, file };
}

function buildEmail(data, file, meta) {
  const rows = [
    ["Name", data.name],
    ["Telefon / WhatsApp", data.telefon],
    ["E-Mail", data.email || "—"],
    ["Marke", data.marke || "—"],
    ["Modell", data.modell || "—"],
    ["Baujahr", data.baujahr || "—"],
    ["Fahrgestellnummer", data.vin || "—"],
    ["Dringlichkeit", URGENCY_LABELS[data.urgency]],
    ["Beschreibung", data.description],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top;white-space:nowrap;">${escapeHtml(
          label
        )}</td><td style="padding:6px 0;color:#111;">${escapeHtml(String(value)).replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("");

  const html = `
<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;">
  <h2 style="margin:0 0 4px;color:#e51e2b;">Neue Teileanfrage über die Website</h2>
  <p style="margin:0 0 14px;color:#666;">${escapeHtml(meta.timestamp)} · IP ${escapeHtml(meta.ip)} · Anhang: ${
    file ? escapeHtml(file.filename) : "keiner"
  }</p>
  <table style="border-collapse:collapse;width:100%;max-width:640px;">${htmlRows}</table>
</div>`;

  const text = [
    "Neue Teileanfrage über die Website",
    `${meta.timestamp} · IP ${meta.ip}`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    file ? `\nAnhang: ${file.filename} (${file.contentType})` : "\nKein Anhang",
  ].join("\n");

  return { html, text };
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, smtp: `${SMTP_HOST}:${SMTP_PORT}` });
});

app.post("/api/contact", async (req, res) => {
  if (rateLimited(req.ip || "unknown")) {
    return res.status(429).json({ ok: false, error: "RATE_LIMITED" });
  }

  const honeypot = req.body?.website;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return res.json({ ok: true });
  }

  const { data, errors, file } = validate(req.body);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  const { html, text } = buildEmail(data, file, {
    timestamp: new Date().toLocaleString("de-AT", { timeZone: "Europe/Vienna" }),
    ip: req.ip || "unknown",
  });

  try {
    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: data.email ? { name: data.name, address: data.email } : undefined,
      subject: `[Website-Anfrage] ${data.name} – ${URGENCY_LABELS[data.urgency]}`,
      text,
      html,
      attachments: file ? [{ filename: file.filename, content: file.content, contentType: file.contentType }] : [],
    });
    console.log(`[mail] sent ${info.messageId} -> ${MAIL_TO} (${file ? "with attachment" : "no attachment"})`);
    return res.json({ ok: true });
  } catch (error) {
    console.error(`[mail] send failed: ${error.code || ""} ${error.message}`);
    return res.status(502).json({ ok: false, error: "MAIL_FAILED" });
  }
});

const distIndex = path.join(ROOT, "dist", "index.html");
if (fs.existsSync(distIndex)) {
  app.use(express.static(path.join(ROOT, "dist")));
  app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api")) return next();
    res.sendFile(distIndex);
  });
  console.log("[static] serving dist/");
}

app.listen(PORT, () => {
  console.log(`[api] listening on http://127.0.0.1:${PORT}`);
});
