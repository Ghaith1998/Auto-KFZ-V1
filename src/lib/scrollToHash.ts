export const HEADER_OFFSET = 96;

export function scrollToElement(
  element: Element | null,
  behavior: ScrollBehavior = "smooth"
): void {
  if (!element) return;
  const top =
    element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior });
}

export function scrollToHash(
  id: string,
  behavior: ScrollBehavior = "smooth"
): void {
  scrollToElement(document.getElementById(id), behavior);
}
