import { App, Plugin } from "vue";
import * as components from "./components";

export interface vueLibraryInterface {
  install: Plugin;
}

const vueLibrary: vueLibraryInterface = {
  install(app: App, options: any): void {
    for (const key in components) {
      // @ts-expect-error
      app.component(key, components[key]);
    }
  }
};

export default vueLibrary;

export * as Components from "./components";
export * as Enums from "./enums";
export * as Composables from "./composables";
export * as Helpers from "./helpers";
export * as Interfaces from "./interfaces";
export * as Vocabulary from "./vocabulary";
