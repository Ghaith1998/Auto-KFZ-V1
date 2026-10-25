export default function ContactCtaSection() {
  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-gradient-to-b from-surface-container to-surface-container-lowest">
      <div className="bg-surface-container-highest p-space-lg md:p-space-xl rounded-xl space-y-space-md shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_center,rgba(229,30,43,0.15),transparent)] pointer-events-none hidden md:block"></div>
        <div className="relative z-10 max-w-4xl space-y-space-sm">
          <span className="px-3 py-1 rounded bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider inline-block">
            Direkter Draht zu unseren Spezialisten
          </span>
          <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface tracking-tight leading-none">
            Haben Sie Fragen zu einem{" "}
            <span className="text-primary-container">Ersatzteil</span> oder
            möchten Sie bestellen?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Egal ob Sie ein seltenes Aggregat für ältere Modelle suchen oder
            einen Bremsensatz für Ihren Alltagswagen benötigen: Wir helfen
            sofort weiter. Rufen Sie uns an oder senden Sie uns Ihre Anfrage
            per WhatsApp.
          </p>
        </div>
        <div className="relative z-10 flex flex-wrap items-center gap-gutter pt-space-sm">
          <a
            className="inline-flex items-center gap-space-xs px-space-lg py-3.5 rounded bg-primary-container text-on-primary-container font-headline-sm text-headline-sm hover:brightness-110 shadow-lg shadow-primary-container/30 transition-all uppercase"
            href="tel:06706542142"
          >
            <span className="material-symbols-outlined text-[22px]">
              phone_enabled
            </span>
            <span>Jetzt anrufen (0670 654 2142)</span>
          </a>
          <a
            className="inline-flex items-center gap-space-xs px-space-lg py-3.5 rounded bg-surface-container-low hover:bg-surface text-tertiary font-headline-sm text-headline-sm transition-all uppercase"
            href="https://wa.me/436706542142"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[22px]">chat</span>
            <span>WhatsApp Nachricht senden</span>
          </a>
        </div>
      </div>
    </section>
  );
}
