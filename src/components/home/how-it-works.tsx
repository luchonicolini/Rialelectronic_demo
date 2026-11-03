import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const STEPS = [
  {
    step: "01",
    title: "Encontrá tu modelo o consultanos",
    description:
      "Explorá el catálogo o escribinos directamente indicando el modelo, capacidad y color específico que estás buscando.",
  },
  {
    step: "02",
    title: "Confirmamos stock y cotización",
    description:
      "Te confirmamos disponibilidad real, fotos del equipo y congelamos el importe final en dólares, pesos o USDT.",
  },
  {
    step: "03",
    title: "Retiro coordinado o envío asegurado",
    description:
      "Gestionamos retiro acordado en mano o despacho protegido por Andreani con seguimiento en tiempo real a todo el país.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-comprar" className="bg-background py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Encabezado Editorial Responsive */}
        <div className="mb-8 max-w-2xl sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-extrabold tracking-[-0.03em] text-foreground leading-[1.12]">
            Cómo comprar con{" "}
            <span className="font-serif italic font-normal text-[1.08em] tracking-normal text-foreground">
              tranquilidad.
            </span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
            Certezas operativas claras y atención personalizada antes de transferir.
          </p>
        </div>

        {/* Tres Columnas Editoriales Responsive */}
        <div className="grid grid-cols-1 divide-y divide-border pt-2 md:grid-cols-3 md:divide-y-0 md:divide-x md:divide-border sm:pt-4">
          {STEPS.map((step, index) => (
            <div
              key={step.step}
              className={`flex flex-col ${
                index === 0
                  ? "pb-6 sm:pb-8 md:pb-0 md:pr-8 lg:pr-12"
                  : index === 1
                  ? "py-6 sm:py-8 md:py-0 md:px-8 lg:px-12"
                  : "pt-6 sm:pt-8 md:pt-0 md:pl-8 lg:pl-12"
              }`}
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                Paso {step.step}
              </span>
              <h3 className="mt-1.5 text-base font-bold tracking-tight text-foreground sm:mt-2 sm:text-lg lg:text-xl">
                {step.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center sm:mt-12">
          <a
            href={whatsappUrl("¡Hola Rial Electrónica! Quiero consultar el proceso de compra de un equipo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-control bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-95 sm:w-auto"
          >
            Iniciar consulta por WhatsApp
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
