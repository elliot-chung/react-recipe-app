import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://viteejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "./",
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
