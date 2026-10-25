import { MAP_DIRECTIONS_URL } from "../../lib/images";

export default function BottomCtaSection() {
  return (
    <section className="w-full bg-surface-container-high py-space-xl px-4 md:px-margin-desktop relative overflow-hidden">
      {/* Red glowing slant background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-gutter-desktop">
        <div className="space-y-space-sm max-w-2xl text-center lg:text-left">
          <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary font-bold">
            Express-Abholung &amp; Notdienst
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase leading-tight">
            Brauchen Sie heute noch das passende Ersatzteil?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Besuchen Sie direkt unser Verkaufsgeschäft in der{" "}
            <strong className="text-on-surface">
              Steinbauergasse 36, 1120 Wien
            </strong>{" "}
            oder rufen Sie jetzt unverbindlich an. Wir prüfen die Bestände im
            Sekundentakt.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-space-md pt-space-xs text-on-surface font-label-lg text-label-lg">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-primary-container">
                location_on
              </span>{" "}
              Steinbauergasse 36, 1120 Wien
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-tertiary">
                call
              </span>{" "}
              0670 654 2142
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto shrink-0">
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-surface-container border border-surface-container-highest text-on-surface font-headline-sm text-headline-sm uppercase rounded hover:bg-surface-container-highest transition-all"
            href={MAP_DIRECTIONS_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">
              directions
            </span>
            <span>Route planen</span>
          </a>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase rounded hover:brightness-110 active:scale-95 transition-all shadow-[0_0_24px_-4px_rgba(229,30,43,0.6)]"
            href="https://wa.me/436706542142"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">
              chat
            </span>
            <span>WhatsApp Chat starten</span>
          </a>
        </div>
      </div>
    </section>
  );
}
