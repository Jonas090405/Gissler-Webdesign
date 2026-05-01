import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./Card";

type Project = {
  image: string | null;
  tag: string;
  title: string;
  desc: string;
  url?: string;
  features?: string[];
  comingSoon?: boolean;
};

export function PortfolioSlider({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((i) => (i + delta + projects.length) % projects.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const single = projects.length <= 1;
  const project = projects[index];

  return (
    <div>
      {!single && (
        <div className="mb-6 flex justify-end gap-2">
          <SliderBtn onClick={() => go(-1)} aria="Vorheriges Projekt">
            <ChevronLeft size={18} />
          </SliderBtn>
          <SliderBtn onClick={() => go(1)} aria="Nächstes Projekt">
            <ChevronRight size={18} />
          </SliderBtn>
        </div>
      )}

      <div
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction === 0 ? 0 : direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="p-3 sm:p-4 md:p-5 rounded-[28px] sm:rounded-[32px] md:rounded-[36px] overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:h-[420px]">
                {/* Image or Coming Soon placeholder */}
                <div className="h-[220px] md:h-full overflow-hidden">
                  {project.image ? (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div
                      className="h-full w-full flex flex-col items-center justify-center gap-4 rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(0,105,153,0.15) 0%, rgba(77,190,243,0.08) 100%)",
                        borderRight: "1px solid rgba(77,190,243,0.10)",
                      }}
                    >
                      <div
                        className="h-16 w-16 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(77,190,243,0.1)", border: "1px solid rgba(77,190,243,0.2)" }}
                      >
                        <span className="text-3xl">✦</span>
                      </div>
                      <span className="text-[13px] tracking-[0.2em] uppercase" style={{ color: "rgba(77,190,243,0.6)" }}>
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Text-Seite – füllt die restliche Karte */}
                <div className="px-2 pb-2 sm:px-4 sm:pb-4 md:p-4 flex flex-col justify-center overflow-hidden">
                  <div className="text-sky-400 text-[12px] tracking-[0.2em] uppercase mb-3">
                    {project.tag}
                  </div>
                  <h3 className="text-white text-[22px] sm:text-[28px] mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-[14px] sm:text-[15px] leading-relaxed">
                    {project.desc}
                  </p>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-[13px] text-sky-300 transition-all hover:bg-sky-400/20"
                    >
                      Website öffnen <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {!single && (
        <div className="mt-5 flex justify-center gap-1.5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 cursor-pointer rounded-full transition-all ${
                i === index ? "w-8 bg-sky-400" : "w-1.5 bg-white/20"
              }`}
              aria-label={`Projekt ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SliderBtn({
  children,
  onClick,
  aria,
}: {
  children: React.ReactNode;
  onClick: () => void;
  aria: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={aria}
      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-all hover:bg-white/10 hover:border-sky-400/40 hover:text-sky-300 active:scale-95"
    >
      {children}
    </button>
  );
}
