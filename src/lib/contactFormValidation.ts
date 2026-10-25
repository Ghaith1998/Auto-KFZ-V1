export interface ContactFormValues {
  name: string;
  telefon: string;
  description: string;
}

export interface ContactFormErrors {
  name?: string;
  telefon?: string;
  description?: string;
}

export type ContactFormField = keyof ContactFormValues;

export const CONTACT_FORM_RULES = {
  nameMinLength: 2,
  descriptionMinLength: 10,
  phoneDigitsMin: 7,
  phoneDigitsMax: 15,
} as const;

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

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
