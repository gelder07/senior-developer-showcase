import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import { useAppState } from "@/hooks/use-app-state";
import { EMAIL, WHATSAPP_URL, LINKEDIN_URL, GITHUB_URL } from "@/i18n/data";
import profilePhoto from "@/assets/profile.jpeg";

export function Contact() {
  const { t } = useAppState();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const links = [
    {
      href: `mailto:${EMAIL}`,
      label: "Email",
      icon: Mail,
    },
    { href: WHATSAPP_URL, label: "WhatsApp", icon: MessageCircle, external: true },
    { href: LINKEDIN_URL, label: "LinkedIn", icon: Linkedin, external: true },
    { href: GITHUB_URL, label: "GitHub", icon: Github, external: true },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--primary), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 size-32 md:size-64 rounded-full overflow-hidden border border-border ring-4 ring-primary/10 shadow-lg"
        >
          <img
            src={profilePhoto}
            alt="Gelder Gómez"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6"
        >
          / {t.contact.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground leading-[1.05]"
        >
          {t.contact.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="font-mono text-sm md:text-base text-foreground hover:text-primary transition-colors"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="size-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
            aria-label={t.contact.copy}
          >
            {copied ? (
              <Check className="size-4 text-primary" />
            ) : (
              <Copy className="size-4 text-muted-foreground" />
            )}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all text-sm font-medium"
            >
              <l.icon className="size-4" />
              {l.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
