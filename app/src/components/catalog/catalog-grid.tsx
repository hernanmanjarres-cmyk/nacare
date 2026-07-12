"use client";

import { useState } from "react";
import { products, collections } from "@/data/products";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";

/** Grid del catálogo con filtro por colección. */
export function CatalogGrid() {
  const [active, setActive] = useState<string>("Todas");

  const filters = ["Todas", ...collections];
  const visible =
    active === "Todas"
      ? products
      : products.filter((p) => p.collection === active);

  return (
    <div className="space-y-8">
      {/* Filtros de colección */}
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all",
              active === f
                ? "border-gold-deep bg-gold-deep text-shell"
                : "border-gold/25 bg-shell text-ink-soft hover:border-gold hover:text-ink",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
