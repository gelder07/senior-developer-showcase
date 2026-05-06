# Portafolio Personal — Gelder Gómez

Portafolio premium para Full Stack & Mobile Developer con +6 años de experiencia. Inspirado en **mattfarley.ca** (limpio, tipográfico, mucho whitespace, personalidad sin ruido) combinado con **bento grid asimétrico** para proyectos. Bilingüe ES/EN con switch, dual theme dark/light (default dark), responsive y rápido.

---

## Dirección visual

- **Tipografía protagonista**: serif elegante para titulares (Instrument Serif o Fraunces) + sans moderna para body (Inter / Geist). Mono sutil (JetBrains Mono) para acentos técnicos.
- **Paleta dark (default)**: fondo casi-negro `#0A0A0A`, superficies `#111`, texto `#EDEDED`, acento cálido tipo amber/orange `#F5A623` (estilo Matt Farley).
- **Paleta light**: fondo crema `#FAFAF7`, texto `#111`, acento mismo amber.
- **Animaciones suaves**: fade + slide al entrar en viewport (Framer Motion), hover con scale sutil, transición de tema con view-transitions.
- **Cursor personalizado** opcional (punto que crece sobre links).
- **Grain/noise overlay** muy sutil para textura premium.

---

## Estructura del sitio (single page con anchors + nav sticky)

### 1. Header sticky
- Logo monograma "GG"
- Nav: Sobre mí · Experiencia · Proyectos · Stack · Contacto
- Switch tema (sol/luna) + Switch idioma (ES/EN)
- Glassmorphism sutil al scrollear

### 2. Hero — Tipográfico minimalista
- Saludo: "Hola, soy Gelder."
- Titular grande serif: "Construyo productos web y móviles que **escalan**."
- Subtítulo: "Full Stack & Mobile Developer · +6 años · React, React Native, Node, .NET, AWS"
- Ubicación: "Managua, Nicaragua — disponible para proyectos remotos"
- CTAs: "Ver proyectos" (primary amber) · "Contactar" (ghost)
- Indicador de scroll abajo

### 3. Sobre mí
- Párrafo corto y potente extraído del resumen del CV (impacto comprobado +60% eficiencia, migraciones legacy → moderno, liderazgo técnico)
- Mini-stats en línea: `+6 años` · `8+ empresas` · `Fintech · Logística · Legal · Marketing` · `Apps móviles & SaaS`

### 4. Experiencia — Timeline con tabs verticales
Layout split: tabs de empresa a la izquierda, detalle a la derecha (estilo Brittany Chiang adaptado).

Agrupado en 3 bloques con separador visual:

**Empresas (Nicaragua/Internacional)**
- Contollo — Frontend/Mobile Lead (React Native, AWS Serverless)
- GBM Nicaragua — Full Stack (Migración Angular→React, offline-first)
- Compañía Licorera de Nicaragua — Full Stack (+40% eficiencia)
- LAFISE — Full Stack (sistema agroindustrial)

**Freelance / Clientes**
- Grupo Jaga Cargotrans — Plataforma logística
- Grupo Jaga Wellpro — Plataforma equipos médicos
- SmartLaw — SaaS legal completo desde cero
- Ogilvy / Target — Sistema RRHH

Cada item: rol, periodo, bullets de impacto, stack como chips.

### 5. Proyectos destacados — Bento grid asimétrico
Grid de 6-8 cards con tamaños distintos (1x1, 2x1, 1x2, 2x2):

- **Card grande (2x2)**: SmartLaw — SaaS legal con pagos y gestión documental
- **Card horizontal (2x1)**: Contollo — App React Native de digitalización 3D
- **Card vertical (1x2)**: Grupo Jaga Cargotrans — Plataforma logística
- **Cards 1x1**: Wellpro · LAFISE · Ogilvy RRHH · Licorera Nicaragua

Cada card: título, una línea de descripción, stack chips, hover con leve elevación + acento amber, link a caso o repo si existe.

### 6. Stack tecnológico
Bento más pequeño con categorías:
- Frontend · Backend · Mobile · Cloud & DevOps · Databases · Otros
- Iconos SVG monocromáticos (estilo simple-icons), grid limpio, sin ruido.

### 7. Logros clave
4 cards horizontales con números grandes:
- `+60%` eficiencia operativa
- `8+` migraciones/productos liderados
- `4+` apps en producción
- `+6` años de experiencia

### 8. Contacto — CTA fuerte
- Titular grande: "¿Tienes un proyecto en mente?"
- Subtítulo: disponibilidad freelance / full-time remoto
- Botones grandes:
  - **Email** → `mailto:geldergomez04@gmail.com`
  - **WhatsApp** → `https://wa.me/50581867161`
  - **LinkedIn** (placeholder, lo añades después)
  - **GitHub** (placeholder)
- Email visible en texto grande con copy-to-clipboard

### 9. Footer
- Monograma GG · "Diseñado y desarrollado por Gelder Gómez · 2026"
- Links sociales repetidos
- Toggle tema/idioma duplicado

---

## Internacionalización (ES/EN)

- Sistema simple con objeto de traducciones (`src/i18n/es.ts`, `en.ts`) + hook `useT()`.
- Persistencia en `localStorage`.
- Default: español (mercado local + freelance LATAM); switch instantáneo a inglés para reclutadores internacionales.
- Todos los textos del CV traducidos a ambos idiomas.

---

## Tema dark/light

- Toggle con persistencia en `localStorage` + respeto a `prefers-color-scheme`.
- Transición suave entre temas (no flash).
- Tokens CSS en `src/styles.css` ya existente, ajustados a la paleta nueva.

---

## Detalles técnicos (para referencia)

- **Stack**: TanStack Start (ya configurado) + Tailwind v4 + Framer Motion + Lucide icons.
- **Rutas**: single page en `src/routes/index.tsx` con secciones; anchor scroll suave. Cumple SSR porque todo el contenido vive en una ruta real.
- **SEO**: `head()` en index con title bilingüe, description, og:image (generamos uno tipográfico), twitter card.
- **Performance**: lazy load de imágenes de proyectos, fuentes con `font-display: swap`, sin librerías pesadas.
- **Accesibilidad**: contraste AA, focus visible, navegación por teclado, `prefers-reduced-motion` respetado.
- **Componentes nuevos**: `Header`, `Hero`, `About`, `ExperienceTabs`, `BentoProjects`, `StackGrid`, `Stats`, `Contact`, `Footer`, `ThemeToggle`, `LangToggle`.

---

## Lo que necesitaré después (no bloqueante)

- URLs reales de GitHub y LinkedIn (ahora dejo placeholders `#`)
- Screenshots/mockups de los proyectos si quieres mostrarlos en las cards (si no, uso patterns/gradients elegantes)
- Confirmar si quieres mostrar el botón de descarga de CV (PDF)

Apruébame el plan y lo construyo completo en una sola pasada.
