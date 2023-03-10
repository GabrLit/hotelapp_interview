//@ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // transform svg to react component

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()], // register the plugin
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests.setup.js",
  },
});
