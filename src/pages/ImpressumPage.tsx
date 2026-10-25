import LegalPageLayout, {
  LegalSection,
  Placeholder,
} from "./legal/LegalPageLayout";

export default function ImpressumPage() {
  return (
    <LegalPageLayout
      title="Impressum"
      intro={
        <>
          Angaben gemäß § 5 E-Commerce-Gesetz (ECG), § 14
          Unternehmensgesetzbuch (UGB) und § 25 Mediengesetz (MedienG).
        </>
      }
    >
      <LegalSection title="Unternehmer & Anbieter">
        <p>
          <strong className="text-on-surface">Meidlinger Autoteile</strong>
          <Placeholder />
          <br />
          Inhaber: Max Mustermann
          <Placeholder />
          <br />
          Steinbauergasse 36
          <br />
          1120 Wien, Österreich
        </p>
        <p>
          Unternehmensgegenstand: Handel mit Kfz-Ersatzteilen, Zubehör,
          Schmierstoffen und Werkzeugen
          <Placeholder />
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          Telefon:{" "}
          <a
            href="tel:+436706542142"
            className="text-on-surface hover:text-primary-container transition-colors"
          >
            +43 670 654 2142
          </a>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:MeidlingerAutoteile@gmail.com"
            className="text-on-surface hover:text-primary-container transition-colors"
          >
            MeidlingerAutoteile@gmail.com
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Firmenbuch, UID & Gewerbe">
        <ul className="space-y-1">
          <li>
            UID-Nummer: ATU00000000
            <Placeholder />
          </li>
          <li>
            Firmenbuchnummer: 000000a
            <Placeholder />
          </li>
          <li>
            Firmenbuchgericht: Landesgericht Wien
            <Placeholder />
          </li>
          <li>
            Gewerbenummer: 00000000
            <Placeholder />
          </li>
          <li>
            Rechtsform / Firmenwortlaut laut Firmenbuch:
            <Placeholder />
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Mitgliedschaften & Aufsicht">
        <p>
          Mitglied der Wirtschaftskammer Wien (WKO) – Fachgruppe
          Kfz-Teilehandel.
          <br />
          Zuständige Gewerbebehörde: Magistrat Wien.
          <br />
          Anwendbare Rechtsvorschriften: Gewerbeordnung (GewO) und
          E-Commerce-Gesetz (ECG) – abrufbar unter www.ris.bka.gv.at.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
          wir gemäß den allgemeinen Gesetzen jedoch keine Gewähr übernehmen. Als
          Diensteanbieter sind wir nach § 7 Abs. 1 ECG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich; nach §§ 8
          bis 10 ECG sind wir jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          Eine permanente inhaltliche Kontrolle verlinkter Seiten ist ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links
          umgehend.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser
          Website unterliegen dem österreichischen Urheberrecht. Beiträge
          Dritter sind als solche gekennzeichnet. Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </LegalSection>

      <LegalSection title="Verbraucherschlichtung">
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
