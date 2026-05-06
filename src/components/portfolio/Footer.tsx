import { Mail, MessageCircle, Linkedin, Github } from "lucide-react";
import { useAppState } from "@/hooks/use-app-state";
import { EMAIL, WHATSAPP_URL, LINKEDIN_URL, GITHUB_URL } from "@/i18n/data";

export function Footer() {
  const { t } = useAppState();
  const year = new Date().getFullYear();

  const socials = [
    { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
    { href: WHATSAPP_URL, icon: MessageCircle, label: "WhatsApp", external: true },
    { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn", external: true },
    { href: GITHUB_URL, icon: Github, label: "GitHub", external: true },
  ];

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="text-center">{t.footer.rights}</p>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="size-9 rounded-full border border-border/70 hover:border-primary/60 hover:text-primary transition-colors flex items-center justify-center"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
