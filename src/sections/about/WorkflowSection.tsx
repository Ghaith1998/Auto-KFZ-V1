const steps = [
  {
    title: "Zulassungsschein oder Fahrgestellnummer",
    text: "Senden Sie uns einfach ein Foto Ihres Zulassungsscheins via WhatsApp (0670 654 2142) oder nennen Sie uns Baujahr und Motorisierung.",
  },
  {
    title: "OEM-Abgleich in Sekundenschnelle",
    text: "Wir prüfen die exakte Original-Teilenummer (OE) und ermitteln die passgenauen Alternativen führender Markenhersteller.",
  },
  {
    title: "Abholbereit in 1120 Wien oder Express-Botendienst",
    text: "Kommen Sie direkt zu uns in die Steinbauergasse oder lassen Sie sich das Teil in Ihre Werkstatt liefern.",
  },
];

const inventory = [
  { icon: "radio_button_checked", label: "Bremssättel & Beläge" },
  { icon: "bolt", label: "Starter & Generatoren" },
  { icon: "heat_pump", label: "Klimakompressoren" },
  { icon: "local_gas_station", label: "Injektoren & Pumpen" },
  { icon: "battery_charging_full", label: "Batterien & Ladetechnik" },
  { icon: "oil_barrel", label: "Motorenöle & Chemie" },
];

export default function WorkflowSection() {
  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-lowest">
      <div className="bg-surface-container p-space-lg md:p-space-xl rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-7 space-y-space-md">
            <div className="inline-flex items-center gap-space-xs text-tertiary font-label-md text-label-md uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>Präzisions-Workflow</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
              Die Teile-Identifikation ohne Risiko
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Ein falscher Bremssattel oder eine inkompatible Lichtmaschine
              kosten Nerven und Standzeit. Bei Meidlinger Autoteile erfassen
              wir Ihre Fahrzeugdaten über modernste Katalogsysteme:
            </p>
            <div className="space-y-space-sm">
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-space-sm">
                  <span className="w-6 h-6 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <strong className="text-on-surface font-title-md text-title-md block">
                      {step.title}
                    </strong>
                    <span className="text-on-surface-variant font-body-md text-body-md">
                      {step.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container-high p-space-md md:p-space-lg rounded-xl space-y-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                Sortimentsübersicht
              </span>
              <span className="font-label-md text-label-md text-primary-container bg-surface-container px-2 py-1 rounded">
                1120 WIEN LAGER
              </span>
            </div>

            <div className="grid grid-cols-2 gap-space-xs font-body-md text-body-md text-on-surface-variant">
              {inventory.map((item) => (
                <div
                  key={item.label}
                  className="p-2 bg-surface-container rounded flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-primary-container text-[18px]">
                    {item.icon}
                  </span>
                  <span className="text-on-surface">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="p-space-sm bg-surface-container-lowest rounded space-y-1">
              <span className="font-label-md text-label-md uppercase text-on-surface-variant block">
                Ihr Vorteil für Wiener Betriebe:
              </span>
              <p className="font-body-sm text-body-sm text-on-surface">
                Sonderkonditionen für Kfz-Werkstätten, Taxiunternehmen und
                Flottenkunden im Großraum Wien. Sprechen Sie uns auf
                Händlerkonten an!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
