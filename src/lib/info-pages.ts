import type { Metadata } from "next";

export type InfoPageKey = "envios" | "cambios" | "privacidad" | "terminos" | "ayuda";

export interface InfoPageData {
  title: string;
  titleEmphasis: string;
  badge: string;
  intro: string;
  lastUpdated?: string;
  sections: {
    title: string;
    text: string;
    highlights?: string[];
  }[];
}

export const infoPages: Record<InfoPageKey, InfoPageData> = {
  envios: {
    title: "Envíos y",
    titleEmphasis: "retiros coordinados.",
    badge: "Logística y cobertura nacional",
    intro:
      "Despachamos tecnología a todo el país con seguro de carga y código de seguimiento, o coordinamos retiros personales con cita previa en Buenos Aires.",
    lastUpdated: "Actualizado en noviembre de 2026",
    sections: [
      {
        title: "Envíos asegurados a todo el país",
        text: "Operamos con Vía Cargo, Andreani y Correo Argentino para despachar a cualquier punto de la República Argentina. Cada bulto viaja protegido con seguro total contra pérdidas o siniestros y embalaje especial de máxima resistencia.",
        highlights: [
          "Código de seguimiento online en tiempo real desde la admisión del paquete.",
          "Seguro de transporte integral incluido sobre el valor total del producto.",
          "Fotos y video del empaque y número de serie antes de despachar.",
        ],
      },
      {
        title: "Tiempos estimados de entrega",
        text: "Los plazos comienzan a contar una vez acreditado el pago y despachada la unidad:",
        highlights: [
          "CABA y Gran Buenos Aires: 24 a 48 horas hábiles mediante mensajería coordinada.",
          "Ciudades principales (Córdoba, Rosario, Mendoza, etc.): 48 a 72 horas hábiles.",
          "Resto del país: 3 a 5 días hábiles según la distancia y la sucursal de destino.",
        ],
      },
      {
        title: "Retiro personal en punto pactado",
        text: "Si estás en Buenos Aires, podés coordinar el retiro en persona con cita previa. Te recibimos en un punto seguro para que verifiques el estado del empaque, precintos de fábrica y accesorios antes de abonar o retirar.",
      },
      {
        title: "Medios de pago para envíos al interior",
        text: "Para los despachos al interior del país, recibimos transferencia bancaria directa en pesos (con cotización acordada al momento del cierre) y transferencias en USDT (redes TRC20 y BEP20 sin comisión adicional de nuestra parte). Los datos de la cuenta o billetera se transmiten por el canal oficial de WhatsApp una vez verificado el stock físico.",
      },
      {
        title: "Protocolo de embalaje y seguridad",
        text: "Todo equipo viaja envuelto en plástico burbuja de alta densidad, protegido dentro de una caja rígida sellada con cinta de seguridad inviolable. En caso de notar la cinta violentada al recibir el correo, solicitamos no firmar la conformidad y contactarnos de inmediato por WhatsApp.",
      },
    ],
  },

  cambios: {
    title: "Garantía y",
    titleEmphasis: "cambio directo.",
    badge: "Políticas y respaldo post-venta",
    intro:
      "Garantía escrita, respaldo contra defectos de fabricación y asistencia directa por WhatsApp en cada compra de Rial Electrónica.",
    lastUpdated: "Actualizado en noviembre de 2026",
    sections: [
      {
        title: "Condición transparente de los productos",
        text: "En Rial Electrónica la claridad sobre el estado de cada artículo es fundamental. Nuestro catálogo cuenta con dos modalidades claramente señaladas:",
        highlights: [
          "Nuevos y sellados: Equipos en caja sellada de fábrica con precintos originales de la marca y garantía oficial.",
          "Swap americano verificado: Unidades seleccionadas libres de fábrica, sin detalles estéticos, condición de batería al 100% y componentes 100% originales verificados en banco de pruebas.",
        ],
      },
      {
        title: "Cambio directo inmediato (7 días)",
        text: "Si tu equipo presenta cualquier falla técnica o desperfecto de fabricación dentro de los primeros 7 días corridos de recibido, te lo cambiamos de manera inmediata por una unidad idéntica nueva, sin trámites engorrosos ni derivaciones a servicios técnicos externos.",
      },
      {
        title: "Plazos de cobertura y garantía",
        text: "Todos los productos comercializados cuentan con garantía escrita de respaldo:",
        highlights: [
          "Equipos Apple y marcas con garantía global: 1 año de garantía oficial internacional respaldada por el fabricante.",
          "Consolas y electrónica general: 6 a 12 meses de garantía directa contra fallas de hardware.",
          "Equipos Swap seleccionados: 90 días de garantía directa de funcionamiento.",
        ],
      },
      {
        title: "Verificación y trazabilidad previa al despacho",
        text: "Para tu tranquilidad, antes de despachar o entregar cada unidad registramos el IMEI o número de serie (Serial Number) y te compartimos fotografías en alta definición donde se observan el número de serie y la integridad de los precintos.",
      },
      {
        title: "¿Cómo gestionar un cambio o consulta de soporte?",
        text: "No dependés de formularios lentos ni tickets automáticos: escribinos directamente al WhatsApp de Rial Electrónica indicando tu nombre y número de orden/consulta. Un asesor responderá a la brevedad para evaluar el caso y darte una solución rápida.",
      },
    ],
  },

  ayuda: {
    title: "Centro de ayuda y",
    titleEmphasis: "proceso de compra.",
    badge: "Guía práctica de atención comercial",
    intro:
      "Conocé paso a paso cómo consultar disponibilidad, solicitar una cotización actualizada y coordinar el pago y la entrega con Rial Electrónica.",
    lastUpdated: "Actualizado en noviembre de 2026",
    sections: [
      {
        title: "01 · Explorá y elegí tu equipo",
        text: "Navegá por las categorías de nuestro catálogo digital (Celulares, Notebooks, Consolas, Parlantes y Accesorios). Podés revisar especificaciones técnicas completas, características de hardware y precios de referencia publicados en dólares (USD) o cotización de referencia en USDT.",
      },
      {
        title: "02 · Armá tu lista o consultá directo",
        text: "Podés iniciar una consulta directa desde la ficha de cualquier producto o sumar varios artículos a tu lista de cotización para pedir un presupuesto conjunto. Al tocar el botón de WhatsApp, se generará un mensaje claro con tu selección para que un asesor te asista al instante.",
      },
      {
        title: "03 · Verificación de stock y fotos reales",
        text: "Un asesor comercial responderá en tiempo real confirmando el stock físico inmediato, el color o capacidad disponible, y compartiéndote fotos reales del empaque y número de serie antes de solicitar cualquier pago.",
      },
      {
        title: "04 · Pago y coordinación de entrega",
        text: "Abonás mediante transferencia bancaria en pesos o USDT (cripto). Coordinamos el despacho asegurado con Vía Cargo, Andreani o Correo Argentino a tu domicilio o sucursal, o bien agendamos un retiro personal coordinado.",
      },
    ],
  },

  terminos: {
    title: "Términos y",
    titleEmphasis: "condiciones de compra.",
    badge: "Marco operativo y comercial",
    intro:
      "Estas condiciones regulan el uso de nuestro catálogo digital, el mecanismo de cotización personalizada y los acuerdos de compra coordinados por WhatsApp.",
    lastUpdated: "Actualizado en noviembre de 2026",
    sections: [
      {
        title: "Catálogo y carácter de las cotizaciones",
        text: "Los productos, especificaciones y precios expresados en USD exhibidos en este sitio web tienen carácter de cotización de referencia comercial. Debido a la dinámica del mercado cambiario y la rotación constante de importaciones, el importe final en moneda local (ARS) o criptoactivos (USDT) se fija de común acuerdo al momento de la consulta directa por WhatsApp.",
      },
      {
        title: "Lista de cotización (Carrito interactivo)",
        text: "La función de lista de cotización o carrito permite agrupar productos para preparar un mensaje ordenado. Sumar productos a la lista no implica una reserva automática ni congela el stock, el cual se verifica de forma humana al recibir la consulta.",
      },
      {
        title: "Coordinación y confirmación de pedidos",
        text: "Rial Electrónica no procesa pagos automatizados con tarjetas de crédito ni solicita datos bancarios a través del sitio web. Todas las operaciones se formalizan de manera consensuada a través del canal oficial de WhatsApp (+54 9 11 3156-8131). Los datos de cuentas bancarias o billeteras cripto se proporcionan exclusivamente tras confirmar la existencia física del producto.",
      },
      {
        title: "Imágenes de producto y especificaciones",
        text: "Las fotografías y especificaciones técnicas provistas en el catálogo tienen fines ilustrativos e informativos. Cuando un producto no cuenta aún con fotografía propia, se identifica con la etiqueta de imagen de referencia. El usuario podrá solicitar fotos y videos del producto específico antes de concretar la operación.",
      },
      {
        title: "Entregas, logística y riesgos del transporte",
        text: "Los despachos al interior del país se efectúan por medio de empresas de logística reconocidas (Vía Cargo / Andreani / Correo Argentino). La mercadería viaja amparada por un seguro de transporte. Una vez entregado el número de guía de seguimiento, la empresa de correo es responsable del cumplimiento de los plazos de traslado, brindando Rial Electrónica asistencia en la gestión del reclamo en caso de demoras.",
      },
      {
        title: "Aviso de propuesta comercial demostrativa",
        text: "Este sitio web es una demostración digital comercial de alto rendimiento, diseñada para presentar el portafolio y la experiencia de usuario de Rial Electrónica. Ninguna información publicada debe interpretarse como una oferta pública vinculante hasta su confirmación por nuestros canales autorizados.",
      },
    ],
  },

  privacidad: {
    title: "Política de",
    titleEmphasis: "privacidad y datos.",
    badge: "Seguridad y transparencia",
    intro:
      "Te explicamos con claridad qué información utiliza la plataforma en tu navegador, cómo se manejan las consultas por WhatsApp y qué medidas tomamos para resguardar tus datos.",
    lastUpdated: "Actualizado en noviembre de 2026",
    sections: [
      {
        title: "Almacenamiento exclusivo en tu navegador",
        text: "Rial Electrónica respeta tu privacidad: el sitio web no utiliza cookies de rastreo invasivo de terceros ni herramientas publicitarias de seguimiento. Los únicos datos que se almacenan en tu dispositivo corresponden a:",
        highlights: [
          "Lista de cotización: Se guarda de forma local en tu navegador (localStorage) para que tus productos seleccionados persistan al recargar la página.",
          "Preferencias de navegación: Como estados de filtros o vista previa guardados temporalmente en sessionStorage.",
        ],
      },
      {
        title: "Consultas por WhatsApp y consentimiento",
        text: "Al interactuar con los botones de consulta, la aplicación genera un enlace web estándar que abre WhatsApp con un texto prefijado que resume tu consulta o productos seleccionados. Vos tenés el control absoluto sobre ese mensaje: podés editarlo, completarlo o cancelarlo antes de enviarlo voluntariamente.",
      },
      {
        title: "Tratamiento de datos personales y bancarios",
        text: "La información que voluntariamente nos facilites por WhatsApp para coordinar una compra (nombre, DNI, dirección de entrega o comprobante de pago) se utiliza única y exclusivamente para confeccionar el paquete, emitir el rótulo de envío y verificar la acreditación del pago. Bajo ninguna circunstancia vendemos, cedemos o compartimos tus datos con terceros ajenos a la logística de entrega.",
      },
      {
        title: "Seguridad y registros de infraestructura",
        text: "El sitio web se distribuye sobre redes seguras mediante cifrado HTTPS/TLS. Los servidores de alojamiento (Vercel) pueden registrar de forma anónima eventos técnicos estándar (dirección IP, tipo de navegador, peticiones HTTP) para prevenir fraudes, mitigar ataques de denegación de servicio y asegurar la estabilidad de la plataforma.",
      },
      {
        title: "Control y derecho de eliminación",
        text: "Podés eliminar los datos guardados en tu dispositivo en cualquier momento vaciando la lista de cotización o borrando los datos de navegación en la configuración de tu navegador. Si deseás eliminar el historial de una conversación comercial previa en WhatsApp, podés solicitárnoslo directamente por ese mismo canal.",
      },
    ],
  },
};

export function infoMetadata(key: InfoPageKey): Metadata {
  const page = infoPages[key];
  const fullTitle = `${page.title} ${page.titleEmphasis} — Rial Electrónica`;

  return {
    title: fullTitle,
    description: page.intro,
    alternates: { canonical: `/${key}` },
    openGraph: {
      title: fullTitle,
      description: page.intro,
      url: `/${key}`,
      siteName: "Rial Electrónica",
    },
  };
}
