import { Award } from "lucide-react";
import { useAppState } from "@/hooks/use-app-state";
import { trustCompanies } from "@/i18n/data";

export function TrustBar() {
  const { t } = useAppState();
  const top = trustCompanies.filter((c) => c.topCompany);
  const items = [...top, ...top, ...top, ...top]; // duplicate for seamless loop

  return (
    <section
      aria-label="Trusted companies"
      className="py-16 border-y border-border/60 bg-surface/30 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground text-center mb-10">
          {t.trust.title}
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden marquee-mask"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="flex gap-16 w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {items.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex items-center gap-3 shrink-0 text-foreground/60 hover:text-primary transition-colors"
            >
              {c.topCompany && (
                <Award className="size-4 text-primary shrink-0" />
              )}
              <span
                className="font-serif text-2xl md:text-3xl tracking-tight whitespace-nowrap"
                style={{ fontVariant: "small-caps" }}
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
