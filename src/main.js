import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue3 from 'bootstrap-vue-3'

import "./assets/scss/g-kit.scss";


createApp(App).use(router).use(BootstrapVue3).mount("#app");
