"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { ButtonLink } from "@/components/ui/button";
import { whatsappLink, orderMessage } from "@/lib/utils";

/**
 * Lightbox: muestra la foto de un producto en grande sobre un fondo oscuro.
 * Se cierra con la X, con clic fuera de la imagen, o con la tecla Escape.
 */
export function Lightbox({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  // Cerrar con Escape + bloquear el scroll del fondo mientras está abierto.
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-[var(--radius-nacare)] bg-shell shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-shell/90 text-ink shadow-md transition-colors hover:bg-sand"
        >
          ✕
        </button>

        {/* Imagen grande */}
        <div className="relative aspect-square w-full bg-cream">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 512px) 100vw, 512px"
            className="object-contain"
          />
        </div>

        {/* Info + CTA */}
        <div className="space-y-3 p-6">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-widest text-gold-deep">
              {product.collection}
            </p>
            <h3 className="font-display text-2xl font-semibold text-ink">
              {product.name}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-ink-soft">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-xs text-ink-soft">
            {product.materials.map((m) => (
              <span
                key={m}
                className="rounded-full bg-cream px-2.5 py-1 capitalize"
              >
                {m}
              </span>
            ))}
          </div>
          <ButtonLink
            href={whatsappLink(orderMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            className="mt-2 w-full"
          >
            {product.customizable ? "Pedir / personalizar" : "Pedir por WhatsApp"}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
