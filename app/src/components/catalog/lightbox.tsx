"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { ButtonLink } from "@/components/ui/button";
import { whatsappLink, orderMessage } from "@/lib/utils";

/** Versión completa (vertical) de una foto para el lightbox. */
function fullImage(image: string): string {
  return image.replace("/products/", "/products/full/");
}

/**
 * Lightbox con galería: muestra las fotos del producto en grande (completas,
 * verticales, sin recortar). Si hay varias, se navega con flechas, puntos o
 * las teclas ← →. Se cierra con X, clic fuera, o Escape.
 */
export function Lightbox({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const images = product?.images ?? [];
  const hasGallery = images.length > 1;

  // Reinicia al abrir un producto distinto.
  useEffect(() => {
    setIdx(0);
  }, [product]);

  // Teclado: Escape cierra, flechas navegan. Bloquea el scroll del fondo.
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasGallery)
        setIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft" && hasGallery)
        setIdx((i) => (i - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose, hasGallery, images.length]);

  if (!product) return null;

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-[var(--radius-nacare)] bg-shell shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-shell/90 text-ink shadow-md transition-colors hover:bg-sand"
        >
          ✕
        </button>

        {/* Imagen grande, completa y vertical */}
        <div className="relative flex max-h-[62vh] w-full items-center justify-center overflow-hidden bg-cream">
          <Image
            key={idx}
            src={fullImage(images[idx])}
            alt={`${product.name} — foto ${idx + 1}`}
            width={1000}
            height={1400}
            sizes="(max-width: 512px) 100vw, 512px"
            className="max-h-[62vh] w-auto object-contain"
          />

          {/* Flechas de galería */}
          {hasGallery && (
            <>
              <button
                onClick={prev}
                aria-label="Foto anterior"
                className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-shell/85 text-lg text-ink shadow-md backdrop-blur transition-colors hover:bg-shell"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Foto siguiente"
                className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-shell/85 text-lg text-ink shadow-md backdrop-blur transition-colors hover:bg-shell"
              >
                ›
              </button>
              {/* Contador */}
              <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-ink/60 px-2.5 py-0.5 text-xs text-shell backdrop-blur">
                {idx + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {/* Puntos de galería */}
        {hasGallery && (
          <div className="flex justify-center gap-1.5 py-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Ver foto ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === idx ? "bg-gold-deep" : "bg-gold/30 hover:bg-gold/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Info + CTA */}
        <div className="space-y-3 p-6 pt-3">
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
              <span key={m} className="rounded-full bg-cream px-2.5 py-1 capitalize">
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
