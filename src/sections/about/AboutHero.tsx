const metrics = [
  {
    label: "Standort Wien",
    value: "1120",
    valueClass: "text-primary-container",
    text: "Steinbauergasse 36 (Meidling)",
  },
  {
    label: "Verfügbarkeit",
    value: "24h",
    valueClass: "text-tertiary",
    text: "Expressbeschaffung für Kfz-Teile",
  },
  {
    label: "Standard",
    value: "OEM",
    valueClass: "text-on-surface",
    text: "Nur geprüfte Erstausrüsterware",
  },
  {
    label: "Beratung",
    value: "1:1",
    valueClass: "text-primary",
    text: "Fahrgestellnummern-Check vor Ort",
  },
];

export default function AboutHero() {
  return (
    <section className="relative w-full px-4 md:px-margin-desktop py-space-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
        <div className="lg:col-span-8 space-y-space-md">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md tracking-widest uppercase">
            <span className="material-symbols-outlined text-[16px]">info</span>
            Unternehmensprofil &amp; Meisterphilosophie
          </div>
          <h1 className="font-headline-xl text-headline-xl uppercase tracking-tight text-on-surface leading-none">
            Über <span className="text-primary-container">Meidlinger</span>{" "}
            Autoteile
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Ihr verlässlicher Partner für Kraftfahrzeugteile, Zubehör und
            technische Fachberatung im 12. Wiener Gemeindebezirk. Qualität,
            Handschlagqualität und Schnelligkeit direkt an der Steinbauergasse.
          </p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded bg-primary-container text-on-primary-container font-headline-sm text-headline-sm hover:brightness-110 shadow-lg shadow-primary-container/20 transition-all"
              href="tel:06706542142"
            >
              <span className="material-symbols-outlined text-[20px]">
                phone_in_talk
              </span>
              <span>0670 654 2142</span>
            </a>
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded bg-surface-container-high hover:bg-surface-bright text-tertiary font-headline-sm text-headline-sm transition-all"
              href="https://wa.me/436706542142"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">
                chat
              </span>
              <span>WhatsApp Express-Support</span>
            </a>
          </div>
        </div>

        {/* Hero Telemetry Metric Cards */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-gutter">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-surface-container p-space-md rounded-xl space-y-space-xs"
            >
              <span className="font-label-md text-label-md uppercase text-on-surface-variant tracking-wider block">
                {metric.label}
              </span>
              <span
                className={`font-headline-lg text-headline-lg ${metric.valueClass} block leading-none`}
              >
                {metric.value}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {metric.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
