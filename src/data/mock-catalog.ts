export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  priceUsd: number;
  originalPriceUsd?: number;
  discountBadge?: string;
  priceUsdt?: number;
  image: string;
  badge?: "Destacado" | "Novedad" | "Últimas unidades" | "Oferta" | "Gamer" | "Stock limitado" | "Nuevo";
  specs: string[];
  subtitleSpecs?: string;
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
    subtitle: "iPhone y smartphones",
    image: "/images/categories/celulares.png",
    itemCount: 24,
  },
  {
    id: "notebooks",
    slug: "notebooks",
    name: "Notebooks",
    subtitle: "MacBook, ASUS y PC",
    image: "/images/categories/notebooks-asus-vivobook.png",
    itemCount: 16,
  },
  {
    id: "consolas",
    slug: "consolas",
    name: "Consolas",
    subtitle: "PlayStation y Switch",
    image: "/images/categories/consolas-switch2.png",
    itemCount: 12,
  },
  {
    id: "tablets",
    slug: "tablets",
    name: "Tablets",
    subtitle: "iPad y Android",
    image: "/images/categories/tablets-redmi-pad2.png",
    itemCount: 14,
  },
  {
    id: "smart-tv",
    slug: "smart-tv",
    name: "Smart TV",
    subtitle: "Pantallas 4K y QLED",
    image: "/images/categories/smart-tv-tcl.png",
    itemCount: 9,
  },
  {
    id: "audio",
    slug: "audio",
    name: "Audio",
    subtitle: "JBL y sonido portátil",
    image: "/images/categories/parlantes-jbl.png",
    itemCount: 18,
  },
];

export const MOCK_FEATURED_PRODUCTS: Product[] = [
  {
    id: "ps5-con-lectora",
    name: "PlayStation 5 con Lectora",
    brand: "Sony",
    category: "consolas",
    categorySlug: "consolas",
    priceUsd: 906,
    originalPriceUsd: 1029,
    discountBadge: "12% OFF",
    priceUsdt: 906,
    image: "/products/consolas/ps5-slim-1.png",
    badge: "Destacado",
    subtitleSpecs: "1TB",
    specs: ["1TB SSD Ultrarrápido", "Lector Blu-ray 4K", "Control DualSense"],
  },
  {
    id: "acer-aspire-lite",
    name: "Aspire Lite",
    brand: "Acer",
    category: "notebooks",
    categorySlug: "notebooks",
    priceUsd: 310,
    originalPriceUsd: 364,
    discountBadge: "15% OFF",
    priceUsdt: 310,
    image: "/images/categories/notebooks.png",
    badge: "Destacado",
    subtitleSpecs: "4GB · 128GB SSD · 15.6\"",
    specs: ["Pantalla 15.6″ Full HD", "128GB SSD", "Diseño ultradelgado"],
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple",
    category: "apple",
    categorySlug: "celulares",
    priceUsd: 1598,
    priceUsdt: 1598,
    image: "/images/iphone-17-pro.jpg",
    subtitleSpecs: "256 GB · Silver",
    specs: ["Chip A19 Pro", "Diseño en titanio", "Cámara periscópica 48MP"],
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air 13.6″ M3",
    brand: "Apple",
    category: "apple",
    categorySlug: "notebooks",
    priceUsd: 1220,
    originalPriceUsd: 1350,
    discountBadge: "10% OFF",
    priceUsdt: 1220,
    image: "/images/macbook-flagship.jpg",
    badge: "Destacado",
    subtitleSpecs: "8GB RAM · 256GB SSD · M3",
    specs: ["Apple M3 8-Core", "Liquid Retina", "Batería hasta 18h"],
  },
  {
    id: "samsung-s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    category: "celulares",
    categorySlug: "celulares",
    priceUsd: 1320,
    originalPriceUsd: 1450,
    discountBadge: "9% OFF",
    priceUsdt: 1320,
    image: "/products/100.webp",
    subtitleSpecs: "256 GB · Titanium Gray",
    specs: ["Snapdragon 8 Gen 3", "Cámara 200MP", "S-Pen Integrado"],
  },
  {
    id: "jbl-stage-320",
    name: "JBL PartyBox Stage 320",
    brand: "JBL",
    category: "parlantes",
    categorySlug: "audio",
    priceUsd: 790,
    originalPriceUsd: 890,
    discountBadge: "11% OFF",
    priceUsdt: 790,
    image: "/images/categories/parlantes-jbl.png",
    subtitleSpecs: "240W RMS · Luces LED",
    specs: ["240W RMS", "Show de luces", "Batería recargable 18h"],
  },
  {
    id: "switch-oled-mario",
    name: "Nintendo Switch OLED",
    brand: "Nintendo",
    category: "consolas",
    categorySlug: "consolas",
    priceUsd: 460,
    originalPriceUsd: 510,
    discountBadge: "10% OFF",
    priceUsdt: 460,
    image: "/images/categories/consolas-switch2.png",
    badge: "Destacado",
    subtitleSpecs: "64GB · Pantalla OLED 7″",
    specs: ["Pantalla OLED 7″", "64GB Almacenamiento", "Audio mejorado"],
  },
  {
    id: "ipad-air-m2",
    name: "iPad Air 11″ M2",
    brand: "Apple",
    category: "tablets",
    categorySlug: "tablets",
    priceUsd: 790,
    originalPriceUsd: 870,
    discountBadge: "9% OFF",
    priceUsdt: 790,
    image: "/images/categories/tablets-redmi-pad2.png",
    badge: "Destacado",
    subtitleSpecs: "128GB · Chip M2",
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
