import { Link, NavLink } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";

const baseLinkClass =
  "px-space-md py-space-sm font-label-lg text-label-lg tracking-wide uppercase transition-all rounded";

function navLinkClass({ isActive }: { isActive: boolean }): string {
  return isActive
    ? `${baseLinkClass} text-on-surface bg-surface-container-low`
    : `${baseLinkClass} text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low`;
}

export default function Header() {
  return (
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
            href="https://wa.me/436706542142"
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
    </header>
  );
}
