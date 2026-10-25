export type CookieConsentValue = "all" | "essential";

const STORAGE_KEY = "ma-cookie-consent-v1";

export const OPEN_COOKIE_CONSENT_EVENT = "ma:open-cookie-consent";

export function getConsent(): CookieConsentValue | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "all" || value === "essential" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: CookieConsentValue): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage unavailable (private mode) — banner will simply show again
  }
}

export function openCookieConsentBanner(): void {
  window.dispatchEvent(new Event(OPEN_COOKIE_CONSENT_EVENT));
}
