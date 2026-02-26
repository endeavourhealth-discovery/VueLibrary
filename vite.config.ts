import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import dts from "vite-plugin-dts";

const entries: Record<string, string> = {
  main: path.resolve(__dirname, "src/index.ts"),
  interfaces: path.resolve(__dirname, "src/interfaces/index.ts"),
  enums: path.resolve(__dirname, "src/enums/index.ts"),
  composables: path.resolve(__dirname, "src/composables/index.ts"),
  helpers: path.resolve(__dirname, "src/helpers/index.ts"),
  components: path.resolve(__dirname, "src/components/index.ts"),
  models: path.resolve(__dirname, "src/models/index.ts")
};

export default defineConfig({
  plugins: [
    vue(),
    dts({ insertTypesEntry: true, include: ["src"], outputDir: "dist" }),
    tailwindcss(),
    Components({ resolvers: [PrimeVueResolver()], dts: true, directoryAsNamespace: true, collapseSamePrefixes: true })
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["google-palette"])]
    }
  },
  build: {
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: entries,
      external: ["vue", /^primevue\//, "vue-router"],
      output: {
        dir: "dist",
        format: "es",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name]/index.js",
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    },
    target: "esnext",
    outDir: "dist",
    emptyOutDir: true
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
    setupFiles: "./tests/setupTests.js"
  }
});
