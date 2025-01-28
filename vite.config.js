import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    clearScreen: true,
    globals: true, // Enables global `test` and `expect`
    environment: "jsdom", // Simulates a browser environment
    setupFiles: "./src/setupTests.js", // Path to setup file
  },
});
