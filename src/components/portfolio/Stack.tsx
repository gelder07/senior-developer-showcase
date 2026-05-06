import { motion } from "framer-motion";
import { useAppState } from "@/hooks/use-app-state";
import { stack } from "@/i18n/data";
import { SectionHeading } from "./SectionHeading";

export function Stack() {
  const { t } = useAppState();
  const categories = Object.keys(stack) as (keyof typeof t.stack.categories)[];

  return (
    <section id="stack" className="py-32 px-6 bg-surface/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.stack.label} title={t.stack.title} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-4">
                {t.stack.categories[cat]}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack[cat].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-sm bg-muted text-foreground/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
