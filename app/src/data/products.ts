/**
 * Catálogo de productos de Nacaré.Sm — fuente de verdad compartida.
 *
 * Datos extraídos del Instagram real @nacare.sm (joyería artesanal, Santa Marta 🇨🇴).
 * Modelo "ecommerce-ready": guarda price y stock desde el día 1 aunque la v1 los
 * mantenga por WhatsApp (como en su IG). Cuando se active precio/panel admin en un
 * reto futuro, no hay que reescribir el modelo.
 *
 * Usado por: P2 (catálogo), P1 (chatbot lo lee como conocimiento), P3 (quiz recomienda piezas).
 */

export type ProductType = "collar" | "pulsera" | "anillo" | "aretes" | "set";

export interface Product {
  id: string;
  /** Nombre visible de la pieza */
  name: string;
  /** Colección temática a la que pertenece */
  collection: string;
  type: ProductType;
  /** Materiales y cuentas (nácar, perla, piedra, dorado…) */
  materials: string[];
  /** Colores dominantes de la pieza */
  colors: string[];
  /** Descripción de venta, con el tono cálido de la marca */
  description: string;
  /**
   * Precio en COP. `null` = "consultar por WhatsApp" (como hoy en IG).
   * El campo existe para activar precios visibles en un reto futuro.
   */
  price: number | null;
  /** ¿Disponible para entrega inmediata? */
  available: boolean;
  /** ¿Se puede personalizar (color/dije a elección)? */
  customizable: boolean;
  /** Ruta de la imagen en /public/products/ */
  image: string;
  /** Palabras clave para el quiz y el buscador */
  vibes: string[];
}

export const products: Product[] = [
  {
    id: "collar-nacar-perla",
    name: "Collar Perla de Nácar",
    collection: "Perla de Mar",
    type: "collar",
    materials: ["perla", "concha de nácar"],
    colors: ["blanco perla", "rojo", "nácar"],
    description:
      "Un collar hecho a mano que nació de un sueño familiar. Perlas y concha de nácar con un acento en rojo para las que se atreven a brillar. 🤍",
    price: null,
    available: true,
    customizable: false,
    image: "/products/collar-nacar-perla.jpg",
    vibes: ["elegante", "romántica", "clásica", "costera"],
  },
  {
    id: "set-pulseras-tierra",
    name: "Set de Pulseras Tierra",
    collection: "Favoritos",
    type: "set",
    materials: ["cuentas de piedra", "charm corazón"],
    colors: ["verde oliva", "terracota", "crema"],
    description:
      "Tres pulseras para apilar en tonos tierra, con un pequeño corazón que lo dice todo. Combínalas a tu manera. 💫",
    price: null,
    available: true,
    customizable: true,
    image: "/products/set-pulseras-tierra.jpg",
    vibes: ["boho", "natural", "terrenal", "relajada"],
  },
  {
    id: "santa-marta-501",
    name: "Colección Santa Marta 501",
    collection: "Santa Marta 501 años",
    type: "collar",
    materials: ["cuentas variadas", "dijes dorados"],
    colors: ["turquesa", "rosa", "naranja", "blanco", "dorado"],
    description:
      "Inspirada en el mar, la historia y la belleza de Santa Marta. Dijes de concha, ballena, palma y tortuga que puedes intercambiar a tu gusto. 🐚",
    price: null,
    available: true,
    customizable: true,
    image: "/products/santa-marta-501.jpg",
    vibes: ["local", "orgullo costeño", "personalizable", "significativa"],
  },
  {
    id: "collar-estrella-mar",
    name: "Collar Estrella de Mar",
    collection: "Fiestas del Mar",
    type: "collar",
    materials: ["cuentas grandes", "dije esmaltado"],
    colors: ["rojo", "azul"],
    description:
      "Perlas rojas con una estrella de mar esmaltada. Para llevar el mar contigo a donde vayas. ✨",
    price: null,
    available: true,
    customizable: false,
    image: "/products/collar-estrella-mar.jpg",
    vibes: ["playera", "vibrante", "veraniega", "alegre"],
  },
  {
    id: "collar-goza-suspira",
    name: "Collar Goza que Suspira",
    collection: "Favoritos",
    type: "collar",
    materials: ["cuentas grandes", "corazón colgante"],
    colors: ["marrón", "vino"],
    description:
      "Cuentas grandes y un corazón que suspira. Un básico con carácter para el día a día. ❤️",
    price: null,
    available: true,
    customizable: false,
    image: "/products/collar-goza-suspira.jpg",
    vibes: ["cotidiana", "cálida", "atrevida", "statement"],
  },
  {
    id: "collares-docentes",
    name: "Collares Docentes",
    collection: "Día del Docente",
    type: "collar",
    materials: ["cuentas", "dije corazón"],
    colors: ["azul cielo", "café", "rosa", "vino"],
    description:
      "Colecciones 'Enseñanza con Amor' y 'Goza que Suspira': collares para regalar con cariño a quien enseña con el corazón. 🌸",
    price: null,
    available: true,
    customizable: true,
    image: "/products/collares-docentes.jpg",
    vibes: ["regalo", "tierna", "detallista", "significativa"],
  },
  {
    id: "bubblegum-bicolor",
    name: "Collar Bubblegum Bicolor",
    collection: "Bubblegum",
    type: "collar",
    materials: ["cuentas bubblegum", "corazón dorado"],
    colors: ["rosa", "lila", "verde oliva"],
    description:
      "La tendencia bubblegum en tonos pastel, con un corazón dorado. Entrega inmediata y personalizable a tus colores. 💕",
    price: null,
    available: true,
    customizable: true,
    image: "/products/bubblegum-bicolor.jpg",
    vibes: ["divertida", "juvenil", "dulce", "trendy"],
  },
  {
    id: "collar-colombia",
    name: "Collar de Colombia",
    collection: "Selección Colombia",
    type: "collar",
    materials: ["cuentas marfil", "acentos tricolor"],
    colors: ["marfil", "amarillo", "azul", "rojo"],
    description:
      "Cuentas marfil con el tricolor de la selección. Para hinchas de corazón. ¡Se agotan rápido cada partido! 🇨🇴",
    price: null,
    available: false,
    customizable: false,
    image: "/products/collar-colombia.jpg",
    vibes: ["patriótica", "festiva", "edición limitada", "vibrante"],
  },
  {
    id: "bubblegum-multicolor",
    name: "Collar Bubblegum Multicolor",
    collection: "Bubblegum",
    type: "collar",
    materials: ["cuentas grandes personalizables"],
    colors: ["azul", "morado", "rosa"],
    description:
      "Diseña el tuyo: elige los colores que van con tu energía y lo armamos para ti. 💫",
    price: null,
    available: true,
    customizable: true,
    image: "/products/bubblegum-multicolor.jpg",
    vibes: ["personalizable", "creativa", "única", "expresiva"],
  },
  {
    id: "fiestas-del-mar-set",
    name: "Colección Fiestas del Mar",
    collection: "Fiestas del Mar",
    type: "collar",
    materials: ["cuentas", "dijes esmaltados de mar"],
    colors: ["verde", "azul marino", "dorado", "turquesa"],
    description:
      "Seis modelos con dijes de pulpo, estrella, caballito y langosta. Edición limitada por las fiestas del mar. 🌊",
    price: null,
    available: true,
    customizable: false,
    image: "/products/fiestas-del-mar-set.jpg",
    vibes: ["marina", "festiva", "coleccionable", "temática"],
  },
  {
    id: "perla-de-mar-fina",
    name: "Colección Perla de Mar",
    collection: "Perla de Mar",
    type: "collar",
    materials: ["cadena dorada/plateada", "dijes", "jade"],
    colors: ["dorado", "plateado", "verde jade"],
    description:
      "Nuestra línea más fina: cadena delicada con dijes de concha, ballena y ojo turco. Elegancia con alma costera. 🐚",
    price: null,
    available: true,
    customizable: true,
    image: "/products/perla-de-mar-fina.jpg",
    vibes: ["minimalista", "elegante", "delicada", "sofisticada"],
  },
  {
    id: "collar-enamorate",
    name: "Collar Enamórate con Amor",
    collection: "Favoritos",
    type: "collar",
    materials: ["cuentas grandes", "corazón colgante"],
    colors: ["azul cielo", "rosa"],
    description:
      "Cuentas en azul cielo con un corazón rosa. Para regalar (o regalarte) un poco de amor. 💕",
    price: null,
    available: true,
    customizable: false,
    image: "/products/collar-enamorate.jpg",
    vibes: ["romántica", "tierna", "regalo", "soñadora"],
  },
];

/** Colecciones únicas presentes en el catálogo, en orden de aparición. */
export const collections = [...new Set(products.map((p) => p.collection))];

/** Busca un producto por id. */
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
