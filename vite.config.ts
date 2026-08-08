import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  plugins: [
    tanstackStart(),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
    netlify(),
  ],
  server: {
    port: 3000,
  },
});
