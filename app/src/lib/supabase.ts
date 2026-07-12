import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase para el servidor (route handlers).
 *
 * Se usa para guardar leads reales (P2: formulario de contacto, P3: quiz).
 * Las credenciales viven en variables de entorno — NUNCA hardcodear (Seguridad Forge).
 *
 * Si las variables no están configuradas, `getSupabase()` devuelve null y los
 * endpoints degradan con gracia (responden 503 con mensaje claro) en vez de crashear.
 * Esto permite que la app corra en local sin Supabase mientras se desarrolla la UI.
 */

let cached: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (cached !== undefined) return cached;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  // Service role key: solo servidor. Salta RLS para inserts controlados desde el backend.
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    cached = null;
    return null;
  }

  cached = createClient(url, key, {
    auth: { persistSession: false },
  });
  return cached;
}

/** Indica si Supabase está configurado (para mensajes de UI/estado). */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  );
}
