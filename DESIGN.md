# DESIGN.md — Rial Electrónica / Dirección de arte v1

> Documento normativo para agentes que diseñan o implementan interfaces. Es una **propuesta conceptual no oficial**, no un manual de marca aprobado por Rial.

## Tesis de diseño
**Editorial Commerce:** tecnología como protagonista; jerarquía tipográfica fuerte, fotografía cuidada, precisión, ritmo y espacios vacíos. La experiencia debe sentirse como una tienda real de tecnología y no como una landing SaaS generada automáticamente.

## Evitar
- Gradientes ornamentales, neón/glow, glassmorphism, sombras repetidas, «iconos en cuadraditos».
- Secciones relleno, claims exagerados, tarjetas idénticas, testimonios ficticios.
- Carrusel automático en el hero, cambios de producto arbitrarios entre temas, animaciones que interfieren con comprar.
- Texto blanco sobre fotografías sin contraste probado y diseños desktop simplemente encogidos en móvil.

## Paleta semántica

| Rol | Dark | Light |
| --- | --- | --- |
| background | `#0B0F14` | `#F7F8FA` |
| surface | `#151B23` | `#FFFFFF` |
| elevated | `#202833` | `#EDF1F5` |
| border | `#34404E` | `#D8DFE7` |
| text-primary | `#F5F7FA` | `#131B26` |
| text-secondary | `#A7B2C0` | `#586575` |
| accent | `#1684F8` | `#086CD9` |

Valores propuestos, sujetos a verificación WCAG 2.2 AA. El azul es funcional, no decorativo. Éxito `#15966A`, advertencia `#D99618`, error `#D84A54` son puntos de partida, no combinaciones ya aprobadas. Temas: Claro / Oscuro / Sistema, con persistencia y sin parpadeo inicial.

## Tipografía
- Preferencia: **Geist Sans**, fallback sans-serif; 400/500/600/700.
- Desktop: display 64–72 px / 1.04, H1 48 px / 1.12, H2 32 px / 1.2, body 16 px / 1.55.
- Móvil: display 40–44 px, títulos 28–36 px, body 16 px.
- Datos numéricos y valores monetarios con cifras tabulares. No usar texto diminuto para datos importantes.

## Espaciado y geometría
- Base 4 px; escala 4/8/12/16/24/32/48/64.
- Radio controles 8 px; superficies/card 12 px. Evitar esquinas excesivamente redondeadas.
- 320–767 px: 4 columnas, margen 16–20 px.
- 768–1023 px: 8 columnas, margen 24–32 px.
- 1024–1439 px: 12 columnas, margen 40–56 px.
- 1440+ px: 12 columnas, contenedor máximo 1440 px.
- Header orientativo: 80 px desktop, 64 px móvil. Ajustar según contenido, no forzar desbordes.

## Componentes prioritarios
1. **Header:** logo/marca con uso permitido, navegación Catálogo/Cómo comprar/Envíos/Contacto, búsqueda, indicador USDT (dato demo claramente identificado), carrito de solicitudes, selector de tema; menú móvil accesible.
2. **Hero fijo:** titular editorial directo, descripción breve, CTA principal «Pedir cotización», secundario «Ver catálogo», una fotografía protagonista con derechos de uso claros.
3. **Producto:** imagen optimizada 1:1, categoría, nombre, disponibilidad/precio solo si verificados, CTA de solicitud de cotización.
4. **Búsqueda y catálogo:** empty/loading/error, filtros claros, teclado, foco, resultados coherentes.
5. **Solicitud de cotización:** sin fingir pagos ni compras confirmadas.

## Estados y comportamiento
- Botones: default, hover, focus-visible, active, disabled, loading; transición ~160 ms, respetando reduced motion.
- Formularios: labels visibles, ayuda y errores claros; sin depender solo del color.
- Navegación: foco perceptible, targets táctiles cómodos, menús operables por teclado.
- Tema claro/oscuro: misma estructura y contenido, tratamientos fotográficos compatibles, sin cambios arbitrarios de producto.

## Protocolo de revisión visual
1. **Intención:** definir qué debe percibir el visitante y qué acción debe poder completar.
2. **Composición:** comprobar ritmo, alineación, contraste, fotografía, jerarquía y espacio negativo.
3. **Antigenericidad:** detectar tarjetas repetidas, gradientes innecesarios, claims vacíos y secciones de plantilla; eliminar lo superfluo.
4. **Responsive:** inspeccionar 320/375/768/1024/1440/1920 px; adaptar composición, no solo escalar.
5. **Estados:** probar ambos temas, Sistema, hover, focus, loading, empty, error.
6. **Validación:** revisar WCAG 2.2 AA, Core Web Vitals y flujo funcional real; registrar lo ejecutado.

### Impeccable
[Impeccable](https://impeccable.style/) puede asistir en crítica, auditoría, tipografía, layout, adaptación y pulido. Consultar los comandos instalados en la versión efectiva. No permitir que sus sugerencias contradigan esta dirección de arte sin revisión explícita. No afirmar que una auditoría se realizó sin ejecutarla.

## Pendientes de aprobación
- Fotografía y licencia del producto del hero; uso de logotipo oficial.
- Titular comercial definitivo y cualquier claim sobre originalidad, seguridad o precios.
- Fuente de cotización USDT y frecuencia de actualización.
- Datos reales de catálogo, stock, envíos, garantías y testimonios.
- Capturas comparativas reales para aprobación visual antes de codificar el resto del sitio.
