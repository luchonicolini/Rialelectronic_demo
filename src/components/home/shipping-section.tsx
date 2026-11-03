import Image from "next/image";
import { Truck, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function ShippingSection() {
  return (
    <section id="envios" className="py-14 sm:py-20 border-b border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <BlurReveal duration={0.65} yOffset={24}>
          <div className="rounded-3xl border border-border bg-background p-6 sm:p-10 lg:p-12 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Foto de Logística */}
              <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-square w-full rounded-2xl overflow-hidden bg-elevated border border-border shadow-md">
                <Image
                  src="/images/delivery-package.jpg"
                  alt="Paquetes de tecnología preparados para despacho seguro"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 z-10 text-xs font-semibold text-white/95 bg-black/60 px-3.5 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                  Coordinación personalizada por WhatsApp
                </span>
              </div>

              {/* Texto y Rutas */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Logística y cobertura
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                  Recibilo donde estés, sin{" "}
                  <span className="font-serif italic font-normal tracking-normal text-[var(--accent)]">
                    complicaciones.
                  </span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Despachamos a todo el territorio nacional con seguro contra extravío y roturas.
                  También disponemos de retiros acordados con cita previa.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-[var(--accent)]">
                    <div className="size-10 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
                      <Truck className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        Envío a tu domicilio (Todo el país)
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Por Andreani y Correo Argentino. Con número de guía para seguimiento online en tiempo real desde el despacho.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-[var(--accent)]">
                    <div className="size-10 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        Retiro coordinado
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Punto seguro de encuentro con horario y fecha acordada de antemano para revisar el producto antes de abonar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-[var(--accent)]">
                    <div className="size-10 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
                      <ShieldCheck className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        Seguro integral de transporte
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Tu equipo viaja embalado con triple protección y asegurado por el 100% de su valor comercial.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappUrl("¡Hola Rial Electrónica! Quiero consultar el costo y plazo de envío a mi localidad.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-bold text-white shadow-xs hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                  >
                    Consultar opciones para mi localidad
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
