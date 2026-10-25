interface Pillar {
  icon: string;
  index: string;
  title: string;
  text: string;
  footerIcon: string;
  footer: string;
}

const pillars: Pillar[] = [
  {
    icon: "verified",
    index: "Säule 01",
    title: "Geprüfte Qualität",
    text: "Ausschließlich zertifizierte Teile mit offiziellem E-Prüfzeichen und strengem Erstausrüster-Standard (OEM). Keine billigen Fernost-Nachbauten ohne Prüfzertifikat.",
    footerIcon: "check_circle",
    footer: "Garantierte Passgenauigkeit",
  },
  {
    icon: "price_check",
    index: "Säule 02",
    title: "Ehrliche & Faire Preise",
    text: "Direkter Großhandelsvertrieb ohne kostspielige Zwischenebenen. Wir geben Preisvorteile direkt an Endkunden und Partnerbetriebe in Wien weiter.",
    footerIcon: "savings",
    footer: "Transparente Festpreise",
  },
  {
    icon: "support_agent",
    index: "Säule 03",
    title: "Persönliche Beratung",
    text: "Fachkompetente Berater am Schalter, die Kfz-Technik von Grund auf verstehen. Technische Unterstützung per WhatsApp, Telefon oder direkt vor Ort im Geschäft.",
    footerIcon: "engineering",
    footer: "Meisterkompetenz",
  },
  {
    icon: "bolt",
    index: "Säule 04",
    title: "Schnelligkeit",
    text: "Großes Vor-Ort-Sortiment für prompte Mitnahme sowie mehrmals tägliche Expresslieferungen unserer Zentrallager. Damit Ihr Fahrzeug schnell wieder auf der Straße ist.",
    footerIcon: "local_shipping",
    footer: "Express-Wien-Logistik",
  },
];

export default function PillarsSection() {
  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl">
      <div className="max-w-3xl mb-space-lg space-y-space-xs">
        <div className="inline-flex items-center gap-space-xs text-primary-container font-label-md text-label-md uppercase tracking-wider">
          <span className="material-symbols-outlined text-[16px]">
            military_tech
          </span>
          <span>Unsere 4 Säulen für Ihre Sicherheit</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
          Werte, auf die Sie sich{" "}
          <span className="text-primary-container">verlassen können</span>
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Jedes Bauteil in einem Kraftfahrzeug trägt Verantwortung für Mensch
          und Maschine. Deshalb gelten bei Meidlinger Autoteile kompromisslose
          Grundsätze.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
        {pillars.map((pillar) => (
          <div
            key={pillar.index}
            className="bg-surface-container p-space-lg rounded-xl space-y-space-md hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                <span className="material-symbols-outlined text-[28px]">
                  {pillar.icon}
                </span>
              </div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim block">
                {pillar.index}
              </span>
              <h3 className="font-title-lg text-title-lg uppercase text-on-surface">
                {pillar.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {pillar.text}
              </p>
            </div>
            <div className="pt-space-sm">
              <span className="inline-flex items-center gap-1 font-label-md text-label-md text-tertiary">
                <span className="material-symbols-outlined text-[14px]">
                  {pillar.footerIcon}
                </span>
                {pillar.footer}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
