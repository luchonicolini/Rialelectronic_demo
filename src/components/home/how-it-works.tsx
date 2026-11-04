import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const STEPS = [
  {
    step: "01",
    badge: "Inmediato",
    tag: "Consulta online",
    title: "Pedí cotización y verificá stock",
    description:
      "Seleccioná los equipos de tu interés en el catálogo y consultanos por WhatsApp. Verificamos número de serie, fotos reales del empaque y disponibilidad física al instante.",
  },
  {
    step: "02",
    badge: "Despacho en 24 hs",
    tag: "Pesos / Cripto USDT",
    title: "Pagá por transferencia o USDT",
    description:
      "Congelamos la cotización acordada sin recargos sorpresa. Abonás mediante transferencia bancaria o USDT y despachamos dentro de las 24 hs hábiles.",
  },
  {
    step: "03",
    badge: "Entrega de 3 a 5 días",
    tag: "Tracking en tiempo real",
    title: "Recibí con seguimiento asegurado",
    description:
      "Enviamos tu paquete protegido a todo el país mediante Vía Cargo, Andreani o Correo Argentino con código de seguimiento en vivo, o bien coordinamos retiro en mano.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-comprar" className="bg-background py-10 sm:py-16 lg:py-20 border-b border-border">
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
            Certezas operativas claras, fotos reales del producto y atención personalizada antes de abonar.
          </p>
        </div>

        {/* Tres Columnas Editoriales Responsive con Insignias de Certeza */}
        <div className="grid grid-cols-1 divide-y divide-border pt-2 md:grid-cols-3 md:divide-y-0 md:divide-x md:divide-border sm:pt-4">
          {STEPS.map((step, index) => (
            <div
              key={step.step}
              className={`flex flex-col justify-between ${
                index === 0
                  ? "pb-6 sm:pb-8 md:pb-0 md:pr-8 lg:pr-12"
                  : index === 1
                  ? "py-6 sm:py-8 md:py-0 md:px-8 lg:px-12"
                  : "pt-6 sm:pt-8 md:pt-0 md:pl-8 lg:pl-12"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs">
                    Paso {step.step}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] font-semibold text-foreground shadow-2xs">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg lg:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-foreground/80">{step.tag}</span>
                <span className="text-[11px] text-muted-foreground/70">Operación directa</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de Acción */}
        <div className="mt-8 flex items-center sm:mt-12">
          <a
            href={whatsappUrl("¡Hola Rial Electrónica! Quiero consultar el proceso de compra y cotización de un equipo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-control bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-95 sm:w-auto shadow-xs"
          >
            Iniciar consulta por WhatsApp
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
