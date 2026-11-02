# USER_FLOWS.md — Rial Electrónica (demo)

## Objetivo y alcance
Esta demo independiente busca que los visitantes **inicien una conversación comercial con Rial por WhatsApp**, no que paguen en la web. No hay checkout, cobro, reserva de stock ni confirmación de compra. El usuario debe revisar el mensaje y enviarlo por decisión propia desde WhatsApp.

## Canal de contacto
- Número suministrado por el solicitante: **11 3156-8131** (Argentina, Buenos Aires).
- Para enlaces wa.me, formato internacional de celular argentino **5491131568131** (sin +, espacios ni guiones).
- URL base: **https://wa.me/5491131568131**.
- Enlace de mensaje: `https://wa.me/5491131568131?text=${encodeURIComponent(mensaje)}`.
- **Pendiente antes de publicar o usar con clientes reales:** confirmar con Rial que este número pertenece al canal comercial autorizado y que acepta consultas. No presentarlo como verificado por la empresa.
- Centralizar el número en una constante de configuración; no repetirlo en componentes. El texto se codifica con `encodeURIComponent`. Nunca incluir datos sensibles ni enviar mensajes automáticamente.

## Conversión principal
**Visita → búsqueda/exploración → detalle de producto → «Consultar por WhatsApp» → WhatsApp con mensaje precargado → el cliente decide enviarlo.**

### Camino A — Consulta directa (prioritario)
1. Usuario llega a Inicio, categoría, resultados de búsqueda o directamente a producto desde un enlace externo.
2. Encuentra el producto y revisa fotos, especificaciones y la información comercial verificada.
3. Selecciona «Consultar por WhatsApp».
4. Se abre WhatsApp con un mensaje precargado que identifica el producto, la variante si aplica y el enlace público de producto, si existe.
5. El cliente revisa, edita y envía el mensaje. Si no tiene WhatsApp, se ofrece la posibilidad de copiar la consulta y ver los datos de contacto.

### Camino B — Lista de consulta (varios productos)
1. Usuario añade uno o varios productos a una **lista de consulta**, no un carrito de compra.
2. Puede revisar, modificar cantidades y quitar artículos. Mantener estado coherente y accesible.
3. Selecciona «Consultar lista por WhatsApp».
4. Se prepara un único mensaje con productos y cantidades, sin afirmar precio, stock ni total no verificado.
5. El cliente confirma el envío dentro de WhatsApp.

### Camino C — Consulta general
1. Desde el header, hero, página de contacto o secciones informativas, el usuario selecciona «Hablar por WhatsApp».
2. Se abre un mensaje genérico de consulta, sin obligarlo a navegar por el catálogo.

## Arquitectura de información propuesta
- **Inicio:** hero editorial, categorías, productos destacados si existen datos confiables, cómo comprar, contacto.
- **Catálogo:** categorías, búsqueda, filtros pertinentes, estados de carga/sin resultados/error.
- **Detalle de producto:** imágenes, especificaciones verificadas, variantes si corresponden, CTA principal a WhatsApp y opción de agregar a lista.
- **Lista de consulta:** productos, cantidades, eliminar, CTA a WhatsApp, estado vacío.
- **Cómo comprar:** explicar proceso real confirmado por el negocio, sin inventar condiciones.
- **Envíos:** solo información verificable; de lo contrario, invitar a consultar.
- **Contacto:** WhatsApp como acción principal y otros canales solo si son reales y autorizados.

## Mensajes sugeridos
**Producto individual:**
> Hola, quisiera consultar precio y disponibilidad de [nombre del producto] [variante, si corresponde]. Gracias.

**Lista de consulta:**
> Hola, quisiera consultar precio y disponibilidad de estos productos:\n- [producto A] — [cantidad] unidad(es)\n- [producto B] — [cantidad] unidad(es)\n¡Gracias!

**General:**
> Hola, estuve viendo el catálogo de Rial Electrónica y quisiera hacer una consulta. Gracias.

Los nombres, variantes y cantidades se obtienen de los datos reales mostrados al usuario; sanitizar/controlar longitud del mensaje. Si un producto no está disponible para consulta, mostrar un estado honesto y un camino de contacto general.

## Reglas de UX
- WhatsApp es el **CTA comercial principal**. «Ver catálogo» es CTA secundario cuando corresponda.
- Evitar múltiples botones flotantes invasivos; mantener un acceso visible y contextual en desktop y móvil.
- No simular «Compra realizada», «Pedido confirmado», pagos, promociones, disponibilidad ni cotizaciones.
- El carrito existente en la referencia se conceptualiza como **lista de consulta**; conservar iconografía familiar si es útil, pero con nombre claro.
- Si falla la apertura de WhatsApp, mostrar enlace directo y opción de copiar texto; no afirmar que se envió.
- Abrir enlaces externos de forma segura, con nombre accesible, foco visible y tamaño táctil adecuado.
- Considerar búsquedas sin resultados, lista vacía, productos sin datos suficientes, variantes no elegidas, error de carga y móvil con/sin aplicación WhatsApp.
- No usar testimonios, datos de envío, garantías, pagos o promesas sin confirmación de Rial.

## Métricas de demo
- Clic en CTA de WhatsApp desde home, catálogo, producto, lista y contacto (eventos distintos, sin datos personales).
- Adiciones a lista y consultas iniciadas. **Un clic no equivale a un mensaje enviado ni a una venta**.
- Evitar almacenar el contenido de mensajes en analítica.

## Criterios de aceptación antes de implementar
- Prototipo del camino A, B y C en desktop y móvil.
- Número configurable y enlace wa.me correctamente codificado.
- CTA de consulta directa funciona sin pasar por la lista.
- Lista permite agregar, editar y quitar productos sin errores.
- Textos y datos comerciales no inventados; accesibilidad y estados vacíos/error definidos.
- Aprobación del número de contacto y de cualquier afirmación comercial por parte de Rial antes de publicar.

## Orden de autoridad
Este flujo define el comportamiento de conversión. `DESIGN.md` define la identidad visual, `AGENTS.md` las normas de implementación, y las skills UI UX Pro Max e Impeccable aportan recomendaciones subordinadas a estos documentos.
