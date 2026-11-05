import { NextResponse } from "next/server";

export async function GET() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const response = await fetch("https://dolarapi.com/v1/dolares/cripto", {
      next: { revalidate: 300 },
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`DolarApi responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (
      typeof data?.venta !== "number" ||
      typeof data?.compra !== "number" ||
      data.venta <= 0
    ) {
      throw new Error("Invalid payload format received from DolarApi");
    }

    return NextResponse.json(
      {
        compra: data.compra,
        venta: data.venta,
        fechaActualizacion: data.fechaActualizacion || new Date().toISOString(),
        fuente: "DolarApi (Dólar Cripto / USDT)",
        status: "live",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch {
    // Respaldo de seguridad en caso de falla externa de red o timeout
    return NextResponse.json(
      {
        compra: 1650,
        venta: 1660,
        fechaActualizacion: new Date().toISOString(),
        fuente: "Valor de referencia estimado",
        status: "fallback",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  }
}
