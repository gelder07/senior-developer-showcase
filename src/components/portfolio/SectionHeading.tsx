import { motion } from "framer-motion";

export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4"
      >
        / {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground max-w-4xl leading-[1.05]"
      >
        {title}
      </motion.h2>
    </div>
  );
}
