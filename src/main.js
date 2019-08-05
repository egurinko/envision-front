import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  vuetify,
  render: h => h(App)
});
