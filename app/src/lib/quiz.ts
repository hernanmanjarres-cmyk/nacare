import { energyProfiles } from "@/data/quiz";
import { products, type Product } from "@/data/products";

export interface QuizResult {
  profileKey: string;
  profileTitle: string;
  profileDescription: string;
  /** Pieza real del catálogo que mejor matchea. */
  product: Product;
  /** Segunda pieza recomendada. */
  runnerUp: Product;
}

/**
 * Calcula el resultado del quiz a partir de los vibes acumulados.
 * 1. Suma los vibes seleccionados. 2. Elige el perfil de energía dominante.
 * 3. Puntúa cada producto por overlap de vibes con el perfil + los vibes elegidos.
 */
export function computeQuizResult(selectedVibes: string[]): QuizResult {
  // Frecuencia de cada vibe elegido
  const freq = new Map<string, number>();
  for (const v of selectedVibes) freq.set(v, (freq.get(v) ?? 0) + 1);

  // Elegir el perfil de energía con más coincidencias
  let bestProfile = "costera";
  let bestProfileScore = -1;
  for (const [key, profile] of Object.entries(energyProfiles)) {
    const score = profile.matchVibes.reduce(
      (acc, v) => acc + (freq.get(v) ?? 0),
      0,
    );
    if (score > bestProfileScore) {
      bestProfileScore = score;
      bestProfile = key;
    }
  }

  const profile = energyProfiles[bestProfile];

  // Puntuar productos: overlap con vibes del perfil (peso 2) + vibes elegidos (peso 1)
  const scored = products
    .map((p) => {
      const profileOverlap = p.vibes.filter((v) =>
        profile.matchVibes.includes(v),
      ).length;
      const chosenOverlap = p.vibes.reduce(
        (acc, v) => acc + (freq.get(v) ?? 0),
        0,
      );
      // Preferir piezas disponibles ante empate
      const availabilityBonus = p.available ? 0.5 : 0;
      return {
        product: p,
        score: profileOverlap * 2 + chosenOverlap + availabilityBonus,
      };
    })
    .sort((a, b) => b.score - a.score);

  return {
    profileKey: bestProfile,
    profileTitle: profile.title,
    profileDescription: profile.description,
    product: scored[0].product,
    runnerUp: scored[1].product,
  };
}
