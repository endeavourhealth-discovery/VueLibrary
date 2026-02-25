import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({ insertTypesEntry: true, include: ["src"] }),
    tailwindcss(),
    Components({ resolvers: [PrimeVueResolver()], dts: true, directoryAsNamespace: true, collapseSamePrefixes: true })
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["google-palette"])]
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "vue-library",
      fileName: "vue-library",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["vue", "/primevue\/.+", "vue-router"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    },
    target: "esnext",
    outDir: "dist",
    emptyOutDir: false
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
