import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabase } from "@/lib/supabase";

/**
 * P2 — Captura de leads reales.
 * Guarda en la tabla `leads` de Supabase el interés de un visitante.
 * Validación con Zod (Seguridad Forge: validar TODAS las entradas).
 *
 * Tabla esperada (ver retos/reto-02-catalogo/supabase.sql):
 *   leads(id, name, email, phone, interest, source, created_at)
 */

const LeadSchema = z.object({
  name: z.string().trim().min(2, "Nombre muy corto").max(80),
  email: z.string().trim().email("Email inválido").max(120),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  interest: z.string().trim().max(300).optional().or(z.literal("")),
  // De dónde viene el lead: catálogo, quiz, etc.
  source: z.string().trim().max(40).default("catalogo"),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const supabase = getSupabase();
  if (!supabase) {
    // Degrada con gracia si Supabase no está configurado (dev sin credenciales)
    return NextResponse.json(
      {
        error:
          "La base de datos no está configurada. Agrega las variables de Supabase en .env.local.",
      },
      { status: 503 },
    );
  }

  const { name, email, phone, interest, source } = parsed.data;

  const { error } = await supabase.from("leads").insert({
    name,
    email,
    phone: phone || null,
    interest: interest || null,
    source,
  });

  if (error) {
    console.error("[leads] insert error:", error.message);
    return NextResponse.json(
      { error: "No pudimos guardar tus datos. Intenta de nuevo." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
