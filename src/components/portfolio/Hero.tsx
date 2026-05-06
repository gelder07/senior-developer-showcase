import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useAppState } from "@/hooks/use-app-state";

export function Hero() {
  const { t } = useAppState();

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Soft amber halo */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 size-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--primary), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 size-[500px] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--primary), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 w-full relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-lg text-primary mb-6 flex items-center gap-2"
        >
          <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse" />
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-foreground max-w-5xl"
        >
          {t.hero.title}{" "}
          <span className="italic text-primary">{t.hero.titleAccent}</span>
          {t.hero.titleSuffix}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 flex items-center gap-2 text-md text-muted-foreground font-mono"
        >
          <MapPin className="size-3.5 text-primary" />
          {t.hero.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            {t.hero.ctaProjects}
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border hover:border-primary hover:text-primary transition-colors font-medium"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-md uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2"
      >
        {t.hero.scroll}
        <span className="block w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  );
}
