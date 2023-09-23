import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store/store";
import './axios';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Notifications from 'vue-notification';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(ElementUI);
Vue.use(Notifications);

Vue.config.productionTip = false;
Vue.use(Vuex);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
