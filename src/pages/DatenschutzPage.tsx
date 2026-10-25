import LegalPageLayout, {
  LegalSection,
  Placeholder,
} from "./legal/LegalPageLayout";

export default function DatenschutzPage() {
  return (
    <LegalPageLayout
      title="Datenschutzerklärung"
      intro={
        <>
          Diese Datenschutzerklärung informiert Sie gemäß Art. 13
          Datenschutz-Grundverordnung (DSGVO) über die Verarbeitung
          personenbezogener Daten bei der Nutzung dieser Website.
        </>
      }
    >
      <LegalSection title="Verantwortlicher">
        <p>
          <strong className="text-on-surface">Meidlinger Autoteile</strong>
          <Placeholder />
          <br />
          Inhaber: Max Mustermann
          <Placeholder />
          <br />
          Steinbauergasse 36, 1120 Wien, Österreich
          <br />
          Telefon: +43 670 654 2142
          <br />
          E-Mail: MeidlingerAutoteile@gmail.com
        </p>
      </LegalSection>

      <LegalSection title="Hosting & Server-Logfiles">
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter
          automatisch Zugriffsdaten (Logfiles) erfasst, insbesondere IP-Adresse,
          Datum und Uhrzeit des Abrufs, abgerufene Datei, Referrer-URL,
          Browsertyp und Betriebssystem. Diese Verarbeitung erfolgt zur
          sicheren und störungsfreien Bereitstellung der Website auf Grundlage
          von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
        </p>
        <p>
          Hosting-Anbieter:
          <Placeholder />
          <br />
          Speicherdauer der Logfiles:
          <Placeholder />
        </p>
      </LegalSection>

      <LegalSection title="Kontaktformular & Anfragen">
        <p>
          Wenn Sie uns über das Anfrageformular oder per E-Mail kontaktieren,
          verarbeiten wir die von Ihnen eingegebenen Daten (Name, Telefon,
          E-Mail, Fahrzeugdaten wie Marke, Modell, Baujahr und
          Fahrgestellnummer, Nachricht, Dringlichkeit sowie eine optionale
          Datei). Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage gemäß
          Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f
          DSGVO.
        </p>
        <p>
          Das Formular übermittelt Ihre Angaben per E-Mail an den
          Betreiber der Website (Versand über den E-Mail-Dienst des
          Betreibers, SMTP-Verbindung verschlüsselt). Eine optionale Datei
          wird als Anhang mitgesendet. Die Daten werden ausschließlich zur
          Beantwortung Ihrer Anfrage verwendet und nicht an Dritte
          weitergegeben.
        </p>
        <p>
          Speicherdauer der Anfragedaten:
          <Placeholder />
        </p>
      </LegalSection>

      <LegalSection title="Lokale Speicherung (Cookie-Auswahl)">
        <p>
          Wir speichern Ihre Entscheidung aus dem Cookie-Hinweis lokal in Ihrem
          Browser (localStorage, Schlüssel{" "}
          <code className="text-on-surface">ma-cookie-consent-v1</code>). Diese
          Speicherung ist technisch erforderlich, damit Ihr Hinweis nicht bei
          jedem Besuch erneut erscheint, und bedarf keiner gesonderten
          Einwilligung (§ 165 Abs. 3 TKG 2021). Sie können die Auswahl jederzeit
          über „Cookie-Einstellungen" im Fußbereich ändern oder die
          Website-Daten in Ihrem Browser löschen.
        </p>
      </LegalSection>

      <LegalSection title="Google Fonts">
        <p>
          Zur einheitlichen Darstellung binden wir Schriftarten von Google
          Fonts ein (Anbieter: Google Ireland Limited, Gordon House, Barrow
          Street, Dublin 4, Irland). Beim Aufruf lädt Ihr Browser die
          benötigten Schriften von Servern von Google, wobei Ihre IP-Adresse
          übermittelt wird. Die Einbindung erfolgt auf Grundlage Ihrer
          Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 165 Abs. 3
          TKG 2021. Weitere Informationen:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface hover:text-primary-container transition-colors"
          >
            Datenschutzerklärung von Google
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Google Maps">
        <p>
          Auf der Website ist ein Kartenausschnitt von Google Maps eingebunden
          (Anbieter wie oben). Dabei wird Ihre IP-Adresse an Google
          übermittelt und es können Cookies gesetzt werden. Rechtsgrundlage ist
          Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 165
          Abs. 3 TKG 2021. Sie können Einwilligungen jederzeit mit Wirkung für
          die Zukunft widerrufen; die Rechtmäßigkeit der bisher erfolgten
          Verarbeitung bleibt unberührt.
        </p>
      </LegalSection>

      <LegalSection title="Externer WhatsApp-Link">
        <p>
          Auf der Website befinden sich Links auf WhatsApp (Anbieter: Meta
          Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour,
          Dublin 2, Irland). Daten werden erst übertragen, wenn Sie diese Links
          aktiv anklicken. Für die dortige Verarbeitung gilt die
          Datenschutzerklärung des Anbieters.
        </p>
      </LegalSection>

      <LegalSection title="Ihre Rechte">
        <p>
          Sie haben im Rahmen der DSGVO insbesondere das Recht auf Auskunft
          (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit
          (Art. 20) und Widerspruch (Art. 21) sowie das Recht, eine erteilte
          Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen
          (Art. 7 Abs. 3 DSGVO).
        </p>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine Nachricht an
          MeidlingerAutoteile@gmail.com.
        </p>
        <p>
          Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu
          beschweren. In Österreich ist dies die Österreichische
          Datenschutzbehörde, Barichgasse 40-42, 1030 Wien,{" "}
          <a
            href="https://www.dsb.gv.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface hover:text-primary-container transition-colors"
          >
            www.dsb.gv.at
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Datensicherheit & Aktualisierung">
        <p>
          Wir schützen Ihre Daten durch angemessene technische und organisatorische
          Maßnahmen. Diese Datenschutzerklärung wird bei Bedarf angepasst, um
          rechtliche oder technische Änderungen abzubilden.
          <Placeholder />
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
