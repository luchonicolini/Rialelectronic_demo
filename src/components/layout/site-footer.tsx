import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#111318] text-white pt-16 pb-8 transition-colors">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Grilla Principal del Footer (Idéntica a Nicolini Import) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">
          {/* Columna 1: Brand & About (ocupa 2 columnas en desktop) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                aria-label="Rial Electrónica, inicio"
                className="inline-flex flex-col gap-1.5 leading-none group"
              >
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-baseline">
                  rial<span className="text-[var(--accent)] font-serif italic text-4xl">.</span>
                </span>
                <span className="text-[10px] font-semibold tracking-[0.44em] uppercase text-[#c3c5c9]">
                  electrónica
                </span>
              </Link>

              <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-[#c3c5c9]">
                Tecnología importada con atención directa. Stock confirmado,
                precios claros y entrega coordinada en todo el país.
              </p>
            </div>

            {/* Redes Sociales en Cápsulas */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={whatsappUrl("¡Hola Rial Electrónica! Quiero consultar disponibilidad de productos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-full border border-white/15 text-xs font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/30"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41" />
                </svg>
                WhatsApp
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-full border border-white/15 text-xs font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/30"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3.5 shrink-0"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-full border border-white/15 text-xs font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/30"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3.5 shrink-0"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* Columna 2: Catálogo */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-tight mb-4">
              Catálogo
            </h3>
            <ul className="space-y-2.5 text-xs text-[#c3c5c9]">
              <li>
                <Link href="/catalogo?categoria=celulares" className="hover:text-white transition-colors">
                  Celulares
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=notebooks" className="hover:text-white transition-colors">
                  Notebooks
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=consolas" className="hover:text-white transition-colors">
                  Consolas
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=audio" className="hover:text-white transition-colors">
                  Audio & Hi-Fi
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=smart-tv" className="hover:text-white transition-colors">
                  Smart TV
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=tablets" className="hover:text-white transition-colors">
                  Tablets
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ayuda */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-tight mb-4">
              Ayuda
            </h3>
            <ul className="space-y-2.5 text-xs text-[#c3c5c9]">
              <li>
                <Link href="/como-comprar" className="hover:text-white transition-colors">
                  Cómo comprar
                </Link>
              </li>
              <li>
                <Link href="/envios" className="hover:text-white transition-colors">
                  Envíos y retiros
                </Link>
              </li>
              <li>
                <Link href="/cambios" className="hover:text-white transition-colors">
                  Garantía y cambios
                </Link>
              </li>
              <li>
                <Link href="/ayuda" className="hover:text-white transition-colors">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Legales */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-tight mb-4">
              Legales
            </h3>
            <ul className="space-y-2.5 text-xs text-[#c3c5c9]">
              <li>
                <Link href="/terminos" className="hover:text-white transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <a
                  href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Defensa del Consumidor</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-3"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 5: Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-tight mb-4">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-xs text-[#c3c5c9]">
              <li>
                <a
                  href={whatsappUrl("¡Hola Rial Electrónica! Quiero hacer una consulta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-semibold text-white"
                >
                  Escribinos por WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.instagramHandle}
                </a>
              </li>
              <li>
                <span>Lun a sáb · 10 a 19 h</span>
              </li>
            </ul>

            {/* Medios de Pago en Chips */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <span className="block text-[11px] font-semibold text-[#c3c5c9] mb-2 uppercase tracking-wider">
                Operaciones
              </span>
              <div className="flex flex-wrap gap-1.5" aria-label="Medios de pago">
                <span className="px-2.5 py-1 rounded-md border border-white/15 text-[11px] font-medium text-[#c3c5c9]">
                  Transferencia
                </span>
                <span className="px-2.5 py-1 rounded-md border border-white/15 text-[11px] font-medium text-[#c3c5c9]">
                  USDT
                </span>
                <span className="px-2.5 py-1 rounded-md border border-white/15 text-[11px] font-medium text-[#c3c5c9]">
                  USD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior Legal y Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#c3c5c9]">
          <span>© 2026 Rial Electrónica · Buenos Aires, Argentina</span>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/terminos" className="hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <span className="text-white/40">·</span>
            <span className="text-white/70">Propuesta de diseño no oficial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
