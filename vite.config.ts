import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true, outputDir: "dist/types" })],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["google-palette"])]
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js"
    },
    rollupOptions: {
      external: ["vue", /primevue\/.+/, "vue-router", "pinia"],
      output: {
        globals: {
          vue: "Vue"
        },
        manualChunks: () => "index.js"
      }
    },
    target: "esnext",
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"]
    },
    setupFiles: "./tests/unit/setupTests.js"
  }
});
