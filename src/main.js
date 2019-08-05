import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import router from "./router";
import constant from "../constant";

Vue.config.productionTip = false;
Vue.prototype.$constant = constant;

new Vue({
  el: "#app",
  store,
  router,
  vuetify,
  constant,
  render: h => h(App)
});
