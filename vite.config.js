import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import wyw from "@wyw-in-js/vite";

export default defineConfig({
  plugins: [wyw(), react()],
  base: "/G26-S1-temario-react/",
});
