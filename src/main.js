import Vue from "vue";
import router from "./router";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({ router, render: (h) => h(App) }).$mount("#app");

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
