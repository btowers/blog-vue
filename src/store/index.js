import Vue from "vue";
import Vuex from "vuex";

import moduleUser from "./user/moduleUser.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: moduleUser,
  },
  strict: process.env.DEV,
});
