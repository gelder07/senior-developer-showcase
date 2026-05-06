import type { Lang } from "./translations";
import coverCargotrans from "@/assets/cover-cargotrans.png";
import coverWellpro from "@/assets/cover-wellpro.png";
import logoLafise from "@/assets/logo-lafise.png";
import logoGbm from "@/assets/logo-gbm.jpg";
import logoClnsa from "@/assets/logo-clnsa.png";

export interface ExperienceItem {
  company: string;
  role: { es: string; en: string };
  period: string;
  description: { es: string; en: string };
  stack: string[];
  group: "companies" | "freelance";
  topCompany?: boolean;
  cover?: string;
  logo?: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: "GBM Nicaragua",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2022 — 2023",
    topCompany: true,
    description: {
      es: "En GBM fui responsable de crear aplicaciones completas desde cero, participando directamente en la arquitectura, desarrollo y evolución de los productos. Más allá de implementar funcionalidades específicas, construí soluciones enfocadas en rendimiento, escalabilidad y experiencia de usuario, incluyendo aplicaciones móviles con capacidades offline-first para garantizar funcionamiento incluso sin conexión. También lideré migraciones tecnológicas desde Angular hacia React, mejorando significativamente la velocidad y mantenibilidad de las plataformas. Además, optimicé despliegues y procesos de infraestructura en DigitalOcean para asegurar estabilidad y disponibilidad continua. Mi trabajo no fue únicamente desarrollar módulos, sino construir productos sólidos que respondieran directamente a necesidades reales del negocio.",
      en: "At GBM I was responsible for building complete applications from scratch, taking direct part in product architecture, development and evolution. Beyond implementing specific features, I built solutions focused on performance, scalability and user experience, including mobile applications with offline-first capabilities to guarantee operation even without connectivity. I also led technology migrations from Angular to React, significantly improving the speed and maintainability of the platforms. In addition, I optimized deployments and infrastructure processes on DigitalOcean to ensure stability and continuous availability. My work was not only to develop modules, but to build solid products that directly addressed real business needs.",
    },
    stack: ["React", "PHP", "Laravel", "Redux", "Zustand", "React Native", "DigitalOcean"],
    group: "companies",
    logo: logoGbm,
  },
  {
    company: "Ron Flor de Caña ·  Nicaragua",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2020 — 2022",
    topCompany: true,
    description: {
      es: "En Compañía Licorera de Nicaragua lideré la modernización de sistemas legacy que generaban limitaciones de rendimiento y mantenimiento. Analicé la arquitectura existente y migré plataformas hacia tecnologías modernas como React, Angular y Laravel, optimizando procesos críticos y mejorando la eficiencia operativa en aproximadamente un 40%. También diseñé soluciones full stack para plataformas financieras y de marketing, implementé visualización de datos para facilitar decisiones estratégicas y optimicé pipelines de despliegue reduciendo la dependencia de infraestructura tradicional.",
      en: "At Compañía Licorera de Nicaragua I led the modernization of legacy systems that were causing performance and maintenance limitations. I analyzed the existing architecture and migrated platforms to modern stacks like React, Angular and Laravel, optimizing critical processes and improving operational efficiency by around 40%. I also designed full stack solutions for finance and marketing platforms, built data visualizations to support strategic decisions and optimized deployment pipelines, reducing dependency on traditional infrastructure.",
    },
    stack: ["React", "Angular", "PHP", "Laravel", "MySQL", "Ubuntu", "Nginx", "DigitalOcean"],
    group: "companies",
    logo: logoClnsa,
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
    logo: logoLafise,
  },
  {
    company: "Contollo",
    role: { es: "Frontend / Mobile Lead", en: "Frontend / Mobile Lead" },
    period: "2023 — 2024",
    description: {
      es: "En Contollo participé en el desarrollo de una aplicación con un nivel técnico y visual altamente innovador, pensada para arquitectos, diseñadores de interiores y cualquier persona interesada en transformar espacios reales en experiencias digitales interactivas. La aplicación analizaba el entorno del usuario utilizando tecnología de escaneo espacial para generar automáticamente mapas 2D y modelos 3D del espacio en tiempo real. Además, integré APIs externas de catálogos de muebles que permitían visualizar y colocar mobiliario dentro del entorno escaneado, simulando la decoración completa del hogar antes de realizar cualquier compra o modificación física. La plataforma también permitía guardar planos, configuraciones y datos para reutilizarlos posteriormente, convirtiéndose en una herramienta poderosa para visualización arquitectónica, diseño y planificación de espacios. Todo esto fue construido utilizando React Native, GraphQL y arquitectura serverless sobre AWS, entregando una experiencia rápida, escalable y moderna.",
      en: "At Contollo I took part in developing an application with a highly innovative technical and visual level, designed for architects, interior designers and anyone interested in transforming real spaces into interactive digital experiences. The application analyzed the user's environment using spatial scanning technology to automatically generate 2D maps and 3D models of the space in real time. I also integrated external furniture catalog APIs that allowed users to visualize and place furniture inside the scanned environment, simulating full home decoration before any purchase or physical change. The platform also allowed saving floor plans, configurations and data for later reuse, becoming a powerful tool for architectural visualization, design and space planning. All of this was built using React Native, GraphQL and a serverless architecture on AWS, delivering a fast, scalable and modern experience.",
    },
    stack: ["React Native", "GraphQL", "AWS Lambda", "DynamoDB"],
    group: "companies",
  },
  {
    company: "Grupo Jaga · Cargotrans",
    role: { es: "Crear Pagina Web  — Freelance", en: "Create Website — Freelance" },
    period: "2024",
    cover: coverCargotrans,
    description: {
      es: "En el proyecto de Cargotrans no solo desarrollé una página web, construí desde cero toda la plataforma digital de la empresa. Me involucré directamente en el levantamiento de requerimientos, entendiendo las necesidades operativas y comerciales del cliente para transformar una presencia web limitada en una plataforma moderna, rápida y alineada a la visión estratégica de la marca. Diseñé la arquitectura completa, desarrollé el frontend con React y Next.js, optimicé rendimiento, adaptabilidad móvil y experiencia de usuario, además de crear funcionalidades enfocadas en generar confianza y facilitar la comunicación con clientes. El resultado fue una renovación total de la imagen digital de la empresa, elevando su percepción profesional y fortaleciendo su posicionamiento dentro del sector logístico.",
      en: "On the Cargotrans project I didn't just develop a website, I built the company's entire digital platform from scratch. I was directly involved in requirements gathering, understanding the client's operational and commercial needs to transform a limited web presence into a modern, fast platform aligned with the brand's strategic vision. I designed the full architecture, developed the frontend with React and Next.js, optimized performance, mobile adaptability and user experience, and created features focused on building trust and streamlining customer communication. The result was a complete refresh of the company's digital image, raising its professional perception and strengthening its positioning within the logistics sector.",
    },
    stack: ["React", "Next.js", "UI/UX", "Performance"],
    group: "freelance",
  },
  {
    company: "Grupo Jaga · Wellpro",
    role: { es: "Crear Pagina Web — Freelance", en: "Create Website — Freelance" },
    period: "2024",
    cover: coverWellpro,
    description: {
      es: "En el desarrollo de la plataforma web de Wellpro, identifiqué la necesidad de transformar una propuesta visual estática en una experiencia moderna, estable y optimizada para múltiples dispositivos. Construí el frontend completo utilizando React y Next.js, implementando una estructura responsive y optimizaciones de rendimiento que mejoraron la velocidad de carga y estabilidad general del sistema. Además, integré contenido dinámico y una navegación enfocada en experiencia de usuario, permitiendo que los clientes accedieran de forma más clara y rápida a la información de productos y servicios médicos.",
      en: "While building the Wellpro web platform, I identified the need to turn a static visual proposal into a modern, stable, multi-device experience. I built the full frontend using React and Next.js, implementing a responsive structure and performance optimizations that improved load speed and overall system stability. I also integrated dynamic content and UX-focused navigation, allowing customers to access medical product and service information more clearly and quickly.",
    },
    stack: ["React", "Next.js", "Responsive", "Performance"],
    group: "freelance",
  },
  {
    company: "Ogilvy / Target",
    role: { es: "Desarrollar Sistema Interno RRHH — Freelance", en: "Develop Internal HR System — Freelance" },
    period: "2021",
    description: {
      es: "Desarrollé desde cero un sistema integral de recursos humanos diseñado para automatizar y centralizar procesos administrativos que anteriormente se manejaban de forma manual dentro de la organización. La plataforma permitió a los empleados gestionar de manera autónoma sus vacaciones, solicitudes internas, días libres, comprobantes de pago y documentos de planilla, mejorando significativamente la transparencia y accesibilidad de la información. Para el área administrativa construí un panel completo capaz de gestionar colaboradores, aprobaciones, estados, reportes, nómina y flujos internos complejos, reduciendo carga operativa y optimizando tiempos de respuesta. También implementé automatizaciones, notificaciones y workflows personalizados para diferentes roles dentro de la empresa, creando una solución escalable y alineada a las necesidades reales del negocio utilizando React, Django REST, PostgreSQL y AWS.",
      en: "I built from scratch a complete HR system designed to automate and centralize administrative processes that were previously handled manually within the organization. The platform allowed employees to manage their vacations, internal requests, free days, pay slips and payroll documents autonomously, significantly improving the transparency and accessibility of information. For the administrative area I built a complete panel capable of managing employees, approvals, states, reports, payroll and complex internal flows, reducing operational load and optimizing response times. I also implemented automated workflows, notifications and personalized for different roles within the company, creating a scalable solution aligned with the real business needs using React, Django REST, PostgreSQL and AWS.",
    },
    stack: ["React", "Django REST", "PostgreSQL", "AWS"],
    group: "freelance",
  },
  {
    company: "Fachadas Modernas",
    role: { es: "Desarrollar Sistema Integral ERP — Freelance", en: "Develop Complete ERP System — Freelance" },
    period: "2023",
    description: {
      es: "Desarrollé desde cero un sistema integral de inventario, facturación y gestión comercial diseñado para optimizar las operaciones internas de una empresa de arquitectura con múltiples flujos manuales y poca trazabilidad de información. Analicé los procesos del negocio y construí una plataforma capaz de centralizar inventario, cotizaciones, compras, clientes, proveedores y facturación en un solo entorno, permitiendo un control mucho más preciso de las operaciones. Implementé funcionalidades avanzadas como generación automática de códigos de productos, consulta inteligente de artículos relacionados, dashboards de métricas totalmente personalizables y reportes estratégicos como kardex, entradas, salidas y control de compras. El sistema permitió reducir errores operativos, mejorar la toma de decisiones y brindar una visión mucho más clara y organizada del negocio en tiempo real.",
      en: "I built from scratch a complete inventory, billing and commercial management system designed to optimize the internal operations of an architecture company with multiple manual flows and limited information traceability. I analyzed the business processes and built a platform capable of centralizing inventory, quotes, purchases, customers, suppliers and billing in a single environment, enabling much more precise operational control. I implemented advanced features such as automatic product code generation, smart related-item lookup, fully customizable metrics dashboards and strategic reports like kardex, inflows, outflows and purchase control. The system reduced operational errors, improved decision-making and provided a clearer, more organized real-time view of the business.",
    },
    stack: ["React", "Laravel", "MySQL", "Dashboards"],
    group: "freelance",
  },
];

export interface Project {
  title: string;
  description: { es: string; en: string };
  stack: string[];
  tag: { es: string; en: string };
  url?: string;
  privateProject?: boolean;
  cover?: string;
}

export const projects: Project[] = [
  {
    title: "Cargotrans",
    description: {
      es: "Plataforma logística rediseñada para fortalecer la presencia digital y la conversión del operador.",
      en: "Logistics platform redesigned to strengthen the operator's digital presence and conversion.",
    },
    stack: ["Next.js", "React", "UI/UX"],
    tag: { es: "Logística", en: "Logistics" },
    url: "https://www.cargotrans.com.ni",
    cover: coverCargotrans,
  },
  {
    title: "Wellpro",
    description: {
      es: "Plataforma de equipos médicos para el hogar con catálogo dinámico y experiencia clara.",
      en: "Home medical equipment platform with a dynamic catalog and clear UX.",
    },
    stack: ["React", "Next.js"],
    tag: { es: "Healthcare", en: "Healthcare" },
    url: "https://wellpro.es",
    cover: coverWellpro,
  },
  {
    title: "Ogilvy / Target HR",
    description: {
      es: "Sistema interno de RRHH con workflows de aprobación, estados y notificaciones.",
      en: "Internal HR system with approval workflows, states and notifications.",
    },
    stack: ["React", "Django REST", "PostgreSQL", "AWS"],
    tag: { es: "RRHH", en: "HR" },
    privateProject: true,
  },
  {
    title: "Fachadas Modernas",
    description: {
      es: "Sistema integral de inventario, facturación y gestión comercial con dashboards y reportes estratégicos.",
      en: "Integrated inventory, billing and commercial management system with dashboards and strategic reports.",
    },
    stack: ["React", "Laravel", "MySQL", "Dashboards"],
    tag: { es: "ERP", en: "ERP" },
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

export const trustCompanies: { name: string; topCompany?: boolean; logo?: string }[] = [
  { name: "GBM", topCompany: true, logo: logoGbm },
  { name: "Compañía Licorera de Nicaragua", topCompany: true, logo: logoClnsa },
  { name: "LAFISE", topCompany: true, logo: logoLafise },
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
