export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      stack: "Stack",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy Gelder.",
      title: "Diseño y programo cosas",
      titleAccent: "bellamente simples",
      titleSuffix: ", y amo lo que hago.",
      subtitle:
        "Full Stack & Mobile Developer · +6 años · React, React Native, Php, Laravel, Python, Django rest framework, AWS",
      location: "Managua, Nicaragua — disponible para proyectos remotos",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
      scroll: "Desliza",
    },
    trust: {
      title: "Experiencia en algunas de las empresas más importantes de Nicaragua",
    },
    topCompany: "Top Nicaragua",
    topCompanyNote: "Una de las empresas más importantes de Nicaragua",
    nda: "Sistema privado · NDA",
    about: {
      label: "Sobre mí",
      title: "Senior Full Stack & Mobile Developer.",
      body: "Creo experiencias web y móviles rápidas, escalables y centradas en negocio. Durante los últimos 6 años he desarrollado soluciones para tech, logística y empresas de alto crecimiento, mejorando procesos, rendimiento y eficiencia operativa con tecnologías modernas y arquitectura sólida.",
      stats: [
        { value: "+6", label: "Años de experiencia" },
        { value: "8+", label: "Empresas y clientes" },
        { value: "+60%", label: "Mejora de eficiencia" },
        { value: "+10", label: "Apps en producción" },
      ],
    },
    experience: {
      label: "Trayectoria",
      title: "Empresas y clientes que confían en mi trabajo.",
      groups: {
        companies: "Empresas",
        freelance: "Freelance / Clientes",
      },
    },
    projects: {
      label: "Trabajo seleccionado",
      title: "Proyectos destacados.",
      stack: "Stack",
    },
    stack: {
      label: "Tecnologías",
      title: "Stack técnico.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        cloud: "Cloud & DevOps",
        databases: "Databases",
        other: "Otros",
      },
    },
    contact: {
      label: "Contacto",
      title: "¿Tienes un proyecto en mente?",
      subtitle:
        "Disponible para proyectos freelance y posiciones full-time remotas. Respondo en menos de 24h.",
      copy: "Copiar email",
      copied: "¡Copiado!",
    },
    footer: {
      rights: "Diseñado y desarrollado por Gelder Gómez",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Gelder.",
      title: "I design and code",
      titleAccent: "beautifully simple things",
      titleSuffix: ", and I love what I do.",
      subtitle:
        "Full Stack & Mobile Developer · 6+ years · React, React Native, Php, Laravel, Python, Django rest framework, AWS",
      location: "Managua, Nicaragua — available for remote work worldwide",
      ctaProjects: "View work",
      ctaContact: "Get in touch",
      scroll: "Scroll",
    },
    trust: {
      title: "Experience at some of Nicaragua's leading companies",
    },
    topCompany: "Top Nicaragua",
    topCompanyNote: "One of Nicaragua's leading companies",
    nda: "Private system · NDA",
    about: {
      label: "About",
      title: "Senior Full Stack & Mobile Developer.",
      body: "I build fast, scalable web and mobile experiences focused on business impact. Over the last 6 years I've delivered solutions for tech, logistics and high-growth companies, improving processes, performance and operational efficiency with modern technologies and solid architecture.",
      stats: [
        { value: "6+", label: "Years of experience" },
        { value: "8+", label: "Companies & clients" },
        { value: "+60%", label: "Efficiency gains" },
        { value: "10+", label: "Apps in production" },
      ],
    },
    experience: {
      label: "Track record",
      title: "Companies and clients that trust my work.",
      groups: {
        companies: "Companies",
        freelance: "Freelance / Clients",
      },
    },
    projects: {
      label: "Selected work",
      title: "Featured projects.",
      stack: "Stack",
    },
    stack: {
      label: "Technologies",
      title: "Tech stack.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        cloud: "Cloud & DevOps",
        databases: "Databases",
        other: "Other",
      },
    },
    contact: {
      label: "Contact",
      title: "Got a project in mind?",
      subtitle:
        "Open to freelance projects and remote full-time roles. I reply within 24h.",
      copy: "Copy email",
      copied: "Copied!",
    },
    footer: {
      rights: "Designed and built by Gelder Gómez",
    },
  },
};

export type Translations = (typeof translations)["es"];
