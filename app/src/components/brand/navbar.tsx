"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { ButtonLink } from "@/components/ui/button";
import { whatsappLink } from "@/lib/utils";

const links = [
  { href: "/", label: "Catálogo" },
  { href: "/asistente", label: "Asistente" },
  { href: "/quiz", label: "Tu pieza ideal" },
  { href: "/vota", label: "Apóyanos 🐚" },
];

/** Navbar compartido por los 3 retos. Con menú hamburguesa en móvil. */
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-shell/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Nacaré inicio" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Links en desktop */}
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

        <div className="flex items-center gap-2">
          <ButtonLink
            href={whatsappLink("¡Hola Nacaré! 🐚 Quiero conocer más de sus piezas.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="sm"
          >
            WhatsApp
          </ButtonLink>

          {/* Botón hamburguesa — solo en móvil */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-sand md:hidden"
          >
            {open ? (
              <span className="text-xl leading-none">✕</span>
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden="true">
                <span className="block h-0.5 w-5 rounded-full bg-ink" />
                <span className="block h-0.5 w-5 rounded-full bg-ink" />
                <span className="block h-0.5 w-5 rounded-full bg-ink" />
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Menú desplegable en móvil */}
      {open && (
        <div className="border-t border-gold/15 bg-shell md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base text-ink transition-colors hover:bg-sand"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
