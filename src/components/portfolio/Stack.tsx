import { motion } from "framer-motion";
import { useAppState } from "@/hooks/use-app-state";
import { stack } from "@/i18n/data";
import { SectionHeading } from "./SectionHeading";

const TECH_ICONS: Record<string, string> = {
  React: "https://skillicons.dev/icons?i=react",
  "Next.js": "https://skillicons.dev/icons?i=nextjs",
  Angular: "https://skillicons.dev/icons?i=angular",
  Redux: "https://skillicons.dev/icons?i=redux",
  Zustand: "https://skillicons.dev/icons?i=ts",
  Tailwind: "https://skillicons.dev/icons?i=tailwind",
  "Material UI": "https://skillicons.dev/icons?i=mui",
  "Node.js": "https://skillicons.dev/icons?i=nodejs",
  ".NET Core": "https://skillicons.dev/icons?i=dotnet",
  "Laravel (PHP)": "https://skillicons.dev/icons?i=laravel",
  "Django rest framework": "https://skillicons.dev/icons?i=django",
  "Python": "https://skillicons.dev/icons?i=py",
  "React Native  Expo  Native Modules": "https://skillicons.dev/icons?i=react",
  Expo: "https://skillicons.dev/icons?i=expo",
  "Offline-first": "https://skillicons.dev/icons?i=pwa",
  "AWS": "https://skillicons.dev/icons?i=aws",
  "DigitalOcean Ubuntu": "https://skillicons.dev/icons?i=ubuntu",
  Nginx: "https://skillicons.dev/icons?i=nginx",
  Php: "https://skillicons.dev/icons?i=php",
  "CI/CD": "https://skillicons.dev/icons?i=githubactions",
  PostgreSQL: "https://skillicons.dev/icons?i=postgres",
  MySQL: "https://skillicons.dev/icons?i=mysql",
  DynamoDB: "https://skillicons.dev/icons?i=dynamodb",
  GraphQL: "https://skillicons.dev/icons?i=graphql",
  "REST APIs": "https://skillicons.dev/icons?i=postman",
  SOLID: "https://skillicons.dev/icons?i=ts",
  SCRUM: "https://skillicons.dev/icons?i=notion",
  Git: "https://skillicons.dev/icons?i=git",
  "NestJs": "https://skillicons.dev/icons?i=nestjs",
  "Gitlab": "https://skillicons.dev/icons?i=gitlab",
};

const FALLBACK_ICON = "https://skillicons.dev/icons?i=code";

export function Stack() {
  const { t } = useAppState();
  const categories = Object.keys(stack) as (keyof typeof t.stack.categories)[];

  return (
    <section id="stack" className="py-32 px-6 bg-surface/40">
      <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-5xl 2xl:max-w-7xl">
        <SectionHeading label={t.stack.label} title={t.stack.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border   p-6 md:p-8 "
            >
              <p className="text-4xl font-bold text-primary mb-6">
                {t.stack.categories[cat]}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-5">
                {stack[cat].map((tech) => (
                  <div key={tech} className="flex flex-col items-center text-center">
                    <img
                      src={TECH_ICONS[tech] ?? FALLBACK_ICON}
                      alt={tech}
                      className="h-11 w-11 object-contain mb-2"
                      loading="lazy"
                    />
                    <span className="text-xs text-foreground/90 leading-tight">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
