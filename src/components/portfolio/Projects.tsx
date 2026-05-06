import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useAppState } from "@/hooks/use-app-state";
import { projects } from "@/i18n/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const sizeClass: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2 min-h-[420px]",
  "md-h": "md:col-span-2 min-h-[240px]",
  "md-v": "md:row-span-2 min-h-[420px]",
  sm: "min-h-[240px]",
};

export function Projects() {
  const { t, lang } = useAppState();

  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.projects.label} title={t.projects.title} />

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/40 transition-all duration-300 cursor-pointer flex flex-col justify-between",
                sizeClass[p.size],
              )}
            >
              {/* Decorative gradient on hover */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--primary) 12%, transparent), transparent 40%)",
                }}
              />

              <div className="relative flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {p.tag[lang]}
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
              </div>

              <div className="relative">
                <h3
                  className={cn(
                    "font-serif tracking-tight text-foreground group-hover:text-primary transition-colors",
                    p.size === "lg"
                      ? "text-4xl md:text-5xl"
                      : "text-2xl md:text-3xl",
                  )}
                >
                  {p.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-muted-foreground leading-relaxed",
                    p.size === "lg" ? "text-base max-w-md" : "text-sm",
                  )}
                >
                  {p.description[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-muted text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
