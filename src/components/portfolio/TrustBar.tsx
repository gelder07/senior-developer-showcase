import { useAppState } from "@/hooks/use-app-state";
import { trustCompanies } from "@/i18n/data";

export function TrustBar() {
  const { t } = useAppState();
  const base = trustCompanies.filter((c) => c.topCompany && c.logo);
  // Repeat enough times so each set is wider than the viewport (seamless loop)
  const top = Array.from({ length: 6 }, () => base).flat();

  return (
    <section
      aria-label="Trusted companies"
      className="py-16 border-y border-border/60 bg-surface/30 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xl uppercase tracking-[0.25em] text-muted-foreground text-center mb-10 ">
          {t.trust.title}
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((set) => (
            <div key={set} className="flex gap-16 pr-16 shrink-0" aria-hidden={set === 1}>
              {top.map((c, i) => (
                <div
                  key={`${set}-${c.name}-${i}`}
                  className="flex items-center shrink-0"
                >
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
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
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

