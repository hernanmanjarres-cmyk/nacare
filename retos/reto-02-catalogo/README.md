# 🛍️ Reto 2 — Tu producto en línea, capturando datos reales

> Parte del [proyecto Nacaré](../../README.md) · Concurso de vibe coding de Platzi

## 📋 Qué pedía el reto

Publicar la página de un producto que no solo se vea bien, sino que **funcione**:
cuando alguien deja sus datos, esa info **se guarda de verdad en una base de datos**.
Debía incluir:

- ✅ Una propuesta de valor clara: qué es, para quién y por qué importa.
- ✅ Un formulario cuyos datos se guardan en una base de datos real (Supabase). **No un botón decorativo.**
- ✅ Diseño responsive (se ve bien en celular y computador).

## 🐚 Cómo lo resolvimos

El **catálogo web de Nacaré**: la vitrina donde se muestran las 12 piezas
artesanales reales, organizadas por colección, cada una con su botón "Pedir por
WhatsApp" que abre el chat con un mensaje ya escrito.

**El formulario que sí funciona:** un bloque "Sé la primera en enterarte" donde
la clienta deja su nombre, correo y qué le interesa. Esos datos **se guardan de
verdad** en una tabla de Supabase — no desaparecen, quedan registrados como leads.

### Por qué este catálogo importa (propuesta de valor)

El dolor real de Nacaré es que en Instagram la gente pregunta el precio en
comentarios y **nadie responde a tiempo → se pierde la venta**. Este catálogo lo
resuelve: cada pieza tiene un botón directo a WhatsApp con el mensaje ya armado,
y el formulario captura a quien todavía no está listo para comprar.

### Cómo funciona por dentro

| Parte | Archivo |
|-------|---------|
| Datos reales de las 12 piezas | [`app/src/data/products.ts`](../../app/src/data/products.ts) |
| Página del catálogo (propuesta de valor + grid) | [`app/src/app/page.tsx`](../../app/src/app/page.tsx) |
| Tarjeta de producto + botón WhatsApp | [`app/src/components/catalog/product-card.tsx`](../../app/src/components/catalog/product-card.tsx) |
| Formulario de captura | [`app/src/components/catalog/lead-form.tsx`](../../app/src/components/catalog/lead-form.tsx) |
| API que guarda en la base de datos (con validación Zod) | [`app/src/app/api/leads/route.ts`](../../app/src/app/api/leads/route.ts) |
| Schema de la base de datos (con seguridad RLS) | [`app/supabase-schema.sql`](../../app/supabase-schema.sql) |

## ▶️ Cómo probarlo

1. Crea un proyecto gratis en [Supabase](https://supabase.com).
2. En el **SQL Editor**, pega y ejecuta el contenido de
   [`app/supabase-schema.sql`](../../app/supabase-schema.sql) (crea la tabla `leads`).
3. Copia las claves (Project Settings → API) a `app/.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
   ```
4. Arranca la app (`cd app && npm run dev`) y entra a **http://localhost:3000**.
5. Baja hasta el formulario "Sé la primera en enterarte", llénalo y envía.
6. En Supabase → **Table Editor → leads**, verás tu registro guardado. ✅

> **Seguridad:** los datos se validan con Zod antes de guardarse, y la tabla usa
> Row Level Security (RLS). Solo el backend (con la service role key) puede
> escribir — nadie puede meter datos basura desde el navegador.

## 🔗 Entregables del reto

- **Link público:** _(pega aquí la URL de Vercel cuando despliegues)_
- **Qué lo hace único:** es un catálogo de un negocio real que resuelve un dolor
  concreto (precios por DM sin respuesta), captura leads reales en Supabase, y se
  ve profesional en celular y computador.
