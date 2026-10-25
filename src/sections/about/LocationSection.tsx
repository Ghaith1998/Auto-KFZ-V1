import { MAP_DIRECTIONS_URL, MAP_EMBED_URL } from "../../lib/images";

const openingHours = [
  {
    day: "Montag – Freitag",
    time: "08:30 – 18:00 Uhr",
    closed: false,
  },
  { day: "Samstag", time: "09:00 – 14:00 Uhr", closed: false },
  { day: "Sonntag & Feiertage", time: "Geschlossen", closed: true },
];

export default function LocationSection() {
  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl">
      <div className="max-w-3xl mb-space-lg space-y-space-xs">
        <div className="inline-flex items-center gap-space-xs text-primary-container font-label-md text-label-md uppercase tracking-wider">
          <span className="material-symbols-outlined text-[16px]">store</span>
          <span>Besuchen Sie unser Geschäft</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
          Standort &amp; Öffnungszeiten in{" "}
          <span className="text-primary-container">Meidling</span>
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Einfach erreichbar im 12. Bezirk – verkehrsgünstig gelegen mit
          bequemen Lade- und Haltemöglichkeiten direkt vor dem Shop.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
        {/* Left Column: Detailed Contact & Opening Hours Box */}
        <div className="lg:col-span-5 bg-surface-container p-space-lg rounded-xl space-y-space-md shadow-xl flex flex-col justify-between">
          <div className="space-y-space-md">
            {/* Address Card */}
            <div className="space-y-space-xs">
              <span className="font-label-lg text-label-lg uppercase tracking-wider text-primary-container flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">
                  location_on
                </span>
                Geschäftsadresse
              </span>
              <div className="p-space-sm bg-surface-container-high rounded text-on-surface font-body-lg text-body-lg">
                <strong>Meidlinger Autoteile</strong>
                <br />
                Steinbauergasse 36
                <br />
                1120 Wien, Österreich
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
              <a
                className="p-space-sm bg-surface-container-high rounded block hover:bg-surface-bright transition-colors"
                href="tel:06706542142"
              >
                <span className="font-label-md text-label-md text-on-surface-variant uppercase block">
                  Telefonisch anrufen
                </span>
                <span className="font-title-md text-title-md text-on-surface font-bold">
                  0670 654 2142
                </span>
              </a>
              <a
                className="p-space-sm bg-surface-container-high rounded block hover:bg-surface-bright transition-colors"
                href="https://wa.me/436706542142"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-label-md text-label-md text-tertiary uppercase block">
                  WhatsApp Beratung
                </span>
                <span className="font-title-md text-title-md text-on-surface font-bold">
                  0670 654 2142
                </span>
              </a>
            </div>

            {/* Email */}
            <div className="space-y-space-xs">
              <span className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
                E-Mail Kontakt
              </span>
              <a
                className="p-space-sm bg-surface-container-high rounded block text-on-surface font-body-md text-body-md hover:text-primary transition-colors"
                href="mailto:MeidlingerAutoteile@gmail.com"
              >
                MeidlingerAutoteile@gmail.com
              </a>
            </div>

            {/* Opening Hours Table */}
            <div className="space-y-space-xs">
              <span className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">
                  schedule
                </span>
                Öffnungszeiten Verkauf &amp; Abholung
              </span>
              <div className="p-space-sm bg-surface-container-high rounded space-y-2">
                {openingHours.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between font-body-md text-body-md"
                  >
                    <span
                      className={
                        row.closed ? "text-on-surface-variant" : "text-on-surface font-bold"
                      }
                    >
                      {row.day}
                    </span>
                    {row.closed ? (
                      <span className="text-primary font-label-md text-label-md">
                        {row.time}
                      </span>
                    ) : (
                      <span className="text-on-surface-variant font-label-md text-label-md px-2 py-0.5 rounded bg-surface-container">
                        {row.time}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Logistics & Transport Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
              <div className="p-2 rounded bg-surface-container-high space-y-1">
                <strong className="text-on-surface flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    directions_car
                  </span>
                  Kurzparkzone vor Ort
                </strong>
                <span>
                  Schnelle Be- und Entladung für schwere Batterien &amp;
                  Bremsen.
                </span>
              </div>
              <div className="p-2 rounded bg-surface-container-high space-y-1">
                <strong className="text-on-surface flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    directions_subway
                  </span>
                  Öffentliche Anbindung
                </strong>
                <span>
                  In Gehweite zu U4/U6 Meidling und Buslinien 59A/62A.
                </span>
              </div>
            </div>
          </div>

          <div className="pt-space-md">
            <a
              className="w-full flex items-center justify-center gap-space-xs px-space-md py-3 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-headline-sm text-headline-sm uppercase transition-all"
              href={MAP_DIRECTIONS_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">
                explore
              </span>
              <span>Route in Google Maps planen</span>
            </a>
          </div>
        </div>

        {/* Right Column: Real Google Map with Vienna locator data */}
        <div className="lg:col-span-7 bg-surface-container rounded-xl overflow-hidden shadow-xl flex flex-col">
          <div className="p-space-md bg-surface-container-high flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary-container text-[20px]">
                pin_drop
              </span>
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                Wiener Stadtplan / Steinbauergasse 36
              </span>
            </div>
            <span className="text-tertiary font-label-md text-label-md flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
              Shop Geolocation aktiv
            </span>
          </div>

          <div className="w-full h-96 lg:h-full min-h-[380px] relative">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src={MAP_EMBED_URL}
              title="Google Map — Steinbauergasse 36, 1120 Wien"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>

            {/* Visual Overlay / Pin Card */}
            <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md bg-surface/95 backdrop-blur-md p-space-md rounded-xl shadow-2xl space-y-space-xs text-on-surface">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm uppercase text-primary-container">
                  Meidlinger Autoteile
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-md text-label-md text-tertiary">
                  Geöffnet
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Steinbauergasse 36, 1120 Wien. Parken direkt vor dem Portal
                während der Geschäftszeiten gestattet (Ladezone/Kurzparkzone
                Wien).
              </p>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <a
                  className="inline-flex items-center gap-1 text-primary-container font-label-lg text-label-lg uppercase hover:underline"
                  href={MAP_DIRECTIONS_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    navigation
                  </span>
                  Navigation starten
                </a>
                <span className="text-surface-bright">|</span>
                <a
                  className="inline-flex items-center gap-1 text-on-surface font-label-lg text-label-lg uppercase hover:underline"
                  href="tel:06706542142"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    call
                  </span>
                  Anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
