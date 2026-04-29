import { SectionLabel } from "../SectionLabel";
import { Card } from "../Card";
import { FadeIn } from "../FadeIn";

export function Datenschutz() {
  return (
    <main className="mx-auto max-w-3xl px-5 sm:px-6 pt-28 sm:pt-32 pb-12">
      <FadeIn>
        <SectionLabel>Rechtliches</SectionLabel>
        <h1 className="text-white text-[clamp(32px,6vw,64px)] tracking-tight leading-[1.05]">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-slate-400 text-[14px]">
          Stand: April 2026
        </p>
      </FadeIn>

      <div className="mt-10 sm:mt-12 space-y-5 sm:space-y-6">
        <FadeIn delay={0.05}>
          <Card>
            <div className="text-sky-400 text-[12px] tracking-[0.25em] uppercase mb-4">
              1. Verantwortlicher
            </div>
            <div className="text-slate-200 text-[15px] leading-[1.9]">
              Gissler Webdesign
              <br />
              Jonas Gissler
              <br />
              Altenbergweg 12
              <br />
              78098 Triberg, Deutschland
              <br />
              E-Mail: jonas@gissler-web.de
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card>
            <div className="text-sky-400 text-[12px] tracking-[0.25em] uppercase mb-4">
              2. Allgemeine Hinweise
            </div>
            <p className="text-slate-300 text-[14px] leading-relaxed">
              Der Schutz deiner personenbezogenen Daten ist mir ein wichtiges
              Anliegen. Ich verarbeite deine Daten ausschließlich auf
              Grundlage der gesetzlichen Bestimmungen (DSGVO, TDDDG). In
              dieser Datenschutzerklärung informiere ich dich über die
              wichtigsten Aspekte der Datenverarbeitung im Rahmen meiner
              Website.
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Card>
            <div className="text-sky-400 text-[12px] tracking-[0.25em] uppercase mb-4">
              3. Server-Logfiles
            </div>
            <p className="text-slate-300 text-[14px] leading-relaxed">
              Beim Aufruf der Website werden automatisch technisch notwendige
              Daten (z. B. IP-Adresse, Datum und Uhrzeit, Browsertyp,
              Betriebssystem, Referrer-URL) in Server-Logfiles gespeichert.
              Diese Daten dienen ausschließlich der Sicherstellung eines
              störungsfreien Betriebs und der Verbesserung des Angebots.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card>
            <div className="text-sky-400 text-[12px] tracking-[0.25em] uppercase mb-4">
              4. Kontaktformular &amp; E-Mail-Kontakt
            </div>
            <p className="text-slate-300 text-[14px] leading-relaxed">
              Wenn du mir über das Kontaktformular oder per E-Mail Anfragen
              zukommen lässt, werden deine Angaben zur Bearbeitung der
              Anfrage und für mögliche Anschlussfragen gespeichert. Diese
              Daten gebe ich nicht ohne deine Einwilligung weiter.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO.
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={0.25}>
          <Card>
            <div className="text-sky-400 text-[12px] tracking-[0.25em] uppercase mb-4">
              5. Cookies
            </div>
            <p className="text-slate-300 text-[14px] leading-relaxed">
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies, die für den Betrieb der Seite erforderlich sind. Es
              werden keine Tracking- oder Marketing-Cookies eingesetzt.
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Card>
            <div className="text-sky-400 text-[12px] tracking-[0.25em] uppercase mb-4">
              6. Deine Rechte
            </div>
            <p className="text-slate-300 text-[14px] leading-relaxed">
              Du hast jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
              sowie Widerspruch gegen die Verarbeitung deiner Daten. Wende
              dich dafür einfach per E-Mail an mich. Zudem steht dir ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
              (Landesbeauftragter für den Datenschutz Baden-Württemberg) zu.
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={0.35}>
          <Card>
            <div className="text-sky-400 text-[12px] tracking-[0.25em] uppercase mb-4">
              7. Hosting
            </div>
            <p className="text-slate-300 text-[14px] leading-relaxed">
              Die Website wird bei einem externen Dienstleister gehostet.
              Personenbezogene Daten, die auf dieser Website erfasst werden,
              werden auf den Servern des Hosters gespeichert. Die Verarbeitung
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </Card>
        </FadeIn>
      </div>
    </main>
  );
}
