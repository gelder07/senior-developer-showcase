import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "@/i18n/translations";

type Theme = "dark" | "light";

interface AppState {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  t: Translations;
}

const AppStateContext = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [theme, setThemeState] = useState<Theme>("dark");

  // Hydrate from localStorage / system preference once on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedLang = window.localStorage.getItem("lang") as Lang | null;
    if (storedLang === "es" || storedLang === "en") setLangState(storedLang);

    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeState(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setThemeState("light");
    }
  }, []);

  // Apply theme class to <html>
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(
    () => setLangState((l) => (l === "es" ? "en" : "es")),
    [],
  );
  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(
    () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo<AppState>(
    () => ({
      lang,
      setLang,
      toggleLang,
      theme,
      setTheme,
      toggleTheme,
      t: translations[lang],
    }),
    [lang, theme, setLang, toggleLang, setTheme, toggleTheme],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
  return ctx;
}
