# 🐚 Nacaré — Plataforma web

> **Accesorios que cuentan tu esencia.**
> Catálogo web + asistente de IA + quiz interactivo para [Nacaré.Sm](https://www.instagram.com/nacare.sm/),
> una marca de joyería artesanal hecha a mano en Santa Marta, Colombia 🇨🇴.

Este repositorio es el **macro-proyecto** donde se integran los retos del
**concurso de vibe coding de Platzi**. Cada reto es un módulo real de la
plataforma de Nacaré, no un ejercicio suelto.

---

## ✨ ¿Qué incluye?

| Módulo | Reto Platzi | Qué hace |
|--------|-------------|----------|
| 🛍️ **Catálogo** | [Reto 2](retos/reto-02-catalogo/) | Vitrina de las piezas reales + captura de leads en Supabase |
| 💬 **Asistente** | [Reto 1](retos/reto-01-asistente/) | Chatbot de IA que responde sobre el negocio (y admite cuando no sabe) |
| ✨ **Quiz** | [Reto 3](retos/reto-03-quiz/) | "¿Qué pieza va con tu energía?" — da valor, luego captura el correo |

Los tres comparten el mismo diseño, los mismos datos de producto y la misma
base de datos. Todo vive en una sola app Next.js en [`/app`](app/).

---

## 🚀 Empezar en 3 minutos

Necesitas [Node.js 20+](https://nodejs.org) y npm. Luego:

```bash
# 1. Clona el repo
git clone https://github.com/hernanmanjarres-cmyk/nacare.git
cd nacare/app

# 2. Instala dependencias
npm install

# 3. Copia las variables de entorno
cp .env.example .env.local
# (abre .env.local y rellena las claves — ver más abajo)

# 4. Arranca el servidor
npm run dev
```

Abre **http://localhost:3000** y listo. 🎉

> **¿Sin claves aún?** La app arranca igual. El catálogo y el quiz se ven
> completos; solo el guardado de datos y el chat de IA quedan en pausa hasta
> que configures las claves. No crashea — te avisa con un mensaje claro.

---

## 🔑 Variables de entorno

Copia `app/.env.example` a `app/.env.local` y rellena:

| Variable | Para qué | Dónde conseguirla |
|----------|----------|-------------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Guardar leads | [Supabase](https://supabase.com) → Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Guardar leads (backend) | Igual que arriba (mantenla secreta) |
| `OPENROUTER_API_KEY` | Chatbot de IA | [openrouter.ai/keys](https://openrouter.ai/keys) (gratis para empezar) |

**Base de datos:** corre el archivo [`app/supabase-schema.sql`](app/supabase-schema.sql)
en el SQL Editor de Supabase para crear la tabla `leads` con seguridad (RLS).

---

## 🧱 Stack

- **[Next.js 16](https://nextjs.org)** + React 19 + TypeScript
- **[Tailwind CSS 4](https://tailwindcss.com)** (diseño)
- **[Supabase](https://supabase.com)** (base de datos de leads)
- **[Vercel AI SDK](https://sdk.vercel.ai)** + **[OpenRouter](https://openrouter.ai)** (chatbot)
- **[Zod](https://zod.dev)** (validación de datos)

---

## 📁 Estructura

```
nacare/
├── app/                      # La aplicación Next.js (todo el código)
│   ├── src/
│   │   ├── app/              # Páginas y rutas API
│   │   │   ├── page.tsx      # 🛍️ Catálogo (Reto 2)
│   │   │   ├── asistente/    # 💬 Asistente (Reto 1)
│   │   │   ├── quiz/         # ✨ Quiz (Reto 3)
│   │   │   └── api/          # /api/chat y /api/leads
│   │   ├── components/       # Componentes de UI
│   │   ├── data/             # Datos reales (productos, conocimiento, quiz)
│   │   └── lib/              # Utilidades (supabase, ai, quiz, whatsapp)
│   ├── public/products/      # Fotos reales de las piezas
│   └── supabase-schema.sql   # Schema de la base de datos
├── retos/                    # Documentación de cada reto del concurso
│   ├── reto-01-asistente/
│   ├── reto-02-catalogo/
│   └── reto-03-quiz/
├── BMC-nacare.md             # Modelo de negocio (planeación)
└── VPC-nacare.md             # Propuesta de valor (planeación)
```

---

## 📸 Cambiar las fotos de producto

Las fotos viven en [`app/public/products/`](app/public/products/). Cada archivo
se llama igual que el `id` de la pieza en
[`app/src/data/products.ts`](app/src/data/products.ts) (ej: `collar-nacar-perla.jpg`).
Reemplaza el archivo con el mismo nombre y la foto se actualiza sola. Si falta
una foto, la app muestra un placeholder elegante con los colores de la pieza.

---

## 🌐 Desplegar (Vercel)

1. Sube el repo a GitHub.
2. En [Vercel](https://vercel.com), importa el repo y elige la carpeta `app` como raíz.
3. Agrega las variables de entorno del `.env.local`.
4. Deploy. ✨

---

## 📖 Sobre cada reto

Cada carpeta en [`retos/`](retos/) explica **qué pide el reto de Platzi**, **cómo
lo resolvimos** y **cómo probarlo**. Empieza por el que te interese:

- 💬 [Reto 1 — El asistente que responde por tu negocio](retos/reto-01-asistente/README.md)
- 🛍️ [Reto 2 — Tu producto en línea, capturando datos reales](retos/reto-02-catalogo/README.md)
- ✨ [Reto 3 — La forma más creativa de capturar leads](retos/reto-03-quiz/README.md)

---

*Hecho con 🤍 para Nacaré · Santa Marta, Colombia*
