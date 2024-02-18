import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store/store";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css"
import mixin from './mixin'

// import "bootstrap-vue/dist/bootstrap-vue.css";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Notifications from 'vue-notification';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@fortawesome/fontawesome-free/css/all.css";

Vue.mixin(mixin);
Vue.use(ElementUI);
Vue.use(Notifications);

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
