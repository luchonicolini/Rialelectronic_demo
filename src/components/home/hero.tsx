import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24 lg:pt-20 xl:px-14">
        <div className="flex flex-col justify-center lg:col-span-6">
          <h1
            id="hero-title"
            className="max-w-[13ch] text-display font-semibold tracking-[-0.035em] text-balance"
          >
            La tecnología que buscás.{" "}
            <span className="underline decoration-[0.045em] underline-offset-[0.12em]">
              Más cerca.
            </span>
          </h1>

          <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explorá nuestro catálogo y consultanos directamente por WhatsApp.
            La consulta se coordina con el negocio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles("primary")}
            >
              Consultar por WhatsApp
              <ArrowUpRightIcon className="size-4" />
              <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>
            <Link href="/catalogo" className={buttonStyles("secondary")}>
              Explorar catálogo
            </Link>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Demo no oficial. No procesa pagos ni confirma stock.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="flex aspect-[4/5] w-full flex-col justify-between overflow-hidden rounded-card border border-border bg-elevated p-5 sm:aspect-[16/10] lg:aspect-square lg:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Imagen 01 · pendiente
            </p>

            <div className="max-w-[26ch]">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Fotografía de producto pendiente de licencia y aprobación.
              </p>
              <div className="mt-4 h-px w-full bg-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
