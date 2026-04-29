import { useState } from "react";
import { SectionLabel } from "../SectionLabel";
import { PrimaryButton } from "../Button";
import { Card } from "../Card";
import { FadeIn } from "../FadeIn";
import { Mail, MapPin, Clock, CheckCircle2, Linkedin } from "lucide-react";

export function Kontakt() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-5 sm:px-6 pt-36 sm:pt-44 pb-24">
      {/* Header */}
      <FadeIn>
        <SectionLabel>Kontakt</SectionLabel>
        <h1 className="text-white text-[clamp(32px,6vw,64px)] leading-[1.05] tracking-tight max-w-2xl mb-5">
          Erzähl mir von{" "}
          <span className="bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
            deinem Projekt.
          </span>
        </h1>
        <p className="text-slate-400 text-[15px] sm:text-[16px] leading-relaxed max-w-xl mb-14">
          Ich melde mich innerhalb von 24 Stunden mit einer ersten Einschätzung –
          kostenlos, unverbindlich, unkompliziert.
        </p>
      </FadeIn>

      <div className="grid gap-10 md:gap-14 md:grid-cols-5 items-start">
        {/* Left: Info */}
        <FadeIn className="md:col-span-2 space-y-8">
          <InfoItem
            Icon={Mail}
            label="E-Mail"
            value="jonas-gissler@gmx.de"
            href="mailto:jonas-gissler@gmx.de"
          />
          <InfoItem
            Icon={MapPin}
            label="Standort"
            value="Triberg, Schwarzwald"
          />
          <InfoItem
            Icon={Clock}
            label="Antwortzeit"
            value="In der Regel innerhalb von 24 Stunden"
          />

          {/* Divider hint */}
          <div className="pt-4 border-t border-white/5">
            <p className="text-slate-500 text-[13px] leading-relaxed">
              Lieber direkt per Mail schreiben?{" "}
              <a
                href="mailto:jonas-gissler@gmx.de"
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                jonas-gissler@gmx.de
              </a>
            </p>
          </div>
        </FadeIn>

        {/* Right: Form */}
        <FadeIn delay={0.12} className="md:col-span-3">
          <Card>
            {sent ? (
              <div className="py-14 flex flex-col items-center text-center gap-4">
                <CheckCircle2 size={40} className="text-sky-400" />
                <div className="text-sky-400 text-[11px] tracking-[0.25em] uppercase">
                  Gesendet
                </div>
                <h3 className="text-white text-[22px]">Danke für deine Nachricht!</h3>
                <p className="text-slate-400 text-[14px] max-w-sm leading-relaxed">
                  Ich habe deine Anfrage erhalten und melde mich so schnell wie möglich bei dir.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" />
                  <Field label="E-Mail" name="email" type="email" />
                </div>
                <Field label="Betreff" name="subject" placeholder="z. B. Neue Website für mein Café" />
                <Field
                  label="Nachricht"
                  name="message"
                  textarea
                  placeholder="Erzähl mir kurz, was du brauchst – Branche, Ziel, Wünsche…"
                />
                <div className="pt-1">
                  <PrimaryButton type="submit">Projekt anfragen</PrimaryButton>
                </div>
              </form>
            )}
          </Card>
        </FadeIn>
      </div>
    </main>
  );
}

function InfoItem({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 h-10 w-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
        <Icon size={18} className="text-sky-400" />
      </div>
      <div>
        <div className="text-slate-500 text-[12px] tracking-[0.15em] uppercase mb-1">
          {label}
        </div>
        {href ? (
          <a href={href} className="text-white text-[14px] hover:text-sky-300 transition-colors">
            {value}
          </a>
        ) : (
          <div className="text-white text-[14px]">{value}</div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full rounded-xl border border-white/10 bg-[#0a1322] px-4 py-3 text-white placeholder:text-slate-600 outline-none focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20 transition-all text-[14px]";
  return (
    <label className="block">
      <span className="block text-[12px] tracking-[0.2em] text-slate-400 uppercase mb-2">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={5} className={cls} placeholder={placeholder} required />
      ) : (
        <input name={name} type={type} className={cls} placeholder={placeholder} required />
      )}
    </label>
  );
}