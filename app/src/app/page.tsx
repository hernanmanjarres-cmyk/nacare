import Link from "next/link";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { LeadForm } from "@/components/catalog/lead-form";
import { ButtonLink } from "@/components/ui/button";
import { whatsappLink } from "@/lib/utils";
import { products, collections } from "@/data/products";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* HERO */}
      <section className="py-16 text-center sm:py-24">
        <p className="mb-4 inline-block rounded-full border border-gold/30 bg-cream/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-deep">
          🐚 Santa Marta, Colombia
        </p>
        <h1 className="font-display mx-auto max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-6xl">
          Joyería hecha a mano,{" "}
          <span className="italic text-gold-deep">con alma de mar</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
          Cada pieza de Nacaré nace de un sueño familiar y del Caribe
          colombiano. Encuentra la tuya y pídela por WhatsApp en un clic.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="#catalogo" size="lg">
            Ver el catálogo
          </ButtonLink>
          <ButtonLink
            href={whatsappLink("¡Hola Nacaré! 🐚 Quiero conocer sus piezas.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            Escríbenos
          </ButtonLink>
        </div>

        {/* Mini stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-ink-soft">
          <Stat value={`${products.length}`} label="piezas únicas" />
          <Stat value={`${collections.length}`} label="colecciones" />
          <Stat value="100%" label="hecho a mano" />
          <Stat value="🇨🇴" label="envíos nacionales e internacionales" />
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="scroll-mt-20 py-8">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Nuestras piezas
          </h2>
          <p className="mt-2 text-ink-soft">
            Filtra por colección y pide la que enamore tu corazón.
          </p>
        </div>
        <CatalogGrid />
      </section>

      {/* CTA cruzado a los otros retos */}
      <section className="my-16 grid gap-4 sm:grid-cols-2">
        <CrossCard
          href="/asistente"
          emoji="💬"
          title="Habla con Nacaré"
          text="¿Dudas de envíos, precios o personalización? Nuestro asistente responde al instante."
        />
        <CrossCard
          href="/quiz"
          emoji="✨"
          title="Encuentra tu pieza ideal"
          text="Responde 5 preguntas y descubre qué joya de Nacaré va con tu energía."
        />
      </section>

      {/* CAPTURA DE LEADS (P2) */}
      <section className="mx-auto max-w-lg py-8">
        <LeadForm />
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-2xl font-semibold text-gold-deep">
        {value}
      </span>
      <span>{label}</span>
    </div>
  );
}

function CrossCard({
  href,
  emoji,
  title,
  text,
}: {
  href: string;
  emoji: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[var(--radius-nacare)] border border-gold/20 bg-cream/50 p-6 transition-all hover:border-gold hover:bg-cream hover:shadow-md"
    >
      <p className="text-3xl">{emoji}</p>
      <h3 className="font-display mt-3 text-xl font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-ink-soft">{text}</p>
      <span className="mt-3 inline-block text-sm font-medium text-gold-deep transition-transform group-hover:translate-x-1">
        Probar →
      </span>
    </Link>
  );
}
