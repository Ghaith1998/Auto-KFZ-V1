import { UIEvent, useCallback, useEffect, useRef, useState } from "react";

interface Review {
  author: string;
  meta: string;
  age: string;
  paragraphs: string[];
}

const reviews: Review[] = [
  {
    author: "Abdallah Alahmed",
    meta: "2 Rezensionen",
    age: "vor 4 Monaten",
    paragraphs: [
      "Ein absolut großartiger Laden!",
      "Der Service ist super freundlich, kompetent und sehr hilfsbereit. Man fühlt sich hier als Kunde wirklich bestens aufgehoben. Die Beratung war top und die Abwicklung absolut professionell. Ich kann diesen Laden nur wärmstens empfehlen! Vielen Dank für die tolle Betreuung!👍👍👍👍👍👍👍",
    ],
  },
  {
    author: "Karm Alezba",
    meta: "3 Rezensionen",
    age: "vor 4 Monaten",
    paragraphs: [
      "Ich bin absolut begeistert von diesem Autoteile-Geschäft. Die Mitarbeiter sind sehr freundlich, kompetent und nehmen sich Zeit für eine ausführliche Beratung. Die Auswahl an Ersatzteilen ist groß, die Qualität hervorragend und die Preise fair. Besonders beeindruckt hat mich die schnelle Verfügbarkeit der benötigten Teile sowie die professionelle Unterstützung bei allen Fragen.",
      "Der gesamte Kaufprozess verlief unkompliziert und zuverlässig. Man merkt sofort, dass Kundenzufriedenheit hier an erster Stelle steht. Ich werde definitiv wieder hier einkaufen und kann dieses Geschäft jedem Autofahrer uneingeschränkt empfehlen.",
    ],
  },
  {
    author: "Mustafa Alyousef",
    meta: "2 Rezensionen",
    age: "vor 3 Monaten",
    paragraphs: [
      "Sehr guter Service und freundliche Mitarbeiter. Die Ersatzteile sind von hoher Qualität, die Preise sind fair und die Lieferung war schnell. Ich bin sehr zufrieden und kann diese Firma nur weiterempfehlen. Vielen Dank!",
    ],
  },
  {
    author: "Amin Alali",
    meta: "3 Rezensionen",
    age: "vor 4 Monaten",
    paragraphs: [
      "Selten erlebt man heutzutage noch so einen hervorragenden Kundenservice. Von der ersten Anfrage bis zum Kauf wurde ich freundlich, professionell und kompetent betreut. Die Mitarbeiter haben sich Zeit genommen, alle Fragen zu beantworten, und das passende Ersatzteil sofort gefunden.",
      "Die Auswahl ist riesig, die Preise sind fair und die Qualität der Teile überzeugt auf ganzer Linie. Besonders positiv ist die schnelle Abwicklung und die Zuverlässigkeit des gesamten Teams.",
      "Man merkt sofort, dass hier Kundenzufriedenheit an erster Stelle steht. Für mich die erste Adresse, wenn es um Autoteile geht. Absolut empfehlenswert – verdiente 5 Sterne! ⭐⭐⭐⭐⭐🚗💯👏",
    ],
  },
];

const arrowButtonClass =
  "w-9 h-9 grid place-items-center rounded-[9999px] bg-surface-container border border-surface-container-high text-on-surface hover:bg-surface-container-high disabled:opacity-40 disabled:pointer-events-none transition-colors";

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 1);
    setCanNext(track.scrollLeft < max - 1);
  }, []);

  useEffect(() => {
    updateControls();
    window.addEventListener("resize", updateControls);
    return () => window.removeEventListener("resize", updateControls);
  }, [updateControls]);

  function handleScroll(_event: UIEvent<HTMLDivElement>) {
    updateControls();
  }

  function step(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-review-card]");
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
    const distance = (card?.offsetWidth ?? track.clientWidth) + gap;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    track.scrollBy({
      left: direction * distance,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl px-4 md:px-margin-desktop border-t border-surface-container-high">
      <div className="max-w-7xl mx-auto space-y-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter">
          <div>
            <div className="flex items-center gap-1 text-tertiary mb-1">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="font-label-md text-label-md text-on-surface ml-2 font-bold">
                5.0 / 5.0 Google Bewertung
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
              Erfahrungen aus Werkstatt &amp; Alltag
            </h2>
          </div>
          <div className="flex items-center justify-between md:justify-end gap-gutter">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
              Verifizierte Wiener Autofahrer
            </span>
            <div className="flex items-center gap-space-xs">
              <button
                type="button"
                aria-label="Vorherige Bewertungen"
                className={arrowButtonClass}
                disabled={!canPrev}
                onClick={() => step(-1)}
              >
                <span className="material-symbols-outlined text-[20px]">
                  arrow_back
                </span>
              </button>
              <button
                type="button"
                aria-label="Nächste Bewertungen"
                className={arrowButtonClass}
                disabled={!canNext}
                onClick={() => step(1)}
              >
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-gutter overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          {reviews.map((review) => (
            <div
              key={review.author}
              data-review-card
              className="shrink-0 snap-start w-[85vw] sm:w-[400px] bg-surface-container p-space-md rounded-xl space-y-space-sm border border-surface-container-high"
            >
              <div className="flex items-center justify-between gap-space-sm">
                <span className="font-title-md text-title-md text-on-surface font-bold">
                  {review.author}
                </span>
                <span className="text-tertiary font-label-md text-label-md whitespace-nowrap">
                  {review.age}
                </span>
              </div>
              <div className="font-label-md text-label-md text-secondary -mt-1">
                {review.meta}
              </div>
              <div className="flex text-tertiary text-sm">★★★★★</div>
              <div className="space-y-space-sm">
                {review.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-body-md text-body-md text-on-surface-variant italic"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
