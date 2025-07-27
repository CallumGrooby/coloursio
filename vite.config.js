import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // Import the plugin
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [svgr(), react(), tailwindcss()],

  test: {
    clearScreen: true,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
