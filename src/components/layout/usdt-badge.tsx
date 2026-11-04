"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

interface CotizacionData {
  venta: number;
  compra: number;
  fechaActualizacion: string;
  fuente: string;
  status: "live" | "fallback";
}

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

const DEFAULT_COTIZACION: CotizacionData = {
  venta: 1659.45,
  compra: 1654.13,
  fechaActualizacion: "2026-11-04T12:00:00.000Z",
  fuente: "DolarApi (Dólar Cripto / USDT)",
  status: "live",
};

export function UsdtBadge({ className = "" }: { className?: string }) {
  const [data, setData] = useState<CotizacionData>(DEFAULT_COTIZACION);
  const isClient = useIsClient();

  useEffect(() => {
    let isMounted = true;

    async function fetchCotizacion() {
      try {
        const res = await fetch("/api/cotizacion");
        if (!res.ok) return;
        const json = await res.json();
        if (isMounted && json.venta) {
          setData(json);
        }
      } catch {
        // Mantiene el valor por defecto si falla la red
      }
    }

    fetchCotizacion();
    // Actualizar cada 5 minutos mientras la pestaña esté abierta
    const interval = setInterval(fetchCotizacion, 5 * 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(data.venta);

  let formattedTime = "";
  try {
    formattedTime = new Date(data.fechaActualizacion).toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    formattedTime = "Reciente";
  }

  const tooltipText = `USDT Venta: $${formattedPrice} · Fuente: ${data.fuente}${
    isClient && formattedTime ? ` (${formattedTime} hs)` : ""
  }`;

  return (
    <div
      title={tooltipText}
      className={`inline-flex items-center gap-2 rounded-control border border-border bg-elevated/40 px-3 text-xs tracking-tight select-none cursor-default transition-colors hover:border-foreground/30 ${className}`}
    >
      <span
        data-status-dot={data.status === "live" ? "live" : undefined}
        className={`size-1.5 rounded-full shrink-0 ${
          data.status === "live"
            ? "bg-emerald-600 dark:bg-emerald-400"
            : "bg-amber-500"
        }`}
        aria-hidden="true"
      />
      <span className="font-medium text-muted-foreground">USDT</span>
      <span className="font-semibold text-foreground tabular-nums">
        ${formattedPrice}
      </span>
    </div>
  );
}
