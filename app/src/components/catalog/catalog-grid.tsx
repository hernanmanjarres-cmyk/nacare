import Link from "next/link";
import { getCollections } from "@/lib/collections";
import { ProductGrid } from "./product-grid";

/**
 * Vista del catálogo en el main: por cada colección muestra un preview de las
 * primeras piezas + un botón "Ver toda la colección" que lleva a su página.
 * Así el main no se sobrecarga aunque haya decenas de piezas.
 */
export function CatalogGrid({ previewCount = 3 }: { previewCount?: number }) {
  const collections = getCollections();

  return (
    <div className="space-y-16">
      {collections.map((c) => {
        const preview = c.products.slice(0, previewCount);
        const hasMore = c.products.length > previewCount;

        return (
          <section key={c.slug}>
            {/* Encabezado de la colección */}
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {c.emoji} {c.name}
                </h3>
                <p className="text-sm text-ink-soft">{c.tagline}</p>
              </div>
              <Link
                href={`/coleccion/${c.slug}`}
                className="shrink-0 rounded-full border border-gold-deep/40 px-4 py-2 text-sm text-clay transition-colors hover:border-gold-deep hover:bg-sand"
              >
                Ver toda la colección ({c.products.length}) →
              </Link>
            </div>

            <ProductGrid items={preview} />
          </section>
        );
      })}
    </div>
  );
}
