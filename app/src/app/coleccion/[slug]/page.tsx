import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollections, getCollectionBySlug } from "@/lib/collections";
import { ProductGrid } from "@/components/catalog/product-grid";
import { HeroVideo } from "@/components/brand/hero-video";

// Pre-genera una página por cada colección en el build.
export function generateStaticParams() {
  return getCollections().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Colección · Nacaré" };
  return {
    title: `${collection.name} · Nacaré`,
    description: collection.tagline,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  return (
    <div>
      {/* Encabezado con video de olas */}
      <section className="relative overflow-hidden px-4 py-14 text-center sm:px-6">
        <HeroVideo />
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#catalogo"
            className="mb-4 inline-block text-sm text-gold-deep hover:text-gold"
          >
            ← Volver al catálogo
          </Link>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-5xl">
            {collection.emoji} {collection.name}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-ink-soft">
            {collection.tagline}
          </p>
          <p className="mt-2 text-sm text-ink-soft/70">
            {collection.products.length} piezas
          </p>
        </div>
      </section>

      {/* Todas las piezas de la colección */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <ProductGrid items={collection.products} />
      </div>
    </div>
  );
}
