import { useAppState } from "@/hooks/use-app-state";

export function Footer() {
  const { t } = useAppState();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-mono">
          <span className="font-serif text-lg text-foreground">
            GG<span className="text-primary">.</span>
          </span>
          <span>· {year}</span>
        </div>
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  );
}
