import { App, Plugin } from "vue";
import * as Components from "./components";

const vueLibrary: Plugin = {
  install(app: App) {
    for (const key in Components) {
      // @ts-expect-error
      app.component(key, Components[key]);
    }
  }
};

export { vueLibrary };

export * from "./components";
export * from "./enums";
export * from "./composables";
export * from "./helpers";
export type * from "./interfaces";
export * from "./models";
export { default as injectionKeysVueLibrary } from "./injectionKeys/injectionKeys";
export * from "./stores";
