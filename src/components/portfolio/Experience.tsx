import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppState } from "@/hooks/use-app-state";
import { experiences } from "@/i18n/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Experience() {
  const { t, lang } = useAppState();
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="py-32 px-6 bg-surface/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.experience.label} title={t.experience.title} />

        <div className="grid md:grid-cols-[260px_1fr] gap-10 lg:gap-16">
          {/* Tabs */}
          <div className="md:border-l border-border">
            {(["companies", "freelance"] as const).map((group) => (
              <div key={group} className="mb-8 last:mb-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground pl-4 mb-3">
                  {t.experience.groups[group]}
                </p>
                <ul>
                  {experiences.map((e, i) =>
                    e.group === group ? (
                      <li key={e.company}>
                        <button
                          type="button"
                          onClick={() => setActive(i)}
                          className={cn(
                            "w-full text-left px-4 py-3 text-sm transition-all border-l-2 -ml-px",
                            active === i
                              ? "border-primary text-primary bg-primary/5 font-medium"
                              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border",
                          )}
                        >
                          {e.company}
                        </button>
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="min-h-[360px]"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
                {exp.role[lang]}{" "}
                <span className="text-primary">@ {exp.company}</span>
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {exp.period}
              </p>

              <ul className="mt-8 space-y-4">
                {exp.bullets[lang].map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mt-2 shrink-0">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
