import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://xander9290.github.io/rickandmortyreact/",
  plugins: [react()],
});
