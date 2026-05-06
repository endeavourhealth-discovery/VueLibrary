# Developer Structural Overview

This document provides a detailed overview of the Information Manager Vue Library structure and its architectural components.

## Directory Structure

The project follows a modular organization within the `src` directory:

- **`src/components/`**: UI components implemented as Vue 3 Single File Components (SFCs). They use the `<script setup>` syntax and often rely on PrimeVue for base UI elements.
- **`src/composables/`**: Reusable composition logic (hooks). Key utilities include `useTree`, `useOverlay`, and `useChangeThemeOptions`.
- **`src/helpers/`**: Pure utility functions. Subdirectories like `Datetime` group related logic. These are designed to be framework-agnostic where possible.
- **`src/enums/` & `src/interfaces/`**: TypeScript definitions. `AutoGen.ts` in both folders contains types generated from external schemas or models.
- **`src/models/`**: Domain models and classes, such as `User`, `Permission`, and `ToastOptions`.
- **`src/stores/`**: Pinia state management stores. The main store is `userStore.ts`.
- **`src/injectionKeys/`**: Centralized injection keys for Vue's provide/inject API to ensure type safety across the library.
- **`src/logger/`**: Logging configuration using `typescript-logging-log4ts-style`.

## Entry Points & Exports

The library is designed for tree-shaking and offers multiple entry points as defined in `vite.config.ts` and `package.json`:

- **Primary Entry**: `src/index.ts` - Re-exports most functionality from enums, composables, helpers, models, and stores.
- **Sub-module Entries**:
  - `@endeavourhealth-discovery/vue-library/interfaces`
  - `@endeavourhealth-discovery/vue-library/enums`
  - `@endeavourhealth-discovery/vue-library/composables`
  - `@endeavourhealth-discovery/vue-library/components`
  - `@endeavourhealth-discovery/vue-library/helpers`
  - `@endeavourhealth-discovery/vue-library/models`
  - `@endeavourhealth-discovery/vue-library/stores`

## Bundling & Build Process

- **Vite**: Used for bundling the library into ES modules (`es` format).
- **Rollup Configuration**: 
  - `preserveEntrySignatures: "strict"` is used to maintain entry point integrity.
  - External dependencies (Vue, Vue-Router, Pinia, PrimeVue) are excluded from the bundle to avoid duplication in consumer applications.
- **DTS**: `vite-plugin-dts` generates TypeScript declaration files for all exported modules.
- **Type Checking**: `vue-tsc` is used during the build process to ensure type safety across SFCs and TypeScript files.

## Dependencies

The library relies on several peer dependencies that must be provided by the host application:
- `vue` (^3.5.32)
- `vue-router` (^5.0.4)
- `pinia` (^3.0.4)
- `primevue` (^4.5.5)

## Development Workflow

- **Testing**: Vitest is the test runner, configured with `happy-dom` for component testing. Tests are co-located in the `tests/unit` directory, mimicking the `src` structure.
- **Linting & Formatting**: ESLint (Flat config) and Prettier are strictly enforced via Husky pre-commit hooks.
- **Aliases**: The `@/` alias is configured in `tsconfig.json` and `vite.config.ts` to point to the `src` directory.
