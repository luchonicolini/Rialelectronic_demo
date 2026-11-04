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
  galleryImages?: string[];
  description?: string;
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
  "Acer",
  "Advance",
  "Aiwa",
  "Apple",
  "ASUS",
  "Dell",
  "HP",
  "JBL",
  "Lenovo",
  "Magnavox",
  "Microsoft",
  "MSI",
  "Nintendo",
  "RCA",
  "Samsung",
  "Sony",
  "Tecno",
  "Toshiba",
  "Valve",
  "Xiaomi"
] as const;

export const MOCK_CATEGORIES: Category[] = [
  {
    id: "celulares",
    slug: "celulares",
    name: "Celulares",
    subtitle: "iPhone y smartphones",
    image: "/images/categories/celulares.png",
    itemCount: 10,
  },
  {
    id: "notebooks",
    slug: "notebooks",
    name: "Notebooks",
    subtitle: "MacBook, ASUS, HP y PC",
    image: "/images/categories/notebooks-asus-vivobook.png",
    itemCount: 91,
  },
  {
    id: "consolas",
    slug: "consolas",
    name: "Consolas",
    subtitle: "PlayStation, Xbox y Switch",
    image: "/images/categories/consolas-switch2.png",
    itemCount: 18,
  },
  {
    id: "tablets",
    slug: "tablets",
    name: "Tablets",
    subtitle: "Xiaomi Pad y accesorios",
    image: "/images/categories/tablets-redmi-pad2.png",
    itemCount: 7,
  },
  {
    id: "smart-tv",
    slug: "smart-tv",
    name: "Smart TV",
    subtitle: "Pantallas 4K y Android TV",
    image: "/images/categories/smart-tv-tcl.png",
    itemCount: 4,
  },
  {
    id: "audio",
    slug: "audio",
    name: "Audio",
    subtitle: "JBL, Sony y sonido portátil",
    image: "/images/categories/parlantes-jbl.png",
    itemCount: 9,
  },
];

export const MOCK_FEATURED_PRODUCTS: Product[] = [
  {
    "id": "apple-iphone-17-pro-max-3",
    "name": "Apple iPhone 17 Pro Max",
    "brand": "Apple",
    "category": "celulares",
    "categorySlug": "celulares",
    "priceUsd": 1690,
    "originalPriceUsd": 1790,
    "discountBadge": "6% OFF",
    "priceUsdt": 1690,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/24e74c72-05d8-4243-96cf-f991dc870931/bca7918e-a7d2-45eb-b865-50a23c927b2a.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/24e74c72-05d8-4243-96cf-f991dc870931/bca7918e-a7d2-45eb-b865-50a23c927b2a.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/24e74c72-05d8-4243-96cf-f991dc870931/5e0a970e-6d77-4b07-9ded-e2b495a938af.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/24e74c72-05d8-4243-96cf-f991dc870931/586e3883-3773-4c36-aafd-717ec8f1a312.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/24e74c72-05d8-4243-96cf-f991dc870931/4bb84a62-4228-456a-ba29-895537b2f177.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/24e74c72-05d8-4243-96cf-f991dc870931/2922c3ea-4195-44e9-afd0-9f06c6bb3834.png"
    ],
    "description": "Apple iPhone 17 Pro Max con estructura de titanio aeroespacial y el revolucionario chip A19 Pro. Pantalla Super Retina XDR de 6.9 pulgadas con ProMotion a 120Hz, cámara Pro cuádruple de 48 MP con zoom periscópico avanzado y máxima autonomía de batería.",
    "subtitleSpecs": "512 GB · Titanio Naranja",
    "specs": [
      "Chip A19 Pro con GPU de 6 núcleos y Neural Engine acelerado",
      "Pantalla Super Retina XDR de 6.9″ ProMotion 120Hz siempre activa",
      "Sistema de cámaras Pro de 48 MP con zoom óptico 5x",
      "Estructura en titanio pulido de máxima durabilidad",
      "Garantía oficial y cambio directo por falla en 7 días"
    ]
  },
  {
    "id": "apple-iphone-17-pro-2",
    "name": "Apple iPhone 17 Pro",
    "brand": "Apple",
    "category": "celulares",
    "categorySlug": "celulares",
    "priceUsd": 1598,
    "priceUsdt": 1598,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/1ccfb7c0-2c1e-4832-a8a3-4af3a7b4c574/c929cfda-7452-4523-b000-09aaed2ff2f3.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/1ccfb7c0-2c1e-4832-a8a3-4af3a7b4c574/c929cfda-7452-4523-b000-09aaed2ff2f3.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/1ccfb7c0-2c1e-4832-a8a3-4af3a7b4c574/a0c2163a-908a-411a-8c5f-9bb4ccdc2bde.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/1ccfb7c0-2c1e-4832-a8a3-4af3a7b4c574/f8349f8d-1cb2-46fe-a847-6d234faa7a52.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/1ccfb7c0-2c1e-4832-a8a3-4af3a7b4c574/fc619d88-2dd5-4f5c-87fa-78266bd226dc.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/1ccfb7c0-2c1e-4832-a8a3-4af3a7b4c574/75f527ea-78d7-4377-ada8-671ef93686b3.png"
    ],
    "description": "Apple iPhone 17 Pro con acabado en titanio natural, chip A19 Pro y pantalla de 6.3 pulgadas. Incluye Botón de Acción personalizable, conectividad USB-C 3.0 de alta velocidad y sistema de cámaras Pro optimizado para fotografía nocturna y video ProRes.",
    "subtitleSpecs": "256 GB · Titanio Silver",
    "specs": [
      "Chip A19 Pro con arquitectura térmica optimizada",
      "Pantalla Super Retina XDR 6.3″ con tecnología ProMotion",
      "Triple cámara de 48 MP con sensor Ultra Wide y Telephoto",
      "Botón de Acción táctil personalizable y USB-C 3",
      "Caja sellada de fábrica con precintos intactos"
    ]
  },
  {
    "id": "apple-iphone-17",
    "name": "Apple iPhone 17",
    "brand": "Apple",
    "category": "celulares",
    "categorySlug": "celulares",
    "priceUsd": 1070,
    "priceUsdt": 1070,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/c8fe557b-00c1-4412-ab44-2704cc24d3bc/f999b762-563a-45eb-9601-38d29d85871e.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/c8fe557b-00c1-4412-ab44-2704cc24d3bc/f999b762-563a-45eb-9601-38d29d85871e.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/c8fe557b-00c1-4412-ab44-2704cc24d3bc/c60994f6-089c-47c7-a7f8-4c3f583365b0.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/c8fe557b-00c1-4412-ab44-2704cc24d3bc/4b171bcf-4961-4034-815e-524be4b1b45f.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/c8fe557b-00c1-4412-ab44-2704cc24d3bc/55250dc7-598f-4b3b-890a-e3e626f2cdb4.png"
    ],
    "description": "Apple iPhone 17 con Dynamic Island, chip de alto rendimiento A18 Bionic y sistema de doble cámara Fusion de 48 MP. Diseño en aluminio y vidrio tintado de gran resistencia.",
    "subtitleSpecs": "256 GB · Black",
    "specs": [
      "Chip Apple A18 con alta eficiencia de batería",
      "Pantalla Super Retina XDR OLED brillante con Dynamic Island",
      "Sistema de cámaras Fusion de 48 MP con teleobjetivo 2x",
      "Carga rápida inalámbrica MagSafe y puerto USB-C",
      "Garantía oficial y cambio directo por falla en 7 días"
    ]
  },
  {
    "id": "apple-iphone-16",
    "name": "Apple iPhone 16",
    "brand": "Apple",
    "category": "celulares",
    "categorySlug": "celulares",
    "priceUsd": 920,
    "originalPriceUsd": 990,
    "discountBadge": "7% OFF",
    "priceUsdt": 920,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/9ab9161f-d27e-4a4f-bbdf-7055ce56aaec/b6eb877a-ef4a-4488-9d0b-77944de37890.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/9ab9161f-d27e-4a4f-bbdf-7055ce56aaec/b6eb877a-ef4a-4488-9d0b-77944de37890.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/9ab9161f-d27e-4a4f-bbdf-7055ce56aaec/db730ced-95af-416f-88b4-6bd6d2e0cb3e.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/9ab9161f-d27e-4a4f-bbdf-7055ce56aaec/208f4d89-814d-466c-bd7d-bd1fef3291d1.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/9ab9161f-d27e-4a4f-bbdf-7055ce56aaec/06610d37-ee72-43a3-a775-feaaf7b7a851.png"
    ],
    "description": "Apple iPhone 16 con chip A18 preparado para Apple Intelligence, nuevo Botón de Control de Cámara táctil para disparos instantáneos y cámara Fusion de 48 MP con macrofotografía.",
    "subtitleSpecs": "128 GB · Black",
    "specs": [
      "Chip A18 ultrarrápido preparado para Apple Intelligence",
      "Nuevo botón táctil sensible Control de Cámara",
      "Cámara Fusion de 48 MP con grabación de audio espacial",
      "Diseño de aluminio y vidrio Ceramic Shield de última generación",
      "Caja sellada de fábrica con precintos originales"
    ]
  },
  {
    "id": "nintendo-switch-oled-splatoon-3-64gb-japones-hegskcaaa",
    "name": "Nintendo Switch OLED Splatoon 3 64GB",
    "brand": "Nintendo",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 609,
    "priceUsdt": 609,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/d3cfdc51-2f5a-4505-b512-10ec0f3cba2b/98683a97-ddcf-4222-9efa-80a632fbf0ad.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/d3cfdc51-2f5a-4505-b512-10ec0f3cba2b/98683a97-ddcf-4222-9efa-80a632fbf0ad.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/d3cfdc51-2f5a-4505-b512-10ec0f3cba2b/e7f5d0b5-08ca-47b5-b22c-d97a8612be80.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/d3cfdc51-2f5a-4505-b512-10ec0f3cba2b/7573bd8f-ae47-430e-a47b-464e6cfec454.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/d3cfdc51-2f5a-4505-b512-10ec0f3cba2b/7ad9c6b4-06ee-41de-8206-3fb4680ab8f2.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/d3cfdc51-2f5a-4505-b512-10ec0f3cba2b/6b1fa2aa-5309-4a48-806a-898bd6722eaa.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/d3cfdc51-2f5a-4505-b512-10ec0f3cba2b/e50df4a6-fe7a-4fed-ad77-6a3b0b261072.png"
    ],
    "description": "Edición especial Splatoon 3 de Nintendo Switch con pantalla OLED de 7 pulgadas con colores intensos y contraste alto, soporte ajustable amplio, base con puerto LAN por cable y 64 GB de almacenamiento interno.",
    "subtitleSpecs": "64GB · Edición Splatoon 3",
    "specs": [
      "Pantalla OLED vibrante de 7 pulgadas",
      "Diseño temático exclusivo Splatoon 3 en consola y Joy-Con",
      "64 GB de almacenamiento interno expandible con tarjeta microSD",
      "Base con puerto LAN por cable integrado y soporte ajustable ancho",
      "Caja sellada de fábrica con precintos intactos"
    ]
  },
  {
    "id": "microsoft-xbox-series-x-1tb-usa",
    "name": "Microsoft Xbox Series X 1TB",
    "brand": "Microsoft",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 903,
    "priceUsdt": 903,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/50673b8a-cdab-4040-a309-40580fce75c5/4a528cac-6069-4f12-9fa9-c12027b10ebe.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/50673b8a-cdab-4040-a309-40580fce75c5/4a528cac-6069-4f12-9fa9-c12027b10ebe.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/50673b8a-cdab-4040-a309-40580fce75c5/b46e11dc-005b-4751-b032-696c0d1b4a99.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/50673b8a-cdab-4040-a309-40580fce75c5/61dc8812-0bf6-499f-a192-a1156f6fa939.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/50673b8a-cdab-4040-a309-40580fce75c5/04d50efa-50e2-4d95-82aa-d39e4738d32f.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/50673b8a-cdab-4040-a309-40580fce75c5/95c9bad4-2311-4a1a-b4ca-6af3ac0f938d.png"
    ],
    "description": "Consola Microsoft Xbox Series X con 1TB de almacenamiento SSD NVMe ultrarrápido, resolución 4K nativa hasta 120 FPS, arquitectura Xbox Velocity y retrocompatibilidad total.",
    "subtitleSpecs": "1TB SSD · 4K 120 FPS",
    "specs": [
      "1TB SSD NVMe de arquitectura Xbox Velocity",
      "Juegos en 4K real a hasta 120 fotogramas por segundo",
      "Audio espacial 3D con Dolby Atmos y DTS:X",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos originales"
    ]
  },
  {
    "id": "apple-airpods-pro-2",
    "name": "Apple AirPods Pro (2.ª generación)",
    "brand": "Apple",
    "category": "audio",
    "categorySlug": "audio",
    "priceUsd": 249,
    "priceUsdt": 249,
    "image": "/products/100.webp",
    "galleryImages": [
      "/products/100.webp"
    ],
    "description": "Cancelación Activa de Ruido hasta 2 veces más potente, modo Ambiente adaptable y Audio Espacial personalizado con seguimiento dinámico de la cabeza.",
    "subtitleSpecs": "Cancelación de Ruido · USB-C",
    "specs": [
      "Chip H2 de Apple para audio acústico premium",
      "Cancelación de Ruido Pro de nivel superior",
      "Audio Espacial Personalizado",
      "Estuche de carga MagSafe con USB-C"
    ]
  },
  {
    "id": "sony-joystick-playstation-5-dualsense",
    "name": "Joystick Playstation 5 Dualsense",
    "brand": "Sony",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 87,
    "priceUsdt": 87,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3fbaa038-47a2-4f9e-8e44-15b76aa35bf0/2fb794c1-8ca3-410c-bb75-612a48d1d770.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3fbaa038-47a2-4f9e-8e44-15b76aa35bf0/2fb794c1-8ca3-410c-bb75-612a48d1d770.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3fbaa038-47a2-4f9e-8e44-15b76aa35bf0/e81b0cc9-0d9f-45ce-bc0c-ac690a7b5c65.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3fbaa038-47a2-4f9e-8e44-15b76aa35bf0/99a8e846-8e8d-47b7-9c01-eed2b676c186.png"
    ],
    "description": "Control inalámbrico DualSense para PlayStation 5 con respuesta háptica inmersiva, gatillos adaptables dinámicos y micrófono integrado.",
    "subtitleSpecs": "Inalámbrico · Respuesta Háptica",
    "specs": [
      "Respuesta háptica inmersiva y gatillos adaptables dinámicos",
      "Micrófono integrado y conector de 3.5 mm",
      "Batería recargable integrada con puerto USB-C",
      "Sensor de movimiento y altavoz integrado",
      "Garantía oficial y cambio directo 7 días"
    ]
  },
  {
    "id": "ps5-con-lectora",
    "name": "PlayStation 5 con Lectora",
    "brand": "Sony",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 722,
    "originalPriceUsd": 820,
    "discountBadge": "12% OFF",
    "priceUsdt": 722,
    "image": "/products/consolas/ps5-slim-1.png",
    "galleryImages": [
      "/products/consolas/ps5-slim-1.png",
      "/products/consolas/ps5-slim-2.png",
      "/products/consolas/ps5-slim-3.png",
      "/images/ps5-flagship.jpg"
    ],
    "description": "Consola Sony PlayStation 5 edición con lectora de discos Blu-ray 4K Ultra HD. Versión Slim con 1TB de almacenamiento interno SSD ultrarrápido y control inalámbrico DualSense.",
    "subtitleSpecs": "1TB · Lector Blu-ray 4K",
    "specs": [
      "1TB SSD Ultrarrápido",
      "Lector Blu-ray 4K Ultra HD",
      "Control inalámbrico DualSense",
      "Tecnología de audio 3D Tempest",
      "Salida hasta 120 fps con soporte 4K/HDR"
    ]
  },
  {
    "id": "macbook-air-m3",
    "name": "MacBook Air 13.6″ M3",
    "brand": "Apple",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1220,
    "priceUsdt": 1220,
    "image": "/images/macbook-flagship.jpg",
    "galleryImages": [
      "/images/macbook-flagship.jpg",
      "/images/macbook-air.jpg"
    ],
    "description": "Apple MacBook Air de 13.6 pulgadas con chip M3 de Apple. Rendimiento sobresaliente, hasta 18 horas de batería y pantalla Liquid Retina con 500 nits de brillo.",
    "subtitleSpecs": "8GB RAM · 256GB SSD · M3",
    "specs": [
      "Chip Apple M3 (CPU 8 núcleos / GPU 8-10 núcleos)",
      "Pantalla Liquid Retina 13.6″ con True Tone",
      "Memoria unificada de alta velocidad",
      "Hasta 18 horas de batería",
      "Carga magnética MagSafe 3"
    ]
  },
  {
    "id": "jbl-stage-320",
    "name": "JBL PartyBox Stage 320",
    "brand": "JBL",
    "category": "audio",
    "categorySlug": "audio",
    "priceUsd": 790,
    "priceUsdt": 790,
    "image": "/products/parlantes/partyboxstage320.webp",
    "galleryImages": [
      "/products/parlantes/partyboxstage320.webp",
      "/images/categories/parlantes-jbl.png"
    ],
    "description": "Parlante portátil de alta fidelidad JBL PartyBox Stage 320 con 240W RMS de potencia JBL Pro Sound, show de luces dinámico y hasta 18 horas de batería.",
    "subtitleSpecs": "240W RMS · Luces LED",
    "specs": [
      "Potencia 240W RMS JBL Pro Sound",
      "Show de luces estroboscópicas y efectos dinámicos",
      "Batería recargable con hasta 18h de autonomía",
      "Ruedas anchas y asa telescópica integrada"
    ]
  },
  {
    "id": "jbl-boombox-3",
    "name": "JBL Boombox 3",
    "brand": "JBL",
    "category": "audio",
    "categorySlug": "audio",
    "priceUsd": 490,
    "priceUsdt": 490,
    "image": "/products/parlantes/boombox3.webp",
    "galleryImages": [
      "/products/parlantes/boombox3.webp",
      "/products/parlantes/boombox3wifi.webp"
    ],
    "description": "El legendario parlante portátil con el sonido más potente y graves más profundos. Hasta 24 horas de reproducción y certificación IP67 contra agua y polvo.",
    "subtitleSpecs": "Sonido Pro Masivo · IP67",
    "specs": [
      "Graves monstruosos con altavoces de 3 vías",
      "Hasta 24 horas de autonomía ininterrumpida",
      "Resistencia total IP67 a agua y polvo",
      "Bluetooth 5.3 y conexión PartyBoost"
    ]
  },
  {
    "id": "jbl-charge-5",
    "name": "JBL Charge 5",
    "brand": "JBL",
    "category": "audio",
    "categorySlug": "audio",
    "priceUsd": 179,
    "priceUsdt": 179,
    "image": "/products/parlantes/charge5.webp",
    "galleryImages": [
      "/products/parlantes/charge5.webp",
      "/products/parlantes/charge6.webp"
    ],
    "description": "Llevá la fiesta a cualquier lugar con el JBL Charge 5. Ofrece el potente sonido JBL Original Pro Sound y powerbank integrado para cargar tus dispositivos.",
    "subtitleSpecs": "20h de batería · Powerbank",
    "specs": [
      "Sonido JBL Original Pro con tweeter separado",
      "Hasta 20 horas de batería",
      "Función Powerbank para recargar tu celular",
      "Resistencia IP67 contra agua y polvo"
    ]
  },
  {
    "id": "jbl-flip-6",
    "name": "JBL Flip 6",
    "brand": "JBL",
    "category": "audio",
    "categorySlug": "audio",
    "priceUsd": 125,
    "priceUsdt": 125,
    "image": "/products/parlantes/flip6.webp",
    "galleryImages": [
      "/products/parlantes/flip6.webp",
      "/products/parlantes/flip7.webp"
    ],
    "description": "Parlante Bluetooth portátil ultracompacto con sistema de altavoces de 2 vías para un sonido nítido y potente con radiadores pasivos dobles.",
    "subtitleSpecs": "Portátil · 12h de batería",
    "specs": [
      "Diseño portátil y robusto",
      "Hasta 12 horas de reproducción",
      "Protección IP67 resistente al agua",
      "Compatible con PartyBoost"
    ]
  },
  {
    "id": "jbl-clip-5",
    "name": "JBL Clip 5",
    "brand": "JBL",
    "category": "audio",
    "categorySlug": "audio",
    "priceUsd": 75,
    "priceUsdt": 75,
    "image": "/products/parlantes/clip5.webp",
    "galleryImages": [
      "/products/parlantes/clip5.webp"
    ],
    "description": "Ultraportátil con mosquetón integrado rediseñado para enganchar a tu mochila o cinturón. Sonido JBL Pro sorprendentemente potente para su tamaño.",
    "subtitleSpecs": "Mosquetón · Ultraportátil",
    "specs": [
      "Mosquetón metálico integrado",
      "Hasta 12 horas de música",
      "IP67 sumergible y resistente al polvo"
    ]
  },
  {
    "id": "jbl-go-4",
    "name": "JBL Go 4",
    "brand": "JBL",
    "category": "audio",
    "categorySlug": "audio",
    "priceUsd": 48,
    "priceUsdt": 48,
    "image": "/products/parlantes/go4.webp",
    "galleryImages": [
      "/products/parlantes/go4.webp",
      "/products/parlantes/goessential.webp"
    ],
    "description": "El parlante de bolsillo más popular. Compacto pero con graves contundentes y correa de transporte práctica.",
    "subtitleSpecs": "Bolsillo · 7h de batería",
    "specs": [
      "Tamaño ultracompacto de bolsillo",
      "Hasta 7 horas de batería (+2h con Playtime Boost)",
      "Resistencia IP67 al agua y polvo"
    ]
  },
  {
    "id": "apple-airpods-max",
    "name": "Apple AirPods Max",
    "brand": "Apple",
    "category": "audio",
    "categorySlug": "audio",
    "priceUsd": 549,
    "priceUsdt": 549,
    "image": "/products/101.webp",
    "galleryImages": [
      "/products/101.webp"
    ],
    "description": "Auriculares circumaurales de diadema con diseño acústico exclusivo, chip H1 en cada auricular y cancelación activa de ruido líder en la industria.",
    "subtitleSpecs": "Over-Ear · Audio Espacial",
    "specs": [
      "Transductor dinámico diseñado por Apple",
      "Cancelación Activa de Ruido con modo Ambiente",
      "Audio Espacial con seguimiento dinámico",
      "Hasta 20 horas de autonomía con ANC activo"
    ]
  },
  {
    "id": "sony-wh-1000xm5",
    "name": "Sony WH-1000XM5",
    "brand": "Sony",
    "category": "audio",
    "categorySlug": "audio",
    "priceUsd": 390,
    "priceUsdt": 390,
    "image": "/products/107.webp",
    "galleryImages": [
      "/products/107.webp"
    ],
    "description": "Auriculares inalámbricos líderes en cancelación de ruido con dos procesadores y ocho micrófonos para una nitidez sonora inigualable.",
    "subtitleSpecs": "Noise Cancelling · 30h",
    "specs": [
      "Cancelación de ruido líder del sector con procesador V1 y QN1",
      "Llamadas ultranítidas con 4 micrófonos beamforming",
      "Hasta 30 horas de batería con carga rápida"
    ]
  },
  {
    "id": "apple-watch-ultra-2",
    "name": "Apple Watch Ultra 2",
    "brand": "Apple",
    "category": "celulares",
    "categorySlug": "celulares",
    "priceUsd": 799,
    "priceUsdt": 799,
    "image": "/products/104.webp",
    "galleryImages": [
      "/products/104.webp"
    ],
    "description": "El reloj deportivo y de aventura definitivo de Apple, con caja de titanio de 49 mm, GPS de precisión de doble frecuencia y hasta 72 horas de batería.",
    "subtitleSpecs": "49 mm Titanio · GPS Doble",
    "specs": [
      "Caja de titanio de 49 mm de grado aeroespacial",
      "Pantalla Retina de 3000 nits siempre activa",
      "Resistencia al agua hasta 100 m",
      "Sensor de profundidad y profundímetro"
    ]
  },
  {
    "id": "apple-watch-series-9",
    "name": "Apple Watch Series 9",
    "brand": "Apple",
    "category": "celulares",
    "categorySlug": "celulares",
    "priceUsd": 399,
    "priceUsdt": 399,
    "image": "/products/103.webp",
    "galleryImages": [
      "/products/103.webp"
    ],
    "description": "Potenciado por el chip S9 SiP con control mediante el gesto de doble toque, pantalla ultra brillante de 2000 nits y monitoreo avanzado de salud.",
    "subtitleSpecs": "45 mm · Gesto Doble Toque",
    "specs": [
      "Chip S9 SiP con gesto de Doble Toque",
      "Pantalla Retina de 2000 nits",
      "Medición de oxígeno en sangre y ECG"
    ]
  },
  {
    "id": "apple-iphone-15-2",
    "name": "Apple iPhone 15",
    "brand": "Apple",
    "category": "celulares",
    "categorySlug": "celulares",
    "priceUsd": 820,
    "priceUsdt": 820,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552931d-e5a6-4992-b73b-dde5989587bb/7b455271-d204-4615-8eb1-78310572a9da.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552931d-e5a6-4992-b73b-dde5989587bb/7b455271-d204-4615-8eb1-78310572a9da.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552931d-e5a6-4992-b73b-dde5989587bb/ec399955-db84-4fe0-bd58-f7813beba7b2.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552931d-e5a6-4992-b73b-dde5989587bb/cb43f3e8-feb7-4010-a056-0f40d33d60f5.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552931d-e5a6-4992-b73b-dde5989587bb/cc586f9a-b155-49e6-8992-46ee14ad8f5b.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552931d-e5a6-4992-b73b-dde5989587bb/b87daa35-a8e3-4c82-876b-a7f8a6598970.png"
    ],
    "description": "iPhone sellado. Consultá disponibilidad y color antes de coordinar la compra.",
    "subtitleSpecs": "128 GB · Negro",
    "specs": [
      "128 GB · Negro",
      "Marca: Apple",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "apple-iphone-16e",
    "name": "Apple iPhone 16e",
    "brand": "Apple",
    "category": "celulares",
    "categorySlug": "celulares",
    "priceUsd": 730,
    "priceUsdt": 730,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552a9ee-72f9-4d18-8cff-e82e582fdadf/f92b90a3-4f0c-49f2-bf08-8fc84cf61c60.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552a9ee-72f9-4d18-8cff-e82e582fdadf/f92b90a3-4f0c-49f2-bf08-8fc84cf61c60.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552a9ee-72f9-4d18-8cff-e82e582fdadf/977773df-a7a8-456b-bd75-295f5debcc66.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552a9ee-72f9-4d18-8cff-e82e582fdadf/2486590e-63b3-40b5-803d-bfb60e7b811e.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552a9ee-72f9-4d18-8cff-e82e582fdadf/f799acdf-1239-48f2-811a-2357259decd4.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3552a9ee-72f9-4d18-8cff-e82e582fdadf/9aa908f4-271d-4c84-94e7-5df2367dbaa4.png"
    ],
    "description": "iPhone sellado. Consultá disponibilidad y color antes de coordinar la compra.",
    "subtitleSpecs": "128 GB · Blanco",
    "specs": [
      "128 GB · Blanco",
      "Marca: Apple",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "apple-iphone-17-air",
    "name": "Apple iPhone 17 Air",
    "brand": "Apple",
    "category": "celulares",
    "categorySlug": "celulares",
    "priceUsd": 1124,
    "priceUsdt": 1124,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/287a1a11-6819-4b7e-8c05-8fa7f2778275/20bb8ce6-d067-40f3-a366-204681e8d018.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/287a1a11-6819-4b7e-8c05-8fa7f2778275/20bb8ce6-d067-40f3-a366-204681e8d018.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/287a1a11-6819-4b7e-8c05-8fa7f2778275/6ef980a2-6bda-416c-bde6-142f2d4b2c37.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/287a1a11-6819-4b7e-8c05-8fa7f2778275/33ed01df-928c-4096-9646-e85e8ef3aaf2.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/287a1a11-6819-4b7e-8c05-8fa7f2778275/5f4b8069-7ebd-4b52-96b8-1e749e567796.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/287a1a11-6819-4b7e-8c05-8fa7f2778275/4c7922c4-4470-4cd6-9c6f-951ec76216eb.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/287a1a11-6819-4b7e-8c05-8fa7f2778275/0027dfbd-523c-4e7a-9739-b40cd6f279e3.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/287a1a11-6819-4b7e-8c05-8fa7f2778275/8ce1a092-4810-4986-a407-341b6d69bc7a.png"
    ],
    "description": "iPhone sellado. Consultá disponibilidad y color antes de coordinar la compra.",
    "subtitleSpecs": "256 GB · Blanco",
    "specs": [
      "256 GB · Blanco",
      "Marca: Apple",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "asus-rog-ally-extreme-7-amd-ryzen-z1",
    "name": "Asus Rog Rog Ally X Amd Ryzen Z1 Extreme Z1 Extreme",
    "brand": "ASUS",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 650,
    "priceUsdt": 650,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/ca8c8466-dcb3-436d-a72e-c99a8cc786e4/d18b4038-0085-4341-aa5e-80762b087613.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/ca8c8466-dcb3-436d-a72e-c99a8cc786e4/d18b4038-0085-4341-aa5e-80762b087613.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/ca8c8466-dcb3-436d-a72e-c99a8cc786e4/6ed621a3-50fc-4420-a5c1-90e1e1c6b015.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/ca8c8466-dcb3-436d-a72e-c99a8cc786e4/9864f3c4-9dde-4cc8-9d63-74289afc128b.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/ca8c8466-dcb3-436d-a72e-c99a8cc786e4/38ea19b1-afc2-4a1b-9727-f13a671e1b26.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/ca8c8466-dcb3-436d-a72e-c99a8cc786e4/4c291a0f-3334-47ad-b41d-452c876b285f.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/ca8c8466-dcb3-436d-a72e-c99a8cc786e4/1d80ecac-d51c-440b-a29b-5e343d9b0cd4.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/ca8c8466-dcb3-436d-a72e-c99a8cc786e4/d825d186-e961-4d2a-8a7e-6df767afd166.png"
    ],
    "description": "Asus Rog Ally X Extreme Z1\nNueva\nSellada\n100% Original\nColor Negra\n\nLA ULTIMA CONSOLA PORTATIL DE LA FIRMA DISPONIBLE PARA VOS\nEL PODER QUE BUSCABAS AHORA EN LA PALMA DE TU MANO , CON UN PROCESADOR Z1 EXTREME Y SISTEMA OPERATIVO WINDOWS\n\n\nASUS ROG Ally X\nOperating System\nWindows 11 Home\nDisplay\n7” FHD (1920 x 1080) 16:9, 500 nits brightness, 100% sRGB, Corning® Gorilla® Glass Victus™ with Gorilla® Glass DXC coating, touchscreen, 120 Hz refresh rate, 7 ms response time, AMD FreeSync Premium\n\nCPU\nAMD Ryzen™ Z1 Extreme Processor (\"Zen4\" architecture with 4 nm process, 8-core /16-threads, 24 MB total cache, up to 5.10 GHz boost)\n\nGPU\nAMD Radeon™ Graphics (AMD RDNA™ 3, 12 CUs, up to 2.7 GHz, up to 8.6 Teraflops)\n\nMemory\n24 GB LPDDR5X on board (7500 MHz dual channel)\n\nStorage\nUp to 1 TB M.2 2280 NVMe™ PCIe® G4x4 Value SSD\n\nI/O Ports\n1 x Audio combo jack\n1 x Micro SD Card reader (UHS-II, 312MB/s)\n1 x USB-C® supports USB 3.2 Gen 2 (DisplayPort™ 1.4 with FreeSync support, Power Delivery 3.0 (Input: 20V/5A, Output 5V/1.5A))\n1 x USB4® (Thunderbolt™ 4 compliance, DisplayPort™ 1.4 with FreeSync support, Power Delivery 3.0 (Input: 20V/5A, output:5V/3A)\nAudio\n2-speaker system with Smart Amplifier Technology\nDolby Atmos®\nAI noise-canceling technology\nHi-Res Audio certification\nBuilt-in array microphone\n\nBattery\n4 CELL X 80 Wh\n\nPower Supply\nUSB-C®, 65W AC Adapter, Output: 20V DC, 3.25 A, 65 W, Input: 100~240V AC 50 / 60 Hz universal\n\nDimension\n28.0 x 11.1 x 2.47 cm\n\nPeso\n678 g\n\nSomos Metajuego Expertos en el rubro\nConsultanos lo que necesites\n\nAviso legal\nLa duración de la batería depende del uso que se le dé al producto.",
    "subtitleSpecs": "512GB · Blanco",
    "specs": [
      "512GB · Blanco",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "sony-lector-de-discos-para-o-ps5-slim-digital-cfizdd1",
    "name": "Lector de Discos para PS5 Slim Digital",
    "brand": "Sony",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 116,
    "priceUsdt": 116,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/acc079ae-b746-4346-ad31-ca55ee3f01ee/62a478f8-cbe6-46be-879d-5ba1771de28f.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/acc079ae-b746-4346-ad31-ca55ee3f01ee/62a478f8-cbe6-46be-879d-5ba1771de28f.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "Versión de referencia",
    "specs": [
      "Versión de referencia",
      "Marca: Sony",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "macbook-pro-14",
    "name": "MacBook Pro 14″",
    "brand": "Apple",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2000,
    "priceUsdt": 2000,
    "image": "/products/78.webp",
    "galleryImages": [
      "/products/78.webp",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/803b585f-e570-443f-9e8f-06dd9d3ec142/396a0ae8-64fb-4674-bb9e-5d6fad0371e4.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/803b585f-e570-443f-9e8f-06dd9d3ec142/0837a2b8-1312-4f32-9e3e-c659d2ced063.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/803b585f-e570-443f-9e8f-06dd9d3ec142/4b49482d-e41b-45e7-863c-cc8eea7f8eea.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/803b585f-e570-443f-9e8f-06dd9d3ec142/40c9cabd-61aa-4fba-b318-457a9d04c238.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/803b585f-e570-443f-9e8f-06dd9d3ec142/272933de-ca76-4192-8e41-fa9d516f54a9.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/803b585f-e570-443f-9e8f-06dd9d3ec142/f26863d8-d5a0-4ed8-9cd4-2511b21fcbc8.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/803b585f-e570-443f-9e8f-06dd9d3ec142/c5ea3193-8e75-4626-a938-5e3f546b77ca.png"
    ],
    "description": "Una notebook para tu espacio de trabajo. Memoria, procesador y almacenamiento se definirán al cargar la configuración real.",
    "subtitleSpecs": "Gris espacial",
    "specs": [
      "Gris espacial",
      "Marca: Apple",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "microsoft-xbox-series-s-512gb-ssd-digital-usa",
    "name": "Microsoft Xbox Series S 512GB SSD Digital USA",
    "brand": "Microsoft",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 455,
    "priceUsdt": 455,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/8afb2f1d-5055-4a4b-ad21-8a5878b59f75/827c6b1a-e454-42d0-aa66-d5d872efa54a.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/8afb2f1d-5055-4a4b-ad21-8a5878b59f75/827c6b1a-e454-42d0-aa66-d5d872efa54a.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/8afb2f1d-5055-4a4b-ad21-8a5878b59f75/7ddd7ee3-5be1-4dec-9ebf-cb676a928f31.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/8afb2f1d-5055-4a4b-ad21-8a5878b59f75/2758185e-2997-4f50-9e0c-026c79ce4fbd.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/8afb2f1d-5055-4a4b-ad21-8a5878b59f75/ea7a322e-b4be-45f5-8be2-c062a7f8d54d.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "512GB · Blanco",
    "specs": [
      "512GB · Blanco",
      "Marca: Microsoft",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "microsoft-xbox-series-x-1tb-ssd-usa",
    "name": "Microsoft Xbox Series X 1TB SSD USA",
    "brand": "Microsoft",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 695,
    "priceUsdt": 695,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/bd2cfae9-59e9-4f2c-8225-ddd0d47052e3/17664c7b-1994-488b-962d-77d9b60168a0.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/bd2cfae9-59e9-4f2c-8225-ddd0d47052e3/17664c7b-1994-488b-962d-77d9b60168a0.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/bd2cfae9-59e9-4f2c-8225-ddd0d47052e3/fc05c72e-ba1d-4f62-bc80-150c1bd6862c.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/bd2cfae9-59e9-4f2c-8225-ddd0d47052e3/b1eb81a0-b76a-4342-8d72-4c6088fd7dc7.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/bd2cfae9-59e9-4f2c-8225-ddd0d47052e3/5e282acb-e072-42d0-9dc5-f1c501e7279a.png"
    ],
    "description": "La consola Microsoft Xbox Series S de 1 TB en color blanco es la opción ideal para los amantes de los videojuegos que buscan un rendimiento excepcional y una experiencia de juego fluida. Con su potente procesador y capacidad de almacenamiento, permite disfrutar de una amplia biblioteca de juegos en resolución 1440p y con tiempos de carga reducidos, gracias a la tecnología de almacenamiento SSD.\n\nEl diseño compacto y moderno de la Xbox Series S la hace perfecta para cualquier espacio de entretenimiento, mientras que su conectividad Wi-Fi garantiza que estés siempre en línea para competir o colaborar con amigos, sin interrupciones. El modelo incluye un control ergonómico que brinda comodidad durante largas sesiones de juego, permitiendo una experiencia inmersiva.\n\nAccede a tus juegos favoritos y experimenta gráficos impresionantes que mejoran con cada actualización. Con funciones como la retrocompatibilidad, podrás disfrutar de títulos de generaciones anteriores, convirtiendo tu consola en un centro de juegos versátil y poderoso. La Xbox Series S es más que un dispositivo de juego; es una puerta de entrada a nuevas aventuras y desafíos en el mundo del entretenimiento digital.\n\nAviso legal\n• La duración de la batería de los controles depende del uso que se le dé al producto.",
    "subtitleSpecs": "1TB · Blanco",
    "specs": [
      "1TB · Blanco",
      "Marca: Microsoft",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "microsoft-xbox-series-x-galaxy-black-special-edition-2tb-ssd-usa",
    "name": "Microsoft Xbox Series X Galaxy Black Special Edition 2TB SSD USA",
    "brand": "Microsoft",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 1115,
    "priceUsdt": 1115,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3d81d52b-565c-4f40-b636-3c4091e55811/e4a8c7fc-d991-43ad-bf4c-235126a1eee0.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3d81d52b-565c-4f40-b636-3c4091e55811/e4a8c7fc-d991-43ad-bf4c-235126a1eee0.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3d81d52b-565c-4f40-b636-3c4091e55811/85318ac7-cbea-415a-875c-d55c4c1a35fb.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3d81d52b-565c-4f40-b636-3c4091e55811/c589a195-bc2c-4079-9f85-61089651f596.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3d81d52b-565c-4f40-b636-3c4091e55811/5d0bd55b-0803-4aeb-9b22-00a19a91983a.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3d81d52b-565c-4f40-b636-3c4091e55811/7b46acce-c4c9-4775-9f23-e784614d343e.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/3d81d52b-565c-4f40-b636-3c4091e55811/ee6d8df4-f88c-427e-906e-22536b7ab7a0.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "2TB · Negro",
    "specs": [
      "2TB · Negro",
      "Marca: Microsoft",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1268638",
    "name": "NB ASUS TUF FA608UM-NS73 R7-260 16GB/512GBSSD/16\"WUXGA/W11/RTX5060 8GB",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1765,
    "priceUsdt": 1765,
    "image": "https://i.ibb.co/1J0G9vBK/83.webp",
    "galleryImages": [
      "https://i.ibb.co/1J0G9vBK/83.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GBSSD · 16\"",
    "specs": [
      "16GB · 512GBSSD · 16\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "nintendo-switch-lite-32gb-japones-hdhspazaa",
    "name": "Nintendo Switch Lite 32GB ",
    "brand": "Nintendo",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 296,
    "priceUsdt": 296,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/6832c9bc-c6a0-4a83-b171-7b7c0c153f5f/5b732bfc-2dbc-47c3-95ae-8a8301cd82dd.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/6832c9bc-c6a0-4a83-b171-7b7c0c153f5f/5b732bfc-2dbc-47c3-95ae-8a8301cd82dd.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/6832c9bc-c6a0-4a83-b171-7b7c0c153f5f/4d2bac38-e8d3-4b37-9a5b-bba06ce2b27e.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/6832c9bc-c6a0-4a83-b171-7b7c0c153f5f/16918475-0d21-4949-b1b3-b50c8a9aba83.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/6832c9bc-c6a0-4a83-b171-7b7c0c153f5f/3131a8e0-73c5-4435-b8f3-94465d2a291b.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/6832c9bc-c6a0-4a83-b171-7b7c0c153f5f/a0af43e5-bca9-4d6d-9a48-d2a2d1741b09.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "32GB",
    "specs": [
      "32GB",
      "Marca: Nintendo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "nintendo-console-switch-oled-64gb-japon-hegskaaaa",
    "name": "Nintendo Switch Oled  64GB",
    "brand": "Nintendo",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 495,
    "priceUsdt": 495,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/06c6f166-6e42-4e57-9135-8d9ba7d13658/d5c6b4c1-01af-4443-b3df-f75eb6ba91b1.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/06c6f166-6e42-4e57-9135-8d9ba7d13658/d5c6b4c1-01af-4443-b3df-f75eb6ba91b1.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/06c6f166-6e42-4e57-9135-8d9ba7d13658/8cc2130b-8c93-4b29-9d02-93d1fb612c24.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/06c6f166-6e42-4e57-9135-8d9ba7d13658/724b9771-1c6d-430f-804f-1d2d4ccaa463.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/06c6f166-6e42-4e57-9135-8d9ba7d13658/05a1a760-f162-436c-a216-62cd7e8a99da.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/06c6f166-6e42-4e57-9135-8d9ba7d13658/b7b9630c-de3c-4aa6-b7dc-03e6a06c3e92.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "64GB · Blanco",
    "specs": [
      "64GB · Blanco",
      "Marca: Nintendo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "nintendo-switch-oled-mario-64gb",
    "name": "Nintendo Switch Oled + Super Mario Bros",
    "brand": "Nintendo",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 432,
    "priceUsdt": 432,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/de8ca833-6339-4d24-86ad-e549321b5b85/a10fb803-e7c8-4d37-8e87-ac63b5ef9ecd.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/de8ca833-6339-4d24-86ad-e549321b5b85/a10fb803-e7c8-4d37-8e87-ac63b5ef9ecd.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/de8ca833-6339-4d24-86ad-e549321b5b85/bac05413-7096-4cf7-a6a2-94550a5aec61.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/de8ca833-6339-4d24-86ad-e549321b5b85/d7c4083f-d6ac-476f-bc15-9781d8cb8384.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/de8ca833-6339-4d24-86ad-e549321b5b85/7221651e-fd90-4b39-a8cc-4f71a6b782b7.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/de8ca833-6339-4d24-86ad-e549321b5b85/1586c35c-3d8a-47b9-9a3f-8f62d10008cf.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "64GB",
    "specs": [
      "64GB",
      "Marca: Nintendo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1245998",
    "name": "Notebook Acer Aspire 14 AI A14-52M-72FH 14\" Intel Core Ultra 7-256V 1TB SSD 16GB RAM - Gris",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 876,
    "priceUsdt": 876,
    "image": "https://i.ibb.co/Hfx6R1Gd/91.webp",
    "galleryImages": [
      "https://i.ibb.co/Hfx6R1Gd/91.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 14\"",
    "specs": [
      "16GB · 1TB SSD · 14\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1152104",
    "name": "Notebook Acer Aspire 3 A315-24PT-R288 15.6\" AMD Ryzen 5-7520U 1TB SSD 16GB RAM - Plata",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 671,
    "priceUsdt": 671,
    "image": "https://i.ibb.co/5h5dPz8G/107.webp",
    "galleryImages": [
      "https://i.ibb.co/5h5dPz8G/107.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 15.6\"",
    "specs": [
      "16GB · 1TB SSD · 15.6\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1271973",
    "name": "Notebook Acer Aspire Go 15 AG15-21PT-R5GQ 15.6\" AMD Ryzen 5-7520U 512GB SSD 8GB RAM - Plata",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 587,
    "priceUsdt": 587,
    "image": "https://i.ibb.co/nMBV2pdT/78.webp",
    "galleryImages": [
      "https://i.ibb.co/nMBV2pdT/78.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 512GB SSD · 15.6\"",
    "specs": [
      "8GB · 512GB SSD · 15.6\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1292763",
    "name": "Notebook Acer Aspire Go 15 AG15-71P-794K 15.6\" Intel Core i7-13620H 512GB SSD 16GB RAM - Plata",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 861,
    "priceUsdt": 861,
    "image": "https://i.ibb.co/TMx6Pb4P/68.webp",
    "galleryImages": [
      "https://i.ibb.co/TMx6Pb4P/68.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1283280",
    "name": "Notebook Acer Aspire Lite AL15-36P-C0M7 15.6\" Intel N150 128GB SSD 4GB RAM - Plata",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 310,
    "priceUsdt": 310,
    "image": "https://i.ibb.co/sxdXR6j/74.webp",
    "galleryImages": [
      "https://i.ibb.co/sxdXR6j/74.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "4GB · 128GB SSD · 15.6\"",
    "specs": [
      "4GB · 128GB SSD · 15.6\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1355864",
    "name": "Notebook Acer Aspire Lite Intel N150 4GB RAM 128GB SSD Pantalla 15.6\" Full HD Windows 11 Inglés Prata - 15-36P-COM7",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 340,
    "priceUsdt": 340,
    "image": "https://i.ibb.co/DPpFF0M2/2.webp",
    "galleryImages": [
      "https://i.ibb.co/DPpFF0M2/2.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "4GB · 128GB SSD · 15.6\"",
    "specs": [
      "4GB · 128GB SSD · 15.6\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1235050",
    "name": "Notebook Acer Chromebook Plus 516 CB516-1H-31UE 16\" Intel Core i3-1315U 128GB UFS 8GB RAM - Gris",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 527,
    "priceUsdt": 527,
    "image": "https://i.ibb.co/YBsrDr32/93.webp",
    "galleryImages": [
      "https://i.ibb.co/YBsrDr32/93.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 128GB · 16\"",
    "specs": [
      "8GB · 128GB · 16\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1332858",
    "name": "Notebook Acer Chromebook Plus Spin 514 MediaTek Kompanio Ultra-910 12GB RAM 256GB UFS Pantalla 14\" WUXGA Touch Chromeos Inglés Plata - CP514-5HN-K6DY",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 743,
    "priceUsdt": 743,
    "image": "https://i.ibb.co/x8hP3HQm/48.webp",
    "galleryImages": [
      "https://i.ibb.co/x8hP3HQm/48.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "12GB · 256GB · 14\"",
    "specs": [
      "12GB · 256GB · 14\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1355253",
    "name": "Notebook Acer GadGet ETBook Max Intel Core i5-1235U 16GB RAM 512GB SSD Pantalla 15.6\" Full HD Windows 11 Inglés Plata",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 672,
    "priceUsdt": 672,
    "image": "https://i.ibb.co/1GFggV4c/5.webp",
    "galleryImages": [
      "https://i.ibb.co/1GFggV4c/5.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1289251",
    "name": "Notebook Acer GadGet ETBook SE 14\" Intel Celeron N4020 128GB SSD 8GB RAM + Kit Accesorios - Rosa",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 298,
    "priceUsdt": 298,
    "image": "https://i.ibb.co/WNtFqVwR/69.webp",
    "galleryImages": [
      "https://i.ibb.co/WNtFqVwR/69.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 128GB SSD · 14\"",
    "specs": [
      "8GB · 128GB SSD · 14\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1320893",
    "name": "Notebook Acer GadGet ETBook SEP Intel Celeron N4020 8GB RAM 128GB SSD Pantalla 15\" Full HD Windows 11 Inglés Rosa + Kit Acesórios",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 322,
    "priceUsdt": 322,
    "image": "https://i.ibb.co/YF6CvbXk/54.webp",
    "galleryImages": [
      "https://i.ibb.co/YF6CvbXk/54.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 128GB SSD · 15\"",
    "specs": [
      "8GB · 128GB SSD · 15\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1320886",
    "name": "Notebook Acer GadGet ETBook SEP Intel Celeron N4020 8GB RAM 128GB SSD Pantalla 15\" Full HD Windows 11 Plata + Kit Acesórios",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 322,
    "priceUsdt": 322,
    "image": "https://i.ibb.co/hQjdC9S/55.webp",
    "galleryImages": [
      "https://i.ibb.co/hQjdC9S/55.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 128GB SSD · 15\"",
    "specs": [
      "8GB · 128GB SSD · 15\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1333886",
    "name": "Notebook Advance N4058BK 10.1\" HD Touch Intel Celeron N4020 128GB eMMC 8GB RAM Windows 11 Español - Negro",
    "brand": "Advance",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 273,
    "priceUsdt": 273,
    "image": "https://i.ibb.co/whn3kDKK/45.webp",
    "galleryImages": [
      "https://i.ibb.co/whn3kDKK/45.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 128GB · 10.1\"",
    "specs": [
      "8GB · 128GB · 10.1\"",
      "Marca: Advance",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1339468",
    "name": "Notebook Asus Chromebook CX14 Intel Celeron N4500 4GB RAM 64GB eMMC Pantalla 14\" Windows 11 Inglés Gris - CX1405CKA-CL464",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 245,
    "priceUsdt": 245,
    "image": "https://i.ibb.co/FFFdth6/37.webp",
    "galleryImages": [
      "https://i.ibb.co/FFFdth6/37.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "4GB · 64GB · 14\"",
    "specs": [
      "4GB · 64GB · 14\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1279849",
    "name": "Notebook ASUS ROG Flow GZ302EA 13\" AMD Ryzen AI Max+ 395 1TB SSD 128GB RAM - Negro",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 3771,
    "priceUsdt": 3771,
    "image": "https://i.ibb.co/fYjq8RfH/58.webp",
    "galleryImages": [
      "https://i.ibb.co/fYjq8RfH/58.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "128GB · 1TB SSD · 13\"",
    "specs": [
      "128GB · 1TB SSD · 13\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1320039",
    "name": "Notebook Asus ROG Flow Z13 GZ302EA-XS96 13\" AMD Ryzen AI Max+ 395 1TB SSD 32GB RAM - Negro",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2958,
    "priceUsdt": 2958,
    "image": "https://i.ibb.co/fYjq8RfH/58.webp",
    "galleryImages": [
      "https://i.ibb.co/fYjq8RfH/58.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 13\"",
    "specs": [
      "32GB · 1TB SSD · 13\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1219265",
    "name": "Notebook Asus ROG Strix G16 G614PR-G16 16\" AMD Ryzen 9 8940HX 1TB SSD 16GB RAM NVIDIA GeForce RTX 5070 Ti 12GB - Negro",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2247,
    "priceUsdt": 2247,
    "image": "https://i.ibb.co/tP2FQ3py/98.webp",
    "galleryImages": [
      "https://i.ibb.co/tP2FQ3py/98.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 16\"",
    "specs": [
      "16GB · 1TB SSD · 16\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1321913",
    "name": "Notebook Asus ROG Zephyrus G16 GU605CR-XS97 16\" Intel Core Ultra 9-285H 2TB SSD 32GB RAM NVIDIA GeForce RTX-5070Ti - Blanco",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 4000,
    "priceUsdt": 4000,
    "image": "https://i.ibb.co/tTptQ22X/53.webp",
    "galleryImages": [
      "https://i.ibb.co/tTptQ22X/53.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 2TB SSD · 16\"",
    "specs": [
      "32GB · 2TB SSD · 16\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1268621",
    "name": "Notebook Asus Tuf FA808UP-NS74 18\" AMD Ryzen 7 260 1TB SSD 16GB RAM NVIDIA GeForce RTX5070 8GB - Negro",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2217,
    "priceUsdt": 2217,
    "image": "https://i.ibb.co/PZXLVs6K/84.webp",
    "galleryImages": [
      "https://i.ibb.co/PZXLVs6K/84.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 18\"",
    "specs": [
      "16GB · 1TB SSD · 18\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1268645",
    "name": "Notebook Asus Tuf FX608JHR-ES73 16\" Intel Core i7-14650HX 512GB SSD 16GB RAM NVIDIA GeForce RTX-5050 - Gris",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1723,
    "priceUsdt": 1723,
    "image": "https://i.ibb.co/ksJGvM5d/82.webp",
    "galleryImages": [
      "https://i.ibb.co/ksJGvM5d/82.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "512GB · 512GB SSD · 16\"",
    "specs": [
      "512GB · 512GB SSD · 16\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1339482",
    "name": "Notebook Asus Tuf Gaming A14 FA401KM-DS74 14\" AMD Ryzen Al 7 350 1TB SSD 16GB RAM NVIDIA GeForce RTX 5060 - Negro",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2096,
    "priceUsdt": 2096,
    "image": "https://i.ibb.co/tpVFKVnt/36.webp",
    "galleryImages": [
      "https://i.ibb.co/tpVFKVnt/36.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 14\"",
    "specs": [
      "16GB · 1TB SSD · 14\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1339505",
    "name": "Notebook Asus Tuf Gaming A18 FA808UH-RS74 18\" AMD Ryzen 7-260 1TB SSD 16GB RAM NVIDIA GeForce RTX 5050 - Negro",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1916,
    "priceUsdt": 1916,
    "image": "https://i.ibb.co/4gj2DMwf/35.jpg",
    "galleryImages": [
      "https://i.ibb.co/4gj2DMwf/35.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 18\"",
    "specs": [
      "16GB · 1TB SSD · 18\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1349498",
    "name": "Notebook ASUS Vivobook 15 AMD Ryzen 5-7430U 16GB RAM 512GB SSD Pantalla 15.6\" Full HD Windows 11 Inglés Gris - M1502YA-BS51",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 671,
    "priceUsdt": 671,
    "image": "https://i.ibb.co/Wp5KzWyt/20.jpg",
    "galleryImages": [
      "https://i.ibb.co/Wp5KzWyt/20.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1353426",
    "name": "Notebook Asus VivoBook 15 Intel Core i7-1255U 16GB RAM 512GB SSD Pantalla 15.6\" Full HD Windows 11 Inglés Plata - F1504ZA-SB76T",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 755,
    "priceUsdt": 755,
    "image": "https://i.ibb.co/HDx0q23m/7.webp",
    "galleryImages": [
      "https://i.ibb.co/HDx0q23m/7.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1294033",
    "name": "Notebook Asus Vivobook 16 F1605VA-WS96 16\" Intel Core i9-13900H 1TB SSD 16GB RAM - Plata",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1105,
    "priceUsdt": 1105,
    "image": "https://i.ibb.co/TMx6Pb4P/68.webp",
    "galleryImages": [
      "https://i.ibb.co/TMx6Pb4P/68.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 16\"",
    "specs": [
      "16GB · 1TB SSD · 16\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1353433",
    "name": "Notebook Asus VivoBook 16 Snapdragon X 16GB RAM 1TB SSD Pantalla 16\" Full HD+ Windows 11 Inglés Plata - X1607QA-IS56",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 755,
    "priceUsdt": 755,
    "image": "https://i.ibb.co/Z17wTXfC/6.webp",
    "galleryImages": [
      "https://i.ibb.co/Z17wTXfC/6.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 16\"",
    "specs": [
      "16GB · 1TB SSD · 16\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1267228",
    "name": "Notebook Asus Vivobook E1504GA-WS35 15.6\" Intel Core i3-N305 256GB SSD 8GB RAM - Plata",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 442,
    "priceUsdt": 442,
    "image": "https://i.ibb.co/ksKr0kRb/87.webp",
    "galleryImages": [
      "https://i.ibb.co/ksKr0kRb/87.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "256GB · 256GB SSD · 15.6\"",
    "specs": [
      "256GB · 256GB SSD · 15.6\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1332940",
    "name": "Notebook Asus Vivobook S 14 AMD Radeon AI 9-365 24GB RAM 512GB SSD Pantalla 14\" 3K OLED Windows 11 Inglês Preto - M5406WA-DS76",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1446,
    "priceUsdt": 1446,
    "image": "https://i.ibb.co/hFfwtTpB/46.webp",
    "galleryImages": [
      "https://i.ibb.co/hFfwtTpB/46.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "24GB · 512GB SSD · 14\"",
    "specs": [
      "24GB · 512GB SSD · 14\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1352283",
    "name": "Notebook Asus Zenbook 14 S Snapdragon X 32GB RAM 1TB SSD Pantalla 14\" Full HD+ Windows 11 Inglés Gris - UX3407QA-PS76",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1452,
    "priceUsdt": 1452,
    "image": "https://i.ibb.co/jPjGkFxc/8.webp",
    "galleryImages": [
      "https://i.ibb.co/jPjGkFxc/8.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 14\"",
    "specs": [
      "32GB · 1TB SSD · 14\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1337808",
    "name": "Notebook Asus Zenbook DUO Intel Core Ultra 9-185H 16GB RAM 1TB SSD Pantalla 14\" 3K OLED Windows 11 Inglés Gris - UX8406MA-SH96T",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2145,
    "priceUsdt": 2145,
    "image": "https://i.ibb.co/F4VmPF41/39.webp",
    "galleryImages": [
      "https://i.ibb.co/F4VmPF41/39.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 14\"",
    "specs": [
      "16GB · 1TB SSD · 14\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1231311",
    "name": "Notebook Asus Zenbook Duo UX8406CA-IS99T 14\" Intel Core Ultra 9-285H 2TB SSD 32GB RAM - Gris",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2265,
    "priceUsdt": 2265,
    "image": "https://i.ibb.co/1twyNv3b/94.webp",
    "galleryImages": [
      "https://i.ibb.co/1twyNv3b/94.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 2TB SSD · 14\"",
    "specs": [
      "32GB · 2TB SSD · 14\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1235104",
    "name": "Notebook Asus Zenbook S 16 UM5606WA 16\" AMD Ryzen AI 9-365 1TB SSD 24GB RAM - Blanco",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1510,
    "priceUsdt": 1510,
    "image": "https://i.ibb.co/5x489R9R/92.webp",
    "galleryImages": [
      "https://i.ibb.co/5x489R9R/92.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "24GB · 1TB SSD · 16\"",
    "specs": [
      "24GB · 1TB SSD · 16\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1218275",
    "name": "Notebook Dell 6250-7144BLU 2 em 1 16\" Intel Core Ultra 7 256V 1TB SSD 16GB RAM Touch - Ice Blue",
    "brand": "Dell",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1157,
    "priceUsdt": 1157,
    "image": "https://i.ibb.co/ynQ69QxC/100.webp",
    "galleryImages": [
      "https://i.ibb.co/ynQ69QxC/100.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 16\"",
    "specs": [
      "16GB · 1TB SSD · 16\"",
      "Marca: Dell",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1351668",
    "name": "Notebook Dell AMD Ryzen 7-7730U 16GB RAM 1TB SSD Pantalla 15.6\" Full HD Touch Windows 11 Inglés Negro - LDC15255-7322",
    "brand": "Dell",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 798,
    "priceUsdt": 798,
    "image": "https://i.ibb.co/chrcbmN1/11.jpg",
    "galleryImages": [
      "https://i.ibb.co/chrcbmN1/11.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 15.6\"",
    "specs": [
      "16GB · 1TB SSD · 15.6\"",
      "Marca: Dell",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1292718",
    "name": "Notebook Gamer Acer Nitro V 15 ANV15-52-778V 15.6\" Intel Core i7-1362H 512GB SSD 16GB RAM NVIDIA GeForce RTX-5050 - Negro",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1325,
    "priceUsdt": 1325,
    "image": "https://i.ibb.co/2XtGChT/70.webp",
    "galleryImages": [
      "https://i.ibb.co/2XtGChT/70.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1332865",
    "name": "Notebook Gamer Acer Predator Helios 18 AI Intel Core Ultra 9-275HX RTX 5080 16GB 32GB RAM 1TB SSD Pantalla 18\" WQXGA Windows 11 Negro - PH18-73-90A6",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 3651,
    "priceUsdt": 3651,
    "image": "https://i.ibb.co/XZQbD87B/47.webp",
    "galleryImages": [
      "https://i.ibb.co/XZQbD87B/47.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 18\"",
    "specs": [
      "32GB · 1TB SSD · 18\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1348729",
    "name": "Notebook Gamer Acer Predator Helios 18 AI Intel Core Ultra 9-275HX RTX 5090 64GB RAM 2TB SSD Pantalla 18\" WQUXGA IPS Windows 11 Inglés Negro - PH18-73-962W",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 4795,
    "priceUsdt": 4795,
    "image": "https://i.ibb.co/9HmqDLQw/23.jpg",
    "galleryImages": [
      "https://i.ibb.co/9HmqDLQw/23.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "64GB · 2TB SSD · 18\"",
    "specs": [
      "64GB · 2TB SSD · 18\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1268614",
    "name": "Notebook Gamer Acer Predator Helios Neo 16 AI PHN16-73-7166 16\" Intel Core Ultra 7 255HX 1TB SSD 16GB RAM NVIDIA GeForce RTX5070 8GB Inglés - Negro",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2187,
    "priceUsdt": 2187,
    "image": "https://i.ibb.co/60yqBX9R/85.webp",
    "galleryImages": [
      "https://i.ibb.co/60yqBX9R/85.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 16\"",
    "specs": [
      "16GB · 1TB SSD · 16\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1268515",
    "name": "Notebook Gamer Acer Predator Helios Neo 16S AI PHN16S-71-98RF 16\" Intel Core Ultra 9-275HX 1TB SSD 32GB RAM NVIDIA GeForce RTX-5070T - Negro",
    "brand": "Acer",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2386,
    "priceUsdt": 2386,
    "image": "https://i.ibb.co/60yqBX9R/85.webp",
    "galleryImages": [
      "https://i.ibb.co/60yqBX9R/85.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 16\"",
    "specs": [
      "32GB · 1TB SSD · 16\"",
      "Marca: Acer",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1337747",
    "name": "Notebook Gamer Asus ROG Strix G18 Intel Core Ultra 9-275HX RTX 5060 8GB 32GB RAM 1TB SSD Pantalla 18\" 2K IPS Windows 11 Gris - G815LM-IS96",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2253,
    "priceUsdt": 2253,
    "image": "https://i.ibb.co/sJvtZy06/40.webp",
    "galleryImages": [
      "https://i.ibb.co/sJvtZy06/40.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 18\"",
    "specs": [
      "32GB · 1TB SSD · 18\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1349696",
    "name": "Notebook Gamer Asus Rog Strix Intel Core i9-14900HX RTX 5070 32GB RAM 1TB SSD Pantalla 18\" 2.5K WUXGA IPS Windows 11 Inglés Gris - G815JPR-IS96",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2506,
    "priceUsdt": 2506,
    "image": "https://i.ibb.co/zWdHCTZF/17.jpg",
    "galleryImages": [
      "https://i.ibb.co/zWdHCTZF/17.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 18\"",
    "specs": [
      "32GB · 1TB SSD · 18\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1326680",
    "name": "Notebook Gamer Asus ROG Zephyrus G14 AMD Ryzen 9-270 RTX 5070 8GB 32GB RAM 1TB SSD Tela 14\" 3K OLED Windows 11 Gris - GA403UP-CS96",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2904,
    "priceUsdt": 2904,
    "image": "https://i.ibb.co/LDckZq6s/51.webp",
    "galleryImages": [
      "https://i.ibb.co/LDckZq6s/51.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 14\"",
    "specs": [
      "32GB · 1TB SSD · 14\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1312478",
    "name": "Notebook Gamer Asus ROG Zephyrus GU605CW-G16 16\" Intel Core Ultra 9-285H 2TB SSD 32GB RAM NVIDIA GeForce RTX-5080 16GB - Gris",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 4024,
    "priceUsdt": 4024,
    "image": "https://i.ibb.co/HT1K1SpR/64.webp",
    "galleryImages": [
      "https://i.ibb.co/HT1K1SpR/64.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 2TB SSD · 16\"",
    "specs": [
      "32GB · 2TB SSD · 16\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1320046",
    "name": "Notebook Gamer Asus Strix G814PH-ES94 18\" AMD Ryzen 9-8940HX 1TB SSD 16GB RAM NVIDIA GeForce RTX-5050 - Gris",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2024,
    "priceUsdt": 2024,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/575be34e-d005-43a9-8b28-09ad13f8935e/7bfa4ac2-52cf-4da1-9a24-0c068693350c.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/575be34e-d005-43a9-8b28-09ad13f8935e/7bfa4ac2-52cf-4da1-9a24-0c068693350c.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/575be34e-d005-43a9-8b28-09ad13f8935e/1cb7ba93-81fa-4636-821c-7b52757646a6.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/575be34e-d005-43a9-8b28-09ad13f8935e/57ed34e0-1e90-4b45-afa1-298bca8b3fc3.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/575be34e-d005-43a9-8b28-09ad13f8935e/7f1d7ff2-0fed-45ed-9b30-879472cfdec6.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/575be34e-d005-43a9-8b28-09ad13f8935e/747fdd2f-937c-4e24-8685-6d32aa685528.png"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 18\"",
    "specs": [
      "16GB · 1TB SSD · 18\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1327113",
    "name": "Notebook Gamer Asus V16 V3607VM-ES74 16\" Intel Core 7-240H 512GB SSD 16GB RAM NVIDIA GeForce RTX-5060 - Negro",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1410,
    "priceUsdt": 1410,
    "image": "https://i.ibb.co/CrtPnfF/50.webp",
    "galleryImages": [
      "https://i.ibb.co/CrtPnfF/50.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 16\"",
    "specs": [
      "16GB · 512GB SSD · 16\"",
      "Marca: Asus",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1052503",
    "name": "Notebook Gamer Gigabyte Aero 17 XE5-73BR738HP 17.3\" Intel Core i7-12700H 1TB SSD 8GB RAM NVIDIA GeForce RTX 3070 8GB - Plata",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1970,
    "priceUsdt": 1970,
    "image": "https://i.ibb.co/pB0JFdVj/111.webp",
    "galleryImages": [
      "https://i.ibb.co/pB0JFdVj/111.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 1TB SSD · 17.3\"",
    "specs": [
      "8GB · 1TB SSD · 17.3\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1337716",
    "name": "Notebook Gamer HP OMEN MAX Intel Core Ultra 9-275HX RTX 5080 16GB 32GB RAM 1TB SSD Tela 16\" WQXGA IPS Windows 11 Negro - 16-AH0097NR",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 3066,
    "priceUsdt": 3066,
    "image": "https://i.ibb.co/wrJ7cYgP/41.webp",
    "galleryImages": [
      "https://i.ibb.co/wrJ7cYgP/41.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 16\"",
    "specs": [
      "32GB · 1TB SSD · 16\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1279214",
    "name": "Notebook Gamer HP Victus 15-FA2082WM 15.6\" Intel Core i5-13420H 512GB SSD 16GB RAM NVIDIA GeForce RTX 4050 - Negro",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1008,
    "priceUsdt": 1008,
    "image": "https://i.ibb.co/C5Dxb3vB/76.webp",
    "galleryImages": [
      "https://i.ibb.co/C5Dxb3vB/76.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1271324",
    "name": "Notebook Gamer Lenovo Legion 5 83NX0000US 16\" Intel Core Ultra 9-275HX 1TB SSD 32GB RAM NVIDIA GeForce RTX-5060 - Gris",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1994,
    "priceUsdt": 1994,
    "image": "https://i.ibb.co/5xwGVGs0/79.webp",
    "galleryImages": [
      "https://i.ibb.co/5xwGVGs0/79.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 16\"",
    "specs": [
      "32GB · 1TB SSD · 16\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1270068",
    "name": "Notebook Gamer Lenovo Legion 5i 83F00005US 15.6\" Intel Ultra 7-255HX 512GB SSD 16GB RAM NVIDIA GeForce RTX5060 - Negro",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1855,
    "priceUsdt": 1855,
    "image": "https://i.ibb.co/fdVxFFp0/81.webp",
    "galleryImages": [
      "https://i.ibb.co/fdVxFFp0/81.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "512GB · 512GB SSD · 15.6\"",
    "specs": [
      "512GB · 512GB SSD · 15.6\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1270075",
    "name": "Notebook Gamer Lenovo Legion 5i 83F00006US 15.6\" 1TB SSD 16GB RAM NVIDIA GeForce RTX-5070 - Negro",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2024,
    "priceUsdt": 2024,
    "image": "https://i.ibb.co/8L60yfb8/80.webp",
    "galleryImages": [
      "https://i.ibb.co/8L60yfb8/80.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 15.6\"",
    "specs": [
      "16GB · 1TB SSD · 15.6\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1322293",
    "name": "Notebook Gamer Lenovo Legion 5i 83F3000PUS 16\" Intel Core Ultra 7-255HX 1TB SSD 16GB RAM NVIDIA GeForce RTX-5070 8GB - Negro",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2313,
    "priceUsdt": 2313,
    "image": "https://i.ibb.co/fYcRnMJz/52.webp",
    "galleryImages": [
      "https://i.ibb.co/fYcRnMJz/52.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 16\"",
    "specs": [
      "16GB · 1TB SSD · 16\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1349689",
    "name": "Notebook Gamer Lenovo Legion 5i Intel Core Ultra 9-275HX RTX 5070 16GB RAM 1TB SSD Pantalla 15.1\" OLED Windows 11 Negro - 83F0001TUS",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2084,
    "priceUsdt": 2084,
    "image": "https://i.ibb.co/LXFFwqh3/18.jpg",
    "galleryImages": [
      "https://i.ibb.co/LXFFwqh3/18.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 15.1\"",
    "specs": [
      "16GB · 1TB SSD · 15.1\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1257656",
    "name": "Notebook Gamer Lenovo Legion 83LY0000US 15.6\" Intel Core i7-14700HX 1TB SSD 16GB RAM NVIDIA GeForce RTX-5060 8GB - Negro",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1675,
    "priceUsdt": 1675,
    "image": "https://i.ibb.co/6RPjKVhm/89.webp",
    "galleryImages": [
      "https://i.ibb.co/6RPjKVhm/89.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 15.6\"",
    "specs": [
      "16GB · 1TB SSD · 15.6\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1330151",
    "name": "Notebook Gamer Lenovo Legion Pro 5 83F3000HUS 16\" Intel Core Ultra 9-275HX 1TB SSD 32GB RAM NVIDIA GeForce RTX-5070 8GB - Negro",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2325,
    "priceUsdt": 2325,
    "image": "https://i.ibb.co/m5dHPx15/49.webp",
    "galleryImages": [
      "https://i.ibb.co/m5dHPx15/49.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 16\"",
    "specs": [
      "32GB · 1TB SSD · 16\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1351101",
    "name": "Notebook Gamer Lenovo Legion Pro 5i Intel Core Ultra 7-255HX RTX 5070 8GB 32GB RAM 1TB SSD Pantalla 16\" Full HD OLED Windows 11 Inglés Negro - 83F3000AUS",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2325,
    "priceUsdt": 2325,
    "image": "https://i.ibb.co/gb4kLT3P/12.jpg",
    "galleryImages": [
      "https://i.ibb.co/gb4kLT3P/12.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 16\"",
    "specs": [
      "32GB · 1TB SSD · 16\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1351095",
    "name": "Notebook Gamer Lenovo Legion Pro 7i Gen 10 Intel Core Ultra 9-275HX RTX 5080 32GB RAM 1TB SSD Pantalla 16\" WQXGA OLED Windows 11 Ingés Negro - 83F50080US",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 3771,
    "priceUsdt": 3771,
    "image": "https://i.ibb.co/4nWxNTxQ/13.jpg",
    "galleryImages": [
      "https://i.ibb.co/4nWxNTxQ/13.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 16\"",
    "specs": [
      "32GB · 1TB SSD · 16\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1351088",
    "name": "Notebook Gamer Lenovo Loq Intel Core i5-13450HX RTX 5050 8GB 16GB RAM 1TB SSD Pantalla 17.3\" Full HD Windows 11 Inglés Gris - 83JH000GUS",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1283,
    "priceUsdt": 1283,
    "image": "https://i.ibb.co/WWTHpSGM/14.jpg",
    "galleryImages": [
      "https://i.ibb.co/WWTHpSGM/14.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 17.3\"",
    "specs": [
      "16GB · 1TB SSD · 17.3\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1314526",
    "name": "Notebook Gamer MSI Cyborg 15 B2RWGKG-409US 15.6\" Intel Core 7-240H 1TB SSD 16GB RAM NVIDIA GeForce RTX-5070 - Negro",
    "brand": "MSI",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1633,
    "priceUsdt": 1633,
    "image": "https://i.ibb.co/SDRPM9L3/62.webp",
    "galleryImages": [
      "https://i.ibb.co/SDRPM9L3/62.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 15.6\"",
    "specs": [
      "16GB · 1TB SSD · 15.6\"",
      "Marca: MSI",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1343304",
    "name": "Notebook Gamer MSI Cyborg 17 Intel Core 9-270H RTX 5060 16GB RAM 1TB SSD Pantalla 17\" Full HD IPS Windows 11 Negro - B2RWFKG-067US",
    "brand": "MSI",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1843,
    "priceUsdt": 1843,
    "image": "https://i.ibb.co/6cyXHVBb/31.jpg",
    "galleryImages": [
      "https://i.ibb.co/6cyXHVBb/31.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 17\"",
    "specs": [
      "16GB · 1TB SSD · 17\"",
      "Marca: MSI",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1201567",
    "name": "Notebook Gamer MSI Vector 16 HX AI A2XWIG-050US 16\" Intel Core Ultra 9-275HX 1TB SSD 16GB RAM NVIDIA GeForce RTX 5080 - Gris",
    "brand": "MSI",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2848,
    "priceUsdt": 2848,
    "image": "https://i.ibb.co/mV4yn3NL/105.webp",
    "galleryImages": [
      "https://i.ibb.co/mV4yn3NL/105.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 16\"",
    "specs": [
      "16GB · 1TB SSD · 16\"",
      "Marca: MSI",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1343311",
    "name": "Notebook Gamer MSI Vector 16 HX AI Intel Core Ultra 9-275HX RTX 50-0 8GB 64GB RAM 4TB SSD Pantalla 16\" QHD+ IPS Windows 11 Gris - A2XWJG-480US",
    "brand": "MSI",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 4976,
    "priceUsdt": 4976,
    "image": "https://i.ibb.co/LXhDZsFg/30.jpg",
    "galleryImages": [
      "https://i.ibb.co/LXhDZsFg/30.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "64GB · 4TB SSD · 16\"",
    "specs": [
      "64GB · 4TB SSD · 16\"",
      "Marca: MSI",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1308273",
    "name": "Notebook HP 15-FD0001DX 15.6\" Intel N100 128GB UFS 4GB RAM - Plata",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 298,
    "priceUsdt": 298,
    "image": "https://i.ibb.co/4w7JCq0j/65.webp",
    "galleryImages": [
      "https://i.ibb.co/4w7JCq0j/65.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "4GB · 128GB · 15.6\"",
    "specs": [
      "4GB · 128GB · 15.6\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1218282",
    "name": "Notebook HP 15-FD0127DX 15.6\" Intel Core i7-150U 512GB SSD 16GB RAM - Plata",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 852,
    "priceUsdt": 852,
    "image": "https://i.ibb.co/67Bf7H3Z/99.webp",
    "galleryImages": [
      "https://i.ibb.co/67Bf7H3Z/99.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1216059",
    "name": "Notebook HP 17-CP2025DX 17.3\" AMD Ryzen 5 7520U 512GB SSD 8GB RAM - Plata",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 593,
    "priceUsdt": 593,
    "image": "https://i.ibb.co/FqgJCJ7r/103.webp",
    "galleryImages": [
      "https://i.ibb.co/FqgJCJ7r/103.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 512GB SSD · 17.3\"",
    "specs": [
      "8GB · 512GB SSD · 17.3\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1350814",
    "name": "Notebook HP AMD Ryzen 5-7520U 8GB RAM 1TB SSD Pantalla 15.6\" Full HD Touch Windows 11 Inglés Plata - 15-FC0025WM",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 600,
    "priceUsdt": 600,
    "image": "https://i.ibb.co/sddbt2tb/15.jpg",
    "galleryImages": [
      "https://i.ibb.co/sddbt2tb/15.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 1TB SSD · 15.6\"",
    "specs": [
      "8GB · 1TB SSD · 15.6\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1351064",
    "name": "Notebook HP EliteBook 840 G11 Intel Core Ultra 5-125H 16GB RAM 512GB SSD Pantalla 14\" WUXGA Windows 11 Inglés Plata",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1229,
    "priceUsdt": 1229,
    "image": "https://i.ibb.co/sddbt2tb/15.jpg",
    "galleryImages": [
      "https://i.ibb.co/sddbt2tb/15.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 14\"",
    "specs": [
      "16GB · 512GB SSD · 14\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1351743",
    "name": "Notebook HP Intel Core 9-270H 32GB RAM 1TB SSD Pantalla 16\" OLED Touch Windows 11 Inglés Plata - 16-AZ0595CL",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1422,
    "priceUsdt": 1422,
    "image": "https://i.ibb.co/B2SjGb54/9.jpg",
    "galleryImages": [
      "https://i.ibb.co/B2SjGb54/9.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 16\"",
    "specs": [
      "32GB · 1TB SSD · 16\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1284973",
    "name": "Notebook HP Intel Core i3-N305 8GB RAM 128GB eMMC Pantala 15.6\" HD Windows 11 Inglés Plata - 15-FD0113DX",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 454,
    "priceUsdt": 454,
    "image": "https://i.ibb.co/TMXXtvfC/73.webp",
    "galleryImages": [
      "https://i.ibb.co/TMXXtvfC/73.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 128GB · 15.6\"",
    "specs": [
      "8GB · 128GB · 15.6\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1355901",
    "name": "Notebook HP Intel Core Ultra 7-255U 16GB RAM 512GB SSD Pantalla 15.6\" Full HD Windows 11 Inglés Plata - 15-FD2747NR",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 916,
    "priceUsdt": 916,
    "image": "https://i.ibb.co/MkbL7phS/1.webp",
    "galleryImages": [
      "https://i.ibb.co/MkbL7phS/1.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1301564",
    "name": "Notebook HP Omnibook 16-AG1070WM 16\" AMD Ryzen AI 7-350 512GB SSD 16GB RAM - Plata",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 792,
    "priceUsdt": 792,
    "image": "https://i.ibb.co/hJRbgK3J/67.webp",
    "galleryImages": [
      "https://i.ibb.co/hJRbgK3J/67.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 16\"",
    "specs": [
      "16GB · 512GB SSD · 16\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1226270",
    "name": "Notebook HP OmniBook 5 16-AG1000NR AI 16\" AMD Ryzen 5 340 512GB SSD 16GB RAM - Plata",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1108,
    "priceUsdt": 1108,
    "image": "https://i.ibb.co/LzWF0rcK/96.webp",
    "galleryImages": [
      "https://i.ibb.co/LzWF0rcK/96.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 16\"",
    "specs": [
      "16GB · 512GB SSD · 16\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1252705",
    "name": "Notebook HP Omnibook X 16-AS0033DX 16\" Intel Ultra 7-258V 2TB SSD 32GB RAM - Gris",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1470,
    "priceUsdt": 1470,
    "image": "https://i.ibb.co/mCXSNKXD/90.webp",
    "galleryImages": [
      "https://i.ibb.co/mCXSNKXD/90.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 2TB SSD · 16\"",
    "specs": [
      "32GB · 2TB SSD · 16\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1339413",
    "name": "Notebook HP OmniBook X 16-BG0013DX 16\" Intel Core Ultra X7 358H 1TB SSD 32GB RAM - Gris",
    "brand": "HP",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2759,
    "priceUsdt": 2759,
    "image": "https://i.ibb.co/pvpwBYHQ/38.webp",
    "galleryImages": [
      "https://i.ibb.co/pvpwBYHQ/38.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 16\"",
    "specs": [
      "32GB · 1TB SSD · 16\"",
      "Marca: HP",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1314946",
    "name": "Notebook Lenovo IdeaPad 1 82VG00WXUS 15.6\" AMD Ryzen 5-7520U 256GB SSD 8GB RAM - Azul",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 466,
    "priceUsdt": 466,
    "image": "https://i.ibb.co/sntydbJ/60.webp",
    "galleryImages": [
      "https://i.ibb.co/sntydbJ/60.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 25GB SSD · 15.6\"",
    "specs": [
      "8GB · 25GB SSD · 15.6\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1355802",
    "name": "Notebook Lenovo IdeaPad 5 Intel Core Ultra 7-255U 32GB RAM 1TB SSD Pantalla 16\" Full HD Touch Windows 11 Inglés Azul -  83KS001BUS",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1235,
    "priceUsdt": 1235,
    "image": "https://i.ibb.co/DHfMQBDS/3.webp",
    "galleryImages": [
      "https://i.ibb.co/DHfMQBDS/3.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 16\"",
    "specs": [
      "32GB · 1TB SSD · 16\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1349474",
    "name": "Notebook Lenovo Ideapad Slim 3 AMD Ryzen 7-7730U 16GB RAM 512GB SSD Pantalla 15.6\" Full HD Windows 11 Inglés Azul - 82XM0035US",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 816,
    "priceUsdt": 816,
    "image": "https://i.ibb.co/xKXcPkkk/22.jpg",
    "galleryImages": [
      "https://i.ibb.co/xKXcPkkk/22.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1335491",
    "name": "Notebook Lenovo ThinkPad L14 Intel Core i7-1365 16GB RAM 512GB SSD Pantalla 14\" Full HD Touch Windows 11 Inglés Negro - 21H1008DUS",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1229,
    "priceUsdt": 1229,
    "image": "https://i.ibb.co/23GQFVN8/44.webp",
    "galleryImages": [
      "https://i.ibb.co/23GQFVN8/44.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 14\"",
    "specs": [
      "16GB · 512GB SSD · 14\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1355796",
    "name": "Notebook Lenovo V15 AMD Ryzen 3-7320U 16GB RAM 512GB SSD Pantalla 15.6\" Full HD Windows 11 Inglés Gris - 83CQ0025US",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 581,
    "priceUsdt": 581,
    "image": "https://i.ibb.co/PZp5Kr2y/4.webp",
    "galleryImages": [
      "https://i.ibb.co/PZp5Kr2y/4.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1349504",
    "name": "Notebook Lenovo V15 Gen4 AMD Ryzen 7-7730U 16GB RAM 1TB SSD Pantalla 15.6\" Full HD Windows 11 Inglés Gris - 83CR003UUS",
    "brand": "Lenovo",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 906,
    "priceUsdt": 906,
    "image": "https://i.ibb.co/Nnj85q37/19.jpg",
    "galleryImages": [
      "https://i.ibb.co/Nnj85q37/19.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 1TB SSD · 15.6\"",
    "specs": [
      "16GB · 1TB SSD · 15.6\"",
      "Marca: Lenovo",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1348156",
    "name": "Notebook Microsoft Surface Laptop Snapdragon X Plus 16GB RAM 516GB SSD Pantalla 13.8\" Full HD+ Touch Windows 11 Inglés Plata - ZGM-00001",
    "brand": "Microsoft",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1422,
    "priceUsdt": 1422,
    "image": "https://i.ibb.co/14HSPFM/26.jpg",
    "galleryImages": [
      "https://i.ibb.co/14HSPFM/26.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 516GB SSD · 13.8\"",
    "specs": [
      "16GB · 516GB SSD · 13.8\"",
      "Marca: Microsoft",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1348132",
    "name": "Notebook Microsoft Surface Snapdragon X Plus 16GB RAM 516GB SSD Pantalla 13\" Full HD Touch Windows 11 Inglés Ocean - EP2-33432",
    "brand": "Microsoft",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1181,
    "priceUsdt": 1181,
    "image": "https://i.ibb.co/0jkKzP6w/28.jpg",
    "galleryImages": [
      "https://i.ibb.co/0jkKzP6w/28.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 516GB SSD · 13\"",
    "specs": [
      "16GB · 516GB SSD · 13\"",
      "Marca: Microsoft",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1348149",
    "name": "Notebook Microsoft Surface Snapdragon X Plus 16GB RAM 516GB SSD Pantalla 13\" Full HD Touch Windows 11 Inglés Prata - EP2-33462",
    "brand": "Microsoft",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1181,
    "priceUsdt": 1181,
    "image": "https://i.ibb.co/kV8jgLjB/27.jpg",
    "galleryImages": [
      "https://i.ibb.co/kV8jgLjB/27.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 516GB SSD · 13\"",
    "specs": [
      "16GB · 516GB SSD · 13\"",
      "Marca: Microsoft",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1265064",
    "name": "Notebook MSI Katana 15 B14WEK-001US 15.6\" Intel Core i7-14650HX 512GB SSD 16GB RAM NVIDIA GeForce RTX 5050 - Negro",
    "brand": "MSI",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1337,
    "priceUsdt": 1337,
    "image": "https://i.ibb.co/3Y4StHb9/88.webp",
    "galleryImages": [
      "https://i.ibb.co/3Y4StHb9/88.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: MSI",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1349481",
    "name": "Notebook MSI Venture Intel Core Ultra 9-285H 32GB RAM 1TB SSD Pantalla 16\" Full HD+ Touch Windows 11 Inglés Gris - A2HMTG-015US",
    "brand": "MSI",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 1482,
    "priceUsdt": 1482,
    "image": "https://i.ibb.co/3Yj0jtnR/21.jpg",
    "galleryImages": [
      "https://i.ibb.co/3Yj0jtnR/21.jpg"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "32GB · 1TB SSD · 16\"",
    "specs": [
      "32GB · 1TB SSD · 16\"",
      "Marca: MSI",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1129168",
    "name": "Notebook Samsung Galaxy Book 4 NP750XGK-KA1CL Intel Core i5-120U 512GB SSD 8GB RAM Español - Prata",
    "brand": "Samsung",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 731,
    "priceUsdt": 731,
    "image": "https://i.ibb.co/1YMt3Nbv/110.webp",
    "galleryImages": [
      "https://i.ibb.co/1YMt3Nbv/110.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8GB · 512GB SSD",
    "specs": [
      "8GB · 512GB SSD",
      "Marca: Samsung",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-notebook-1217742",
    "name": "Notebook Samsung Galaxy Book4 NP750XGJ-KS2CL 15.6\" Intel Core i7-1355U 512GB SSD 16GB RAM Espanhol - Plata",
    "brand": "Samsung",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 936,
    "priceUsdt": 936,
    "image": "https://i.ibb.co/W43C96CF/102.webp",
    "galleryImages": [
      "https://i.ibb.co/W43C96CF/102.webp"
    ],
    "description": "Notebook con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "16GB · 512GB SSD · 15.6\"",
    "specs": [
      "16GB · 512GB SSD · 15.6\"",
      "Marca: Samsung",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "sony-playstation-5-slim-edicion-digital-825gb-ssd",
    "name": "PlayStation 5 Slim Digital de 825 GB",
    "brand": "Sony",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 815,
    "priceUsdt": 815,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/7062ff3e-d390-4ae9-8ed5-f10b75edb00d/b42d7009-092a-4760-879e-35f7b241b1d4.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/7062ff3e-d390-4ae9-8ed5-f10b75edb00d/b42d7009-092a-4760-879e-35f7b241b1d4.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/7062ff3e-d390-4ae9-8ed5-f10b75edb00d/95f1e7f9-30ed-4434-a64b-c39dde13b257.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/7062ff3e-d390-4ae9-8ed5-f10b75edb00d/972cbb83-1d61-4186-904b-134bd9c35100.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/7062ff3e-d390-4ae9-8ed5-f10b75edb00d/8b8e7cce-63f4-4f8e-b116-cf7aec9e7115.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "825GB",
    "specs": [
      "825GB",
      "Marca: Sony",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-tablet-1347920",
    "name": "Redmi Pad 2",
    "brand": "Xiaomi",
    "category": "tablets",
    "categorySlug": "tablets",
    "priceUsd": 264,
    "priceUsdt": 264,
    "image": "https://i.ibb.co/4nB2dvSc/Redmi-Pad-2-Lila.jpg",
    "galleryImages": [
      "https://i.ibb.co/4nB2dvSc/Redmi-Pad-2-Lila.jpg"
    ],
    "description": "Tablet con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8 GB · 256 GB · 11.0 · Verde",
    "specs": [
      "8 GB · 256 GB · 11.0 · Verde",
      "Marca: Xiaomi",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-tablet-1288001",
    "name": "Redmi Pad 2 Pro",
    "brand": "Xiaomi",
    "category": "tablets",
    "categorySlug": "tablets",
    "priceUsd": 280,
    "priceUsdt": 280,
    "image": "https://i.ibb.co/hxtB3Rkj/Redmi-Pad-Pro-2-Gris.webp",
    "galleryImages": [
      "https://i.ibb.co/hxtB3Rkj/Redmi-Pad-Pro-2-Gris.webp"
    ],
    "description": "Tablet con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "6 GB · 128 GB · 2026-01-12 00:00:00 · Plata",
    "specs": [
      "6 GB · 128 GB · 2026-01-12 00:00:00 · Plata",
      "Marca: Xiaomi",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-tablet-1195644",
    "name": "Redmi Pad 7",
    "brand": "Xiaomi",
    "category": "tablets",
    "categorySlug": "tablets",
    "priceUsd": 371,
    "priceUsdt": 371,
    "image": "https://i.ibb.co/rT8f6pd/Redmi-Pad-7-Gris.webp",
    "galleryImages": [
      "https://i.ibb.co/rT8f6pd/Redmi-Pad-7-Gris.webp"
    ],
    "description": "Tablet con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "8 GB · 256 GB · 11.0 · Gris",
    "specs": [
      "8 GB · 256 GB · 11.0 · Gris",
      "Marca: Xiaomi",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-tablet-1334432",
    "name": "Redmi Pad Pro",
    "brand": "Xiaomi",
    "category": "tablets",
    "categorySlug": "tablets",
    "priceUsd": 277,
    "priceUsdt": 277,
    "image": "https://i.ibb.co/BKshywNQ/Redmi-Pad-Pro-12-1.jpg",
    "galleryImages": [
      "https://i.ibb.co/BKshywNQ/Redmi-Pad-Pro-12-1.jpg"
    ],
    "description": "Tablet con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "6 GB · 128 GB · 2026-01-12 00:00:00 · Gris Grafito",
    "specs": [
      "6 GB · 128 GB · 2026-01-12 00:00:00 · Gris Grafito",
      "Marca: Xiaomi",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-tablet-1131284",
    "name": "Redmi Pad SE",
    "brand": "Xiaomi",
    "category": "tablets",
    "categorySlug": "tablets",
    "priceUsd": 164,
    "priceUsdt": 164,
    "image": "https://i.ibb.co/93ZR323N/Redmi-Pad-SE-Azul.jpg",
    "galleryImages": [
      "https://i.ibb.co/93ZR323N/Redmi-Pad-SE-Azul.jpg"
    ],
    "description": "Tablet con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "4 GB · 64 GB · 2026-07-08 00:00:00 · Azul",
    "specs": [
      "4 GB · 64 GB · 2026-07-08 00:00:00 · Azul",
      "Marca: Xiaomi",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-tablet-1346688",
    "name": "Redmi Pad SE  Índia",
    "brand": "Xiaomi",
    "category": "tablets",
    "categorySlug": "tablets",
    "priceUsd": 169,
    "priceUsdt": 169,
    "image": "https://i.ibb.co/FkvPhv6g/Redmi-Pad-SE-Verde.webp",
    "galleryImages": [
      "https://i.ibb.co/FkvPhv6g/Redmi-Pad-SE-Verde.webp"
    ],
    "description": "Tablet con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "4 GB · 128 GB · 2026-07-08 00:00:00 · Verde",
    "specs": [
      "4 GB · 128 GB · 2026-07-08 00:00:00 · Verde",
      "Marca: Xiaomi",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "smart-tv-aiwa-aw65b4k-65-4k-ultra-hd-google-tv-wifi-negro",
    "name": "Smart TV Aiwa AW65B4K 65\" 4K Ultra HD Google TV WiFi - Negro",
    "brand": "Aiwa",
    "category": "smart-tv",
    "categorySlug": "smart-tv",
    "priceUsd": 711,
    "priceUsdt": 711,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/661749bb-1776-4fc2-b281-b0a2e4d37956/2730fbb8-8228-4899-8125-632c3886fc0e.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/661749bb-1776-4fc2-b281-b0a2e4d37956/2730fbb8-8228-4899-8125-632c3886fc0e.png"
    ],
    "description": "Smart TV con precio informado por RIAL. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "Versión de referencia",
    "specs": [
      "Versión de referencia",
      "Marca: Aiwa",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "smart-tv-magnavox-50mez573-m1-50-ultra-hd-android-wifi-negro",
    "name": "Smart TV Magnavox 50MEZ573/M1 50\" Ultra HD Android WiFi - Negro",
    "brand": "Magnavox",
    "category": "smart-tv",
    "categorySlug": "smart-tv",
    "priceUsd": 440,
    "priceUsdt": 440,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/de87e3f5-83de-483e-aac0-3e357197d4e9/1239b331-c7d3-4437-af02-95155bb33406.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/de87e3f5-83de-483e-aac0-3e357197d4e9/1239b331-c7d3-4437-af02-95155bb33406.png"
    ],
    "description": "Smart TV con precio informado por RIAL. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "Versión de referencia",
    "specs": [
      "Versión de referencia",
      "Marca: Magnavox",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "smart-tv-rca-rt-32a02-32-hd-android-negro",
    "name": "Smart TV RCA RT-32A02 32\" HD Android - Negro",
    "brand": "RCA",
    "category": "smart-tv",
    "categorySlug": "smart-tv",
    "priceUsd": 172,
    "priceUsdt": 172,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/0c2e5302-b36b-4cf2-8273-30800614811b/e913f12d-a080-450f-b283-449d7de44625.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/0c2e5302-b36b-4cf2-8273-30800614811b/e913f12d-a080-450f-b283-449d7de44625.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/0c2e5302-b36b-4cf2-8273-30800614811b/fb454d8a-8005-4150-a7fa-dfbd35967ed6.png"
    ],
    "description": "Smart TV con precio informado por RIAL. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "Versión de referencia",
    "specs": [
      "Versión de referencia",
      "Marca: RCA",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "smart-tv-toshiba-32v35ms-32-hd-vidaa-wifi-negro",
    "name": "Smart TV Toshiba  32\" HD  WiFi - Negro",
    "brand": "Toshiba",
    "category": "smart-tv",
    "categorySlug": "smart-tv",
    "priceUsd": 196,
    "priceUsdt": 196,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/a3533c50-0b6c-48db-861f-c0e68e1f737e/676f023c-4efa-407f-8c1e-c93bffc94b09.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/a3533c50-0b6c-48db-861f-c0e68e1f737e/676f023c-4efa-407f-8c1e-c93bffc94b09.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/a3533c50-0b6c-48db-861f-c0e68e1f737e/f4dbe8eb-72d1-461c-aafc-3ba9b5d2bba0.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/a3533c50-0b6c-48db-861f-c0e68e1f737e/41411d1a-201b-4ee8-8f89-1dd3be95c0e7.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/a3533c50-0b6c-48db-861f-c0e68e1f737e/91852d9b-1232-42f0-a482-aae527a74a6e.png"
    ],
    "description": "Smart TV con precio informado por RIAL. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "Versión de referencia",
    "specs": [
      "Versión de referencia",
      "Marca: Toshiba",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "sony-playstation-5-con-lectora-1tb-ssd",
    "name": "Sony Playstation 5 con Lectora 1TB SSD",
    "brand": "Sony",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 906,
    "priceUsdt": 906,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/060b83eb-abf4-4a28-a49d-476d499883a8/7fd017bc-bbb7-4abb-8ede-9b5d81aeca5a.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/060b83eb-abf4-4a28-a49d-476d499883a8/7fd017bc-bbb7-4abb-8ede-9b5d81aeca5a.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "1TB",
    "specs": [
      "1TB",
      "Marca: Sony",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "sony-playstation-5-pro-2tb-ssd",
    "name": "Sony Playstation 5 Pro 2TB SSD",
    "brand": "Sony",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 1546,
    "priceUsdt": 1546,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/4141b659-6cba-4420-ad77-631a15c02734/afe28823-b631-4c9b-92ce-fca5b079bb79.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/4141b659-6cba-4420-ad77-631a15c02734/afe28823-b631-4c9b-92ce-fca5b079bb79.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/4141b659-6cba-4420-ad77-631a15c02734/fb2f6195-4f43-4b4a-a214-729b75a11c1b.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "2TB",
    "specs": [
      "2TB",
      "Marca: Sony",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "sony-soporte-vertical-para-playstation-5",
    "name": "Soporte Base Vertical PS5 Slim",
    "brand": "Sony",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 40,
    "priceUsdt": 40,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/34a331b4-262a-4b73-91f3-b46161b97acf/98de4da2-f6f0-48b6-869e-f0c0a26abb92.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/34a331b4-262a-4b73-91f3-b46161b97acf/98de4da2-f6f0-48b6-869e-f0c0a26abb92.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/34a331b4-262a-4b73-91f3-b46161b97acf/4b220e99-aee0-44c2-8ae5-da5a19978684.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/34a331b4-262a-4b73-91f3-b46161b97acf/34e1535d-9347-4438-b5c1-f42546183e20.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/34a331b4-262a-4b73-91f3-b46161b97acf/ca6cf4cc-6afe-4711-a478-372c22ce8166.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/34a331b4-262a-4b73-91f3-b46161b97acf/09edbe89-bf1e-4bbe-9e72-bc0624c1984a.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "Negro",
    "specs": [
      "Negro",
      "Marca: Sony",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "rial-tablet-1331684",
    "name": "Teclado Xiaomi Redmi Pad Pro / Redmi Pro 5G",
    "brand": "Xiaomi",
    "category": "tablets",
    "categorySlug": "tablets",
    "priceUsd": 23,
    "priceUsdt": 23,
    "image": "https://i.ibb.co/3YWrj9fC/Teclado-Xiaomi-Redmi.jpg",
    "galleryImages": [
      "https://i.ibb.co/3YWrj9fC/Teclado-Xiaomi-Redmi.jpg"
    ],
    "description": "Tablet con precio publicado por Rial Electrónica. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "Negro",
    "specs": [
      "Negro",
      "Marca: Xiaomi",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "tecno-spark-go-1-kl4-rial-0041",
    "name": "Tecno Spark Go 1 KL4",
    "brand": "Tecno",
    "category": "celulares",
    "categorySlug": "celulares",
    "priceUsd": 118,
    "priceUsdt": 118,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/495694a9-305e-4940-b2c5-d685fd5d4a4b/06c20f89-f5ec-42e1-904e-e3d06ce2b912.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/495694a9-305e-4940-b2c5-d685fd5d4a4b/06c20f89-f5ec-42e1-904e-e3d06ce2b912.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/495694a9-305e-4940-b2c5-d685fd5d4a4b/948c6665-564e-45f1-b0f2-2936fad63e0a.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/495694a9-305e-4940-b2c5-d685fd5d4a4b/64c3ced8-64af-4a70-a0db-61bedb4194a8.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/495694a9-305e-4940-b2c5-d685fd5d4a4b/7d2f7d40-b98a-4eb7-bf29-03f5db315a92.png"
    ],
    "description": "Celular con precio informado por la fuente de catálogo. Consultá disponibilidad antes de coordinar la compra.",
    "subtitleSpecs": "4 GB · 64GB",
    "specs": [
      "4 GB · 64GB",
      "Marca: Tecno",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "valve-steam-deck-256gb-16gb-ram-pantalla-7-cargador-3-pines",
    "name": "Valve Steam Deck 256GB 16GB RAM Pantalla 7 pulgadas",
    "brand": "Valve",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 859,
    "priceUsdt": 859,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/859182e1-3b89-4c7a-b2b2-38609eb4ac1e/490322f8-58d8-4097-9572-43bb90a75270.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/859182e1-3b89-4c7a-b2b2-38609eb4ac1e/490322f8-58d8-4097-9572-43bb90a75270.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/859182e1-3b89-4c7a-b2b2-38609eb4ac1e/c1c0660b-85fe-42d1-a432-41f962e81e04.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/859182e1-3b89-4c7a-b2b2-38609eb4ac1e/2d5463c0-aa4f-4702-b45d-0ca2b05eb492.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/859182e1-3b89-4c7a-b2b2-38609eb4ac1e/5a26a182-8cbc-49a5-9147-f080a24c8698.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/859182e1-3b89-4c7a-b2b2-38609eb4ac1e/c0f2b8a3-fa1f-4497-ad24-38cadd0fefc4.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/859182e1-3b89-4c7a-b2b2-38609eb4ac1e/433a8d86-cdde-4d74-92b1-a38f9d5840c8.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "256GB · Negro",
    "specs": [
      "256GB · Negro",
      "Marca: Valve",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "valve-steam-deck-oled-512gb-16gb-ram-pantalla-74-cargardor-3-pines",
    "name": "Valve Steam Deck OLED 512GB 16GB RAM",
    "brand": "Valve",
    "category": "consolas",
    "categorySlug": "consolas",
    "priceUsd": 1121,
    "priceUsdt": 1121,
    "image": "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/fe4fca72-b65f-4e95-bc00-e1568064931a/82dce2a0-a0c0-44bc-becf-841d12f37bd9.png",
    "galleryImages": [
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/fe4fca72-b65f-4e95-bc00-e1568064931a/82dce2a0-a0c0-44bc-becf-841d12f37bd9.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/fe4fca72-b65f-4e95-bc00-e1568064931a/d468afb9-7847-4b7a-b1a2-a3dd573d2404.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/fe4fca72-b65f-4e95-bc00-e1568064931a/71bedbff-5d63-48a6-b316-4855b72d317d.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/fe4fca72-b65f-4e95-bc00-e1568064931a/421575b3-479b-4fba-8767-a9af9ea72b16.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/fe4fca72-b65f-4e95-bc00-e1568064931a/1aeeee51-711f-4273-8d9f-c653fc95f152.png",
      "https://vpjhnpvuhkwpnvurwouz.supabase.co/storage/v1/object/public/product-images/products/fe4fca72-b65f-4e95-bc00-e1568064931a/e3bc5aa6-c440-44d8-8cbd-d8c56bab9e40.png"
    ],
    "description": "Consola original. Consultá disponibilidad y accesorios antes de coordinar la compra.",
    "subtitleSpecs": "512GB · Negro",
    "specs": [
      "512GB · Negro",
      "Marca: Valve",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  },
  {
    "id": "asus-zenbook-pro-duo",
    "name": "Zenbook Pro Duo",
    "brand": "ASUS",
    "category": "notebooks",
    "categorySlug": "notebooks",
    "priceUsd": 2200,
    "priceUsdt": 2200,
    "image": "/products/79.webp",
    "galleryImages": [
      "/products/79.webp"
    ],
    "description": "Notebook de doble pantalla del catálogo ilustrativo. Configuración y disponibilidad sujetas al catálogo real.",
    "subtitleSpecs": "Azul",
    "specs": [
      "Azul",
      "Marca: ASUS",
      "Garantía oficial y cambio directo 7 días",
      "Caja sellada de fábrica con precintos"
    ]
  }
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

export function getProductBySlug(slug: string): Product | undefined {
  return MOCK_FEATURED_PRODUCTS.find(
    (product) =>
      product.id === slug ||
      product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  );
}

export function getAllProductSlugs(): string[] {
  return MOCK_FEATURED_PRODUCTS.map((product) => product.id);
}

export function getRelatedProducts(
  currentProductId: string,
  categorySlug: string,
  limit = 4
): Product[] {
  const sameCategory = MOCK_FEATURED_PRODUCTS.filter(
    (p) => p.id !== currentProductId && p.categorySlug === categorySlug
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const otherProducts = MOCK_FEATURED_PRODUCTS.filter(
    (p) => p.id !== currentProductId && p.categorySlug !== categorySlug
  );

  return [...sameCategory, ...otherProducts].slice(0, limit);
}
