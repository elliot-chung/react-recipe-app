import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://viteejs.dev/config/
export default defineConfig({
  plugins: [eslint(), react()],
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
