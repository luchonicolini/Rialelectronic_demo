export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  priceUsd: number;
  priceUsdt?: number;
  image: string;
  badge?: "Destacado" | "Novedad" | "Últimas unidades" | "Oferta" | "Gamer" | "Stock limitado" | "Nuevo";
  specs: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  itemCount: number;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  product: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const MOCK_BRANDS = [
  "Apple",
  "Samsung",
  "Sony",
  "JBL",
  "ASUS",
  "Nintendo",
  "Xiaomi",
  "TCL",
  "DJI",
  "Garmin",
] as const;

export const MOCK_CATEGORIES: Category[] = [
  {
    id: "celulares",
    slug: "celulares",
    name: "Celulares",
    subtitle: "iPhone, Samsung y Xiaomi",
    image: "/images/categories/celulares.png",
    itemCount: 24,
  },
  {
    id: "notebooks",
    slug: "notebooks",
    name: "Notebooks",
    subtitle: "MacBook, ASUS y Gamer",
    image: "/images/categories/notebooks.png",
    itemCount: 16,
  },
  {
    id: "consolas",
    slug: "consolas",
    name: "Consolas",
    subtitle: "PlayStation y Switch",
    image: "/images/categories/consolas.png",
    itemCount: 12,
  },
  {
    id: "audio",
    slug: "audio",
    name: "Audio y Parlantes",
    subtitle: "JBL, sonido portátil y Hi-Fi",
    image: "/images/categories/parlantes.png",
    itemCount: 18,
  },
  {
    id: "smart-tv",
    slug: "smart-tv",
    name: "Smart TV",
    subtitle: "Pantallas 4K y QLED",
    image: "/images/categories/smart-tv.png",
    itemCount: 9,
  },
  {
    id: "tablets",
    slug: "tablets",
    name: "Tablets",
    subtitle: "iPad y Redmi Pad",
    image: "/images/categories/tablets.png",
    itemCount: 14,
  },
];

export const MOCK_FEATURED_PRODUCTS: Product[] = [
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max 256GB",
    brand: "Apple",
    category: "Celulares",
    categorySlug: "celulares",
    priceUsd: 1450,
    priceUsdt: 1450,
    image: "/images/iphone-17-pro.jpg",
    badge: "Novedad",
    specs: ["Chip A18 Pro", "Pantalla 6.9″ OLED", "Cámara 48MP 5x Zoom"],
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air 13.6″ M3",
    brand: "Apple",
    category: "Notebooks",
    categorySlug: "notebooks",
    priceUsd: 1220,
    priceUsdt: 1220,
    image: "/images/macbook-flagship.jpg",
    badge: "Destacado",
    specs: ["Apple M3 8-Core", "Liquid Retina", "Batería hasta 18h"],
  },
  {
    id: "ps5-slim-digital",
    name: "PlayStation 5 Slim 1TB",
    brand: "Sony",
    category: "Consolas",
    categorySlug: "consolas",
    priceUsd: 680,
    priceUsdt: 680,
    image: "/images/ps5-flagship.jpg",
    badge: "Últimas unidades",
    specs: ["1TB SSD Ultrarrápido", "Tempest 3D Audio", "Control DualSense"],
  },
  {
    id: "samsung-s24-ultra",
    name: "Galaxy S24 Ultra 256GB",
    brand: "Samsung",
    category: "Celulares",
    categorySlug: "celulares",
    priceUsd: 1320,
    priceUsdt: 1320,
    image: "/products/100.webp",
    badge: "Destacado",
    specs: ["Snapdragon 8 Gen 3", "Cámara 200MP", "S-Pen Integrado"],
  },
  {
    id: "jbl-stage-320",
    name: "JBL PartyBox Stage 320",
    brand: "JBL",
    category: "Audio y Parlantes",
    categorySlug: "audio",
    priceUsd: 790,
    priceUsdt: 790,
    image: "/images/categories/parlantes-jbl.png",
    badge: "Oferta",
    specs: ["240W RMS", "Show de luces", "Batería recargable 18h"],
  },
  {
    id: "switch-oled-mario",
    name: "Nintendo Switch OLED",
    brand: "Nintendo",
    category: "Consolas",
    categorySlug: "consolas",
    priceUsd: 460,
    priceUsdt: 460,
    image: "/images/categories/consolas-switch2.png",
    badge: "Stock limitado",
    specs: ["Pantalla OLED 7″", "64GB Almacenamiento", "Audio mejorado"],
  },
  {
    id: "asus-rog-g16",
    name: "ASUS ROG Zephyrus G16",
    brand: "ASUS",
    category: "Notebooks",
    categorySlug: "notebooks",
    priceUsd: 1980,
    priceUsdt: 1980,
    image: "/images/categories/notebooks-asus-vivobook.png",
    badge: "Gamer",
    specs: ["Intel Core Ultra 9", "RTX 4070 8GB", "Pantalla 240Hz ROG Nebula"],
  },
  {
    id: "ipad-air-m2",
    name: "iPad Air 11″ M2 128GB",
    brand: "Apple",
    category: "Tablets",
    categorySlug: "tablets",
    priceUsd: 790,
    priceUsdt: 790,
    image: "/images/categories/tablets-redmi-pad2.png",
    badge: "Nuevo",
    specs: ["Chip Apple M2", "Compatible con Apple Pencil Pro", "Touch ID"],
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Demian Pozzi",
    location: "Rosario, Santa Fe",
    product: "iPhone 16 Pro Max",
    text: "Completamente original, sellado y en caja intacta. La atención por WhatsApp fue impecable, me pasaron fotos reales y cotización en USDT antes de pagar.",
    rating: 5,
  },
  {
    id: "2",
    author: "Ricardo Balboni",
    location: "Córdoba Capital",
    product: "PlayStation 5 Slim",
    text: "Tenía mis dudas de comprar a distancia, pero me brindaron toda la seguridad. La consola llegó en 24 horas por Andreani asegurado. 100% recomendable.",
    rating: 5,
  },
  {
    id: "3",
    author: "Lourdes López",
    location: "Mar del Plata, Bs As",
    product: "JBL PartyBox Stage",
    text: "Súper rápido el despacho y el código de seguimiento funcionó desde el primer minuto. Sonido original y factura transparente.",
    rating: 5,
  },
  {
    id: "4",
    author: "Martín Sánchez",
    location: "CABA",
    product: "MacBook Air M3",
    text: "Excelente servicio. Pude retirar personalmente y verificar el número de serie directamente en la web oficial de Apple antes de cerrar.",
    rating: 5,
  },
];

export const MOCK_FAQS: FaqItem[] = [
  {
    question: "¿Los productos son nuevos y originales?",
    answer:
      "Sí, todos los equipos que comercializamos son 100% nuevos, originales de fábrica y se entregan sellados en sus cajas originales con sus precintos de seguridad intactos.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Aceptamos transferencias bancarias en pesos con cotización congelada al instante, dólares billete (USD) al momento de la entrega o retiro, y criptoactivos estables (USDT).",
  },
  {
    question: "¿Cómo coordinamos el envío o retiro?",
    answer:
      "Hacemos envíos asegurados a todo el país a través de Andreani, Correo Argentino y Vía Cargo. También podés coordinar retiro presencial con cita previa en nuestro punto de entrega.",
  },
  {
    question: "¿Cómo se confirma la disponibilidad de un producto?",
    answer:
      "Haciendo clic en 'Consultar por WhatsApp' o 'Pedir cotización' en cualquier producto, te atendemos de forma directa para confirmar stock físico, colores disponibles y precio congelado antes de cualquier pago.",
  },
];
