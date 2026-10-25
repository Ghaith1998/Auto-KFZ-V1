export type ContactUrgency = "today" | "soon" | "quote";

export interface ContactFormValues {
  name: string;
  telefon: string;
  email: string;
  marke: string;
  modell: string;
  baujahr: string;
  vin: string;
  description: string;
  urgency: ContactUrgency;
}

export interface ContactFormErrors {
  name?: string;
  telefon?: string;
  email?: string;
  description?: string;
}

export type ContactFormField = keyof ContactFormValues;

export const CONTACT_FORM_RULES = {
  nameMinLength: 2,
  descriptionMinLength: 10,
  phoneDigitsMin: 7,
  phoneDigitsMax: 15,
} as const;

export const MAX_FILE_BYTES = 8 * 1024 * 1024;

export const URGENCY_LABELS: Record<ContactUrgency, string> = {
  today: "Heute noch benötigt",
  soon: "In 1-2 Tagen",
  quote: "Reine Preisauskunft",
};

/**
 * Normalizes common Austrian/International phone notations:
 * "0670 654 2142", "+43 670 654 2142", "0043-670-654-2142" -> digits only.
 */
export function normalizePhone(raw: string): string {
  return raw.replace(/[\s\-/().]/g, "");
}

/**
 * Valid when it is digits only (after normalization) with an optional
 * leading "+", "00" or "0" country/trunk prefix and a plausible length.
 */
export function isValidPhone(raw: string): boolean {
  const normalized = normalizePhone(raw.trim());
  if (!/^\+?\d+$/.test(normalized)) return false;

  const digits = normalized.replace(/^\+/, "").replace(/^00/, "");
  return (
    digits.length >= CONTACT_FORM_RULES.phoneDigitsMin &&
    digits.length <= CONTACT_FORM_RULES.phoneDigitsMax
  );
}

export function isValidEmail(raw: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(raw.trim());
}

export function validateContactFile(file: File): string | undefined {
  const accepted = file.type.startsWith("image/") || file.type === "application/pdf";
  if (!accepted) {
    return "Bitte laden Sie ein Bild oder eine PDF-Datei hoch.";
  }
  if (file.size > MAX_FILE_BYTES) {
    return "Die Datei darf max. 8 MB groß sein.";
  }
  return undefined;
}

export function validateContactForm(
  values: ContactFormValues
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = values.name.trim();
  if (!name) {
    errors.name = "Bitte geben Sie Ihren Namen ein.";
  } else if (name.length < CONTACT_FORM_RULES.nameMinLength) {
    errors.name = `Der Name muss mindestens ${CONTACT_FORM_RULES.nameMinLength} Zeichen lang sein.`;
  }

  const telefon = values.telefon.trim();
  if (!telefon) {
    errors.telefon =
      "Bitte geben Sie eine Telefon- oder WhatsApp-Nummer ein.";
  } else if (!isValidPhone(telefon)) {
    errors.telefon =
      "Bitte geben Sie eine gültige Nummer ein (z.B. 0670 654 2142 oder +43 670 654 2142).";
  }

  const description = values.description.trim();
  if (!description) {
    errors.description = "Bitte beschreiben Sie das gesuchte Ersatzteil.";
  } else if (description.length < CONTACT_FORM_RULES.descriptionMinLength) {
    errors.description = `Die Beschreibung muss mindestens ${CONTACT_FORM_RULES.descriptionMinLength} Zeichen lang sein.`;
  }

  const email = values.email.trim();
  if (email && !isValidEmail(email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
