import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite Configuration
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ]
});