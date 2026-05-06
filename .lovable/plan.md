# Iteración 2 — Hero, proyectos freelance, trust bar, LinkedIn

## 1. Hero — nuevo titular bilingüe

Frase elegida: **"I design and code beautifully simple things, and I love what I do."**

- ES: *"Diseño y programo cosas **bellamente simples**, y amo lo que hago."*
- EN: *"I design and code **beautifully simple things**, and I love what I do."*

Implementación:
- Añadir `titleSuffix` en `src/i18n/translations.ts` (ambos idiomas).
- Actualizar `Hero.tsx` para renderizar: `title` + `titleAccent` (italic + color primary) + `titleSuffix`.
- Mantener tamaño grande serif y la animación staggered.

## 2. Trust bar — empresas top de Nicaragua

Nueva sección compacta justo **debajo del Hero, antes de About**, con encabezado discreto:

- ES: *"Experiencia en algunas de las empresas más importantes de Nicaragua"*
- EN: *"Experience at some of Nicaragua's leading companies"*

Carrete (marquee) infinito horizontal con autoplay y pausa al hover. Como aún no hay logos, uso **wordmarks tipográficos premium** (texto en serif/mono uppercase, tamaño grande, opacidad sutil) que se ven elegantes y enterprise. Cuando subas los PNG/SVG los reemplazo en una pasada.

Empresas en el carrete: **GBM**, **Compañía Licorera de Nicaragua**, **LAFISE**, **Contollo**, **Grupo Jaga**, **SmartLaw**, **Ogilvy**, **Target**.

Componente nuevo: `src/components/portfolio/TrustBar.tsx` — animación con CSS `@keyframes` (sin libs extra).

## 3. Destacar GBM, Licorera y LAFISE como top empresas del país

En `Experience.tsx`:
- Añadir un badge "Top Nicaragua" (chip dorado sutil con ícono `Award`) al lado del nombre de la empresa cuando aplica.
- Añadir una línea descriptiva bajo el rol cuando es una de esas tres: *"Una de las empresas más importantes de Nicaragua"* / *"One of Nicaragua's leading companies"*.
- Marcar las empresas con flag `topCompany: true` en `data.ts`.

En la lista lateral de tabs, añadir un punto dorado al lado del nombre para esas 3.

## 4. Proyectos destacados — solo freelance + URLs

Cambios en `data.ts` y `Projects.tsx`:

- Filtrar `projects` para mostrar **solo los freelance**: SmartLaw, Cargotrans, Wellpro, Ogilvy/Target.
- Eliminar los cards de GBM Suite, Licorera, Contollo de esta sección (siguen visibles en Experiencia).
- Añadir campo `url?: string` a cada proyecto:
  - Cargotrans → `https://www.cargotrans.com.ni`
  - Wellpro → `https://wellpro.es`
  - SmartLaw → `https://smartlawweb.com`
  - Ogilvy/Target → sin URL (sistema privado de RRHH); en su lugar mostrar badge *"Sistema privado · NDA"* / *"Private system · NDA"* y deshabilitar el ícono de link externo.
- Cards con URL: convertir el `<article>` en `<a target="_blank" rel="noopener noreferrer">` con cursor-pointer real, y el ícono `ArrowUpRight` se anima al hover.
- Cards sin URL: mantener como `<article>` con badge NDA en lugar del ícono.
- Re-balancear el bento a 4 cards (1 grande SmartLaw, 1 horizontal Cargotrans, 1 vertical Wellpro, 1 cuadrado Ogilvy).

## 5. LinkedIn — link real en todo el sitio

URL: `https://www.linkedin.com/in/gelder-jos%C3%A9-g%C3%B3mez-solorzano-790768222`

- En `Contact.tsx`: reemplazar `LINKEDIN = "#"` por la URL real.
- Añadir ícono LinkedIn en el `Header.tsx` (junto a los toggles de tema/idioma) como acceso rápido permanente.
- Añadir LinkedIn + email + WhatsApp + GitHub en el `Footer.tsx`.

## 6. Pequeños ajustes UX

- Subtítulo del hero: ajustar para que combine con el nuevo título largo (mantener stack pero con un párrafo descriptivo más cálido).
- Asegurar que el carrete (TrustBar) respete `prefers-reduced-motion` (pausa la animación).

---

Apruébalo y lo construyo todo en una sola pasada. Cuando subas los logos PNG/SVG luego, los reemplazo en el TrustBar sin tocar el resto.
