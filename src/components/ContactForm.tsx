import { FormEvent, useRef, useState } from "react";
import {
  ContactFormErrors,
  ContactFormValues,
  hasErrors,
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

const urgencyOptions = [
  { value: "today", label: "Heute noch benötigt" },
  { value: "soon", label: "In 1-2 Tagen" },
  { value: "quote", label: "Reine Preisauskunft" },
];

function inputClass(hasError: boolean, small = false): string {
  const cls = small ? smallInputClass : baseInputClass;
  return hasError ? `${cls} border-error` : `${cls} border-surface-container-high`;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    telefon: "",
    description: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      scrollToElement(formRef.current);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="space-y-space-md">
        <div className="p-space-lg rounded bg-surface-container border border-tertiary-container/60 space-y-space-sm">
          <div className="flex items-center gap-space-xs text-tertiary font-label-lg text-label-lg uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-[22px]">
              check_circle
            </span>
            <span>Anfrage erfolgreich vorbereitet</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Vielen Dank, {values.name.trim()}! Ihre Teileanfrage wurde geprüft
            und ist bereit. Wir melden uns innerhalb von ca. 15–30 Minuten
            unter <strong>{values.telefon.trim()}</strong> mit einem
            unverbindlichen Angebot.
          </p>
        </div>
        <button
          className="w-full flex items-center justify-center gap-2 px-space-lg py-3.5 bg-surface-container border border-surface-container-high text-on-surface font-headline-sm text-headline-sm uppercase rounded tracking-wide hover:bg-surface-container-high transition-all"
          type="button"
          onClick={() => {
            setValues({ name: "", telefon: "", description: "" });
            setErrors({});
            setSubmitted(false);
          }}
        >
          <span>Neue Anfrage senden</span>
          <span className="material-symbols-outlined text-[20px]">refresh</span>
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="space-y-space-md"
      onSubmit={handleSubmit}
      noValidate
    >
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
          className={`${baseInputClass} border-surface-container-high`}
          placeholder="ihre.adresse@beispiel.at"
          type="email"
        />
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
            <label className="font-label-md text-label-md text-on-surface-variant block">
              Marke
            </label>
            <input
              className={`${smallInputClass} border-surface-container-high`}
              placeholder="z.B. VW, BMW"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <label className="font-label-md text-label-md text-on-surface-variant block">
              Modell
            </label>
            <input
              className={`${smallInputClass} border-surface-container-high`}
              placeholder="z.B. Golf 7, 320d"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <label className="font-label-md text-label-md text-on-surface-variant block">
              Baujahr
            </label>
            <input
              className={`${smallInputClass} border-surface-container-high`}
              placeholder="z.B. 2018"
              type="text"
            />
          </div>
        </div>

        <div className="space-y-1 pt-1">
          <label className="font-label-md text-label-md text-on-surface-variant block">
            Fahrgestellnummer (FIN / VIN - 17 Stellen) oder Zulassungsschein
          </label>
          <input
            className={`${baseInputClass} border-surface-container-high font-body-sm text-body-sm`}
            placeholder="z.B. WBA3A51080F123456"
            type="text"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs p-2.5 rounded bg-surface-container-high/60 border border-dashed border-surface-container-highest">
          <div className="flex items-center gap-2 text-on-surface-variant text-body-sm font-body-sm">
            <span className="material-symbols-outlined text-[20px] text-primary">
              add_photo_alternate
            </span>
            <span>Zulassungsschein-Foto hochladen (optional)</span>
          </div>
          <label className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container text-on-surface text-label-md font-label-md uppercase rounded border border-surface-container-highest cursor-pointer hover:bg-surface-container-highest transition-colors self-start sm:self-auto">
            <span>Datei wählen</span>
            <input className="hidden" type="file" accept="image/*,.pdf" />
          </label>
        </div>
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
          {urgencyOptions.map((option, index) => (
            <label
              key={option.value}
              className="flex items-center gap-2 p-2.5 rounded bg-surface-container border border-surface-container-high cursor-pointer hover:border-primary-container transition-colors text-body-sm font-body-sm text-on-surface"
            >
              <input
                className="text-primary-container accent-primary-container"
                name="urgency"
                type="radio"
                value={option.value}
                defaultChecked={index === 0}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit button */}
      <div className="pt-space-xs">
        <button
          className="w-full flex items-center justify-center gap-2 px-space-lg py-3.5 bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase rounded tracking-wide hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_24px_-4px_rgba(229,30,43,0.5)]"
          type="submit"
        >
          <span>KOSTENLOSE ANFRAGE ABSENDEN</span>
          <span className="material-symbols-outlined text-[20px]">send</span>
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
