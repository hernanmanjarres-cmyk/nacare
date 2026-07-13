/**
 * Catálogo de productos de Nacaré.Sm — fuente de verdad compartida.
 *
 * Fotos ORIGINALES de la marca (Google Drive). Cada modelo puede tener varias
 * fotos (galería). Colecciones: Bubblegum (cuentas grandes), Perla de Mar
 * (finos/delicados) y Kids (infantil).
 *
 * Modelo "ecommerce-ready": price y stock desde el día 1 aunque la v1 los
 * mantenga por WhatsApp. Usado por P2 (catálogo), P1 (chatbot), P3 (quiz).
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
  /** Galería: 1 o más fotos del mismo modelo. La primera es la principal. */
  images: string[];
  /** Palabras clave para el quiz y el buscador. */
  vibes: string[];
}

/** Foto principal de un producto (primera de la galería). */
export function mainImage(p: Product): string {
  return p.images[0];
}

/** Helper conciso para definir un producto. */
type Def = {
  id: string;
  name: string;
  type?: ProductType;
  materials: string[];
  colors: string[];
  desc: string;
  imgs: string[];
  vibes: string[];
  available?: boolean;
  customizable?: boolean;
  /** Sobreescribe la colección del grupo (ej. una pieza de edición especial). */
  collection?: string;
};

function build(collection: string, defs: Def[]): Product[] {
  return defs.map((d) => ({
    id: d.id,
    name: d.name,
    collection: d.collection ?? collection,
    type: d.type ?? "collar",
    materials: d.materials,
    colors: d.colors,
    description: d.desc,
    price: null,
    available: d.available ?? true,
    customizable: d.customizable ?? false,
    images: d.imgs.map((n) => `/products/${n}.jpg`),
    vibes: d.vibes,
  }));
}

// ═══════════════════════════ BUBBLEGUM (cuentas grandes) ═══════════════════════════
const bubblegum = build("Bubblegum", [
  { id: "bg-perla-dije-azul", name: "Collar Perla con Dije Azul", materials: ["perla grande", "dije esmaltado"], colors: ["blanco perla", "azul"], desc: "Perlas grandes con un dije azul cielo. Clásico con un guiño de color. 🤍", imgs: ["bg-01"], vibes: ["clásica", "elegante", "romántica"] },
  { id: "bg-tierra-corazones", name: "Collar Tierra con Corazones", materials: ["cuentas de piedra", "charms corazón"], colors: ["marrón", "beige", "terracota"], desc: "Tonos tierra con corazoncitos que lo dicen todo. Natural y con cariño. 🤎", imgs: ["bg-02"], vibes: ["natural", "boho", "terrenal", "cálida"] },
  { id: "bg-cacao-corazon", name: "Collar Cacao con Corazón", materials: ["cuentas bubblegum", "corazón dorado"], colors: ["marrón", "dorado"], desc: "Cuentas cacao con un corazón dorado que roba miradas. Statement cálido. 🤎", imgs: ["bg-03"], vibes: ["statement", "cálida", "elegante", "atrevida"] },
  { id: "bg-durazno", name: "Collar Durazno", materials: ["cuentas bubblegum"], colors: ["durazno", "coral"], desc: "Un durazno suave que combina con todo y sienta el bronceado. 🍑", imgs: ["bg-04", "bg-25"], vibes: ["cálida", "veraniega", "cotidiana"], customizable: true },
  { id: "bg-cielo-estrellas", name: "Collar Cielo con Estrellas", materials: ["cuentas bubblegum", "estrellas doradas"], colors: ["azul cielo", "dorado"], desc: "Azul cielo con estrellitas de mar a los lados. Ligero y soñador. ⭐", imgs: ["bg-05"], vibes: ["soñadora", "marina", "delicada", "playera"] },
  { id: "bg-azul-rey-estrella", name: "Collar Azul Rey con Estrella", materials: ["cuentas bubblegum", "estrella de strass"], colors: ["azul rey", "plateado"], desc: "Azul intenso con una estrella brillante. Puro statement de noche. 💙", imgs: ["bg-06", "bg-17", "bg-26"], vibes: ["statement", "vibrante", "atrevida", "marina"] },
  { id: "bg-marfil-estrella-menta", name: "Collar Marfil Estrella de Mar", materials: ["cuentas marfil", "estrella esmaltada"], colors: ["marfil", "verde menta"], desc: "Marfil suave con una estrella de mar menta. Fresco y costero. 🌊", imgs: ["bg-07"], vibes: ["costera", "playera", "delicada", "veraniega"] },
  { id: "bg-fucsia-cactus", name: "Collar Fucsia con Cactus", materials: ["cuentas bubblegum", "cactus esmaltado"], colors: ["fucsia", "verde"], desc: "Fucsia que grita alegría con un cactus divertido. Para las que brillan. 🌵", imgs: ["bg-08"], vibes: ["vibrante", "divertida", "atrevida", "juvenil"] },
  { id: "bg-lila", name: "Collar Lila", materials: ["cuentas bubblegum"], colors: ["lila", "morado"], desc: "Lila suave y soñador que combina con todo. Delicado para el día a día. 💜", imgs: ["bg-09"], vibes: ["soñadora", "dulce", "cotidiana", "tierna"], customizable: true },
  { id: "bg-caramelo", name: "Collar Caramelo", materials: ["cuentas bubblegum"], colors: ["marrón", "caramelo"], desc: "Un caramelo tostado, cálido y elegante. Básico con carácter. 🍮", imgs: ["bg-10", "bg-42"], vibes: ["cálida", "elegante", "cotidiana"] },
  { id: "bg-azul-bebe", name: "Collar Azul Bebé", materials: ["cuentas bubblegum"], colors: ["azul bebé"], desc: "Azul bebé tierno y luminoso. Suavidad en cada cuenta. 💙", imgs: ["bg-11"], vibes: ["dulce", "soñadora", "delicada", "tierna"], customizable: true },
  { id: "bg-marfil-largo", name: "Collar Marfil", materials: ["cuentas marfil"], colors: ["marfil", "crema"], desc: "Marfil largo y elegante, atemporal como una perla. 🤍", imgs: ["bg-12"], vibes: ["elegante", "clásica", "sofisticada"] },
  { id: "bg-verde-esmeralda", name: "Collar Verde Esmeralda", materials: ["cuentas bubblegum", "dije"], colors: ["verde esmeralda"], desc: "Verde esmeralda profundo con un dije especial. Lujo con alma natural. 💚", imgs: ["bg-13"], vibes: ["statement", "elegante", "natural", "sofisticada"] },
  { id: "bg-arena-dije", name: "Collar Arena con Dije", materials: ["cuentas de piedra", "dije"], colors: ["arena", "beige"], desc: "Tonos arena con un dije central. La playa en tu cuello. 🏖️", imgs: ["bg-14"], vibes: ["natural", "boho", "costera", "relajada"] },
  { id: "bg-terracota-medallon", name: "Collar Terracota Medallón", materials: ["cuentas bubblegum", "cadena", "medallón"], colors: ["terracota", "dorado"], desc: "Terracota con cadena y medallón de mar. Dos texturas, un encanto. 🐚", imgs: ["bg-15", "bg-16"], vibes: ["elegante", "marina", "única", "boho"] },
  { id: "bg-mostaza-medallon", name: "Collar Mostaza Medallón", materials: ["cuentas bubblegum", "cadena", "medallón"], colors: ["mostaza", "dorado"], desc: "Mostaza cálida con medallón esmaltado. Otoñal y con estilo. 🌾", imgs: ["bg-18"], vibes: ["cálida", "elegante", "boho", "única"] },
  { id: "bg-amarillo-sol", name: "Collar Amarillo Sol", materials: ["cuentas bubblegum"], colors: ["amarillo"], desc: "Amarillo puro sol que ilumina cualquier look. Pura energía. ☀️", imgs: ["bg-19", "bg-33"], vibes: ["vibrante", "alegre", "veraniega", "atrevida"] },
  { id: "bg-menta-estrella", name: "Collar Menta con Estrella", materials: ["cuentas bubblegum", "estrella dorada"], colors: ["verde menta", "dorado"], desc: "Verde menta con una estrella de mar dorada. Todo el veraneo en una pieza. 🌊", imgs: ["bg-20"], vibes: ["playera", "veraniega", "marina", "alegre"], customizable: true },
  { id: "bg-perla-clasico", name: "Collar Perla Clásico", materials: ["perla grande"], colors: ["blanco perla"], desc: "Perlas grandes para las que aman lo clásico con carácter. Atemporal. 🤍", imgs: ["bg-21"], vibes: ["clásica", "elegante", "sofisticada", "romántica"] },
  { id: "bg-oliva-sol", name: "Collar Oliva con Sol", materials: ["cuentas bubblegum", "sol dorado"], colors: ["verde oliva", "dorado"], desc: "Verde oliva con un sol dorado. Natural y con luz propia. ☀️", imgs: ["bg-22"], vibes: ["natural", "boho", "terrenal", "cálida"], customizable: true },
  { id: "bg-coral", name: "Collar Coral", materials: ["cuentas bubblegum"], colors: ["coral", "salmón"], desc: "Coral cálido que favorece a todas. Un toque de mar en tono suave. 🪸", imgs: ["bg-23"], vibes: ["cálida", "veraniega", "romántica", "costera"] },
  { id: "bg-perla-concha", name: "Collar Perla con Concha", materials: ["perla", "concha de nácar"], colors: ["blanco perla", "nácar"], desc: "Perlas con un dije de concha de nácar, el alma de la marca. 🐚", imgs: ["bg-24"], vibes: ["elegante", "costera", "romántica", "sofisticada"] },
  { id: "bg-durazno-cruz", name: "Collar Durazno con Cruz", materials: ["cuentas bubblegum", "cruz dorada"], colors: ["durazno", "dorado"], desc: "Durazno con una cruz dorada. Tierno y con significado. ✝️", imgs: ["bg-27"], vibes: ["significativa", "cálida", "tierna", "regalo"] },
  { id: "bg-mantequilla", name: "Collar Mantequilla", materials: ["cuentas bubblegum"], colors: ["amarillo pastel", "mantequilla"], desc: "Amarillo mantequilla, suave y luminoso. Alegría en tono pastel. 🧈", imgs: ["bg-28"], vibes: ["dulce", "alegre", "veraniega", "soñadora"], customizable: true },
  { id: "bg-crema-corazon-rosa", name: "Collar Crema con Corazón Rosa", materials: ["cuentas bubblegum", "corazón rosa"], colors: ["crema", "rosa"], desc: "Crema con un corazón rosa colgante. Romántico y para regalar. 💕", imgs: ["bg-29"], vibes: ["romántica", "tierna", "regalo", "dulce"] },
  { id: "bg-tierra-charm-mar", name: "Collar Tierra con Charm de Mar", materials: ["cuentas bubblegum", "charm esmaltado"], colors: ["arena", "beige"], desc: "Tonos tierra con un charm de mar a un lado. Sutil y costero. 🐚", imgs: ["bg-30"], vibes: ["natural", "costera", "boho", "relajada"] },
  { id: "bg-arbol-vida", name: "Collar Árbol de la Vida", materials: ["cuentas marfil", "árbol de la vida"], colors: ["crema", "dorado"], desc: "Cuentas crema con el dije del árbol de la vida. Raíces y crecimiento. 🌳", imgs: ["bg-32", "bg-31"], vibes: ["significativa", "natural", "elegante", "regalo"] },
  { id: "bg-naranja", name: "Collar Naranja", materials: ["cuentas bubblegum"], colors: ["naranja"], desc: "Naranja vibrante lleno de energía. Para las que llegan y se notan. 🧡", imgs: ["bg-34"], vibes: ["vibrante", "alegre", "atrevida", "festiva"] },
  { id: "bg-perla-corazon", name: "Collar Perla con Corazón", materials: ["perla grande", "corazón dorado"], colors: ["blanco perla", "dorado"], desc: "Perlas grandes con un corazón dorado. Elegancia con romance. 🤍", imgs: ["bg-35"], vibes: ["romántica", "elegante", "clásica", "regalo"] },
  { id: "bg-verde-salvia", name: "Collar Verde Salvia", materials: ["cuentas bubblegum"], colors: ["verde salvia"], desc: "Verde salvia sereno y natural. Calma en cada cuenta. 🌿", imgs: ["bg-36", "bg-37"], vibes: ["natural", "relajada", "sofisticada", "terrenal"], customizable: true },
  { id: "bg-fiesta-mar-estrella", name: "Collar Fiesta del Mar", collection: "Fiestas del Mar", materials: ["cuentas bubblegum", "estrella esmaltada"], colors: ["rojo", "verde menta", "turquesa"], desc: "Rojo y menta con una estrella de mar esmaltada. Edición Fiestas del Mar. ⭐", imgs: ["bg-38"], vibes: ["festiva", "vibrante", "playera", "alegre"] },
  { id: "bg-cielo-corazon", name: "Collar Cielo con Corazón", materials: ["cuentas bubblegum", "corazón dorado"], colors: ["azul cielo", "dorado"], desc: "Azul cielo con un corazón dorado. Dulzura en tono sereno. 💙", imgs: ["bg-39"], vibes: ["dulce", "soñadora", "romántica", "tierna"] },
  { id: "bg-durazno-sol", name: "Collar Durazno con Sol", materials: ["cuentas bubblegum", "sol dorado"], colors: ["durazno", "dorado"], desc: "Durazno cálido con un sol dorado. Verano hecho collar. ☀️", imgs: ["bg-40"], vibes: ["veraniega", "cálida", "alegre", "boho"], customizable: true },
  { id: "bg-rosa-lila-estrella", name: "Collar Rosa y Lila con Estrella", materials: ["cuentas bubblegum", "estrella"], colors: ["rosa", "lila"], desc: "Bicolor rosa y lila con una estrellita. Pastel y personalizable. 🌸", imgs: ["bg-41"], vibes: ["dulce", "juvenil", "personalizable", "soñadora"], customizable: true },
  { id: "bg-cielo-marfil-corazon", name: "Collar Cielo y Marfil con Corazón", materials: ["cuentas bubblegum", "corazón"], colors: ["azul cielo", "marfil"], desc: "Azul cielo y marfil con un corazón. Suave contraste romántico. 💙", imgs: ["bg-43"], vibes: ["romántica", "dulce", "soñadora", "delicada"] },
  { id: "bg-rosa-estrella", name: "Collar Rosa con Estrella", materials: ["cuentas bubblegum", "estrella rosa"], colors: ["rosa"], desc: "Rosa dulce con una estrella de mar a juego. Femenino y trendy. 🌸", imgs: ["bg-44"], vibes: ["dulce", "romántica", "juvenil", "tierna"] },
  { id: "bg-mango", name: "Collar Mango", materials: ["cuentas bubblegum"], colors: ["naranja", "mango"], desc: "Naranja mango jugoso y tropical. Un mordisco de verano. 🥭", imgs: ["bg-45"], vibes: ["vibrante", "veraniega", "alegre", "festiva"] },
  { id: "bg-menta-rosa-avion", name: "Collar Menta y Rosa con Avión", materials: ["cuentas bubblegum", "avión esmaltado"], colors: ["verde menta", "rosa"], desc: "Menta y rosa con un avioncito. Para las soñadoras que quieren volar. ✈️", imgs: ["bg-46"], vibes: ["divertida", "soñadora", "juvenil", "única"] },
  { id: "bg-lila-liso", name: "Collar Lila Intenso", materials: ["cuentas bubblegum"], colors: ["lila", "morado"], desc: "Lila más intenso, elegante y con presencia. 💜", imgs: ["bg-47"], vibes: ["elegante", "soñadora", "sofisticada", "cotidiana"], customizable: true },
  { id: "bg-cielo-amarillo-corazon", name: "Collar Cielo y Amarillo", materials: ["cuentas bubblegum bicolor", "corazón"], colors: ["azul cielo", "amarillo"], desc: "Bicolor cielo y amarillo con corazón. Personalízalo a tus colores. 💫", imgs: ["bg-48"], vibes: ["divertida", "personalizable", "juvenil", "expresiva"], customizable: true },
]);

// ═══════════════════════════ PERLA DE MAR (finos/delicados) ═══════════════════════════
const perlaDeMar = build("Perla de Mar", [
  { id: "pq-multicolor-dijes", name: "Collar Arrecife de Dijes", materials: ["cuentas de colores", "dijes dorados"], colors: ["multicolor", "dorado"], desc: "Un arrecife de dijes: concha, estrella y más en hilo delicado. Único como tú. 🐚", imgs: ["pq-01"], vibes: ["vibrante", "única", "expresiva", "marina"], customizable: true },
  { id: "pq-turquesa-fino", name: "Collar Turquesa Fino", materials: ["cuentas pequeñas", "dije"], colors: ["turquesa", "dorado"], desc: "Cuentas turquesa finas con un dije colgante. Delicado con sabor a mar. 🌊", imgs: ["pq-02"], vibes: ["delicada", "marina", "minimalista", "costera"] },
  { id: "pq-negro-estrella", name: "Collar Negro con Estrella", materials: ["cuentas negras", "estrella dorada"], colors: ["negro", "dorado"], desc: "Cuentas negras con una estrella de mar dorada. Elegancia con contraste. ⭐", imgs: ["pq-03"], vibes: ["elegante", "sofisticada", "marina", "atrevida"] },
  { id: "pq-rojo-ballena", name: "Collar Rojo Cola de Ballena", materials: ["cuentas rojas", "cola de ballena"], colors: ["rojo", "dorado"], desc: "Cuentas rojas finas con dije de cola de ballena. Vibrante y marino. 🐋", imgs: ["pq-04"], vibes: ["vibrante", "marina", "delicada", "atrevida"] },
  { id: "pq-perla-medallon", name: "Collar Perla con Medallón", materials: ["perlas pequeñas", "medallón esmaltado"], colors: ["blanco perla", "dorado"], desc: "Perlas pequeñas con un medallón de mar. Fino y con encanto costero. 🐚", imgs: ["pq-05", "pq-08"], vibes: ["delicada", "elegante", "marina", "minimalista"] },
  { id: "pq-cadena-ballena", name: "Cadena Cola de Ballena", materials: ["cadena dorada", "cola de ballena"], colors: ["dorado"], desc: "Cadena fina y delicada con dije de cola de ballena. Minimalismo con mar. 🐋", imgs: ["pq-06"], vibes: ["minimalista", "delicada", "elegante", "sofisticada"] },
  { id: "pq-azul-dije", name: "Collar Azul con Dije", materials: ["cuentas azules pequeñas", "dije"], colors: ["azul", "dorado"], desc: "Cuentas azules finas con un dije marino. Discreto y bonito. 💙", imgs: ["pq-07"], vibes: ["delicada", "marina", "minimalista", "costera"] },
  { id: "pq-cadena-plata", name: "Cadena Fina Plateada", materials: ["cadena plateada"], colors: ["plateado"], desc: "Una cadena fina plateada para el día a día. Minimalismo puro. 🤍", imgs: ["pq-09"], vibes: ["minimalista", "delicada", "cotidiana", "sofisticada"] },
  { id: "pq-multicolor-concha", name: "Collar Perla de Colores con Concha", materials: ["cuentas de colores", "perla", "concha"], colors: ["rosa", "turquesa", "multicolor"], desc: "Cuentas de colores, perlas y una concha. Alegre y coleccionable. 🐚", imgs: ["pq-10", "pq-11"], vibes: ["vibrante", "única", "expresiva", "alegre"], customizable: true },
  { id: "pq-perla-menuda", name: "Collar Perlas Menudas", materials: ["perlas pequeñas"], colors: ["blanco perla"], desc: "Perlas pequeñas y delicadas alrededor del cuello. Elegancia sencilla. 🤍", imgs: ["pq-12"], vibes: ["delicada", "elegante", "minimalista", "romántica"] },
  { id: "pq-azul-estrella", name: "Collar Azul con Estrella Grande", materials: ["cuentas pequeñas", "estrella dorada"], colors: ["azul", "dorado"], desc: "Cuentas azules con una gran estrella de mar dorada. Fino con presencia. ⭐", imgs: ["pq-13"], vibes: ["delicada", "marina", "elegante", "única"], customizable: true },
  { id: "pq-perla-ojo-turco", name: "Collar Perla Ojo Turco", materials: ["perlas pequeñas", "medallón ojo turco"], colors: ["blanco perla", "dorado"], desc: "Perlas pequeñas con un medallón de ojo turco para la buena energía. 🧿", imgs: ["pq-14", "pq-15", "pq-20"], vibes: ["delicada", "significativa", "elegante", "minimalista"] },
  { id: "pq-multicolor-dije-cuadrado", name: "Collar de Colores con Dije", materials: ["cuentas de colores", "dije esmaltado"], colors: ["multicolor"], desc: "Cuentas de colores con un dije central esmaltado. Divertido y único. 🌈", imgs: ["pq-16"], vibes: ["vibrante", "divertida", "única", "expresiva"], customizable: true },
  { id: "pq-jade", name: "Collar Jade de Mar", materials: ["jade verde", "medallón"], colors: ["verde jade", "dorado"], desc: "Piedras de jade verde con un medallón. Sofisticado, natural y con calma. 🌿", imgs: ["pq-18"], vibes: ["sofisticada", "natural", "elegante", "minimalista"] },
  { id: "pq-turquesa-cangrejo", name: "Collar Turquesa con Cangrejo", materials: ["cuentas turquesa", "cangrejo dorado"], colors: ["turquesa", "dorado"], desc: "Turquesa con un cangrejito dorado. Un pedacito de playa siempre contigo. 🦀", imgs: ["pq-19"], vibes: ["playera", "marina", "divertida", "costera"] },
]);

// ═══════════════════════════ KIDS (infantil) ═══════════════════════════
const kids = build("Kids", [
  { id: "kd-mantequilla-cielo", name: "Collar Kids Sol y Cielo", materials: ["cuentas grandes"], colors: ["amarillo", "azul cielo"], desc: "Amarillo y azul cielo para las peques. Alegre y resistente. 🌈", imgs: ["kd-01"], vibes: ["divertida", "juvenil", "alegre", "regalo"], customizable: true },
  { id: "kd-lila-cruz", name: "Collar Kids Lila con Cruz", materials: ["cuentas grandes lila", "cruz dorada"], colors: ["lila", "dorado"], desc: "Cuentas lila con una cruz dorada. Tierno y con significado. ✨", imgs: ["kd-02", "kd-20"], vibes: ["tierna", "significativa", "regalo", "dulce"], customizable: true },
  { id: "kd-menta-estrella", name: "Collar Kids Menta con Estrella", materials: ["cuentas grandes", "estrella dorada"], colors: ["verde menta", "dorado"], desc: "Verde menta con una estrella dorada. Colorido y para brillar. 🌟", imgs: ["kd-03", "kd-05"], vibes: ["divertida", "juvenil", "regalo", "alegre"], customizable: true },
  { id: "kd-rojo-carta", name: "Collar Kids Rojo con Carta", materials: ["cuentas grandes rojas", "dije carta"], colors: ["rojo", "rosa"], desc: "Rojo vivo con un dije de cartita de amor. Para regalar con cariño. ❤️", imgs: ["kd-04"], vibes: ["tierna", "regalo", "vibrante", "dulce"] },
  { id: "kd-fucsia-cactus", name: "Collar Kids Fucsia con Cactus", materials: ["cuentas grandes", "cactus esmaltado"], colors: ["fucsia", "verde"], desc: "Fucsia alegre con un cactus divertido. Para las más atrevidas. 🌵", imgs: ["kd-06"], vibes: ["vibrante", "divertida", "juvenil", "atrevida"] },
  { id: "kd-lila", name: "Collar Kids Lila", materials: ["cuentas grandes lila"], colors: ["lila", "morado"], desc: "Todo lila, suave y soñador para las princesas. 💜", imgs: ["kd-07", "kd-12", "kd-20"], vibes: ["dulce", "juvenil", "tierna", "soñadora"], customizable: true },
  { id: "kd-rosa", name: "Collar Kids Rosa", materials: ["cuentas grandes rosa"], colors: ["rosa"], desc: "Rosa clásico de las peques. Dulce y siempre favorito. 🌸", imgs: ["kd-08", "kd-15"], vibes: ["dulce", "juvenil", "tierna", "romántica"], customizable: true },
  { id: "kd-fucsia-rosa", name: "Collar Kids Fucsia con Rosa", materials: ["cuentas grandes", "rosa esmaltada"], colors: ["fucsia", "rosa"], desc: "Fucsia con una rosita colgante. Coqueto y colorido. 🌹", imgs: ["kd-09"], vibes: ["vibrante", "dulce", "juvenil", "divertida"] },
  { id: "kd-durazno", name: "Collar Kids Durazno", materials: ["cuentas grandes"], colors: ["durazno", "coral"], desc: "Durazno suave y cálido para las peques. Tierno y bonito. 🍑", imgs: ["kd-10"], vibes: ["dulce", "cálida", "juvenil", "tierna"], customizable: true },
  { id: "kd-crema-corazon", name: "Collar Kids Corazón", materials: ["cuentas grandes crema", "corazón rosa"], colors: ["crema", "rosa"], desc: "Cuentas crema con un corazón rosa. El regalo perfecto para una niña. 💕", imgs: ["kd-11"], vibes: ["tierna", "regalo", "dulce", "romántica"], customizable: true },
  { id: "kd-rosa-estrella", name: "Collar Kids Rosa con Estrella", materials: ["cuentas grandes rosa", "estrella rosa"], colors: ["rosa"], desc: "Todo rosa con una estrella de mar a juego. Para las princesas del mar. 🌸", imgs: ["kd-13", "kd-17"], vibes: ["dulce", "juvenil", "tierna", "regalo"], customizable: true },
  { id: "kd-cielo-corazon", name: "Collar Kids Cielo con Corazón", materials: ["cuentas grandes", "corazón crema"], colors: ["azul cielo", "crema"], desc: "Azul cielo con un corazón crema. Suave y adorable. 💙", imgs: ["kd-14"], vibes: ["dulce", "tierna", "soñadora", "regalo"], customizable: true },
  { id: "kd-rosa-estrella-blanca", name: "Collar Kids Rosa con Estrella Blanca", materials: ["cuentas grandes rosa", "estrella blanca"], colors: ["rosa", "blanco"], desc: "Rosa con una estrellita blanca. Dulce y luminoso. ⭐", imgs: ["kd-16"], vibes: ["dulce", "juvenil", "tierna", "soñadora"] },
  { id: "kd-naranja", name: "Collar Kids Naranja", materials: ["cuentas grandes naranja"], colors: ["naranja"], desc: "Naranja vibrante lleno de energía para las peques. 🧡", imgs: ["kd-18"], vibes: ["vibrante", "alegre", "juvenil", "divertida"] },
  { id: "kd-menta-rosa-avion", name: "Collar Kids Menta y Rosa con Avión", materials: ["cuentas grandes", "avión rosa"], colors: ["verde menta", "rosa"], desc: "Menta y rosa con un avioncito. Para las que sueñan con volar. ✈️", imgs: ["kd-19"], vibes: ["divertida", "soñadora", "juvenil", "única"] },
]);

export const products: Product[] = [...bubblegum, ...perlaDeMar, ...kids];

/** Colecciones únicas presentes en el catálogo, en orden de aparición. */
export const collections = [...new Set(products.map((p) => p.collection))];

/** Busca un producto por id. */
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
