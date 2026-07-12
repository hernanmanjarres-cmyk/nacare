import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Fija la raíz del workspace a esta carpeta (evita el warning por lockfiles
  // múltiples en el home del usuario).
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
