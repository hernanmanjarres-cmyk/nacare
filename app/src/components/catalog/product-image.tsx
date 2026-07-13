"use client";

import { useState } from "react";
import Image from "next/image";
import { type Product, mainImage } from "@/data/products";

/** Mapea nombres de color en español a valores CSS para el placeholder. */
const colorMap: Record<string, string> = {
  "blanco perla": "#f2ede4",
  rojo: "#c0392b",
  "nácar": "#e8dccb",
  "verde oliva": "#6b7a4c",
  terracota: "#b5652e",
  crema: "#f7f1e8",
  turquesa: "#40c4b0",
  rosa: "#e9a6c4",
  naranja: "#e08a3c",
  blanco: "#f7f1e8",
  dorado: "#c9a86a",
  azul: "#4a7fb5",
  marrón: "#8a5a3c",
  vino: "#7a2e3a",
  lila: "#c6a4d9",
  durazno: "#f0b89a",
  "café": "#6f4e37",
  marfil: "#f0e8d8",
  amarillo: "#e8c547",
  morado: "#8e5aa8",
  "azul marino": "#2a3f6b",
  "azul cielo": "#9cc4e0",
  plateado: "#c8c8cc",
  "verde jade": "#6ba583",
  verde: "#5a8a5a",
};

function toCss(color: string): string {
  return colorMap[color.toLowerCase()] ?? "#c9a86a";
}

/**
 * Imagen de producto con degradación elegante.
 * Si la foto real (/public/products/*.jpg) no existe todavía, muestra un
 * placeholder con gradiente de los colores reales de la pieza — así el catálogo
 * se ve bien HOY sin fotos, y aparecen solas cuando se suban.
 */
export function ProductImage({ product }: { product: Product }) {
  const [failed, setFailed] = useState(false);

  const stops = product.colors.slice(0, 3).map(toCss);
  const gradient =
    stops.length >= 2
      ? `linear-gradient(135deg, ${stops.join(", ")})`
      : `linear-gradient(135deg, ${stops[0] ?? "#c9a86a"}, #efe6da)`;

  if (failed) {
    return (
      <div
        className="relative flex h-full w-full items-center justify-center"
        style={{ background: gradient }}
        role="img"
        aria-label={`${product.name} — foto próximamente`}
      >
        <div className="rounded-full bg-shell/70 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-ink backdrop-blur">
          🐚 Nacaré
        </div>
      </div>
    );
  }

  return (
    <Image
      src={mainImage(product)}
      alt={product.name}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
