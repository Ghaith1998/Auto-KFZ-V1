import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  getConsent,
  setConsent,
  OPEN_COOKIE_CONSENT_EVENT,
  type CookieConsentValue,
} from "../lib/cookieConsent";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showFromFooter = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_CONSENT_EVENT, showFromFooter);

    if (!getConsent()) {
      const timer = window.setTimeout(() => setOpen(true), 600);
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener(OPEN_COOKIE_CONSENT_EVENT, showFromFooter);
      };
    }

    return () =>
      window.removeEventListener(OPEN_COOKIE_CONSENT_EVENT, showFromFooter);
  }, []);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }
    setVisible(false);
    const timer = window.setTimeout(() => setMounted(false), 300);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (open && mounted) {
      panelRef.current?.focus();
    }
  }, [open, mounted]);

  const choose = (value: CookieConsentValue) => {
    setConsent(value);
    setOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={panelRef}
      tabIndex={-1}
      role="dialog"
      aria-label="Cookie-Hinweis"
      className={`fixed z-[70] inset-x-0 bottom-0 md:inset-x-auto md:bottom-4 md:right-4 md:w-[430px] max-w-full p-space-md md:p-space-lg bg-surface-container-lowest border-t md:border border-surface-container-high shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.6)] md:shadow-[0_16px_48px_-8px_rgba(0,0,0,0.75)] transition-transform duration-300 ease-out motion-reduce:transition-none focus:outline-none ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-space-sm mb-space-sm">
        <span className="material-symbols-outlined text-tertiary text-[20px]">
          cookie
        </span>
        <h2 className="font-title-lg text-title-lg uppercase tracking-wide text-on-surface">
          Cookie-Hinweis
        </h2>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Wir speichern Ihre Cookie-Auswahl technisch notwendig lokal in Ihrem
        Browser und binden externe Inhalte ein (z.&nbsp;B. Google Maps und
        Google Fonts). Details finden Sie in der{" "}
        <Link
          to="/datenschutz"
          className="text-tertiary hover:underline underline-offset-2"
        >
          Datenschutzerklärung
        </Link>
        .
      </p>

      <div className="flex flex-col sm:flex-row gap-space-sm mt-space-md">
        <button
          type="button"
          className="flex-1 px-space-md py-2.5 bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wide rounded hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_24px_-4px_rgba(229,30,43,0.5)] motion-reduce:transform-none"
          onClick={() => choose("all")}
        >
          Alle Cookies akzeptieren
        </button>
        <button
          type="button"
          className="flex-1 px-space-md py-2.5 bg-surface-container border border-surface-container-high text-on-surface font-label-lg text-label-lg uppercase tracking-wide rounded hover:bg-surface-container-high transition-all"
          onClick={() => choose("essential")}
        >
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
