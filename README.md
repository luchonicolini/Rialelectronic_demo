# Rial Electrónica — Rediseño Digital (Demo Comercial)

> **Propuesta conceptual independiente y no oficial.** Este proyecto es una demostración interactiva de rediseño premium y editorial para **Rial Electrónica**. No representa oficialmente a la empresa, no procesa pagos en línea y está diseñada para presentarse como propuesta de valor comercial y técnica.

---

## 1. Visión y Dirección de Arte: Editorial Tech

A lo largo del proceso de diseño, la propuesta evolucionó desde un concepto genérico hacia una identidad **Editorial Tech** sólida, limpia y con personalidad propia:

1. **Estética y Paleta Semántica:**
   - **Canvas Principal (`--background`):** Blanco claro porcelana suave (`#f9f9fb`), proporcionando una base limpia y espaciosa a toda la web.
   - **Superficies (`--surface`):** Blanco puro (`#ffffff`) para tarjetas de producto, modales y barras elevadas.
   - **Precios en Verde Esmeralda (`#0D7A53` / `--success`):** Los valores monetarios (`US$ 1.040`) destacan con máxima jerarquía y contraste visual en verde comercial sobrio.
   - **Superficies Secundarias (`--elevated`):** Gris perla suave (`#eef0f3`) para badges, podios y estados hover.
   - **Bordes (`--border`):** Bordes milimétricos y sutiles (`#e5e7eb`).
   - **Acento y Contrastes (`--accent`):** Negro grafito / carbón profundo (`#171d25`), transmitiendo sobriedad y alta gama.
   - **Contraste Editorial Oscuro:** Bloques clave como la sección de **Testimonios / Comunidad Rial** (`bg-[#111318]`) utilizan intencionalmente un contenedor oscuro de alto impacto visual con tipografía blanca, rompiendo la monotonía sin perder coherencia.

2. **Tipografía Tripartita:**
   - **UI & Cuerpo:** `Plus Jakarta Sans` — sans-serif geométrica, moderna, optimizada para legibilidad en pantallas.
   - **Acento Editorial:** `Instrument Serif` (cursiva) — aporta el toque editorial exclusivo a titulares clave (e.g. *"Tecnología importada, atención directa"*).
   - **Datos Técnicos y Moneda:** `Geist Mono` — con cifras tabulares (`tnum`) para valores monetarios, cotizaciones USDT y especificaciones de hardware.

3. **Experiencia de Usuario y Movimiento:**
   - **Smooth Scrolling:** Integración fluida mediante `lenis`.
   - **Micro-interacciones:** Revelado suave con desenfoque (`BlurReveal`) y animaciones sutiles de entrada vía `motion`.
   - **Diseño 100% Responsive:** Optimizado con layouts a medida para 320px, 375px, 768px, 1024px, 1440px y pantallas ultra-wide.

---

## 2. Flujo de Negocio y Conversión: Cotización por WhatsApp

En línea con el modelo de venta real de equipos importados en Argentina:

- **Sin pasarela de cobro ni carrito transaccional:** No se realizan cobros con tarjeta ni órdenes ficticias.
- **Lista de Consulta (Quotation Bag):** El usuario puede agregar productos a su lista, ajustar cantidades y presionar **«Pedir cotización por WhatsApp»**. El sistema genera un mensaje preformateado y codificado que abre el canal de chat con el asesor comercial.
- **Consulta Directa por Producto:** Cada ficha individual y tarjeta del catálogo cuenta con botón directo para consultar precio y stock de ese modelo exacto.
- **Cotización USDT en Tiempo Real:** En el header se expone un indicador en vivo del dólar cripto / USDT alimentado por la API interna `/api/cotizacion` (sincronizada con DolarApi, con caché y modo fallback automático).
- **Número Comercial Configurado:** `+54 9 11 3156-8131` (centralizado en `@/lib/site.ts`).

---

## 3. Páginas y Secciones Implementadas

La aplicación se encuentra completamente desarrollada y navegable en **Next.js (App Router)**:

### 🏠 Inicio (`/`)
- **Site Header:** Navegación principal, buscador en tiempo real (`HeaderSearch`), cotización USDT en vivo (`UsdtBadge`), acceso a la lista de cotización con contador dinámico y menú móvil accesible.
- **Hero Showcase (`HeroShowcase`):** Presentación editorial interactiva de productos insignia (iPhone 17 Pro, MacBook Air M3, PlayStation 5) con selector visual, badges de garantía y accesos directos.
- **Brand Ticker (`BrandTicker`):** Marquesina continua con las principales marcas del catálogo (Apple, Samsung, Sony, JBL, DJI, Nintendo, Xiaomi, Garmin, etc.).
- **Categorías (`CategoriesGrid`):** Navegación visual hacia las 6 categorías clave.
- **Equipos Destacados (`FeaturedGrid`):** Tarjetas de producto (`ProductCard`) con precios en USD/USDT, badges promocionales y acciones directas.
- **Lista Mayorista (`WholesaleBanner`):** Sección B2B con tabla de precios por volumen para revendedores y descarga/consulta directa.
- **Cómo Comprar (`HowItWorks`):** Explicación transparente en 3 pasos: Cotización, Pago (Transferencia / USDT / Efectivo) y Envío con seguimiento.
- **Envíos y Logística (`ShippingSection`):** Cobertura nacional mediante Andreani, Correo Argentino y entregas coordinadas.
- **Comunidad Rial (`TestimonialsGrid`):** Cápsula en contenedor oscuro grafito (`#111318`) de alto contraste, con carrusel accesible de reseñas, estrellas y experiencias reales de compra en todo el país.
- **Preguntas Frecuentes (`FaqSection`):** Acordeón interactivo con dudas sobre origen, empaque sellado, garantías, cotizaciones y medios de pago.
- **Footer (`SiteFooter`):** Directorio de navegación, avisos legales, medios de pago aceptados y disclaimer de demostración.
- **Botón Flotante (`WhatsappFloat`):** Acceso permanente al chat comercial.

### 📱 Catálogo General (`/catalogo`)
- Filtros laterales por categoría y por marca.
- Buscador interactivo en vivo por nombre y especificación.
- Grilla dinámica de productos (`CatalogBrowser`) con visualización de stock y cotización.

### 🔍 Detalle de Producto (`/producto/[slug]`)
- Renderizado estático con `generateStaticParams` para alta velocidad y SEO.
- Metadatos dinámicos OpenGraph automáticos.
- Galería fotográfica interactiva.
- Especificaciones técnicas completas, badges de estado y políticas de garantía.
- Acciones: agregar a la lista de cotización o consultar inmediatamente por WhatsApp con mensaje prearmado.
- Carrusel de productos recomendados y relacionados.

### 📋 Lista de Cotización (`/lista`)
- Carrito de solicitudes gestionado por `CartContext` con persistencia en `localStorage`.
- Controles para sumar/restar unidades, eliminar artículos y vaciar la lista.
- Resumen estimado del total en dólares.
- Generador de mensaje integral para enviar toda la lista en un solo clic a WhatsApp.

### ℹ️ Páginas Informativas y Soporte
- **/como-comprar:** Guía paso a paso y preguntas frecuentes de compra.
- **/envios:** Detalle de plazos, costos y empresas de logística.
- **/contacto:** Canales oficiales de atención, horarios comerciales, mapa/modalidad de entrega y botón de chat directo.

### ⚡ API Routes
- **/api/cotizacion:** Endpoint GET con revalidación periódica que consulta la cotización de USDT (dólar cripto) y entrega respaldo en caso de desconexión.

---

## 4. Stack Tecnológico

| Capa | Tecnología |
| --- | --- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) con Turbopack |
| **Librería UI** | [React 19](https://react.dev/) |
| **Lenguaje** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode) |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) + CSS Variables semánticas |
| **Tipografía** | `next/font/google` (Plus Jakarta Sans, Instrument Serif, Geist Mono) |
| **Iconografía** | [Lucide React](https://lucide.dev/) + [@phosphor-icons/react](https://phosphoricons.com/) |
| **Animación & Scroll** | [motion](https://motion.dev/) + [lenis](https://lenis.darkroom.engineering/) |
| **Gestión de Estado** | React Context API con persistencia local |

---

## 5. Estructura del Proyecto

```text
src/
├── app/                      # Rutas Next.js App Router
│   ├── api/cotizacion/       # Endpoint de cotización USDT en vivo
│   ├── catalogo/             # Vista de catálogo filtrable
│   ├── como-comprar/         # Guía de compra
│   ├── contacto/             # Página de contacto
│   ├── envios/               # Información logística y transportes
│   ├── lista/                # Carrito / Lista de cotización
│   ├── producto/[slug]/      # Ficha dinámica de producto
│   ├── globals.css           # Configuración Tailwind v4 y clases base
│   ├── layout.tsx            # Root Layout (fuentes, providers, smooth scroll)
│   └── page.tsx              # Página Home principal
├── components/
│   ├── catalogo/             # Componentes del navegador de catálogo
│   ├── commerce/             # Tarjetas de producto, detalle y lista de cotización
│   ├── home/                 # Secciones del home (Hero, Ticker, Marcas, FAQ, etc.)
│   ├── layout/               # Header, Footer, Badge USDT, Buscador
│   ├── ui/                   # Primitivas reutilizables (BlurReveal, Botones, etc.)
│   └── smooth-scroll.tsx     # Proveedor de scroll cinético Lenis
├── context/
│   └── cart-context.tsx      # Estado global de la lista de cotización
├── data/
│   └── mock-catalog.ts       # Fixtures tipados: productos, categorías, testimonios y FAQs
├── lib/
│   ├── site.ts               # Configuración central (número WhatsApp, mensajes base)
│   └── navigation.ts         # Enlaces de navegación global
└── styles/
    └── tokens.css            # Design tokens semánticos (colores, bordes, radios)
```

---

## 6. Scripts y Comandos de Desarrollo

```bash
# Iniciar servidor de desarrollo en http://localhost:3000
npm run dev

# Ejecutar chequeo estricto de tipos TypeScript
npm run typecheck

# Ejecutar linter de código (ESLint)
npm run lint

# Construir versión para producción
npm run build

# Iniciar servidor de producción local
npm run start
```

---

## 7. Instrucciones para Agentes de IA

Para cualquier agente que trabaje en este repositorio:

1. **Respetar la dirección de arte aprobada:**
   - Seguir los tokens definidos en `src/styles/tokens.css` y `src/app/globals.css`.
   - No añadir gradientes de neón, tarjetas con bordes luminosos ni efectos SaaS genéricos que degraden el estilo editorial.
2. **Mantener el flujo de cotización por WhatsApp:**
   - No implementar checkout tradicional con pasarelas de pago (Mercado Pago, Stripe, etc.). El objetivo del sitio es agrupar productos y derivar la cotización a WhatsApp mediante `whatsappUrl()`.
3. **Calidad y tipado TypeScript:**
   - No usar `any` evitable; reutilizar las interfaces de `@/data/mock-catalog` (`Product`, `Category`, etc.).
   - Ejecutar `npm run typecheck` antes de dar por finalizada cualquier tarea.
4. **Verificación visual y responsive:**
   - Probar que no exista scroll horizontal no deseado (`overflow-x: clip`).
   - Validar navegación en anchos móviles (375px) y escritorio (1440px).

---

## 8. Estado del Proyecto

- **Fase actual:** Demo comercial completa y operativa (v1.0.0).
- **Servidor local:** Corriendo en `http://localhost:3000`.
- **Aviso legal:** Proyecto conceptual de demostración. Marcas y nombres comerciales pertenecen a sus respectivos titulares.
