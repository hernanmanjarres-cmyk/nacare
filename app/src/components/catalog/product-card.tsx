"use client";

import type { Product } from "@/data/products";
import { ProductImage } from "./product-image";
import { ButtonLink } from "@/components/ui/button";
import { whatsappLink, orderMessage } from "@/lib/utils";

/**
 * Tarjeta de producto. El botón "Pedir por WhatsApp" pre-arma el mensaje con el
 * nombre de la pieza → resuelve el dolor #1 del negocio (la gente pregunta precio
 * y no recibe respuesta). Ahora piden ordenado, en un click.
 *
 * onZoom: abre la foto en grande (lightbox) al hacer clic en la imagen.
 */
export function ProductCard({
  product,
  onZoom,
}: {
  product: Product;
  onZoom?: () => void;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[var(--radius-nacare)] border border-gold/15 bg-shell shadow-sm transition-shadow duration-300 hover:shadow-xl">
      <button
        type="button"
        onClick={onZoom}
        aria-label={`Ver ${product.name} en grande`}
        className="relative block aspect-square cursor-zoom-in overflow-hidden"
      >
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <ProductImage product={product} />
        </div>

        {/* Hint de zoom al hacer hover */}
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-shell/85 text-ink opacity-0 shadow-md backdrop-blur transition-opacity group-hover:opacity-100">
          🔍
        </span>

        {/* Badges de estado */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {!product.available && (
            <span className="rounded-full bg-ink/80 px-2.5 py-1 text-[0.65rem] font-medium text-shell backdrop-blur">
              Agotado
            </span>
          )}
          {product.customizable && (
            <span className="rounded-full bg-gold/90 px-2.5 py-1 text-[0.65rem] font-medium text-ink backdrop-blur">
              Personalizable
            </span>
          )}
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="space-y-1">
          <p className="text-[0.68rem] font-medium uppercase tracking-widest text-gold-deep">
            {product.collection}
          </p>
          <h3 className="font-display text-lg font-semibold text-ink">
            {product.name}
          </h3>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-ink-soft">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-medium text-clay">
            {product.price
              ? new Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                  maximumFractionDigits: 0,
                }).format(product.price)
              : "Precio por WhatsApp"}
          </span>
        </div>

        <ButtonLink
          href={whatsappLink(orderMessage(product.name))}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          size="sm"
          className="w-full"
        >
          {product.customizable ? "Pedir / personalizar" : "Pedir por WhatsApp"}
        </ButtonLink>
      </div>
    </article>
  );
}
