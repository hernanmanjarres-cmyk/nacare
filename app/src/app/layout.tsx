import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/brand/navbar";
import { Footer } from "@/components/brand/footer";
import { ChatWidget } from "@/components/assistant/chat-widget";

// Sans para cuerpo (Geist, default de Next 16)
const sans = Geist({
  variable: "--font-sans-nacare",
  subsets: ["latin"],
});

// Serif elegante para titulares — coherente con la estética artesanal/romántica
const serif = Fraunces({
  variable: "--font-serif-nacare",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nacaré · Joyería artesanal de Santa Marta",
  description:
    "Joyería y bisutería hecha a mano en Santa Marta, Colombia. Piezas con alma costera. Pide la tuya por WhatsApp. 🐚",
  metadataBase: new URL("https://nacare.example"),
  openGraph: {
    title: "Nacaré · Joyería artesanal de Santa Marta",
    description: "Piezas hechas a mano con amor. 🐚",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="bg-sand-texture flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
