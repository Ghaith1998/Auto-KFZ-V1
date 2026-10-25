import { Link, NavLink } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import BrandTextLockup from "../components/BrandTextLockup";
import { openCookieConsentBanner } from "../lib/cookieConsent";

const navItemClass =
  "font-body-md text-body-md transition-colors hover:text-on-surface";

function footerLinkClass({ isActive }: { isActive: boolean }): string {
  return isActive ? `${navItemClass} text-on-surface` : navItemClass;
}

const inventoryItems = [
  {
    label: "Motorteile:",
    text: "Drosselklappe, Injektoren, Ladeluftkühler",
  },
  {
    label: "Verschleißteile:",
    text: "Bremssattel, Bremsscheiben, Radlager",
  },
  {
    label: "Elektrik & Sensorik:",
    text: "Anlasser, Lichtmaschine, Klimakompressor",
  },
  {
    label: "Schmierstoffe & Chemie:",
    text: "Motoröle, Bremsflüssigkeit, Frostschutz",
  },
  {
    label: "Fahrwerk & Lenkung:",
    text: "Stoßdämpfer, Querlenker, Koppelstangen",
  },
];

const legalLinks = [
  { label: "Impressum", to: "/impressum" },
  { label: "Datenschutzerklärung (DSGVO)", to: "/datenschutz" },
  { label: "AGB", to: "/agb" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high">
      <div className="w-full px-4 md:px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <BrandLogo fallback={<BrandTextLockup />} />
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Ihr zuverlässiger Meister-Partner für Kfz-Ersatzteile,
              Qualitäts-Öle, Starterbatterien und Werkzeuge in 1120 Wien.
              Geprüfte Qualität, faire Konditionen und prompte Teillieferung
              für Werkstätten und Autofahrer.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-high text-tertiary font-label-md text-label-md">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>{" "}
                Geprüfte Qualität
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-md text-label-md">
                <span className="material-symbols-outlined text-[14px]">
                  local_shipping
                </span>{" "}
                Wien Express
              </span>
            </div>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-title-lg text-title-lg text-on-surface uppercase tracking-wide border-l-2 border-primary-container pl-space-xs">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-space-xs">
              <NavLink to="/" end className={footerLinkClass}>
                Startseite
              </NavLink>
              <Link to="/#sortiment" className={navItemClass}>
                Services &amp; Katalog
              </Link>
              <NavLink to="/ueber-uns" className={footerLinkClass}>
                Über uns &amp; Werkstatt
              </NavLink>
              <Link to="/#anfrage-formular" className={navItemClass}>
                Teile-Express Anfragen
              </Link>
              <Link to="/#anfrage-formular" className={navItemClass}>
                Rückrufwunsch &amp; Hotline
              </Link>
            </nav>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-title-lg text-title-lg text-on-surface uppercase tracking-wide border-l-2 border-primary-container pl-space-xs">
              Sortiment &amp; Teile
            </h4>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              {inventoryItems.map((item) => (
                <li key={item.label}>
                  <span className="text-on-surface font-bold">
                    {item.label}
                  </span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-title-lg text-title-lg text-on-surface uppercase tracking-wide border-l-2 border-primary-container pl-space-xs">
              Kontakt &amp; Abholung
            </h4>
            <div className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <p className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0">
                  location_on
                </span>
                <span>Steinbauergasse 36, 1120 Wien (Meidling)</span>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0">
                  call
                </span>
                <a
                  className="hover:text-on-surface text-on-surface font-bold"
                  href="tel:06706542142"
                >
                  0670 654 2142
                </a>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  mail
                </span>
                <a
                  className="hover:text-on-surface"
                  href="mailto:MeidlingerAutoteile@gmail.com"
                >
                  MeidlingerAutoteile@gmail.com
                </a>
              </p>
              <div className="mt-space-sm pt-space-sm border-t border-surface-container-high">
                <span className="font-label-lg text-label-lg text-on-surface uppercase block mb-1">
                  Öffnungszeiten:
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Mo – Fr: 08:30 – 18:00 Uhr
                  <br />
                  Sa: 09:00 – 14:00 Uhr
                  <br />
                  So &amp; Feiertage: Geschlossen
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-xl pt-space-lg border-t border-surface-container-high flex flex-col md:flex-row items-center justify-between gap-gutter font-body-sm text-body-sm text-on-surface-variant">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span>© 2026 Meidlinger Autoteile. Alle Rechte vorbehalten.</span>
            <span className="text-surface-bright hidden sm:inline">|</span>
            <span className="text-secondary">
              Mitglied der Wirtschaftskammer Wien (WKO) – Fachgruppe
              Kfz-Teilehandel
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-space-md">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                className="hover:text-on-surface transition-colors"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="hover:text-on-surface transition-colors"
              onClick={openCookieConsentBanner}
            >
              Cookie-Einstellungen
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
