/*=========================================================================================
  File Name: moduleAuth.js
  Description: Auth Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/Post/pixinvent
==========================================================================================*/

import state from "./modulePostState.js";
import mutations from "./modulePostMutations.js";
import actions from "./modulePostActions.js";
import getters from "./modulePostGetters.js";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
