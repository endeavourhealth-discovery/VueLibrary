# Repository Guidelines

## Project Structure & Module Organization
The project is a Vue 3 component library using TypeScript and Vite. It is organized into specialized modules within `src/`:
- **components/**: Vue 3 `<script setup>` SFCs.
- **composables/**: Reusable logic using the Vue Composition API.
- **helpers/**: Utility functions categorized by domain (e.g., `Datetime`, `Sorters`).
- **enums/** & **interfaces/**: Domain types and enumerations, including `AutoGen.ts` for generated code.
- **stores/**: State management using Pinia.
- **models/**: Data models for the application domain.
- **injectionKeys/**: Shared injection keys for provide/inject patterns.

Path aliases are configured such that `@/` maps to the `./src/` directory.

## Build, Test, and Development Commands
The project uses `pnpm` as its package manager.
- **Dev**: `pnpm dev` - Starts the Vite development server.
- **Build**: `pnpm build` - Runs `vue-tsc` for type checking followed by `vite build`.
- **Test**: `pnpm test:unit` - Executes unit tests using Vitest.
- **Format**: `pnpm format` - Runs Prettier to format `src` and `tests` directories.
- **Format Check**: `pnpm format:check` - Validates code formatting without modification.

## Coding Style & Naming Conventions
Enforced via ESLint and Prettier:
- **Linting**: ESLint (Flat config) with `typescript-eslint` and `eslint-plugin-vue`. Note that `@typescript-eslint/no-explicit-any` and `vue/multi-word-component-names` are disabled.
- **Formatting**: Prettier with `@trivago/prettier-plugin-sort-imports` for automatic import sorting and `prettier-plugin-tailwindcss`.
- **TypeScript**: Strict mode is enabled. Use explicit type imports where possible.

## Testing Guidelines
Unit testing is performed using **Vitest**.
- **Location**: All unit tests are located in `tests/unit/`.
- **Utilities**: Uses `@vue/test-utils` for component testing and `@pinia/testing` for store testing.
- **Configuration**: Global setup is defined in `tests/unit/setupTests.js`.

## Commit & Pull Request Guidelines
The project uses **Husky** and **lint-staged** to enforce formatting:
- **Pre-commit**: `lint-staged` runs Prettier on staged files before each commit.
- **Commit Messages**: Follow descriptive practices (e.g., "Fixed imports...", "Updated autogen"). While no strict conventional commit format is enforced, maintain clarity regarding the functional change.
