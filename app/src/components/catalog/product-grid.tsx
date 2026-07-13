"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "./product-card";
import { Lightbox } from "./lightbox";

/**
 * Grid de productos con lightbox. Reutilizable en el preview del main y en las
 * páginas de colección. Recibe la lista de productos a mostrar.
 */
export function ProductGrid({ items }: { items: Product[] }) {
  const [zoomed, setZoomed] = useState<Product | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} onZoom={() => setZoomed(p)} />
        ))}
      </div>
      <Lightbox product={zoomed} onClose={() => setZoomed(null)} />
    </>
  );
}
