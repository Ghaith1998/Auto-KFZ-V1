interface TrustBadge {
  icon: string;
  iconBoxClass: string;
  iconClass: string;
  title: string;
  text: string;
}

const badges: TrustBadge[] = [
  {
    icon: "verified_user",
    iconBoxClass: "bg-primary-container/15",
    iconClass: "text-primary-container",
    title: "Geprüfte Qualität",
    text: "Strenge Kontrollen, Original- & Erstausrüsterstandards für maximale Sicherheit.",
  },
  {
    icon: "sell",
    iconBoxClass: "bg-primary/15",
    iconClass: "text-primary",
    title: "Faire Preise",
    text: "Transparente Konditionen ohne versteckte Aufschläge für Werkstatt & Fahrer.",
  },
  {
    icon: "local_shipping",
    iconBoxClass: "bg-tertiary/15",
    iconClass: "text-tertiary",
    title: "Express-Lieferung",
    text: "Großes Lager vor Ort in 1120 Wien. Prompte Abholung oder Botenlieferung.",
  },
  {
    icon: "directions_car",
    iconBoxClass: "bg-secondary-container",
    iconClass: "text-on-surface",
    title: "Alle Marken",
    text: "VW, BMW, Mercedes, Audi, Opel, Ford, Toyota, Renault, Skoda, Seat u.v.m.",
  },
];

export default function TrustBanner() {
  return (
    <section className="w-full bg-surface-container border-y border-surface-container-high py-space-lg px-4 md:px-margin-desktop">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="flex items-start gap-space-sm p-space-sm rounded bg-surface-container-low shadow-sm"
          >
            <div
              className={`w-10 h-10 rounded ${badge.iconBoxClass} flex items-center justify-center shrink-0`}
            >
              <span
                className={`material-symbols-outlined ${badge.iconClass} text-[24px]`}
              >
                {badge.icon}
              </span>
            </div>
            <div>
              <h2 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">
                {badge.title}
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {badge.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
