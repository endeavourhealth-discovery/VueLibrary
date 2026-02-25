import { App, Plugin } from "vue";
import * as Components from "./components";

export interface vueLibraryInterface {
  install: Plugin;
}

const vueLibrary: vueLibraryInterface = {
  install(app: App, options: any): void {
    for (const key in Components) {
      // @ts-expect-error
      app.component(key, Components[key]);
    }
  }
};

export default vueLibrary;

export { Components };
export * from "./enums";
export * from "./composables";
export * from "./helpers";
export * from "./interfaces";
export * from "./vocabulary";
export * from "./models";
