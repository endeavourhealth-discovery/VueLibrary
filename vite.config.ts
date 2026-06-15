import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

const entries: Record<string, string> = {
  index: path.resolve(__dirname, "src/index.ts"),
  interfaces: path.resolve(__dirname, "src/interfaces/index.ts"),
  enums: path.resolve(__dirname, "src/enums/index.ts"),
  composables: path.resolve(__dirname, "src/composables/index.ts"),
  components: path.resolve(__dirname, "src/components/index.ts"),
  constants: path.resolve(__dirname, "src/constants/index.ts"),
  helpers: path.resolve(__dirname, "src/helpers/index.ts"),
  models: path.resolve(__dirname, "src/models/index.ts"),
  stores: path.resolve(__dirname, "src/stores/index.ts")
};

export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true, include: ["src"] })],
  optimizeDeps: {
    rolldownOptions: {
      plugins: [esbuildCommonjs(["google-palette"])]
    }
  },
  build: {
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: entries,
      external: ["vue", "vue-router", "pinia", "@primeuix/themes", "primevue", /primevue\/.+/],
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
    dir: "./tests",
    globals: true,
    environment: "happy-dom",
    coverage: {
      include: ["./tests/**/*.{js,ts}"],
      provider: "v8",
      reporter: ["text", "lcov"]
    },
    setupFiles: "./tests/unit/setupTests.js"
  }
});
