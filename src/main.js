import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVueNext } from 'bootstrap-vue-next'

import "./assets/scss/g-kit.scss";


createApp(App).use(router).use(BootstrapVueNext).mount("#app");
