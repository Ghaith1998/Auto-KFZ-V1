import LegalPageLayout, {
  LegalSection,
  Placeholder,
} from "./legal/LegalPageLayout";

export default function AgbPage() {
  return (
    <LegalPageLayout
      title="AGB"
      intro={
        <>
          Allgemeine Geschäftsbedingungen für Bestellungen und Leistungen der
          Meidlinger Autoteile, Steinbauergasse 36, 1120 Wien (nachfolgend
          „wir" oder „Verkäufer").
        </>
      }
    >
      <LegalSection title="1. Geltungsbereich">
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen
          von Waren und Leistungen über diese Website sowie für Geschäfte in
          unserem Ladengeschäft. Abweichende Bedingungen eines Kunden werden
          nur wirksam, wenn wir ihnen ausdrücklich in Textform zugestimmt haben.
          Verbraucherinnen und Verbraucher im Sinne des
          Konsumentenschutzgesetzes (KSchG) werden ausdrücklich geschützt.
        </p>
      </LegalSection>

      <LegalSection title="2. Vertragsschluss">
        <p>
          Die Darstellung von Teilen auf dieser Website stellt kein bindendes
          Angebot dar. Mit der Absendung einer Anfrage oder Bestellung geben Sie
          ein verbindliches Angebot ab. Der Vertrag kommt zustande, wenn wir die
          Anfrage ausdrücklich per E-Mail oder Telefon bestätigen oder die Ware
          versenden. Fehlerhafte Preis- oder Produktdaten bleiben vorbehalten.
        </p>
      </LegalSection>

      <LegalSection title="3. Preise & Umsatzsteuer">
        <p>
          Alle Preise verstehen sich in Euro inklusive der gesetzlichen
          Umsatzsteuer (derzeit 20 %) ab Lager Wien. Versand- und
          Lieferkosten:
          <Placeholder />
          <br />
          Für Gewerbekunden (B2B) gelten gesonderte Konditionen:
          <Placeholder />
        </p>
      </LegalSection>

      <LegalSection title="4. Zahlung">
        <p>
          Zahlungsarten: Bar bei Abholung, Überweisung/Übergabe
          <Placeholder />
          <br />
          IBAN: AT00 0000 0000 0000 0000
          <Placeholder />
          <br />
          BIC:
          <Placeholder />
          <br />
          Bei Zahlung per Überweisung ist der Rechnungsbetrag binnen 14 Tagen ab
          Rechnungsdatum ohne Abzug fällig, sofern nichts anderes vereinbart
          wurde.
        </p>
      </LegalSection>

      <LegalSection title="5. Lieferung & Abholung">
        <p>
          Die Lieferung erfolgt innerhalb Österreichs an die von Ihnen
          angegebene Adresse; die Abholung im Ladengeschäft ist während der
          Öffnungszeiten möglich. Lieferzeiten:
          <Placeholder />
          <br />
          Bei Sendungen mit offensichtlichen Transportschäden ist der Schaden
          möglichst beim Zusteller zu dokumentieren und uns unverzüglich zu
          melden.
        </p>
      </LegalSection>

      <LegalSection title="6. Eigentumsvorbehalt">
        <p>
          Die gelieferte Ware bleibt bis zur vollständigen Bezahlung sämtlicher
          Forderungen aus der Geschäftsbeziehung unser Eigentum.
        </p>
      </LegalSection>

      <LegalSection title="7. Gewährleistung">
        <p>
          Es gelten die gesetzlichen Gewährleistungsbestimmungen (§§ 933 ff.
          ABGB i. V. m. dem Verbrauchergewährleistungsgesetz – VGG). Die
          Gewährleistungsfrist für Neuware beträgt 24 Monate ab Übergabe der
          Ware. Bei gebrauchter Ware gilt eine Frist von 24 Monaten, sofern
          nichts anderes angegeben ist
          <Placeholder />
          . Die Gewährleistung entfällt bei unsachgemäßer Montage, Verwendung
          nicht freigegebener Teile oder Verschleiß.
        </p>
      </LegalSection>

      <LegalSection title="8. Rücktrittsrecht (Widerruf)">
        <p>
          Verbraucher haben bei Fernabsatzverträgen das Recht, binnen 14 Tagen
          ab Erhalt der Ware ohne Angabe von Gründen vom Vertrag zurückzutreten
          (§ 11 Fern- und Auswärtsgeschäfte-Gesetz – FAGG). Die Frist beginnt
          mit dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die Ware
          in Besitz genommen haben. Zur Ausübung genügt eine eindeutige Erklärung
          (z. B. per E-Mail an MeidlingerAutoteile@gmail.com). Im Falle des
          wirksamen Rücktritts erstatten wir alle Zahlungen einschließlich der
          Standard-Lieferkosten unverzüglich, spätestens binnen 14 Tagen. Die
          unmittelbaren Kosten der Rücksendung trägt:
          <Placeholder />
          <br />
          Ausgenommen vom Rücktrittsrecht sind u. a. nach Kundenspezifikation
          angefertigte oder eindeutig persönliche Teile sowie versiegelte
          Waren, die aus Gründen des Gesundheitsschutzes nicht zur Rückgabe
          geeignet sind.
        </p>
        <p className="text-on-surface">
          <strong>Muster-Widerrufsformular</strong>
        </p>
        <div className="p-space-md rounded bg-surface-container border border-surface-container-high font-body-sm text-body-sm space-y-1">
          <p>An: Meidlinger Autoteile, Steinbauergasse 36, 1120 Wien</p>
          <p>
            Hiermit widerrufe ich/wir (*) den von mir/uns (*) abgeschlossenen
            Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der
            folgenden Dienstleistung (*)
          </p>
          <p>Bestellt am (*) / erhalten am (*)</p>
          <p>Name, Anschrift</p>
          <p>Datum, Unterschrift (bei Papierform)</p>
        </div>
      </LegalSection>

      <LegalSection title="9. Haftung">
        <p>
          Wir haften für Schäden nur bei Vorsatz oder grober Fahrlässigkeit
          sowie bei Verletzung von Leben, Körper oder Gesundheit. Die Haftung
          nach dem Produkthaftungsgesetz bleibt unberührt. Die Haftung für
          leichte Fahrlässigkeit gegenüber Verbrauchern ist insoweit
          eingeschränkt, als nicht wesentliche Vertragspflichten verletzt werden.
        </p>
      </LegalSection>

      <LegalSection title="10. Streitbeilegung & anwendbares Recht">
        <p>
          Es gilt österreichisches Recht unter Ausschluss der Verweisungsnormen;
          zwingende Verbraucherschutzbestimmungen des Aufenthaltsstaates bleiben
          unberührt. Gerichtsstand ist Wien, soweit zulässig. Wir sind nicht
          bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalSection>

      <LegalSection title="11. Kontakt">
        <p>
          Meidlinger Autoteile
          <Placeholder />
          <br />
          Steinbauergasse 36, 1120 Wien
          <br />
          Telefon: +43 670 654 2142
          <br />
          E-Mail: MeidlingerAutoteile@gmail.com
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
