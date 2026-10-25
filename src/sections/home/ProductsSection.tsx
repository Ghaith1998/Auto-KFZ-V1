import { productImages } from "../../lib/images";
import ProductCard, { Product } from "./ProductCard";

const products: Product[] = [
  {
    id: "drosselklappe",
    title: "Drosselklappe",
    alt: "Drosselklappe 3D-Studioaufnahme",
    image: productImages.throttleBody,
    imageRight: false,
    category: "Baugruppe: Motor",
    kicker: "Präzise Steuerung für optimale Leistung",
    description:
      "Hochpräzise elektronische und mechanische Drosselklappenstutzen für exakte Gemischdosierung, optimalen Ansaugtrakt-Durchfluss und ruhigen Motorlauf bei allen Drehzahlen.",
    tags: [
      "Elektronisch & mechanisch",
      "Ansaugtrakt-Optimierung",
      "OE-Passgenauigkeit",
    ],
    guarantee: "Mit Einbau-Garantie",
    whatsappQuery: "Anfrage Drosselklappe",
  },
  {
    id: "ladeluftkuehler",
    title: "Ladeluftkühler",
    alt: "Ladeluftkühler 3D-Studioaufnahme",
    image: productImages.intercooler,
    imageRight: true,
    category: "Baugruppe: Aufladung",
    kicker: "Effiziente Kühlung für mehr Power",
    description:
      "Hocheffiziente Aluminium-Netze für spürbare Ladelufttemperatur-Senkung. Höhere thermische Belastbarkeit, maximale Druckstabilität und spürbar reduzierter Kraftstoffverbrauch.",
    tags: [
      "Hochleistungs-Aluminiumnetze",
      "Ladedruckfest bis 3.5 bar",
      "Erstausrüsterqualität",
    ],
    guarantee: "Druckgeprüft nach DIN",
    whatsappQuery: "Anfrage Ladeluftkuehler",
  },
  {
    id: "einspritzduese",
    title: "Einspritzdüse",
    alt: "Einspritzdüse 3D-Studioaufnahme",
    image: productImages.fuelInjector,
    imageRight: false,
    category: "Baugruppe: Kraftstoffsystem",
    kicker: "Exakte Kraftstoffzufuhr für saubere Verbrennung",
    description:
      "Hochdruck-Injektoren und Düsenstöcke für Common-Rail Diesel und Benzin-Direkteinspritzer (TSI/TFSI/GDI). Garantiert sauberes Spritzbild, minimalen Rußausstoß und volle Motorleistung.",
    tags: [
      "Common-Rail & Direkteinspritzung",
      "Bosch / Delphi / Denso",
      "Geprüfter Sprühstrahl",
    ],
    guarantee: "Prüfprotokoll inklusive",
    whatsappQuery: "Anfrage Einspritzduese",
  },
  {
    id: "anlasser",
    title: "Anlasser",
    alt: "Anlasser 3D-Studioaufnahme",
    image: productImages.starterMotor,
    imageRight: true,
    category: "Baugruppe: Elektrik",
    kicker: "Zuverlässiger Start in jeder Situation",
    description:
      "Robuste Startermotoren für Diesel- und Benzinantriebe mit enormem Einrückmoment. Entwickelt für extreme Kaltstarts und intensive Start-Stopp-Beanspruchung im Stadtverkehr.",
    tags: [
      "Für Diesel & Benzin",
      "Hohe Startdrehmomente",
      "12V / 24V Ausführungen lagernd",
    ],
    guarantee: "100% Neuteilqualität",
    whatsappQuery: "Anfrage Anlasser",
  },
  {
    id: "klimakompressor",
    title: "Klimakompressor",
    alt: "Klimakompressor 3D-Studioaufnahme",
    image: productImages.acCompressor,
    imageRight: false,
    category: "Baugruppe: Klimatisierung",
    kicker: "Angenehmes Klima zu jeder Jahreszeit",
    description:
      "Hochdruck-Kältekompressoren mit geräuschoptimierter Taumelscheibe und dichter Magnetkupplung. Kompatibel mit modernen Kältemitteln für spürbare Kühlleistung an heißen Sommertagen.",
    tags: [
      "Inklusive PAG-Ölbefüllung",
      "R134a / R1234yf kompatibel",
      "Dichte Magnetkupplung",
    ],
    guarantee: "Helium-Dichtheitstest",
    whatsappQuery: "Anfrage Klimakompressor",
  },
  {
    id: "lenkgetriebe",
    title: "Lenkgetriebe",
    alt: "Lenkgetriebe 3D-Studioaufnahme",
    image: productImages.steeringRack,
    imageRight: true,
    category: "Baugruppe: Fahrwerk & Lenkung",
    kicker: "Präzise Lenkung für mehr Kontrolle",
    description:
      "Elektromechanische (EPS) und hydraulische Zahnstangen-Lenkgetriebe für direktes Handling und sichere Spurtrennung auf allen Fahrbahnbelägen.",
    tags: [
      "Hydraulisch & elektrisch (EPS)",
      "Spielfreie Zahnstange",
      "Inklusive Spurstangen",
    ],
    guarantee: "Lasergeprüfte Ausrichtung",
    whatsappQuery: "Anfrage Lenkgetriebe",
  },
  {
    id: "bremssattel",
    title: "Bremssattel",
    alt: "Bremssattel 3D-Studioaufnahme",
    image: productImages.brakeCaliper,
    imageRight: false,
    category: "Baugruppe: Bremsanlage",
    kicker: "Starke Bremskraft für Ihre Sicherheit",
    description:
      "Neuaufgebaute und fabrikneue Bremssättel mit leichtgängigen Führungskolben und langlebigen Staubmanschetten. Maximale Bremswirkung ohne Verziehen bei sportlicher oder urbaner Beanspruchung.",
    tags: [
      "Racing-Rot & Zink-Finish",
      "1- bis 6-Kolben Systeme",
      "ECE-R90 geprüft",
    ],
    guarantee: "Mit Pfandannahme / Altteil-Rückgabe",
    whatsappQuery: "Anfrage Bremssattel",
  },
  {
    id: "radlager",
    title: "Radlager",
    alt: "Radlager 3D-Studioaufnahme",
    image: productImages.wheelHub,
    imageRight: true,
    category: "Baugruppe: Fahrwerk & Radführung",
    kicker: "Laufleistung und Sicherheit in perfekter Harmonie",
    description:
      "Kompakte Radlagereinheiten (Generation 1 bis 3) mit integriertem ABS-Sensorring. Robuste Dichtlippen schützen gegen Feuchtigkeit, Straßenschmutz und Streusalz für dauerhafte Laufruhe.",
    tags: [
      "Integrierter ABS-Sensorring",
      "Mehrfach abgedichtet",
      "Minimale Reibungsverluste",
    ],
    guarantee: "Inklusive Montagezubehör & Mutter",
    whatsappQuery: "Anfrage Radlager",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="sortiment"
      className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface"
    >
      <div className="max-w-7xl mx-auto space-y-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter border-b border-surface-container-high pb-space-md">
          <div>
            <div className="flex items-center gap-space-xs text-primary-container font-label-lg text-label-lg uppercase tracking-widest mb-1">
              <span className="w-2 h-2 bg-primary-container rounded-sm"></span>
              <span>AUTOTEILE &amp; SORTIMENT</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              Qualität, auf die Sie sich verlassen können
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
              Geprüfte Kfz-Komponenten in Erstausrüsterqualität für alle
              gängigen Marken. Präzise Passform, sofort abholbereit in der
              Steinbauergasse 36 oder per Wiener Express-Lieferung.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-surface-container-high text-tertiary font-label-md text-label-md flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                verified
              </span>{" "}
              8 Kern-Baugruppen lagernd
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-gutter-desktop">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
