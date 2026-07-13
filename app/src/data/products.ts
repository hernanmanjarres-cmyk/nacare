/**
 * Catálogo de productos de Nacaré.Sm — fuente de verdad compartida.
 *
 * Fotos ORIGINALES de la marca (Google Drive), agrupadas por colección real:
 * Bubblegum (cuentas grandes), Perla de Mar (finos/delicados) y Kids (infantil).
 *
 * Modelo "ecommerce-ready": guarda price y stock desde el día 1 aunque la v1 los
 * mantenga por WhatsApp (como en su IG). Cuando se active precio/panel admin en un
 * reto futuro, no hay que reescribir el modelo.
 *
 * Usado por: P2 (catálogo), P1 (chatbot lo lee como conocimiento), P3 (quiz recomienda piezas).
 */

export type ProductType = "collar" | "pulsera" | "anillo" | "aretes" | "set";

export interface Product {
  id: string;
  name: string;
  collection: string;
  type: ProductType;
  materials: string[];
  colors: string[];
  description: string;
  /** Precio en COP. `null` = "consultar por WhatsApp". */
  price: number | null;
  available: boolean;
  customizable: boolean;
  image: string;
  /** Palabras clave para el quiz y el buscador. */
  vibes: string[];
}

export const products: Product[] = [
  // ─────────────────────────── BUBBLEGUM ───────────────────────────
  {
    id: "bubblegum-marron-corazon",
    name: "Collar Cacao con Corazón",
    collection: "Bubblegum",
    type: "collar",
    materials: ["cuentas bubblegum", "corazón dorado"],
    colors: ["marrón", "dorado"],
    description:
      "Cuentas grandes en tono cacao con un corazón dorado que roba miradas. Un statement cálido y elegante. 🤎",
    price: null,
    available: true,
    customizable: false,
    image: "/products/bubblegum-marron-corazon.jpg",
    vibes: ["statement", "cálida", "elegante", "atrevida"],
  },
  {
    id: "perla-grande",
    name: "Collar Perla Bubblegum",
    collection: "Bubblegum",
    type: "collar",
    materials: ["perla grande"],
    colors: ["blanco perla"],
    description:
      "Perlas grandes para las que aman lo clásico con un toque moderno. Atemporal y con carácter. 🤍",
    price: null,
    available: true,
    customizable: false,
    image: "/products/perla-grande.jpg",
    vibes: ["clásica", "elegante", "sofisticada", "romántica"],
  },
  {
    id: "perla-concha-nacar",
    name: "Collar Perla de Nácar",
    collection: "Perla de Mar",
    type: "collar",
    materials: ["perla", "concha de nácar"],
    colors: ["blanco perla", "nácar"],
    description:
      "Perlas con un dije de concha de nácar, el alma de la marca. Elegancia con corazón costero. 🐚",
    price: null,
    available: true,
    customizable: false,
    image: "/products/perla-concha-nacar.jpg",
    vibes: ["elegante", "costera", "romántica", "sofisticada"],
  },
  {
    id: "bubblegum-menta-estrella",
    name: "Collar Menta Estrella",
    collection: "Bubblegum",
    type: "collar",
    materials: ["cuentas bubblegum", "estrella dorada"],
    colors: ["verde menta", "dorado"],
    description:
      "Verde menta fresco con una estrella de mar dorada. Todo el veraneo en una pieza. 🌊",
    price: null,
    available: true,
    customizable: true,
    image: "/products/bubblegum-menta-estrella.jpg",
    vibes: ["playera", "veraniega", "marina", "alegre"],
  },
  {
    id: "bubblegum-oliva-sol",
    name: "Collar Oliva Sol",
    collection: "Bubblegum",
    type: "collar",
    materials: ["cuentas bubblegum", "sol dorado"],
    colors: ["verde oliva", "dorado"],
    description:
      "Tonos tierra en verde oliva con un sol dorado que ilumina cualquier look. Natural y con luz propia. ☀️",
    price: null,
    available: true,
    customizable: true,
    image: "/products/bubblegum-oliva-sol.jpg",
    vibes: ["natural", "boho", "terrenal", "cálida"],
  },
  {
    id: "bubblegum-azul-rey",
    name: "Collar Azul Rey",
    collection: "Bubblegum",
    type: "collar",
    materials: ["cuentas bubblegum"],
    colors: ["azul rey"],
    description:
      "Azul intenso y profundo, como el mar de Santa Marta al atardecer. Puro statement. 💙",
    price: null,
    available: true,
    customizable: true,
    image: "/products/bubblegum-azul-rey.jpg",
    vibes: ["statement", "vibrante", "atrevida", "marina"],
  },
  {
    id: "bubblegum-estrella-mar",
    name: "Collar Fiesta del Mar",
    collection: "Fiestas del Mar",
    type: "collar",
    materials: ["cuentas bubblegum", "estrella de mar esmaltada"],
    colors: ["rojo", "verde menta", "turquesa"],
    description:
      "Rojo y menta con una estrella de mar esmaltada. Edición Fiestas del Mar, pura alegría costeña. ⭐",
    price: null,
    available: true,
    customizable: false,
    image: "/products/bubblegum-estrella-mar.jpg",
    vibes: ["festiva", "vibrante", "playera", "alegre"],
  },
  {
    id: "bubblegum-bicolor-cielo",
    name: "Collar Cielo y Sol",
    collection: "Bubblegum",
    type: "collar",
    materials: ["cuentas bubblegum bicolor"],
    colors: ["azul cielo", "amarillo"],
    description:
      "Bicolor en azul cielo y amarillo sol. Personalízalo con tus colores favoritos. 💫",
    price: null,
    available: true,
    customizable: true,
    image: "/products/bubblegum-bicolor-cielo.jpg",
    vibes: ["divertida", "juvenil", "personalizable", "expresiva"],
  },
  {
    id: "bubblegum-rosa-estrella",
    name: "Collar Rosa Estrella",
    collection: "Bubblegum",
    type: "collar",
    materials: ["cuentas bubblegum", "estrella rosa"],
    colors: ["rosa"],
    description:
      "Rosa dulce con una estrella de mar a juego. Femenino, tierno y muy trendy. 🌸",
    price: null,
    available: true,
    customizable: false,
    image: "/products/bubblegum-rosa-estrella.jpg",
    vibes: ["dulce", "romántica", "juvenil", "tierna"],
  },
  {
    id: "bubblegum-lila",
    name: "Collar Lila",
    collection: "Bubblegum",
    type: "collar",
    materials: ["cuentas bubblegum"],
    colors: ["lila", "morado"],
    description:
      "Lila suave que combina con todo. Delicado y soñador para el día a día. 💜",
    price: null,
    available: true,
    customizable: true,
    image: "/products/bubblegum-lila.jpg",
    vibes: ["soñadora", "dulce", "cotidiana", "tierna"],
  },
  {
    id: "bubblegum-arbol-vida",
    name: "Collar Árbol de la Vida",
    collection: "Bubblegum",
    type: "collar",
    materials: ["cuentas bubblegum crema", "árbol de la vida"],
    colors: ["crema", "dorado"],
    description:
      "Cuentas color crema con el dije del árbol de la vida. Un símbolo de raíces y crecimiento. 🌳",
    price: null,
    available: true,
    customizable: false,
    image: "/products/bubblegum-arbol-vida.jpg",
    vibes: ["significativa", "natural", "elegante", "regalo"],
  },
  {
    id: "bubblegum-beige-medallon",
    name: "Collar Doble Medallón Mar",
    collection: "Fiestas del Mar",
    type: "collar",
    materials: ["cuentas bubblegum", "cadena", "medallón esmaltado"],
    colors: ["beige", "dorado"],
    description:
      "Cuentas beige con cadena y medallón de mar esmaltado. Dos texturas, un solo encanto. 🐚",
    price: null,
    available: true,
    customizable: false,
    image: "/products/bubblegum-beige-medallon.jpg",
    vibes: ["elegante", "marina", "sofisticada", "única"],
  },

  // ─────────────────────────── PERLA DE MAR (finos) ───────────────────────────
  {
    id: "fino-cola-ballena",
    name: "Cadena Cola de Ballena",
    collection: "Perla de Mar",
    type: "collar",
    materials: ["cadena dorada", "dije cola de ballena"],
    colors: ["dorado"],
    description:
      "Cadena fina y delicada con un dije de cola de ballena. Minimalismo con alma de mar. 🐋",
    price: null,
    available: true,
    customizable: false,
    image: "/products/fino-cola-ballena.jpg",
    vibes: ["minimalista", "delicada", "elegante", "sofisticada"],
  },
  {
    id: "fino-estrella-mar",
    name: "Collar Estrella Fina",
    collection: "Perla de Mar",
    type: "collar",
    materials: ["cuentas pequeñas", "estrella de mar dorada"],
    colors: ["azul", "dorado"],
    description:
      "Cuentas pequeñas en azul con una gran estrella de mar dorada. Fino pero con presencia. ⭐",
    price: null,
    available: true,
    customizable: true,
    image: "/products/fino-estrella-mar.jpg",
    vibes: ["delicada", "marina", "elegante", "única"],
  },
  {
    id: "fino-jade",
    name: "Collar Jade de Mar",
    collection: "Perla de Mar",
    type: "collar",
    materials: ["jade verde", "medallón"],
    colors: ["verde jade", "dorado"],
    description:
      "Piedras de jade verde con un medallón central. Sofisticado, natural y lleno de calma. 🌿",
    price: null,
    available: true,
    customizable: false,
    image: "/products/fino-jade.jpg",
    vibes: ["sofisticada", "natural", "elegante", "minimalista"],
  },
  {
    id: "fino-multicolor-concha",
    name: "Collar Arrecife",
    collection: "Perla de Mar",
    type: "collar",
    materials: ["cuentas multicolor", "perla", "concha"],
    colors: ["rosa", "turquesa", "multicolor"],
    description:
      "Un arrecife en tu cuello: cuentas multicolor, perlas y una concha. Alegre y único, como tú. 🐚",
    price: null,
    available: true,
    customizable: true,
    image: "/products/fino-multicolor-concha.jpg",
    vibes: ["vibrante", "única", "expresiva", "alegre"],
  },
  {
    id: "fino-ojo-turco",
    name: "Collar Perla Ojo Turco",
    collection: "Perla de Mar",
    type: "collar",
    materials: ["perlas pequeñas", "medallón ojo turco"],
    colors: ["blanco perla", "dorado"],
    description:
      "Perlas pequeñas con un medallón de ojo turco para la buena energía. Delicado y protector. 🧿",
    price: null,
    available: true,
    customizable: false,
    image: "/products/fino-ojo-turco.jpg",
    vibes: ["delicada", "significativa", "elegante", "minimalista"],
  },

  // ─────────────────────────── KIDS (infantil) ───────────────────────────
  {
    id: "kids-menta-estrella",
    name: "Collar Kids Menta",
    collection: "Kids",
    type: "collar",
    materials: ["cuentas grandes", "estrella dorada"],
    colors: ["verde menta", "dorado"],
    description:
      "Para las pequeñas: cuentas verde menta con una estrella dorada. Colorido y resistente. 🌟",
    price: null,
    available: true,
    customizable: true,
    image: "/products/kids-menta-estrella.jpg",
    vibes: ["divertida", "juvenil", "regalo", "alegre"],
  },
  {
    id: "kids-corazon-rosa",
    name: "Collar Kids Corazón",
    collection: "Kids",
    type: "collar",
    materials: ["cuentas grandes crema", "corazón rosa"],
    colors: ["crema", "rosa"],
    description:
      "Cuentas crema con un corazón rosa. El regalo perfecto para una niña especial. 💕",
    price: null,
    available: true,
    customizable: true,
    image: "/products/kids-corazon-rosa.jpg",
    vibes: ["tierna", "regalo", "dulce", "romántica"],
  },
  {
    id: "kids-rosa-estrella",
    name: "Collar Kids Estrella Rosa",
    collection: "Kids",
    type: "collar",
    materials: ["cuentas grandes rosa", "estrella rosa"],
    colors: ["rosa"],
    description:
      "Todo rosa con una estrella de mar a juego. Para las princesas del mar. 🌸",
    price: null,
    available: true,
    customizable: true,
    image: "/products/kids-rosa-estrella.jpg",
    vibes: ["dulce", "juvenil", "tierna", "regalo"],
  },
  {
    id: "kids-lila-cruz",
    name: "Collar Kids Lila",
    collection: "Kids",
    type: "collar",
    materials: ["cuentas grandes lila", "cruz dorada"],
    colors: ["lila", "dorado"],
    description:
      "Cuentas lila con una cruz dorada. Tierno y con significado para las más pequeñas. ✨",
    price: null,
    available: true,
    customizable: true,
    image: "/products/kids-lila-cruz.jpg",
    vibes: ["tierna", "significativa", "regalo", "dulce"],
  },
];

/** Colecciones únicas presentes en el catálogo, en orden de aparición. */
export const collections = [...new Set(products.map((p) => p.collection))];

/** Busca un producto por id. */
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
