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
      title: "Construyo productos web y móviles que",
      titleAccent: "escalan",
      subtitle:
        "Full Stack & Mobile Developer · +6 años · React, React Native, Node, .NET, AWS",
      location: "Managua, Nicaragua — disponible para proyectos remotos",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
      scroll: "Desliza",
    },
    about: {
      label: "Sobre mí",
      title: "Senior Developer enfocado en impacto real.",
      body: "Desarrollador Full Stack y Mobile con más de 6 años construyendo aplicaciones de alto impacto en fintech, logística, legal y marketing. Especialista en React y arquitecturas modernas, con historial comprobado en mejorar rendimiento y eficiencia operativa hasta en un 60%. Lidero migraciones tecnológicas, desarrollo productos desde cero y despliego en la nube.",
      stats: [
        { value: "+6", label: "Años de experiencia" },
        { value: "8+", label: "Empresas y clientes" },
        { value: "+60%", label: "Mejora de eficiencia" },
        { value: "4+", label: "Apps en producción" },
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
      title: "I build web and mobile products that",
      titleAccent: "scale",
      subtitle:
        "Full Stack & Mobile Developer · 6+ years · React, React Native, Node, .NET, AWS",
      location: "Managua, Nicaragua — available for remote work worldwide",
      ctaProjects: "View work",
      ctaContact: "Get in touch",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      title: "Senior developer focused on real impact.",
      body: "Full Stack and Mobile developer with 6+ years building high-impact apps across fintech, logistics, legal and marketing. React specialist with a proven record of improving performance and operational efficiency by up to 60%. I lead tech migrations, ship products from zero to production, and deploy to the cloud.",
      stats: [
        { value: "6+", label: "Years of experience" },
        { value: "8+", label: "Companies & clients" },
        { value: "+60%", label: "Efficiency gains" },
        { value: "4+", label: "Apps in production" },
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
