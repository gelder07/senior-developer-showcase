import type { Lang } from "./translations";

export interface ExperienceItem {
  company: string;
  role: { es: string; en: string };
  period: string;
  bullets: { es: string[]; en: string[] };
  stack: string[];
  group: "companies" | "freelance";
}

export const experiences: ExperienceItem[] = [
  {
    company: "Contollo",
    role: { es: "Frontend / Mobile Lead", en: "Frontend / Mobile Lead" },
    period: "2023 — 2024",
    bullets: {
      es: [
        "Lideré equipo de 3 desarrolladores mejorando tiempos de entrega y calidad de código.",
        "Desarrollé app React Native para digitalización de espacios en 3D.",
        "Implementé arquitectura serverless con AWS Lambda, DynamoDB y GraphQL.",
        "Entregué producto end-to-end desde diseño hasta producción.",
      ],
      en: [
        "Led a team of 3 developers, improving delivery time and code quality.",
        "Built a React Native app for 3D space digitization.",
        "Implemented serverless architecture with AWS Lambda, DynamoDB and GraphQL.",
        "Delivered the product end-to-end from design to production.",
      ],
    },
    stack: ["React Native", "GraphQL", "AWS Lambda", "DynamoDB"],
    group: "companies",
  },
  {
    company: "GBM Nicaragua",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2022 — 2023",
    bullets: {
      es: [
        "Lideré la migración de Angular a React mejorando rendimiento y UX.",
        "Implementé arquitectura escalable alineada al negocio.",
        "Desarrollé funcionalidades offline-first en aplicación móvil.",
        "Gestioné despliegues en DigitalOcean optimizando disponibilidad.",
      ],
      en: [
        "Led the Angular → React migration, improving performance and UX.",
        "Built scalable architecture aligned with business needs.",
        "Developed offline-first features in the mobile app.",
        "Managed DigitalOcean deployments optimizing availability.",
      ],
    },
    stack: ["React", "Angular", "Redux", "Zustand", "React Native", "DigitalOcean"],
    group: "companies",
  },
  {
    company: "Compañía Licorera de Nicaragua",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2020 — 2022",
    bullets: {
      es: [
        "Migré sistemas legacy a tecnologías modernas mejorando estabilidad.",
        "Aumenté la eficiencia del sistema en ~40% mediante refactorización.",
        "Diseñé arquitectura full-stack para plataformas financieras y de marketing.",
        "Implementé visualización de datos para decisiones estratégicas.",
      ],
      en: [
        "Migrated legacy systems to modern stacks improving stability.",
        "Boosted system efficiency by ~40% through refactoring.",
        "Designed full-stack architecture for finance and marketing platforms.",
        "Built data visualizations to support strategic decisions.",
      ],
    },
    stack: ["React", "Angular", "Laravel", "MySQL", "Nginx", "DigitalOcean"],
    group: "companies",
  },
  {
    company: "LAFISE",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2019 — 2020",
    bullets: {
      es: [
        "Desarrollé sistema de inventario y producción para agroindustria.",
        "Implementé portal de cliente con visualización en tiempo real.",
        "Mejoré el control operativo digitalizando procesos manuales.",
      ],
      en: [
        "Built an inventory and production system for agribusiness.",
        "Shipped a client portal with real-time data visualization.",
        "Improved operational control by digitizing manual processes.",
      ],
    },
    stack: ["React", "Redux", "Django", "Tailwind"],
    group: "companies",
  },
  {
    company: "Grupo Jaga · Cargotrans",
    role: { es: "Full Stack — Freelance", en: "Full Stack — Freelance" },
    period: "2024",
    bullets: {
      es: [
        "Lideré el rediseño y modernización completa de la plataforma logística.",
        "Diseñé una experiencia UI/UX moderna enfocada en confianza y conversión.",
        "Optimicé rendimiento, estructura y adaptabilidad móvil del sitio.",
        "Alineé la plataforma digital con la visión estratégica del negocio.",
      ],
      en: [
        "Led the full redesign and modernization of the logistics platform.",
        "Designed a modern UI/UX focused on trust and conversion.",
        "Optimized performance, structure and mobile responsiveness.",
        "Aligned the digital platform with business strategy.",
      ],
    },
    stack: ["React", "Next.js", "UI/UX", "Performance"],
    group: "freelance",
  },
  {
    company: "Grupo Jaga · Wellpro",
    role: { es: "Frontend — Freelance", en: "Frontend — Freelance" },
    period: "2024",
    bullets: {
      es: [
        "Desarrollé el frontend completo de plataforma de equipos médicos.",
        "Transformé propuestas visuales en una experiencia clara y profesional.",
        "Implementé maquetación responsive y carga optimizada.",
      ],
      en: [
        "Built the full frontend for a medical equipment platform.",
        "Turned visual proposals into a clear, professional experience.",
        "Shipped responsive layout and optimized performance.",
      ],
    },
    stack: ["React", "Next.js", "Responsive", "Performance"],
    group: "freelance",
  },
  {
    company: "SmartLaw",
    role: { es: "Full Stack — Freelance", en: "Full Stack — Freelance" },
    period: "2022 — 2023",
    bullets: {
      es: [
        "Diseñé y desarrollé una plataforma legal SaaS completa desde cero.",
        "Implementé sistema de pagos, suscripciones y gestión documental.",
        "Construí backend escalable con .NET Core y arquitectura SOLID.",
      ],
      en: [
        "Designed and built a full legal SaaS platform from scratch.",
        "Implemented payments, subscriptions and document management.",
        "Built a scalable .NET Core backend following SOLID principles.",
      ],
    },
    stack: ["React", "Redux Toolkit", ".NET Core", "AWS", "Tailwind"],
    group: "freelance",
  },
  {
    company: "Ogilvy / Target",
    role: { es: "Full Stack — Freelance", en: "Full Stack — Freelance" },
    period: "2021",
    bullets: {
      es: [
        "Desarrollé un sistema de RRHH reemplazando procesos manuales.",
        "Implementé workflows complejos: aprobaciones, estados y notificaciones.",
        "Construí arquitectura escalable con Django REST + React.",
      ],
      en: [
        "Built an HR system replacing fully manual workflows.",
        "Implemented complex workflows: approvals, states, notifications.",
        "Designed a scalable architecture with Django REST + React.",
      ],
    },
    stack: ["React", "Django REST", "PostgreSQL", "AWS"],
    group: "freelance",
  },
];

export interface Project {
  title: string;
  description: { es: string; en: string };
  stack: string[];
  size: "lg" | "md-h" | "md-v" | "sm";
  tag: { es: string; en: string };
}

export const projects: Project[] = [
  {
    title: "SmartLaw",
    description: {
      es: "Plataforma legal SaaS construida desde cero con pagos, suscripciones y gestión documental para flujos complejos.",
      en: "Legal SaaS platform built from scratch with payments, subscriptions and document management for complex workflows.",
    },
    stack: ["React", ".NET Core", "AWS", "Stripe"],
    size: "lg",
    tag: { es: "SaaS Legal", en: "Legal SaaS" },
  },
  {
    title: "Contollo",
    description: {
      es: "App móvil React Native para digitalización de espacios en 3D con backend serverless en AWS.",
      en: "React Native mobile app for 3D space digitization powered by an AWS serverless backend.",
    },
    stack: ["React Native", "GraphQL", "AWS Lambda"],
    size: "md-h",
    tag: { es: "Mobile · 3D", en: "Mobile · 3D" },
  },
  {
    title: "Cargotrans",
    description: {
      es: "Plataforma logística rediseñada para fortalecer la presencia digital y conversión del operador.",
      en: "Logistics platform redesigned to strengthen the operator's digital presence and conversion.",
    },
    stack: ["Next.js", "React", "UI/UX"],
    size: "md-v",
    tag: { es: "Logística", en: "Logistics" },
  },
  {
    title: "GBM Suite",
    description: {
      es: "Migración Angular → React con módulo móvil offline-first.",
      en: "Angular → React migration with an offline-first mobile module.",
    },
    stack: ["React", "React Native"],
    size: "sm",
    tag: { es: "Enterprise", en: "Enterprise" },
  },
  {
    title: "Licorera Nicaragua",
    description: {
      es: "Plataforma fintech y de marketing con +40% de eficiencia operativa.",
      en: "Fintech and marketing platform delivering +40% operational efficiency.",
    },
    stack: ["React", "Laravel", "MySQL"],
    size: "sm",
    tag: { es: "Fintech", en: "Fintech" },
  },
  {
    title: "Wellpro",
    description: {
      es: "Plataforma de equipos médicos para el hogar con catálogo dinámico.",
      en: "Home medical equipment platform with a dynamic catalog.",
    },
    stack: ["React", "Next.js"],
    size: "sm",
    tag: { es: "Healthcare", en: "Healthcare" },
  },
  {
    title: "Ogilvy HR",
    description: {
      es: "Sistema de RRHH con workflows de aprobación y notificaciones.",
      en: "HR system with approval workflows and notifications.",
    },
    stack: ["React", "Django", "PostgreSQL"],
    size: "sm",
    tag: { es: "RRHH", en: "HR" },
  },
];

export const stack: Record<string, string[]> = {
  frontend: ["React", "Next.js", "Angular", "Redux", "Zustand", "Tailwind", "Material UI"],
  backend: ["Node.js", ".NET Core", "Laravel (PHP)", "Django (Python)"],
  mobile: ["React Native", "Expo", "Offline-first"],
  cloud: ["AWS Lambda", "AWS Amplify", "DigitalOcean", "Nginx", "CI/CD"],
  databases: ["PostgreSQL", "MySQL", "DynamoDB"],
  other: ["GraphQL", "REST APIs", "SOLID", "SCRUM", "Git"],
};

export function getLangText<T extends { es: string; en: string }>(
  obj: T,
  lang: Lang,
): string {
  return obj[lang];
}
