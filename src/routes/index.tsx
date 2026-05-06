import { createFileRoute } from "@tanstack/react-router";
import { AppStateProvider } from "@/hooks/use-app-state";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { TrustBar } from "@/components/portfolio/TrustBar";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Gelder Gómez — Full Stack & Mobile Developer",
      },
      {
        name: "description",
        content:
          "Full Stack & Mobile Developer con +6 años construyendo productos web y móviles que escalan. React, React Native, Node, .NET, AWS.",
      },
      { property: "og:title", content: "Gelder Gómez — Full Stack & Mobile Developer" },
      {
        property: "og:description",
        content:
          "+6 años construyendo apps de alto impacto en fintech, logística, legal y marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <AppStateProvider>
      <div className="grain min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Stack />
          <TrustBar />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppStateProvider>
  );
}
