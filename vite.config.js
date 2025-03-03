// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import svgr from "vite-plugin-svgr";

// export default defineConfig({
//   plugins: [react(), svgr()],
//   test: {
//     clearScreen: true,
//     globals: true,
//     environment: "jsdom",
//     setupFiles: "./src/setupTests.js",
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // Import the plugin

export default defineConfig({
  plugins: [svgr(), react()],

  test: {
    clearScreen: true,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  }, // Add svgr BEFORE react()
});
