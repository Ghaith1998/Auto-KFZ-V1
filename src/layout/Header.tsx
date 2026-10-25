import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";

const baseLinkClass =
  "px-space-md py-space-sm font-label-lg text-label-lg tracking-wide uppercase transition-all rounded";

function navLinkClass({ isActive }: { isActive: boolean }): string {
  return isActive
    ? `${baseLinkClass} text-on-surface bg-surface-container-low`
    : `${baseLinkClass} text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low`;
}

const whatsappHref = "https://wa.me/436706542142";

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

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
      drawerRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    }
  }, [open, mounted]);

  useEffect(() => {
    if (!open && wasOpen.current) {
      buttonRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeOnLink = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.target === "_blank") return;
    setOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-surface-container-highest shadow-[0_4px_24px_-4px_rgba(0,0,0,0.6)]">
        <div className="bg-surface-container-lowest border-b border-surface-container-high py-1 px-4 text-center hidden md:block">
          <div className="w-full flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
            <div className="flex items-center gap-space-sm">
              <span>📍 Steinbauergasse 36, 1120 Wien</span>
              <span className="text-surface-bright">|</span>
              <span>📞 0670 654 2142</span>
              <span className="text-surface-bright">|</span>
              <span>Mo-Fr 08:30-18:00, Sa 09:00-14:00</span>
            </div>
            <div className="flex items-center gap-space-xs text-tertiary font-label-md">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span>WhatsApp Express-Beratung aktiv</span>
            </div>
          </div>
        </div>

        <div className="h-20 w-full px-4 md:px-margin-desktop flex items-center justify-between gap-gutter">
          <div className="flex items-center gap-space-md">
            <Link to="/" className="flex items-center gap-space-sm group">
              <BrandLogo />
              <div className="flex flex-col">
                <span className="font-title-lg text-title-lg tracking-tight uppercase text-on-surface group-hover:text-primary transition-colors leading-none">
                  Meidlinger
                </span>
                <span className="font-label-md text-label-md tracking-widest uppercase text-primary-container leading-tight">
                  Autoteile Wien
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-space-xs">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <Link
              to="/#sortiment"
              className={`${baseLinkClass} text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low`}
            >
              Services &amp; Teile
            </Link>
            <NavLink to="/ueber-uns" className={navLinkClass}>
              Über uns
            </NavLink>
          </nav>

          <div className="flex items-center gap-space-md">
            <a
              className="hidden sm:flex items-center gap-space-xs px-space-md py-2.5 bg-surface-container border border-surface-container-high rounded text-on-surface hover:border-tertiary-container hover:bg-surface-container-high transition-all"
              href={whatsappHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-tertiary text-[20px]">
                chat
              </span>
              <span className="font-label-lg text-label-lg">
                WhatsApp 0670 654 2142
              </span>
            </a>

            <button
              ref={buttonRef}
              type="button"
              className="lg:hidden p-2 -mr-2 rounded text-on-surface hover:bg-surface-container-high transition-all motion-reduce:transition-none"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="material-symbols-outlined text-[28px]">
                {open ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {mounted && (
        <div
          className={`fixed inset-0 z-[55] bg-surface/60 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {mounted && (
        <div
          ref={drawerRef}
          id="mobile-nav"
          aria-label="Hauptnavigation"
          className={`fixed inset-y-0 right-0 z-[60] w-80 max-w-[85vw] flex flex-col bg-surface-container-lowest border-l border-surface-container-high shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
            visible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-20 px-space-md border-b border-surface-container-high">
            <span className="font-title-lg text-title-lg uppercase text-on-surface">
              Menü
            </span>
            <button
              type="button"
              className="p-2 -mr-2 rounded text-on-surface hover:bg-surface-container-high transition-all"
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
            >
              <span className="material-symbols-outlined text-[28px]">
                close
              </span>
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-space-md overflow-y-auto">
            <NavLink
              to="/"
              end
              className={(state) => `${navLinkClass(state)} block`}
              onClick={closeOnLink}
            >
              Home
            </NavLink>
            <Link
              to="/#sortiment"
              className={`${baseLinkClass} block text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low`}
              onClick={closeOnLink}
            >
              Services &amp; Teile
            </Link>
            <NavLink
              to="/ueber-uns"
              className={(state) => `${navLinkClass(state)} block`}
              onClick={closeOnLink}
            >
              Über uns
            </NavLink>
          </nav>

          <div className="mt-auto p-space-md space-y-space-sm border-t border-surface-container-high bg-surface-container">
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-tertiary">
                location_on
              </span>
              <span>Steinbauergasse 36, 1120 Wien</span>
            </div>
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-tertiary">
                call
              </span>
              <a href="tel:+436706542142" onClick={closeOnLink}>
                0670 654 2142
              </a>
            </div>
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-tertiary">
                schedule
              </span>
              <span>Mo-Fr 08:30-18:00, Sa 09:00-14:00</span>
            </div>
            <a
              className="flex items-center justify-center gap-space-xs w-full px-space-md py-3 bg-surface-container-high border border-surface-container-highest rounded text-on-surface hover:border-tertiary-container transition-all"
              href={whatsappHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-tertiary text-[20px]">
                chat
              </span>
              <span className="font-label-lg text-label-lg">
                WhatsApp 0670 654 2142
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
