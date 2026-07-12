# Value Proposition Canvas — Nacaré.Sm

> **Proyecto:** `nacare` · **Fecha:** 2026-07-12 · Complemento de `BMC-nacare.md`
> Un VPC por segmento. **Regla:** el Customer Profile se llena ANTES que la Value Proposition.

---

## VPC 1 — S1: Compradora final costeña (retail) 🔴 PRIMARIO

### Customer Profile

**Customer Jobs (qué intenta lograr)**
- Encontrar un accesorio bonito, artesanal y con identidad local que combine con su estilo.
- Ver rápido todo lo que Nacaré ofrece sin rebuscar en el feed de IG.
- Saber cuánto cuesta y cómo pedirlo sin sentirse ignorada.
- Comprar algo que la haga sentir conectada con Santa Marta / el mar / lo hecho a mano.

**Pains (frustraciones, con magnitud)**
- 🔴 **Pregunta el precio en comentarios de IG y nadie responde públicamente** → abandona la compra. *(Dolor #1, confirmado en el extract: "usuarias preguntan precio sin respuesta pública".)*
- 🟠 Tiene que hacer scroll infinito en el feed para ver qué piezas hay disponibles.
- 🟠 No sabe qué colecciones están vigentes ni cuáles ya se agotaron.
- 🟡 Escribir por DM "hola, ¿precio del collar de la foto 3?" es tedioso y ambiguo.

**Gains (qué significa éxito)**
- Ver la pieza, saber que existe/está disponible y pedirla en segundos.
- Sentir que compra algo especial, no genérico.
- Recibir atención rápida y cálida (el tono de la marca).

### Value Proposition

**Pain Relievers (cómo aliviamos cada dolor)**
- ✅ **Botón "Pedir por WhatsApp" en cada pieza** que abre el chat con un mensaje pre-armado (*"Hola Nacaré 🐚, me interesa: [nombre de la pieza]"*) → mata el dolor #1 de raíz.
- ✅ **Grid de catálogo completo** organizado por colección → adiós scroll infinito.
- ✅ **Estado de disponibilidad** visible (`disponible` / `agotado`) y colecciones activas.
- ✅ Ficha por pieza con material, colores y foto grande.

**Gain Creators (cómo creamos cada ganancia)**
- ✨ **Identidad de marca costera** en toda la UI (paleta arena/dorado, concha/nácar, tono cálido) → la clienta *siente* Nacaré.
- ✨ Navegación por colecciones temáticas → descubre piezas que no vería en el feed.
- ✨ Un click al pedido → gratificación inmediata.

---

## VPC 2 — S2: Revendedora / mayorista 🟡 SECUNDARIO

### Customer Profile

**Customer Jobs**
- Ver el catálogo completo de un vistazo para decidir qué lote pedir.
- Mostrar el catálogo a SUS clientes (usa el link como herramienta de venta).
- Conocer precio por volumen.

**Pains**
- 🟠 No hay un catálogo consolidado — tiene que armar capturas del IG.
- 🟠 Precio mayorista solo por DM, negociación lenta.
- 🟡 No distingue fácil qué es stock inmediato vs. personalizado.

**Gains**
- Un link profesional que puede reenviar.
- Claridad de qué hay disponible en volumen.

### Value Proposition

**Pain Relievers**
- ✅ Catálogo web navegable y compartible en un solo link.
- ✅ Filtro/etiqueta por colección y disponibilidad.
- ⏳ (Futuro reto) Vista/precio mayorista con acceso diferenciado.

**Gain Creators**
- ✨ Catálogo con imagen profesional que ella puede reenviar a sus clientes.
- ✨ Estructura clara stock vs. personalizado (campo `customizable`).

### No Abordado (S2)
- ❌ **Precio mayorista diferenciado** → *Disposición: pospuesto a reto futuro. La v1 dirige mayoreo a WhatsApp con botón "Precio mayorista".*
- ❌ **Login de revendedora** → *Disposición: fuera de alcance v1; candidato a reto con auth.*

---

## VPC 3 — S3: Compradora emocional / regalo 🟢 TERCIARIO

### Customer Profile

**Customer Jobs**
- Encontrar un regalo con significado (fecha especial, identidad local).
- Personalizar la pieza (color, dije) para hacerla única.

**Pains**
- 🟠 No sabe qué colecciones temáticas hay ni cuál encaja con la ocasión.
- 🟡 No sabe si puede personalizar ni cómo pedirlo.

**Gains**
- Regalar algo único y con historia (Santa Marta, el mar, hecho a mano).
- Proceso de personalización claro.

### Value Proposition

**Pain Relievers**
- ✅ **Colecciones temáticas destacadas** (Fiestas del Mar, Bubblegum, Santa Marta 501, conmemorativas).
- ✅ Etiqueta `personalizable` en piezas + botón WhatsApp que menciona "quiero personalizar".

**Gain Creators**
- ✨ Storytelling de cada colección (el "por qué" costero/local de la pieza).
- ✨ Piezas con dijes simbólicos (concha, ballena, tortuga, palma) que cargan significado.

### No Abordado (S3)
- ❌ **Configurador visual de personalización** (elegir dije/color en la web) → *Disposición: excelente candidato a un reto futuro del concurso; v1 canaliza personalización por WhatsApp.*

---

## Resumen de Alineación

| Segmento | Dolor principal | Solución v1 | Diferido a reto futuro |
|----------|-----------------|-------------|------------------------|
| **S1** retail | Precio/pedido por DM sin respuesta | Vitrina + botón WhatsApp por pieza | Precios visibles, ecommerce |
| **S2** mayorista | Sin catálogo consolidado | Link único navegable | Precio mayorista, login |
| **S3** regalo | No encuentra colección para la ocasión | Colecciones temáticas + `personalizable` | Configurador de personalización |

**Insight de producto:** el catálogo v1 debe optimizar **S1** (el volumen), mientras deja *ganchos arquitectónicos* (`price`, `wholesale`, `customizable`, `collection.active`) para que S2 y S3 se profundicen en retos futuros del concurso sin reescribir el modelo.
