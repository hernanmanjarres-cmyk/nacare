-- ============================================================
--  Nacaré — Schema de Supabase
--  Tabla `leads`: guarda los datos capturados por el catálogo (P2)
--  y por el quiz (P3). Correr una vez en el SQL Editor de Supabase.
-- ============================================================

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  interest    text,
  -- De dónde vino el lead: 'catalogo' | 'quiz'
  source      text not null default 'catalogo',
  created_at  timestamptz not null default now()
);

-- Índice por fecha para ver los leads más recientes primero
create index if not exists leads_created_at_idx
  on public.leads (created_at desc);

-- ------------------------------------------------------------
--  Row Level Security (RLS) — OBLIGATORIO en Forge.
--
--  Los inserts se hacen desde el backend (route handler) usando la
--  SERVICE ROLE KEY, que salta RLS. Por eso NO creamos una policy de
--  insert público: nadie puede escribir directo desde el navegador.
--  Habilitamos RLS y dejamos la tabla sin policies públicas = solo el
--  backend (service role) puede leer/escribir. Máxima seguridad.
-- ------------------------------------------------------------
alter table public.leads enable row level security;

-- (Opcional) Si más adelante quieres un panel admin con Supabase Auth,
-- agrega aquí una policy tipo:
--   create policy "admins pueden ver leads"
--     on public.leads for select
--     using (auth.jwt() ->> 'role' = 'admin');
