import { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  ContactFormErrors,
  ContactFormValues,
  URGENCY_LABELS,
  ContactUrgency,
  hasErrors,
  validateContactFile,
  validateContactForm,
} from "../lib/contactFormValidation";
import { scrollToElement } from "../lib/scrollToHash";

const baseInputClass =
  "w-full bg-surface-container px-3.5 py-2.5 rounded border text-on-surface placeholder:text-secondary-fixed-dim/40 font-body-md text-body-md focus:outline-none focus:border-primary-container transition-colors";

const smallInputClass =
  "w-full bg-surface-container px-3 py-2 rounded border text-on-surface placeholder:text-secondary-fixed-dim/40 text-body-sm font-body-sm focus:outline-none focus:border-primary-container transition-colors";

const labelClass =
  "font-label-md text-label-md text-secondary uppercase tracking-wider block";

const errorClass = "text-error font-body-sm text-body-sm mt-1";

const urgencyOptions: { value: ContactUrgency; label: string }[] = [
  { value: "today", label: URGENCY_LABELS.today },
  { value: "soon", label: URGENCY_LABELS.soon },
  { value: "quote", label: URGENCY_LABELS.quote },
];

const emptyValues: ContactFormValues = {
  name: "",
  telefon: "",
  email: "",
  marke: "",
  modell: "",
  baujahr: "",
  vin: "",
  description: "",
  urgency: "today",
};

function inputClass(hasError: boolean, small = false): string {
  const cls = small ? smallInputClass : baseInputClass;
  return hasError ? `${cls} border-error` : `${cls} border-surface-container-high`;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | undefined>(undefined);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const next = event.target.files?.[0] ?? null;
    if (!next) {
      setFile(null);
      setFileError(undefined);
      return;
    }
    const validationError = validateContactFile(next);
    if (validationError) {
      setFile(null);
      setFileError(validationError);
      event.target.value = "";
      return;
    }
    setFile(next);
    setFileError(undefined);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    setFileError(file ? validateContactFile(file) : undefined);
    if (hasErrors(nextErrors) || (file && validateContactFile(file))) {
      scrollToElement(formRef.current);
      return;
    }

    setStatus("sending");
    setSubmitError(null);

    try {
      const payload: Record<string, unknown> = {
        name: values.name.trim(),
        telefon: values.telefon.trim(),
        email: values.email.trim(),
        marke: values.marke.trim(),
        modell: values.modell.trim(),
        baujahr: values.baujahr.trim(),
        vin: values.vin.trim(),
        description: values.description.trim(),
        urgency: values.urgency,
        website: honeypot,
        file: null,
      };
      if (file) {
        payload.file = {
          name: file.name,
          type: file.type,
          data: await fileToBase64(file),
        };
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || `HTTP ${response.status}`);
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setSubmitError(
        "Das Senden ist fehlgeschlagen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per WhatsApp."
      );
      scrollToElement(formRef.current);
    }
  }

  function handleReset() {
    setValues(emptyValues);
    setErrors({});
    setFile(null);
    setFileError(undefined);
    setHoneypot("");
    setSubmitError(null);
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="space-y-space-md">
        <div className="p-space-lg rounded bg-surface-container border border-tertiary-container/60 space-y-space-sm">
          <div className="flex items-center gap-space-xs text-tertiary font-label-lg text-label-lg uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-[22px]">
              check_circle
            </span>
            <span>Anfrage erfolgreich gesendet</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Vielen Dank, {values.name.trim()}! Ihre Teileanfrage wurde uns
            zugestellt. Wir melden uns innerhalb von ca. 15–30 Minuten unter{" "}
            <strong>{values.telefon.trim()}</strong> mit einem unverbindlichen
            Angebot.
          </p>
        </div>
        <button
          className="w-full flex items-center justify-center gap-2 px-space-lg py-3.5 bg-surface-container border border-surface-container-high text-on-surface font-headline-sm text-headline-sm uppercase rounded tracking-wide hover:bg-surface-container-high transition-all"
          type="button"
          onClick={handleReset}
        >
          <span>Neue Anfrage senden</span>
          <span className="material-symbols-outlined text-[20px]">refresh</span>
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      ref={formRef}
      className="space-y-space-md"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
      />

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div className="space-y-1">
          <label className={labelClass} htmlFor="contact-name">
            Vor- &amp; Nachname
          </label>
          <input
            id="contact-name"
            className={inputClass(Boolean(errors.name))}
            placeholder="z.B. Stefan Gruber"
            type="text"
            disabled={sending}
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className={errorClass} role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <label className={labelClass} htmlFor="contact-telefon">
            Telefon / WhatsApp *
          </label>
          <input
            id="contact-telefon"
            className={inputClass(Boolean(errors.telefon))}
            placeholder="z.B. 0670 654 2142"
            type="tel"
            disabled={sending}
            value={values.telefon}
            onChange={(event) => updateField("telefon", event.target.value)}
            aria-invalid={Boolean(errors.telefon)}
            aria-describedby={
              errors.telefon ? "contact-telefon-error" : undefined
            }
          />
          {errors.telefon && (
            <p id="contact-telefon-error" className={errorClass} role="alert">
              {errors.telefon}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label className={labelClass} htmlFor="contact-email">
          E-Mail-Adresse (optional)
        </label>
        <input
          id="contact-email"
          className={inputClass(Boolean(errors.email))}
          placeholder="ihre.adresse@beispiel.at"
          type="email"
          disabled={sending}
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className={errorClass} role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Vehicle Data Group */}
      <div className="p-space-md rounded bg-surface-container/60 border border-surface-container-highest space-y-space-sm">
        <div className="flex items-center gap-1.5 text-primary-container font-label-md text-label-md uppercase font-bold tracking-wider">
          <span className="material-symbols-outlined text-[16px]">
            directions_car
          </span>
          <span>FAHRZEUGDATEN (Gegen Fehlbestellungen)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
          <div className="space-y-1">
            <label
              className="font-label-md text-label-md text-on-surface-variant block"
              htmlFor="contact-marke"
            >
              Marke
            </label>
            <input
              id="contact-marke"
              className={`${smallInputClass} border-surface-container-high`}
              placeholder="z.B. VW, BMW"
              type="text"
              disabled={sending}
              value={values.marke}
              onChange={(event) => updateField("marke", event.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label
              className="font-label-md text-label-md text-on-surface-variant block"
              htmlFor="contact-modell"
            >
              Modell
            </label>
            <input
              id="contact-modell"
              className={`${smallInputClass} border-surface-container-high`}
              placeholder="z.B. Golf 7, 320d"
              type="text"
              disabled={sending}
              value={values.modell}
              onChange={(event) => updateField("modell", event.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label
              className="font-label-md text-label-md text-on-surface-variant block"
              htmlFor="contact-baujahr"
            >
              Baujahr
            </label>
            <input
              id="contact-baujahr"
              className={`${smallInputClass} border-surface-container-high`}
              placeholder="z.B. 2018"
              type="text"
              disabled={sending}
              value={values.baujahr}
              onChange={(event) => updateField("baujahr", event.target.value)}
            />
          </div>
        </div>

        <div className="space-y-1 pt-1">
          <label
            className="font-label-md text-label-md text-on-surface-variant block"
            htmlFor="contact-vin"
          >
            Fahrgestellnummer (FIN / VIN - 17 Stellen) oder Zulassungsschein
          </label>
          <input
            id="contact-vin"
            className={`${baseInputClass} border-surface-container-high font-body-sm text-body-sm`}
            placeholder="z.B. WBA3A51080F123456"
            type="text"
            disabled={sending}
            value={values.vin}
            onChange={(event) => updateField("vin", event.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs p-2.5 rounded bg-surface-container-high/60 border border-dashed border-surface-container-highest">
          <div className="flex items-center gap-2 text-on-surface-variant text-body-sm font-body-sm">
            <span className="material-symbols-outlined text-[20px] text-primary">
              add_photo_alternate
            </span>
            <span>
              {file
                ? file.name
                : "Zulassungsschein-Foto hochladen (optional)"}
            </span>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {file && (
              <button
                type="button"
                disabled={sending}
                onClick={() => {
                  setFile(null);
                  setFileError(undefined);
                }}
                aria-label="Datei entfernen"
                className="inline-flex items-center justify-center h-7 w-7 rounded bg-surface-container text-error border border-surface-container-highest hover:bg-error hover:text-on-error transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  close
                </span>
              </button>
            )}
            <label className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container text-on-surface text-label-md font-label-md uppercase rounded border border-surface-container-highest cursor-pointer hover:bg-surface-container-high transition-colors">
              <span>{file ? "Ändern" : "Datei wählen"}</span>
              <input
                className="hidden"
                type="file"
                accept="image/*,.pdf"
                disabled={sending}
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        {fileError && (
          <p className={errorClass} role="alert">
            {fileError}
          </p>
        )}
      </div>

      {/* Part Description */}
      <div className="space-y-1">
        <label className={labelClass} htmlFor="contact-description">
          Gesuchtes Ersatzteil / Beschreibung *
        </label>
        <textarea
          id="contact-description"
          className={inputClass(Boolean(errors.description))}
          placeholder="z.B. Bremssattel vorne rechts für Golf 7 TDI oder Drosselklappe..."
          rows={3}
          disabled={sending}
          value={values.description}
          onChange={(event) => updateField("description", event.target.value)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={
            errors.description ? "contact-description-error" : undefined
          }
        />
        {errors.description && (
          <p id="contact-description-error" className={errorClass} role="alert">
            {errors.description}
          </p>
        )}
      </div>

      {/* Urgency */}
      <div className="space-y-1.5 pt-1">
        <label className={labelClass}>
          Dringlichkeit der Bereitstellung
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {urgencyOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 p-2.5 rounded bg-surface-container border border-surface-container-high cursor-pointer hover:border-primary-container transition-colors text-body-sm font-body-sm text-on-surface"
            >
              <input
                className="text-primary-container accent-primary-container"
                name="urgency"
                type="radio"
                value={option.value}
                disabled={sending}
                checked={values.urgency === option.value}
                onChange={() => updateField("urgency", option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit error */}
      {status === "error" && submitError && (
        <div
          className="flex items-start gap-2 p-space-sm rounded bg-error-container/40 border border-error text-error text-body-sm font-body-sm"
          role="alert"
        >
          <span className="material-symbols-outlined text-[18px] shrink-0">
            error
          </span>
          <span>{submitError}</span>
        </div>
      )}

      {/* Submit button */}
      <div className="pt-space-xs">
        <button
          className="w-full flex items-center justify-center gap-2 px-space-lg py-3.5 bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase rounded tracking-wide hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_24px_-4px_rgba(229,30,43,0.5)] disabled:opacity-70 disabled:cursor-wait disabled:active:scale-100"
          type="submit"
          disabled={sending}
          aria-busy={sending}
        >
          <span>{sending ? "WIRD GESENDET…" : "KOSTENLOSE ANFRAGE ABSENDEN"}</span>
          <span
            className={`material-symbols-outlined text-[20px] ${
              sending ? "animate-spin" : ""
            }`}
          >
            {sending ? "progress_activity" : "send"}
          </span>
        </button>
      </div>

      {/* Privacy notice */}
      <div className="flex items-center justify-center gap-1.5 text-center text-body-sm font-body-sm text-secondary pt-1">
        <span className="material-symbols-outlined text-[16px] text-tertiary">
          lock
        </span>
        <span>
          Ihre Daten werden ausschließlich zur Teilerecherche und
          Kontaktaufnahme genutzt. Keine Weitergabe an Dritte.
        </span>
      </div>
    </form>
  );
}
