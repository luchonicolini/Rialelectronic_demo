# Rial Electrónica — Rediseño Digital (Demo)

> **Propuesta conceptual independiente y no oficial.** Este proyecto es una demostración de rediseño preparada para presentarse al titular de Rial Electrónica. No representa a la empresa, no procesa ventas reales y no debe sugerir una asociación o autorización comercial que aún no exista.

## Objetivo

Diseñar y desarrollar una experiencia comercial de tecnología **editorial, precisa, confiable y diferenciada**, que se pueda mostrar en una URL navegable como propuesta comercial. La calidad debe ser evidente tanto en la dirección de arte como en arquitectura, rendimiento, accesibilidad y código.

**Referencia de negocio:** https://www.rialelectronica.com/  
**Repositorio:** https://github.com/luchonicolini/Rialelectronic_demo

## Principios no negociables

1. **No diseñar como una plantilla genérica de IA.** Evitar brillos azules sin propósito, gradientes decorativos, tarjetas idénticas, sombras repetitivas y secciones de relleno.
2. **Producto y contenido primero.** Fotografía de tecnología de calidad, jerarquía editorial, texto directo y espacio negativo intencional.
3. **Confianza demostrable, no promesas inventadas.** No afirmar seguridad, garantías, originalidad, stock, descuentos, envíos, tiempos, cuotas o cotizaciones no comprobados.
4. **Fidelidad diseño ↔ código.** Definir tokens, medidas, estados y breakpoints; revisar la implementación en navegador a tamaños reales.
5. **Dos temas completos.** Claro, oscuro y opción «Sistema»; no invertir colores mecánicamente.
6. **Demo funcional sin operaciones reales.** Cualquier precio, USDT o producto ficticio debe estar marcado como dato de ejemplo. Nada de cobros reales ni mensajes enviados a clientes sin autorización.

## Información de negocio observada

A partir de capturas públicas de la web de referencia:

- Navegación: **Catálogo, Cómo comprar, Envíos, Contacto**, búsqueda y carrito.
- El encabezado muestra un indicador de **USDT**.
- El proceso comunicado es **pedir cotización → pagar por transferencia/USDT → recibir con seguimiento**.
- Se mencionan **Vía Cargo, Andreani y Correo Argentino**.
- Hay una sección **Comunidad Rial** con capturas de mensajes de clientes.
- Las categorías visualizadas en la propuesta incluyen celulares/tablets, consolas/gaming, notebooks/Smart TVs y accesorios/audio.

**Importante:** estas observaciones son contexto de diseño, no verificaciones de política comercial vigente. Confirmar datos con el dueño antes de publicar una web real. No reutilizar conversaciones, fotografías personales, testimonios, marcas o imágenes de terceros sin permiso y revisión de privacidad.

## Dirección de arte — Editorial Commerce

- **Estética:** sobria, contemporánea, reconocible; fondos grafito o blanco cálido.
- **Composición:** grilla editorial, ritmo de tamaños, asimetría controlada, jerarquía tipográfica fuerte.
- **Fotografía:** un producto principal por composición, enfoque de estudio, fondos limpios; misma narrativa comercial entre ambos temas.
- **Color:** azul Rial únicamente para acciones, selección, foco y vínculos destacados.
- **Hero:** composición editorial **fija**, sin carrusel automático; texto y foto no deben competir.
- **Tono:** español argentino natural, profesional, claro, sin claims inflados.

### Design tokens v1 (propuesta)

| Token | Oscuro | Claro |
| --- | --- | --- |
| Background | `#0B0F14` | `#F7F8FA` |
| Surface | `#151B23` | `#FFFFFF` |
| Elevated | `#202833` | `#EDF1F5` |
| Border | `#34404E` | `#D8DFE7` |
| Text primary | `#F5F7FA` | `#131B26` |
| Text secondary | `#A7B2C0` | `#586575` |
| Accent blue | `#1684F8` | `#086CD9` |

Colores semánticos preliminares: éxito `#15966A`, advertencia `#D99618`, error `#D84A54`. Validar contraste por combinación y estado antes de aprobarlos.

- **Fuente preferida:** Geist Sans, con fallback sans-serif. Considerar pesos 400/500/600/700 y cifras tabulares para valores.
- **Escala escritorio:** display 64–72 px; H1 48 px; H2 32 px; cuerpo 16 px.
- **Móvil:** display 40–44 px; titulares 28–36 px; cuerpo legible desde 16 px.
- **Spacing:** base 4 px (4/8/12/16/24/32/48/64); radios controles 8 px, tarjetas 12 px.
- **Interacción:** feedback 160 ms aprox.; respetar `prefers-reduced-motion`.

### Responsive

| Ancho | Grilla | Margen |
| --- | --- | --- |
| 320–767 px | 4 columnas | 16–20 px |
| 768–1023 px | 8 columnas | 24–32 px |
| 1024–1439 px | 12 columnas | 40–56 px |
| 1440+ px | 12 columnas | contenedor de hasta 1440 px |

Header de referencia: 80 px desktop y 64 px móvil. El layout debe responder al contenido real; no imponer tamaños fijos que causen desbordamiento.

## Alcance funcional por fases

### Fase 0 — Base
- [ ] Inicializar proyecto Next.js + TypeScript estricto + Tailwind CSS.
- [ ] Configurar lint, formatter, pruebas y CI.
- [ ] Implementar tokens semánticos, Geist Sans, temas claro/oscuro/sistema y persistencia sin flash inicial.
- [ ] Crear componentes base accesibles y documentación de estados.

### Fase 1 — Header + Hero v2
- [ ] Cuatro vistas: desktop oscuro/claro y móvil oscuro/claro.
- [ ] Header responsive, menú móvil accesible, buscador con estado vacío, indicador USDT identificado como demo hasta conectar una fuente fiable y carrito de solicitudes.
- [ ] Hero editorial fijo, fotografía con licencia y CTA «Ver catálogo» / «Pedir cotización» según flujo de demo.
- [ ] Validar 320, 375, 768, 1024, 1440 y 1920 px; teclado y foco.

### Fase 2 — Home
- [ ] Categorías y acceso al catálogo.
- [ ] Explicación clara de compra en tres pasos.
- [ ] Envíos; información comercial sujeta a validación.
- [ ] Testimonios autorizados y protegidos; nunca copiar datos personales de capturas por defecto.
- [ ] Footer, contacto y estados de interacción.

### Fase 3 — Catálogo y cotización
- [ ] Datos estructurados tipados (modelo real o fixtures explícitos).
- [ ] Búsqueda, filtros, detalle de producto y carrito para solicitudes de cotización.
- [ ] Flujo de contacto simulado o autorizado; no pago en línea en la demo.
- [ ] Estados loading/empty/error/success y analítica respetuosa de privacidad si se incorpora.

### Fase 4 — Demo comercial
- [ ] Auditoría visual, accesibilidad, rendimiento y seguridad.
- [ ] Comparación «antes/después» sin confundir la demo con el sitio oficial.
- [ ] Despliegue, documentación técnica y presentación comercial.

## Stack propuesto

- Next.js (App Router), React y TypeScript con `strict: true`.
- Tailwind CSS con tokens CSS semánticos.
- `next-themes` o implementación equivalente sin flash.
- Componentes accesibles con HTML semántico y primitivas headless solo cuando sean necesarias.
- Validación del contenido externo, manejo seguro de variables de entorno e imágenes optimizadas.

**No fijar versiones sin inspeccionar el entorno y compatibilidades actuales.** Elegir dependencias mantenidas y documentar su propósito.

## Arquitectura sugerida (se implementa al inicializar)

```text
src/
  app/                    # routes, layouts y metadata
  components/
    ui/                   # primitivas reutilizables
    layout/               # header, navegación, footer
    commerce/             # tarjetas, búsqueda y cotización
  features/               # lógica por dominio
  lib/                    # utilidades y adaptadores
  data/                   # fixtures explícitos de demo
  styles/                 # tokens y estilos globales
  types/                  # contratos del dominio
public/                   # recursos propios o autorizados
docs/                     # decisiones y QA visual
```

No se requiere seguir esta estructura ciegamente: preservar convenciones coherentes y documentar cambios.

## Criterios de aceptación

- UI fiel a especificaciones y referencias aprobadas, sin inventar secciones ni copy comercial.
- Responsive sin desbordes; tap targets cómodos; navegación y foco utilizables.
- Contraste verificable según WCAG 2.2 AA; etiquetas, errores y estados anunciables.
- Sin errores de TypeScript ni lint; pruebas relevantes ejecutadas.
- Carga razonable, imágenes optimizadas, sin layout shift evitable; medir Core Web Vitals.
- Sin secretos en Git, datos personales expuestos, enlaces rotos o acciones falsas que aparenten transacciones.
- Cada entrega incluye qué cambió, cómo verificarlo y qué quedó pendiente.

## Guía para agentes de IA

**Antes de editar código, leer [AGENTS.md](./AGENTS.md) íntegramente.** Inspeccionar el repositorio y las instrucciones existentes; explicar plan corto, implementar cambios mínimos coherentes, ejecutar controles y reportar resultados reales. Nunca afirmar que se probó algo si no se ejecutó.


## Flujo de calidad visual con Impeccable

Se recomienda [Impeccable](https://impeccable.style/) como **herramienta complementaria** de crítica y refinamiento de UI para agentes compatibles. No sustituye el criterio editorial, el Design System ni la verificación en navegador.

Desde el directorio del proyecto, consultar las instrucciones vigentes del proveedor antes de instalar:

```bash
npx impeccable install
```

Según compatibilidad y versión, iniciar su configuración y activar las revisiones pertinentes siguiendo su documentación. Los comandos disponibles pueden variar; **no suponer que una skill o hook está instalado solo por estar mencionado aquí**.

**Ciclo recomendado por pantalla:** especificar → implementar → capturar en navegador → evaluar jerarquía, tipografía, espaciado y responsive → simplificar → pulir → volver a comprobar accesibilidad y funcionalidad. Documentar en [DESIGN.md](./DESIGN.md) las decisiones de arte y los criterios de aceptación.

## Herramienta pendiente de instalación: UI UX Pro Max

Al **iniciar el desarrollo del código**, instalar [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) en el entorno del agente que se vaya a utilizar. **No está instalada actualmente**; esta sección es una tarea de preparación, no una dependencia de ejecución de la web.

Según el README oficial, para Codex CLI:

```bash
npm install -g ui-ux-pro-max-cli
uipro init --ai codex
```

Para Antigravity y OpenCode, usar respectivamente `uipro init --ai antigravity` y `uipro init --ai opencode`, desde el directorio del proyecto. Revisar las instrucciones y versiones oficiales antes de ejecutar; evitar instalar en todos los agentes sin necesidad. Si se requiere instalación local/reproducible, evaluar el método apropiado y documentarlo.

**Responsabilidades:** UI UX Pro Max ayuda a investigar patrones UX de e-commerce, navegación y componentes **antes de implementar**; Impeccable ayuda a criticar y refinar las pantallas **después de implementar**. El [DESIGN.md](./DESIGN.md) y el [AGENTS.md](./AGENTS.md) prevalecen sobre recomendaciones de ambas skills. No regenerar la identidad de marca automáticamente.

- [ ] Instalar y verificar UI UX Pro Max en el entorno del agente seleccionado cuando comience la fase de código.
- [ ] Confirmar que el agente reconoce la skill y registrar la versión y el método utilizado.
- [ ] Instalar/configurar Impeccable por separado cuando corresponda.

## Estado actual

**Planificación y dirección de arte v1 definidas.** Este repositorio parte sin aplicación implementada; las pantallas producidas hasta ahora son conceptos visuales, no código ni especificación pixel-perfect definitiva. La próxima tarea es inicializar la base y desarrollar **Header + Hero v2** con aprobación visual.

---

**Aviso:** proyecto independiente de demostración, no afiliado oficialmente a Rial Electrónica.
