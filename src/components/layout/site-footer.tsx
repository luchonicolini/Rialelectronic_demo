import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface text-foreground transition-colors">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
              Rial Electrónica
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Equipos de tecnología importada, nuevos y cerrados en caja con garantía.
              Atención directa y personalizada en cada operación.
            </p>
            <span className="mt-4 inline-block rounded-md bg-elevated px-2.5 py-1 text-xs font-semibold text-muted-foreground border border-border">
              USDT · USD · Transferencia
            </span>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-foreground transition-colors">
                  Catálogo de productos
                </Link>
              </li>
              <li>
                <Link href="/#como-comprar" className="hover:text-foreground transition-colors">
                  Cómo comprar
                </Link>
              </li>
              <li>
                <Link href="/#envios" className="hover:text-foreground transition-colors">
                  Opciones de envío y retiro
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Categorías Populares */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Categorías
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/catalogo?categoria=celulares" className="hover:text-foreground transition-colors">
                  Celulares (iPhone / Samsung)
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=notebooks" className="hover:text-foreground transition-colors">
                  Notebooks (MacBook / ASUS)
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=consolas" className="hover:text-foreground transition-colors">
                  Consolas (PlayStation / Switch)
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=audio" className="hover:text-foreground transition-colors">
                  Audio & Hi-Fi (JBL)
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Atención Directa
            </h4>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Escribinos por WhatsApp para cotizaciones, fotos reales y disponibilidad en el acto.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--accent)] px-4 text-xs font-bold text-white shadow-xs hover:opacity-95"
            >
              Iniciar chat de WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Rial Electrónica. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right">
            Propuesta de diseño y desarrollo digital para presentación comercial.
          </p>
        </div>
      </div>
    </footer>
  );
}
