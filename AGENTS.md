# AGENTS.md — Contrato de trabajo para agentes de IA

Este archivo se aplica a todo el repositorio. Leer primero `README.md` y respetar sus objetivos, roadmap y Design System v1.

## Misión
Construir una **demo comercial de alta calidad**, no una plantilla autogenerada. Priorizar claridad, precisión editorial, confianza, accesibilidad, rendimiento y mantenimiento. Es una propuesta **no oficial**, sin asociación comercial confirmada.

## Antes de cualquier tarea
1. Inspeccionar archivos, scripts, dependencias y cambios locales existentes.
2. Resumir el objetivo y las restricciones; identificar la fase del roadmap.
3. Proponer un plan breve para cambios no triviales. No rehacer decisiones aprobadas sin explicar por qué.
4. No afirmar que hay diseño Figma, assets licenciados, API, precios ni funcionalidades cuando no existen.

## Normas de diseño
- Seguir tokens del README; nunca dispersar hexadecimales en componentes.
- Dos temas completos, más modo Sistema. Contraste y fotografía deben funcionar en ambos.
- No añadir glow, glassmorphism, gradients decorativos, sombras SaaS, iconos encerrados en cuadrados, carruseles automáticos ni grillas de tarjetas repetidas por inercia.
- Usar composición editorial con intencionalidad, no complejidad ornamental.
- Mantener consistencia de contenido entre desktop/mobile y claro/oscuro.
- Antes de implementar una pantalla, describir composición, medidas, densidad, tipografía, estados y comportamiento responsive.
- Si existe una referencia visual aprobada, comparar renders reales a 375 y 1440 px; corregir divergencias importantes.

## Normas de ingeniería
- TypeScript estricto, sin `any` evitable; componentes pequeños, claros y nombrados por responsabilidad.
- Separar presentación, datos y lógica de negocio. Evitar sobrearquitectura y dependencias innecesarias.
- Preferir Server Components cuando corresponda; `use client` solo para interacción real.
- HTML semántico; accesibilidad de teclado, foco, labels, mensajes de error y reduced motion.
- Nunca desactivar lint/types/tests para hacer pasar una entrega.
- No almacenar secretos ni exponer tokens sensibles en cliente.
- Sanitizar/validar datos externos; seguir buenas prácticas de dependencias y enlaces.
- No instalar paquetes ni cambiar configuración global si no aporta valor claro.
- Respetar compatibilidad de las versiones realmente instaladas; no inventar APIs.

## Modelo comercial y datos
- El sitio es una demo; no procesar pagos, crear órdenes reales, contactar clientes ni ejecutar cobros.
- El carrito agrupa **solicitudes de cotización**, no promete stock.
- Cotización USDT siempre muestra fuente/fecha si es real; en caso contrario se marca explícitamente «Valor de ejemplo».
- No publicar precios, rebajas, descuentos, plazos o garantías ficticios como reales.
- No copiar testimonios, teléfonos, imágenes de WhatsApp o datos personales de terceros sin permiso explícito.
- No usar el logo oficial ni fotografías de marca sin comprobar derechos/autorización para el uso propuesto; para la demo pública usar recursos permitidos y aviso de no afiliación.
- No añadir claims como «más barato», «100 % seguro» o «original garantizado» sin confirmación.

## QA obligatorio por cambio
- Ejecutar scripts disponibles de lint, typecheck, tests y build pertinentes; si faltan, reportar y proponer incorporarlos.
- Probar estados normal, hover, focus, disabled, loading, empty y error según corresponda.
- Revisar 320, 375, 768, 1024, 1440 y 1920 px al tocar layout.
- Probar tema claro/oscuro/sistema y persistencia; evitar hydration mismatch y flash de tema.
- Navegar con teclado y comprobar ausencia de scroll horizontal inesperado.
- Optimizar imágenes y prevenir saltos de layout.
- No declarar «listo» sin indicar qué fue comprobado realmente.

## Flujo Git
- Trabajar con cambios pequeños y descriptivos.
- No sobrescribir trabajo de otras personas ni hacer force push sobre ramas compartidas.
- Para cambios sustanciales, preferir rama + pull request y un resumen de criterios de aceptación.
- No reescribir documentación aprobada solo para acomodar una implementación.
- Documentar decisiones y deuda técnica, sin comentarios redundantes.

## Formato de entrega del agente
1. **Resumen:** qué se implementó y por qué.
2. **Archivos:** rutas creadas/modificadas.
3. **Validación:** comandos y comprobaciones ejecutados, con resultados.
4. **Visual QA:** breakpoints y temas realmente inspeccionados.
5. **Pendientes:** riesgos, datos demo, assets sin licencia, decisiones abiertas.
6. **Siguiente paso:** una acción concreta alineada al roadmap.

## Primera tarea esperada
Inicializar Next.js + TS estricto + Tailwind, tokens semánticos y tema claro/oscuro/sistema. Después construir Header + Hero v2, **sin inventar contenido ni alterar la dirección de arte aprobada**.
