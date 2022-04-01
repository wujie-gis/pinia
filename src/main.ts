import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

const app = createApp(App);
app.use(createPinia().use(piniaPluginPersist));
app.mount("#app");
