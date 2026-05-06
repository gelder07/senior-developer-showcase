## Plan de cambios

### 1. Animaciones en toda la web
Agregar entradas suaves consistentes en las secciones que aún no las tienen y mejorar microinteracciones:
- **About / Stack / TrustBar / Contact / Footer**: envolver bloques principales en `motion.div` con `initial/whileInView` (fade-in + slide-up, `once: true`).
- **SectionHeading**: animación de entrada del label + título con stagger.
- **Header**: leve fade-down al cargar; subrayado animado en links de navegación (clase `story-link`).
- **Hero**: agregar un sutil `motion` parallax/float al badge decorativo.
- **Cards de Experience tabs**: hover con desplazamiento horizontal suave.
- **Cards de Projects**: ya tienen entrada; añadir hover lift (`translateY(-4px)`) y mejor transición del overlay.
- Usar exclusivamente `framer-motion` (ya instalado) y duraciones cortas (0.4–0.6s) para sentirse fluido y no recargado.

### 2. Botón "Ver proyectos" del Hero → sección Trayectoria
- En `src/components/portfolio/Hero.tsx`: cambiar `href="#projects"` del CTA principal a `href="#experience"`.
- (El texto del botón se mantiene; los proyectos siguen accesibles vía scroll y nav.)

### 3. Nuevo proyecto freelance: Fachadas Modernas (sin imagen)
En `src/i18n/data.ts`, agregar al array `experiences` dentro de `group: "freelance"`:
- **company**: `Fachadas Modernas`
- **role**: ES `Full Stack — Freelance` / EN igual
- **period**: definir como `2023` (placeholder, ajustable)
- **description ES**: el párrafo provisto íntegro sobre el sistema de inventario, facturación y gestión comercial.
- **description EN**: traducción equivalente.
- **stack**: `["React", "Laravel", "MySQL", "Dashboards"]` (ajustable por el usuario después).
- **Sin** `cover` ni `logo` (como pidió).

### 4. Logo de LAFISE
- Copiar `user-uploads://lafise.png` → `src/assets/logo-lafise.png`.
- En `src/i18n/data.ts`: importar el logo y asignarlo al campo `logo` del item `LAFISE`.
- En `src/components/portfolio/Experience.tsx`: si `exp.logo` existe, reemplazar el badge circular con la inicial por un contenedor que muestre el logo (`<img>` con `object-contain`, fondo neutro, mismo tamaño `size-10`, bordes redondeados). Fallback al badge inicial si no hay logo.

### Detalles técnicos
- Archivos modificados:
  - `src/components/portfolio/Hero.tsx` (href + posible animación extra)
  - `src/components/portfolio/About.tsx`, `Stack.tsx`, `Contact.tsx`, `TrustBar.tsx`, `Footer.tsx`, `Header.tsx`, `SectionHeading.tsx`, `Experience.tsx`, `Projects.tsx` (animaciones)
  - `src/i18n/data.ts` (Fachadas Modernas + logo LAFISE)
- Archivos creados:
  - `src/assets/logo-lafise.png`
- Sin cambios en rutas, traducciones de UI ni dependencias.
