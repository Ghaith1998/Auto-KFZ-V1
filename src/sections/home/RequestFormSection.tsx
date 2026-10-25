import ContactForm from "../../components/ContactForm";

export default function RequestFormSection() {
  return (
    <section
      id="anfrage-formular"
      className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-lowest border-t border-surface-container-high"
    >
      <div className="max-w-7xl mx-auto space-y-space-xl">
        <div className="border-b border-surface-container-high pb-space-md">
          <div className="flex items-center gap-space-xs text-primary-container font-label-lg text-label-lg uppercase tracking-widest mb-1">
            <span className="w-2 h-2 bg-primary-container rounded-sm"></span>
            <span>TEILE-FINDER &amp; VERFÜGBARKEITSABFRAGE</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
            TEIL NICHT GEFUNDEN ODER{" "}
            <span className="text-primary">VERFÜGBARKEIT</span> PRÜFEN?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          {/* Left Column: Guidance & Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col space-y-space-lg">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Geben Sie uns Ihre Fahrzeugdaten durch. Wir prüfen unser
              hauseigenes Lager sowie das europaweite Großhandelsnetzwerk und
              melden uns umgehend mit Preis, OEM-Nummer und genauer
              Abholzeit.
            </p>

            {/* Emergency repair callout card */}
            <div className="p-space-lg rounded-xl bg-surface-container-low border border-primary-container/40 space-y-space-md shadow-md">
              <div className="flex items-center gap-space-xs text-primary-container font-label-lg text-label-lg uppercase tracking-wider font-bold">
                <span className="material-symbols-outlined text-[22px]">
                  emergency
                </span>
                <span>EILT ES BEI IHRER REPARATUR?</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Rufen Sie direkt bei unserem Serviceteam an oder schicken Sie
                uns ein Foto Ihres Zulassungsscheins per WhatsApp für
                sekundenschnelle Identifikation!
              </p>
              <div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
                <a
                  className="inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 bg-surface-container border border-surface-container-highest rounded text-on-surface font-label-lg text-label-lg uppercase tracking-wide hover:bg-surface-container-high transition-all"
                  href="tel:06706542142"
                >
                  <span className="material-symbols-outlined text-tertiary text-[18px]">
                    call
                  </span>
                  <span>0670 654 2142</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 bg-primary-container text-on-primary-container rounded font-label-lg text-label-lg uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_16px_-4px_rgba(229,30,43,0.5)]"
                  href="https://wa.me/436706542142"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    chat
                  </span>
                  <span>WhatsApp Express</span>
                </a>
              </div>
            </div>

            {/* Store Pickup Info Box */}
            <div className="p-space-md rounded-xl bg-surface-container border border-surface-container-high space-y-space-xs text-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2 text-on-surface font-title-md text-title-md">
                <span className="material-symbols-outlined text-primary-container text-[20px]">
                  storefront
                </span>
                <span className="font-bold uppercase">
                  DIREKTABHOLUNG IN WIEN
                </span>
              </div>
              <p className="text-body-md text-on-surface">
                Steinbauergasse 36, 1120 Wien (Meidling)
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1 pt-1 font-label-md text-label-md text-secondary">
                <span>Mo-Fr: 08:30 – 18:00 Uhr</span>
                <span className="hidden sm:inline text-surface-bright">|</span>
                <span>Sa: 09:00 – 14:00 Uhr</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7 bg-surface-container-low border border-surface-container-high rounded-xl p-space-lg sm:p-space-xl shadow-xl">
            <div className="border-b border-surface-container-high pb-space-sm mb-space-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide">
                KOSTENLOSE TEILEANFRAGE SENDEN
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Innerhalb von ca. 15–30 Minuten erhalten Sie Ihr
                unverbindliches Angebot.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
