import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true, include: ["src"] })],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["google-palette"])]
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VueLibrary",
      formats: ["es"],
      fileName: "index.js"
    },
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: [path.resolve(__dirname, "src/index.ts")],
      external: ["vue", "@primeuix/themes", "primevue", /primevue\/.+/, "primeicons", "vue-router", "pinia"],
      output: {
        dir: "dist",
        format: "es",
        exports: "named",
        entryFileNames: "[name].js",
        preserveModules: true,
        globals: {
          vue: "Vue"
        }
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
