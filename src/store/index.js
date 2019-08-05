import Vue from "vue";
import Vuex from "vuex";
import cart from "./cart";
import ui from "./ui";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    cart,
    ui
  },
  strict: debug
});
