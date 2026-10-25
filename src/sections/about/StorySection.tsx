import { remoteImages } from "../../lib/images";

const highlights = [
  {
    value: "100%",
    valueClass: "text-primary",
    text: "Passgenauigkeits-Prüfung vor Übergabe",
  },
  {
    value: "> 50.000",
    valueClass: "text-tertiary",
    text: "Teile im Express-Netzwerk abrufbar",
  },
  {
    value: "Meidling",
    valueClass: "text-on-surface",
    text: "Zentral erreichbar & Parkzone direkt am Shop",
  },
];

export default function StorySection() {
  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-low">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
        {/* Storefront & Detail Showcase */}
        <div className="lg:col-span-5 relative space-y-gutter">
          <div className="relative overflow-hidden rounded-xl bg-surface-container shadow-2xl group">
            <img
              className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              alt="Exterior view of the Meidlinger Autoteile shop on Steinbauergasse Vienna: beige facade with a black MEIDLINGER AUTOTEILE sign band, banners for batteries, oils, accessories and tools, and a Neueröffnung sign in the window"
              src={remoteImages.aboutStorefront}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wide">
                Ladengeschäft &amp; Abholung
              </span>
              <span className="font-label-md text-label-md text-on-surface bg-surface-container-lowest/80 px-2 py-1 rounded backdrop-blur">
                Steinbauergasse 36
              </span>
            </div>
          </div>

          {/* Secondary In-Store Detail Photo */}
          <div className="grid grid-cols-2 gap-gutter">
            <div className="relative overflow-hidden rounded-xl bg-surface-container h-44 shadow-lg">
              <img
                className="w-full h-full object-cover"
                alt="Close up shot of organized automotive inventory shelving in a modern dark mechanic workshop, displaying boxed oil filters, brake discs, synthetic engine oils, and precision diagnostic tools in dramatic contrast studio illumination"
                src={remoteImages.aboutInventory}
              />
              <div className="absolute inset-0 bg-surface/40"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <span className="font-label-md text-label-md uppercase text-on-surface bg-surface-container-high/90 px-2 py-0.5 rounded">
                  Sofort-Lager
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-surface-container h-44 shadow-lg">
              <img
                className="w-full h-full object-cover"
                alt="Shop entrance of Meidlinger Autoteile on Steinbauergasse Vienna: black framed glass door with a Neueröffnung sign, flanked by tall black parts-catalogue posters listing brakes, pistons and filters with the phone number"
                src={remoteImages.aboutAdvisor}
              />
              <div className="absolute inset-0 bg-surface/40"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <span className="font-label-md text-label-md uppercase text-on-surface bg-surface-container-high/90 px-2 py-0.5 rounded">
                  Fachberatung am Tresen
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Story Column */}
        <div className="lg:col-span-7 space-y-space-md">
          <div className="flex items-center gap-space-xs text-primary-container">
            <span className="material-symbols-outlined text-[22px]">
              handshake
            </span>
            <span className="font-label-lg text-label-lg uppercase tracking-wider">
              Wiener Tradition &amp; Moderne Präzision
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">
            Kompetenz, Leidenschaft und{" "}
            <span className="text-primary-container">Handschlagqualität</span>
          </h2>
          <div className="space-y-space-md font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <p>
              Mitten im Herzen des 12. Wiener Gemeindebezirks, direkt an der{" "}
              <strong className="text-on-surface">
                Steinbauergasse 36
              </strong>
              , wurde Meidlinger Autoteile mit einer klaren Zielsetzung
              gegründet: Autofahrern, Hobby-Schraubern, Taxiflottisten sowie
              freien Werkstätten in Wien einen schnellen, verlässlichen und
              bezahlbaren Zugang zu hochwertigen Ersatzteilen zu bieten.
            </p>
            <p>
              Statt tagelanger Wartezeiten in anonymen Onlineshops oder
              überteuerten Marken-Vertragswerkstätten setzen wir auf
              unmittelbare Teileverfügbarkeit, transparente Konditionen und
              persönliche Beratung von Mensch zu Mensch. Wir prüfen jede
              Fahrgestellnummer (VIN/FIN) im Detail, um Fehlbestellungen von
              vornherein auszuschließen.
            </p>
            <p className="text-on-surface font-title-md text-title-md bg-surface-container p-space-md rounded-xl">
              „Ob Drosselklappe, Bremssattel, Anlasser, Ladeluftkühler oder
              Qualitäts-Motoröle: Wer zu uns kommt, verlässt den Laden mit dem
              exakt passenden Teil und der Gewissheit geprüfter Sicherheit.“
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter pt-space-xs">
            {highlights.map((highlight) => (
              <div
                key={highlight.value}
                className="bg-surface-container p-space-sm rounded space-y-1"
              >
                <span
                  className={`font-title-lg text-title-lg ${highlight.valueClass} block font-headline-md`}
                >
                  {highlight.value}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {highlight.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
