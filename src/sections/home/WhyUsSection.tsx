interface Benefit {
  icon: string;
  iconClass: string;
  title: string;
  text: string;
  footnote: string;
  footnoteClass: string;
}

const benefits: Benefit[] = [
  {
    icon: "storefront",
    iconClass: "text-primary-container",
    title: "Lokale Fachberatung",
    text: "Direkt vor Ort in der Steinbauergasse 36, 1120 Wien. Sprechen Sie mit Kfz-Experten, die wissen, welcher Schlauch, Sensor oder Querlenker passt.",
    footnote: "1120 Wien Meidling",
    footnoteClass: "text-primary",
  },
  {
    icon: "pin",
    iconClass: "text-tertiary",
    title: "VIN / KBA Teilesuche",
    text: "Präzise Zuordnung über Fahrgestellnummer (VIN) und KBA-Nummern. Keine Fehlbestellungen und keine nervigen Rücksendungen mehr.",
    footnote: "Null Fehlkauf-Risiko",
    footnoteClass: "text-tertiary",
  },
  {
    icon: "schedule",
    iconClass: "text-primary",
    title: "Selber Werktag lieferbar",
    text: "Gängige Verschleißteile sofort zum Mitnehmen. Spezielle Aggregate treffen mehrmals täglich über unser Logistiknetzwerk ein.",
    footnote: "Täglich 3x Zulieferung",
    footnoteClass: "text-primary",
  },
  {
    icon: "handshake",
    iconClass: "text-on-surface",
    title: "Werkstatt-Konditionen",
    text: "Attraktive Staffelrabatte für freie Werkstätten, Flottenbetreiber, Taxibetriebe und preisbewusste Selberschrauber in Wien.",
    footnote: "B2B & B2C Partnerschaft",
    footnoteClass: "text-secondary",
  },
];

export default function WhyUsSection() {
  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto space-y-space-xl">
        <div className="text-center max-w-3xl mx-auto space-y-space-xs">
          <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary-container block">
            Der Wiener Kfz-Spezialist
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
            Warum Meidlinger Autoteile die erste Wahl ist
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Im Gegensatz zu anonymen Online-Händlern ohne Beratung bieten wir
            echten Werkstattkontakt, sofortige Teileverfügbarkeit und
            persönliche Haftung für Passgenauigkeit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between border border-surface-container-high hover:border-outline transition-all"
            >
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center font-title-lg">
                  <span
                    className={`material-symbols-outlined text-[28px] ${benefit.iconClass}`}
                  >
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface uppercase">
                  {benefit.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {benefit.text}
                </p>
              </div>
              <span
                className={`pt-space-md font-label-md text-label-md uppercase ${benefit.footnoteClass}`}
              >
                {benefit.footnote}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
