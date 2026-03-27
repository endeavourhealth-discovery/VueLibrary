import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import dts from "vite-plugin-dts";

const entries: Record<string, string> = {
  index: path.resolve(__dirname, "src/index.ts"),
  interfaces: path.resolve(__dirname, "src/interfaces/index.ts"),
  enums: path.resolve(__dirname, "src/enums/index.ts"),
  composables: path.resolve(__dirname, "src/composables/index.ts"),
  helpers: path.resolve(__dirname, "src/helpers/index.ts"),
  models: path.resolve(__dirname, "src/models/index.ts"),
  stores: path.resolve(__dirname, "src/stores/index.ts")
};

export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true, include: ["src"] })],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["google-palette"])]
    }
  },
  build: {
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: entries,
      external: ["vue", "vue-router", "pinia"],
      output: {
        dir: "dist",
        format: "es",
        exports: "named",
        entryFileNames: "[name].js",
        globals: {
          vue: "Vue"
        }
      }
    },
    target: "esnext",
    outDir: "dist",
    emptyOutDir: true
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
