import { remoteImages } from "../../lib/images";

const stats = [
  { value: "45.000+", label: "Artikel im Verbund", tone: "text-primary" },
  { value: "< 15 Min", label: "Express Rückmeldung", tone: "text-tertiary" },
  { value: "100%", label: "Passgenau geprüft", tone: "text-on-surface" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest px-4 md:px-margin-desktop py-space-xl lg:py-24">
      {/* Ambient technical glow backdrop */}
      <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-primary-container/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-24 left-1/4 w-[400px] h-[400px] bg-tertiary-container/10 blur-[110px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
        {/* Text & Value Prop (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-space-lg">
          <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1 rounded bg-surface-container-high shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping"></span>
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
              Meisterbetrieb &amp; Kfz-Teilelager Wien Meidling
            </span>
            <span className="text-secondary font-label-md text-label-md">
              • Sofort abholbereit
            </span>
          </div>

          <div className="space-y-space-sm">
            <h1 className="font-headline-xl text-headline-xl tracking-tight text-on-surface uppercase leading-none">
              Erstklassige{" "}
              <span className="text-primary-container">
                Kfz-Ersatzteile
              </span>{" "}
              &amp; Zubehör in Wien Meidling
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Geprüfte Markenqualität für alle Fahrzeugmarken. Von
              Hochleistungs-Bremsanlagen über Drosselklappen bis hin zu
              Spezialwerkzeugen und Premium-Motorenölen — sofort verfügbar im
              Store Steinbauergasse 36 oder per Express geliefert.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-3.5 bg-primary-container text-on-primary-container font-headline-sm text-headline-sm rounded uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_24px_-4px_rgba(229,30,43,0.5)]"
              href="#anfrage-formular"
            >
              <span>Jetzt Ersatzteil anfragen</span>
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </a>
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-3.5 bg-surface-container border border-surface-container-high text-on-surface font-title-md text-title-md rounded hover:bg-surface-container-high transition-all"
              href="https://wa.me/436706542142"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-tertiary text-[22px]">
                chat
              </span>
              <span>
                WhatsApp Direktanfrage:{" "}
                <strong className="text-on-surface ml-1">
                  0670 654 2142
                </strong>
              </span>
            </a>
          </div>

          {/* Telemetry micro stats */}
          <div className="grid grid-cols-3 gap-gutter pt-space-sm">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-container-low p-space-sm rounded"
              >
                <span
                  className={`font-headline-md text-headline-md ${stat.tone} block leading-none`}
                >
                  {stat.value}
                </span>
                <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual Display (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-surface-container rounded-xl overflow-hidden shadow-2xl p-space-md">
            <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-highest">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 bg-primary-container rounded-full"></span>
                <span className="font-label-md text-label-md text-on-surface uppercase tracking-widest">
                  Storefront 1120 Wien
                </span>
              </div>
              <span className="font-label-md text-label-md text-secondary uppercase">
                Mo-Fr 08:30-18:00
              </span>
            </div>

            <div className="relative w-full h-80 rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Exterior view of the Meidlinger Autoteile shop on Steinbauergasse Vienna: beige facade with a black MEIDLINGER AUTOTEILE sign band, banners for batteries, oils, accessories and tools, and a Neueröffnung sign in the window"
                src={remoteImages.hero}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-space-sm rounded bg-surface-container-high/90 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-label-md text-label-md text-primary uppercase block">
                      Original- &amp; Erstausrüsterqualität
                    </span>
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      Direkt ab Lager Wien verfügbar
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-tertiary text-[26px]">
                    verified
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-space-sm grid grid-cols-2 gap-space-xs font-label-md text-label-md text-secondary">
              <span className="flex items-center gap-1 bg-surface-container-lowest px-2 py-1.5 rounded">
                <span className="material-symbols-outlined text-[15px] text-tertiary">
                  check_circle
                </span>{" "}
                Fahrgestell-Garantie
              </span>
              <span className="flex items-center gap-1 bg-surface-container-lowest px-2 py-1.5 rounded">
                <span className="material-symbols-outlined text-[15px] text-primary-container">
                  near_me
                </span>{" "}
                Meidling Zentrum
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
