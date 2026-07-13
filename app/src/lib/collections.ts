import { products, type Product } from "@/data/products";

/** Metadata de cada colección para la vista de catálogo. */
export interface CollectionInfo {
  name: string;
  slug: string;
  tagline: string;
  emoji: string;
  products: Product[];
}

/** Convierte un nombre de colección en slug URL-safe. */
export function collectionSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // quita acentos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Descripción corta por colección (para el preview del main). */
const taglines: Record<string, { tagline: string; emoji: string }> = {
  Bubblegum: {
    tagline: "Collares de cuentas grandes y colores que enamoran.",
    emoji: "🍬",
  },
  "Perla de Mar": {
    tagline: "Piezas finas y delicadas con el alma del mar.",
    emoji: "🐚",
  },
  Kids: {
    tagline: "Collares tiernos y coloridos para las más pequeñas.",
    emoji: "🌸",
  },
  "Fiestas del Mar": {
    tagline: "Edición especial inspirada en el Caribe.",
    emoji: "🌊",
  },
};

/** Todas las colecciones con sus productos, en orden de aparición. */
export function getCollections(): CollectionInfo[] {
  const names = [...new Set(products.map((p) => p.collection))];
  return names.map((name) => ({
    name,
    slug: collectionSlug(name),
    tagline: taglines[name]?.tagline ?? "Piezas hechas a mano con amor.",
    emoji: taglines[name]?.emoji ?? "🐚",
    products: products.filter((p) => p.collection === name),
  }));
}

/** Busca una colección por su slug. */
export function getCollectionBySlug(slug: string): CollectionInfo | undefined {
  return getCollections().find((c) => c.slug === slug);
}
