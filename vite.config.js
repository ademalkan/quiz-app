import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/*/**")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      types: `${path.resolve(__dirname, "./src/@types")}`,
      temps: `${path.resolve(__dirname, "./src/temp")}`,
      features: `${path.resolve(__dirname, "./src/features")}`,
    },
  },
});
