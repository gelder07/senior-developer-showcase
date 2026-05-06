import { useEffect, useState } from "react";
import { Moon, Sun, Languages, Linkedin } from "lucide-react";
import { LINKEDIN_URL } from "@/i18n/data";
import { useAppState } from "@/hooks/use-app-state";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, theme, toggleTheme, lang, toggleLang } = useAppState();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#stack", label: t.nav.stack },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 animate-fade-in",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-serif text-2xl tracking-tight text-foreground hover:text-primary transition-colors"
          aria-label="Gelder Gómez — Home"
        >
          {`GG`}<span className="text-primary"></span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-lg text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex h-10 w-10 rounded-full border border-border/70 hover:border-primary/60 hover:text-primary transition-colors items-center justify-center"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
          <button
            type="button"
            onClick={toggleLang}
            className="h-10 px-3 rounded-full border border-border/70 hover:border-primary/60 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-1.5"
            aria-label="Toggle language"
          >
            <Languages className="size-5" />
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-full border border-border/70 hover:border-primary/60 hover:text-primary transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
