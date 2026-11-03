import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-hidden border-b border-border"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-4 pb-14 pt-8 sm:px-6 lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:px-10 lg:pb-20 lg:pt-16 xl:px-14">
        <div className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:pr-12">
          <h1
            id="hero-title"
            className="text-display font-semibold tracking-[-0.03em]"
          >
            <span className="block">La tecnología</span>
            <span className="block">que buscás.</span>
            <span className="block">Más cerca.</span>
          </h1>

          <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explorá el catálogo y consultanos por WhatsApp. La operación se
            coordina directamente con el negocio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-7">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles("primary")}
            >
              Pedir cotización
              <ArrowUpRightIcon className="size-4" />
              <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>
            <Link
              href="/catalogo"
              className="inline-flex h-12 items-center text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Ver catálogo
            </Link>
          </div>

          <p className="mt-6 max-w-[52ch] text-xs leading-relaxed text-muted-foreground">
            Se abre WhatsApp con el mensaje listo para enviar. Demo no oficial:
            no procesa pagos ni confirma stock.
          </p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:-mr-10 lg:-ml-10 xl:-mr-14">
          <figure className="flex aspect-[4/3] w-full flex-col justify-end bg-elevated p-5 sm:aspect-[2/1] lg:aspect-square lg:p-6">
            <figcaption className="border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
              Fotografía de producto pendiente de licencia y aprobación.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
