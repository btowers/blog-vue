import Vue from "vue";
import Vuex from "vuex";

import moduleUser from "./user/moduleUser.js";
import modulePost from "./post/modulePost.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: moduleUser,
    post: modulePost,
  },
  strict: process.env.DEV,
});
