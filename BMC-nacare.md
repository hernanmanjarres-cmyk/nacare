# Business Model Canvas — Nacaré.Sm

> **Proyecto:** `nacare` · **Fecha:** 2026-07-12 · **Fuente:** Extract real de Instagram [@nacare.sm](https://www.instagram.com/nacare.sm/)
> **Skill #1 de La Herrería** — Base estratégica de todo el pipeline.

---

## Contexto del Negocio (datos reales, no inventados)

**Nacaré.Sm** es una marca de **joyería/bisutería artesanal hecha a mano** en **Santa Marta, Colombia** 🇨🇴. Se define en IG como "Jewelry Wholesaler" (mayorista) pero vende también directo al consumidor. Estética artesanal-costera-romántica. Canal único de venta: **WhatsApp** (`w.app/nacare`). ~1,160 seguidores. Colecciones temáticas rotativas (Fiestas del Mar, Perla de Mar, Bubblegum, Santa Marta 501, Selección Colombia). Piezas mixtas: stock inmediato + personalizables (dijes y colores a elección). **No publica precios** — todo se cotiza por DM.

**Objetivo del proyecto (macro):** un catálogo web tipo vitrina que muestre las piezas con identidad de marca y empuje cada pedido hacia WhatsApp de forma ordenada, con un **modelo de datos ecommerce-ready** para crecer reto a reto (precios editables, panel admin, carrito) sin rehacer la base.

---

## Los 9 Bloques

### 1. Customer Segments (a quién servimos)

| # | Segmento | Descripción real | Tamaño / prioridad |
|---|----------|------------------|--------------------|
| **S1** | **Compradora final costeña (retail)** | Mujeres 18-40 de Santa Marta y Caribe colombiano que buscan accesorios artesanales, coloridos y con identidad local para uso diario o eventos. Descubren la marca por IG/FYP. Compran 1-3 piezas. | 🔴 Primario |
| **S2** | **Revendedora / mayorista** | Emprendedoras de bisutería y tiendas pequeñas que compran lotes para revender. Justifican el label "Jewelry Wholesaler". Necesitan ver el catálogo completo y precios por volumen. | 🟡 Secundario |
| **S3** | **Compradora emocional / regalo** | Personas que compran para regalar (Día del Docente, aniversario de Santa Marta, fechas especiales). Valoran las colecciones temáticas y la personalización. | 🟢 Terciario |

> **Nota:** El catálogo v1 sirve principalmente a **S1** (vitrina que convierte por WhatsApp). S2 y S3 quedan cubiertos por las colecciones y el filtro por categoría, y se profundizan en retos futuros (precio mayorista, personalizador).

### 2. Value Propositions (qué valor entregamos)

**Para S1 (compradora final):**
- Ver TODAS las piezas con fotos bonitas y organizadas por colección — sin tener que hacer scroll infinito en IG.
- Pedir la pieza exacta que le gustó por WhatsApp **con un click**, sin escribir "¿precio?" y quedarse sin respuesta.
- Sentir la marca (Santa Marta, mar, artesanal) en cada pantalla — no un catálogo genérico.

**Para S2 (revendedora):**
- Catálogo completo navegable en un solo link para mostrar a sus clientes o decidir un pedido.
- (Futuro) Acceso a precio mayorista.

**Para S3 (regalo):**
- Colecciones temáticas curadas (Fiestas del Mar, Bubblegum, conmemorativas) que facilitan elegir un regalo con significado.

> **Propuesta central (una frase):** *"El catálogo de Nacaré que convierte tu 'me encanta' de Instagram en un pedido por WhatsApp, sin fricción y con toda la magia costera de la marca."*

### 3. Channels (cómo llegamos)

| Canal | Rol | Estado |
|-------|-----|--------|
| **Instagram @nacare.sm** | Descubrimiento (FYP, reels, posts) → link en bio al catálogo | ✅ Actual |
| **WhatsApp `w.app/nacare`** | Conversión y cierre de venta | ✅ Actual (canal único hoy) |
| **Catálogo web (este proyecto)** | Vitrina intermedia: IG → **Web** → WhatsApp | 🆕 A construir |
| **Boca a boca / ferias locales** | Adquisición offline en Santa Marta | ✅ Actual |

**Flujo de conversión objetivo:** `IG post → link bio → catálogo web → click pieza → WhatsApp con mensaje pre-armado → venta`

### 4. Customer Relationships (cómo nos relacionamos)

- **Personal y cálida** — el tono de la marca es cercano, tutea, storytelling de emprendimiento familiar ("un sueño familiar"). El catálogo debe mantener ese tono.
- **Autoservicio en la vitrina** — la clienta explora sola el catálogo (self-service), pero la venta es asistida por WhatsApp (humano).
- **Comunidad** — seguidoras fieles que comentan y preguntan; la marca responde por DM.

### 5. Revenue Streams (cómo capturamos valor)

| Fuente | Modelo | Estado |
|--------|--------|--------|
| **Venta retail de piezas** | Precio por unidad, cerrado por WhatsApp | ✅ Actual |
| **Venta mayorista / lotes** | Precio por volumen a revendedoras | ✅ Actual |
| **Piezas personalizadas** | Encargo con dijes/colores a elección | ✅ Actual |

> El catálogo web **no cobra** directamente (v1). Es un **habilitador de ingresos**: reduce fricción y aumenta la tasa de conversión de IG→venta. El modelo de datos guarda `price` desde el día 1 para activar precios/ecommerce en retos futuros.

### 6. Key Resources (qué necesitamos)

- **Fotografía de producto** (activo #1 de la marca — ya la tienen en IG).
- **Identidad visual** (logo concha/nácar, paleta beige-arena-dorado-tierra, tono de voz).
- **Catálogo de piezas** (datos: nombre, colección, material, colores, foto, precio, disponibilidad).
- **Número de WhatsApp Business** (`w.app/nacare`).
- **El repo/código** (este proyecto — reutilizable para el concurso).

### 7. Key Activities (qué hacemos)

- Diseñar y producir piezas artesanales (actividad core de tu amiga).
- Fotografiar y publicar colecciones temáticas.
- **Mantener el catálogo actualizado** (subir piezas nuevas, marcar agotados).
- Atender pedidos por WhatsApp.
- (Proyecto) Construir y mantener el catálogo web + integrarlo con cada reto del concurso.

### 8. Key Partnerships (aliados)

- **Proveedores de insumos** (cuentas, dijes, cadenas, nácar, perlas).
- **WhatsApp / Meta** (canal de venta y descubrimiento).
- **Servicios de envío** (nacional e internacional — mencionado en bio).
- **Tú + el concurso Platzi** (el "socio tecnológico" que construye la plataforma).

### 9. Cost Structure (qué cuesta)

| Costo | Tipo | Nota |
|-------|------|------|
| Insumos y materiales | Variable | Por pieza producida |
| Tiempo de producción artesanal | Variable | Mano de obra |
| Envíos | Variable | Absorbido o cobrado al cliente |
| **Hosting del catálogo web** | Fijo (bajo) | Vercel free tier — **$0** en v1 |
| **Dominio** | Fijo (bajo) | Opcional (~$12/año) |
| Fotografía / contenido IG | Variable | Ya lo hacen |

> **Costo tecnológico del proyecto v1: prácticamente $0** (Vercel free + datos en archivo, sin backend de pagos).

---

## Risk Points

| # | Riesgo | Mitigación |
|---|--------|------------|
| R1 | **Catálogo desactualizado** (piezas agotadas siguen visibles) | Campo `available` en el modelo + proceso simple de update. Panel admin en reto futuro. |
| R2 | **No mostrar precio frena la conversión** (dolor actual) | Botón WhatsApp con mensaje pre-armado por pieza. Precio se activa cuando tu amiga decida (modelo ya lo soporta). |
| R3 | **Dependencia total de WhatsApp** (si cambia el link o se cae) | Link centralizado en config; fácil de cambiar en un solo lugar. |
| R4 | **Fotos de baja resolución de IG** | Optimizar con ImageMagick / upscale; pedir fotos originales a tu amiga. |
| R5 | **Colecciones temáticas caducan** (Fiestas del Mar pasa de temporada) | Campo `collection` + `active` para archivar colecciones sin borrarlas. |

---

## Supuestos a Validar (con tu amiga)

- [ ] ¿Quiere publicar precios en el catálogo o mantenerlos por DM (como IG)? → **Decisión actual: por DM, modelo listo para precio.**
- [ ] ¿Cuál es el rango de precios real de las piezas? (para cuando se active)
- [ ] ¿Envío internacional a qué países realmente?
- [ ] ¿Prefiere que el catálogo tenga su logo real? (necesitamos el archivo del logo)
- [ ] ¿Hay más de 12 piezas? ¿Cuántas colecciones activas mantiene a la vez?

---

## Reporte de Alineación BMC ↔ VPC

*(Ver `VPC-nacare.md` para el detalle de cada segmento)*

| # | Check | Resultado |
|---|-------|-----------|
| 1 | Cada Segmento del BMC tiene un VPC | ✅ S1, S2, S3 con VPC |
| 2 | Cada Revenue Stream tiene un Value Proposition | ✅ Retail→S1, Mayoreo→S2, Personalizado→S3 |
| 3 | Cada Customer Job del VPC pertenece a un segmento del BMC | ✅ Sin jobs huérfanos |
| 4 | Pain Relievers y Gain Creators cubren la propuesta central | ✅ Cubierto (ver VPC) |
| 5 | Pains y Gains no abordados tienen disposición explícita | ✅ "No Abordado" documentado en VPC |

**Alineación: 5/5 ✅**
