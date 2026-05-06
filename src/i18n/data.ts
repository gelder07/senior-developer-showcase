import type { Lang } from "./translations";

export interface ExperienceItem {
  company: string;
  role: { es: string; en: string };
  period: string;
  description: { es: string; en: string };
  stack: string[];
  group: "companies" | "freelance";
  topCompany?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    company: "GBM Nicaragua",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2022 — 2023",
    topCompany: true,
    description: {
      es: "Como Desarrollador Full Stack en GBM, participé en la migración de aplicaciones desarrolladas en Angular hacia una arquitectura moderna con React, resolviendo problemas de rendimiento, mantenibilidad y experiencia de usuario. Implementé una estructura escalable alineada a las necesidades del negocio, desarrollé funcionalidades offline-first para aplicaciones móviles y optimicé despliegues en DigitalOcean para mejorar disponibilidad y estabilidad operativa, permitiendo una experiencia más rápida y eficiente para los usuarios finales.",
      en: "As a Full Stack Developer at GBM, I took part in migrating Angular applications to a modern React architecture, solving performance, maintainability and UX issues. I implemented a scalable structure aligned with business needs, developed offline-first features for mobile apps and optimized DigitalOcean deployments to improve availability and operational stability, delivering a faster and more efficient experience for end users.",
    },
    stack: ["React", "Angular", "Redux", "Zustand", "React Native", "DigitalOcean"],
    group: "companies",
  },
  {
    company: "Compañía Licorera de Nicaragua",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2020 — 2022",
    topCompany: true,
    description: {
      es: "En Compañía Licorera de Nicaragua lideré la modernización de sistemas legacy que generaban limitaciones de rendimiento y mantenimiento. Analicé la arquitectura existente y migré plataformas hacia tecnologías modernas como React, Angular y Laravel, optimizando procesos críticos y mejorando la eficiencia operativa en aproximadamente un 40%. También diseñé soluciones full stack para plataformas financieras y de marketing, implementé visualización de datos para facilitar decisiones estratégicas y optimicé pipelines de despliegue reduciendo la dependencia de infraestructura tradicional.",
      en: "At Compañía Licorera de Nicaragua I led the modernization of legacy systems that were causing performance and maintenance limitations. I analyzed the existing architecture and migrated platforms to modern stacks like React, Angular and Laravel, optimizing critical processes and improving operational efficiency by around 40%. I also designed full stack solutions for finance and marketing platforms, built data visualizations to support strategic decisions and optimized deployment pipelines, reducing dependency on traditional infrastructure.",
    },
    stack: ["React", "Angular", "Laravel", "MySQL", "Nginx", "DigitalOcean"],
    group: "companies",
  },
  {
    company: "LAFISE",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2019 — 2020",
    topCompany: true,
    description: {
      es: "Como Desarrollador Full Stack en LAFISE, desarrollé un sistema de inventario y producción orientado al sector agroindustrial para resolver problemas de control operativo y seguimiento manual de procesos. Implementé una plataforma con visualización en tiempo real para clientes y equipos internos utilizando React, Redux y Django, mejorando la trazabilidad de operaciones y facilitando la toma de decisiones mediante la digitalización de procesos críticos.",
      en: "As a Full Stack Developer at LAFISE, I built an inventory and production system for the agribusiness sector to solve operational control issues and replace manual process tracking. I shipped a platform with real-time data visualization for clients and internal teams using React, Redux and Django, improving operational traceability and supporting decision-making by digitizing critical processes.",
    },
    stack: ["React", "Redux", "Django", "Tailwind"],
    group: "companies",
  },
  {
    company: "Contollo",
    role: { es: "Frontend / Mobile Lead", en: "Frontend / Mobile Lead" },
    period: "2023 — 2024",
    description: {
      es: "En Contollo lideré un equipo de tres desarrolladores para construir una aplicación móvil enfocada en digitalización de espacios en 3D. Detecté problemas relacionados con tiempos de entrega y escalabilidad técnica, por lo que estructuré una arquitectura basada en React Native, AWS Lambda, DynamoDB y GraphQL para optimizar el flujo de desarrollo y la comunicación entre servicios. También integré APIs externas para visualizar catálogos en tiempo real y coordiné el desarrollo end-to-end del producto, desde el diseño hasta producción, logrando mejorar la calidad del código y acelerar la entrega de funcionalidades.",
      en: "At Contollo I led a team of three developers to build a mobile app focused on 3D space digitization. I identified delivery-time and scalability issues, and structured an architecture based on React Native, AWS Lambda, DynamoDB and GraphQL to optimize the development flow and service-to-service communication. I also integrated external APIs to visualize real-time catalogs and coordinated end-to-end product development, from design to production, improving code quality and accelerating feature delivery.",
    },
    stack: ["React Native", "GraphQL", "AWS Lambda", "DynamoDB"],
    group: "companies",
  },
  {
    company: "Grupo Jaga · Cargotrans",
    role: { es: "Full Stack — Freelance", en: "Full Stack — Freelance" },
    period: "2024",
    description: {
      es: "Como Desarrollador Frontend / Full Stack en el proyecto logístico de Cargotrans, lideré la modernización completa de una plataforma web desactualizada que afectaba la imagen digital y la experiencia de los clientes. Analicé las limitaciones del sistema anterior y desarrollé una nueva arquitectura con React y Next.js enfocada en rendimiento, escalabilidad y diseño responsive. Rediseñé toda la experiencia UI/UX para transmitir mayor confianza y claridad, optimicé tiempos de carga y añadí nuevas funcionalidades para mejorar la comunicación con clientes y la navegación en dispositivos móviles, logrando una renovación integral de la presencia digital de la empresa y fortaleciendo su posicionamiento como operador logístico estratégico.",
      en: "As a Frontend / Full Stack Developer on the Cargotrans logistics project, I led the full modernization of an outdated web platform that was hurting the company's digital image and customer experience. I analyzed the limitations of the previous system and built a new architecture with React and Next.js focused on performance, scalability and responsive design. I redesigned the entire UI/UX to convey greater trust and clarity, optimized load times and added new features to improve customer communication and mobile navigation, delivering a complete refresh of the company's digital presence and strengthening its positioning as a strategic logistics operator.",
    },
    stack: ["React", "Next.js", "UI/UX", "Performance"],
    group: "freelance",
  },
  {
    company: "Grupo Jaga · Wellpro",
    role: { es: "Frontend — Freelance", en: "Frontend — Freelance" },
    period: "2024",
    description: {
      es: "En el desarrollo de la plataforma web de Wellpro, identifiqué la necesidad de transformar una propuesta visual estática en una experiencia moderna, estable y optimizada para múltiples dispositivos. Construí el frontend completo utilizando React y Next.js, implementando una estructura responsive y optimizaciones de rendimiento que mejoraron la velocidad de carga y estabilidad general del sistema. Además, integré contenido dinámico y una navegación enfocada en experiencia de usuario, permitiendo que los clientes accedieran de forma más clara y rápida a la información de productos y servicios médicos.",
      en: "While building the Wellpro web platform, I identified the need to turn a static visual proposal into a modern, stable, multi-device experience. I built the full frontend using React and Next.js, implementing a responsive structure and performance optimizations that improved load speed and overall system stability. I also integrated dynamic content and UX-focused navigation, allowing customers to access medical product and service information more clearly and quickly.",
    },
    stack: ["React", "Next.js", "Responsive", "Performance"],
    group: "freelance",
  },
  {
    company: "SmartLaw",
    role: { es: "Full Stack — Freelance", en: "Full Stack — Freelance" },
    period: "2022 — 2023",
    description: {
      es: "Como Desarrollador Full Stack en SmartLaw, desarrollé desde cero una plataforma SaaS orientada a la gestión legal, resolviendo la necesidad de centralizar documentos, pagos y suscripciones en un solo sistema escalable. Diseñé un frontend en React enfocado en experiencia de usuario para flujos complejos y construí un backend robusto en .NET Core siguiendo principios SOLID, permitiendo una arquitectura mantenible, segura y preparada para crecimiento futuro.",
      en: "As a Full Stack Developer at SmartLaw, I built from scratch a SaaS platform for legal management, solving the need to centralize documents, payments and subscriptions in a single scalable system. I designed a React frontend focused on UX for complex flows and built a robust .NET Core backend following SOLID principles, delivering a maintainable, secure architecture ready for future growth.",
    },
    stack: ["React", "Redux Toolkit", ".NET Core", "AWS", "Tailwind"],
    group: "freelance",
  },
  {
    company: "Ogilvy / Target",
    role: { es: "Full Stack — Freelance", en: "Full Stack — Freelance" },
    period: "2021",
    description: {
      es: "En proyectos freelance para Ogilvy y Target, desarrollé un sistema de recursos humanos diseñado para reemplazar procesos manuales y mejorar la trazabilidad operativa. Implementé workflows complejos de aprobaciones, estados y notificaciones utilizando React y Django REST, además de automatizar despliegues mediante pipelines con AWS y Zappa. Esto permitió reducir tareas repetitivas, mejorar la eficiencia del equipo y contar con una plataforma escalable y centralizada para la gestión interna.",
      en: "On freelance projects for Ogilvy and Target, I built an HR system designed to replace manual processes and improve operational traceability. I implemented complex workflows for approvals, states and notifications using React and Django REST, and automated deployments through pipelines with AWS and Zappa. This reduced repetitive tasks, improved team efficiency and provided a scalable, centralized platform for internal management.",
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
  url?: string;
  privateProject?: boolean;
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
    url: "https://smartlawweb.com",
  },
  {
    title: "Cargotrans",
    description: {
      es: "Plataforma logística rediseñada para fortalecer la presencia digital y la conversión del operador.",
      en: "Logistics platform redesigned to strengthen the operator's digital presence and conversion.",
    },
    stack: ["Next.js", "React", "UI/UX"],
    size: "md-h",
    tag: { es: "Logística", en: "Logistics" },
    url: "https://www.cargotrans.com.ni",
  },
  {
    title: "Wellpro",
    description: {
      es: "Plataforma de equipos médicos para el hogar con catálogo dinámico y experiencia clara.",
      en: "Home medical equipment platform with a dynamic catalog and clear UX.",
    },
    stack: ["React", "Next.js"],
    size: "md-v",
    tag: { es: "Healthcare", en: "Healthcare" },
    url: "https://wellpro.es",
  },
  {
    title: "Ogilvy / Target HR",
    description: {
      es: "Sistema interno de RRHH con workflows de aprobación, estados y notificaciones.",
      en: "Internal HR system with approval workflows, states and notifications.",
    },
    stack: ["React", "Django REST", "PostgreSQL", "AWS"],
    size: "md-h",
    tag: { es: "RRHH", en: "HR" },
    privateProject: true,
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

export const trustCompanies: { name: string; topCompany?: boolean }[] = [
  { name: "GBM", topCompany: true },
  { name: "Compañía Licorera de Nicaragua", topCompany: true },
  { name: "LAFISE", topCompany: true },
];

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/gelder-jos%C3%A9-g%C3%B3mez-solorzano-790768222";
export const EMAIL = "geldergomez04@gmail.com";
export const WHATSAPP_URL = "https://wa.me/50581867161";
export const GITHUB_URL = "#";

export function getLangText<T extends { es: string; en: string }>(
  obj: T,
  lang: Lang,
): string {
  return obj[lang];
}
