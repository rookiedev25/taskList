import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/taskList/", // 👈 This is CRITICAL for GitHub Pages
  plugins: [tailwindcss(), react()],
});
