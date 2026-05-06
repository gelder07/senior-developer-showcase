import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { useAppState } from "@/hooks/use-app-state";
import { projects } from "@/i18n/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Projects() {
  const { t, lang } = useAppState();

  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.projects.label} title={t.projects.title} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const isLink = Boolean(p.url);
            const Wrapper = (isLink ? "a" : "article") as "a" | "article";
            const wrapperProps = isLink
              ? {
                  href: p.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <Wrapper
                  {...wrapperProps}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 flex flex-col h-full",
                    isLink && "cursor-pointer",
                  )}
                >
                  {/* Cover image — fixed aspect for alignment */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {p.cover ? (
                      <img
                        src={p.cover}
                        alt={`${p.title} cover`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="w-full h-full flex items-center justify-center"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), var(--card)",
                        }}
                      >
                        <span className="font-serif text-5xl text-primary/30">
                          {p.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      {p.privateProject ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono bg-background/80 backdrop-blur text-muted-foreground border border-border">
                          <Lock className="size-3" />
                          {t.nda}
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center size-8 rounded-full bg-background/80 backdrop-blur text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <ArrowUpRight className="size-4 group-hover:rotate-12 transition-transform" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {p.tag[lang]}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
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
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
