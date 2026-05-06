import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";
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
      <div className="mx-auto max-w-7xl">
        <SectionHeading label={t.experience.label} title={t.experience.title} />

        <div className="grid md:grid-cols-[280px_1fr] gap-10 lg:gap-16">
          {/* Tabs */}
          <div className="md:border-l border-border">
            {(["companies", "freelance"] as const).map((group) => (
              <div key={group} className="mb-8 last:mb-0">
                <p className="font-mono text-md uppercase tracking-[0.25em] text-muted-foreground pl-4 mb-3">
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
                            "w-full text-left px-4 py-3 text-sm transition-all border-l-2 -ml-px flex items-center gap-2",
                            active === i
                              ? "border-primary text-primary bg-primary/5 font-medium"
                              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border",
                          )}
                        >
                          <span className="truncate text-md">{e.company}</span>
                          {e.topCompany && (
                            <span
                              className="size-1.5 rounded-full bg-primary shrink-0"
                              aria-label="Top Nicaragua company"
                            />
                          )}
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
              {exp.cover && (
                <div className="mb-6 overflow-hidden rounded-xl border border-border aspect-[16/9] bg-muted">
                  <img
                    src={exp.cover}
                    alt={`${exp.company} cover`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center size-10 rounded-lg bg-card border border-border overflow-hidden shrink-0"
                >
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-primary font-serif text-lg">
                      {exp.company.replace(/^(Grupo Jaga · )/, "").charAt(0)}
                    </span>
                  )}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
                  {exp.role[lang]}{" "}
                  <span className="text-primary">@ {exp.company}</span>
                </h3>
                {exp.topCompany && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/30">
                    <Award className="size-3" />
                    {t.topCompany}
                  </span>
                )}
              </div>

              {exp.topCompany && (
                <p className="mt-3 text-sm italic text-primary/90">
                  {t.topCompanyNote}
                </p>
              )}

              <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
                {exp.description[lang]}
              </p>


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
