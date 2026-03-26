import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

const app = createApp(App).use(PrimeVue, { ripple: true, local: { dateFormat: "dd/mm/yyyy" } });

app.mount("#app");
