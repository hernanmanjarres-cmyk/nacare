import Link from "next/link";
import { Logo } from "./logo";
import { ButtonLink } from "@/components/ui/button";
import { whatsappLink } from "@/lib/utils";

const links = [
  { href: "/", label: "Catálogo" },
  { href: "/asistente", label: "Asistente" },
  { href: "/quiz", label: "Tu pieza ideal" },
];

/** Navbar compartido por los 3 retos. */
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-shell/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Nacaré inicio">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-ink-soft transition-colors hover:bg-sand hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <ButtonLink
          href={whatsappLink("¡Hola Nacaré! 🐚 Quiero conocer más de sus piezas.")}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          size="sm"
        >
          WhatsApp
        </ButtonLink>
      </nav>
    </header>
  );
}
