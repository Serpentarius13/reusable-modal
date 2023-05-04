import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

// create app from source component
const app = createApp(App);

// create pinia instance
const pinia = createPinia();

// apply pinia to app
app.use(pinia);

// mount app to #app div
app.mount("#app");
