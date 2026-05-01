import { SectionLabel } from "../SectionLabel";
import { FadeIn } from "../FadeIn";
import { PortfolioSlider } from "../PortfolioSlider";
import { ExternalLink } from "lucide-react";
import gcnImg from "../../../imports/gcn-fahrzeughandel.png";

const PROJECTS = [
  {
    image: gcnImg,
    tag: "Fahrzeughandel · 2026",
    title: "GCN-Fahrzeughandel",
    desc: "Vollständige Web-Plattform für einen Fahrzeughändler. Außendarstellung, Fahrzeugsuche, Verkaufsauftragsformulare mit automatischer E-Mail-Benachrichtigung und internes Kundenverwaltungs-Dashboard.",
    url: "https://gcn-fahrzeughandel.de/",
  },
  {
    image: null,
    tag: "Demnächst verfügbar",
    title: "Nächstes Projekt",
    desc: "Mein nächstes Projekt ist gerade in Umsetzung. Melde dich gerne, wenn du Interesse an einer Zusammenarbeit hast.",
    comingSoon: true,
  },
];

export function Portfolio() {
  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-6 pt-36 sm:pt-44 pb-12">
      <FadeIn>
        <SectionLabel>Portfolio</SectionLabel>
        <h1 className="text-white text-[clamp(32px,6vw,72px)] tracking-tight leading-[1.05] max-w-3xl">
          Projekte, die für sich sprechen.
        </h1>
        <p className="mt-5 sm:mt-6 max-w-2xl text-[15px] sm:text-[16px] text-slate-400 leading-relaxed">
          Eine Auswahl aktueller Kundenarbeiten. Weitere Projekte folgen
          in Kürze.
        </p>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-12 sm:mt-16">
        <PortfolioSlider projects={PROJECTS} />
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-16 sm:mt-20 rounded-2xl border border-white/5 bg-gradient-to-br from-[#0f2440] to-[#0b1322] p-6 sm:p-10">
          <SectionLabel>Persönliches Portfolio</SectionLabel>
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-white text-[22px] sm:text-[28px] mb-3">
                Hochschulprojekte &amp; Eigenarbeiten
              </h2>
              <p className="text-slate-400 text-[14px] leading-relaxed">
                Über meine Studienzeit und Nebenprojekte sind zahlreiche
                UX/UI-Arbeiten entstanden. Diese findest du gebündelt in
                meinem persönlichen Portfolio.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href="https://gissler-webdesign/portfolio.de"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-6 py-3 text-sky-300 hover:bg-sky-400/20 transition-all"
              >
                Persönliches Portfolio öffnen <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}