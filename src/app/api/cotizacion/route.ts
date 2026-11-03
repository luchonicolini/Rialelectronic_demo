import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/cripto", {
      next: { revalidate: 300 },
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`DolarApi responded with status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      compra: data.compra,
      venta: data.venta,
      fechaActualizacion: data.fechaActualizacion,
      fuente: "DolarApi (Dólar Cripto / USDT)",
      status: "live",
    });
  } catch {
    // Respaldo de seguridad en caso de falla externa de red
    return NextResponse.json(
      {
        compra: 1650,
        venta: 1660,
        fechaActualizacion: new Date().toISOString(),
        fuente: "Valor de referencia estimado",
        status: "fallback",
      },
      { status: 200 }
    );
  }
}
