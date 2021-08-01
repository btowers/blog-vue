/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
==========================================================================================*/

export default {
  SET_AURUBE_USER(state, payload) {
    console.log("SET_AURUBE_USER");
    for (const property of Object.keys(payload)) {
      if (payload[property] != null) {
        // If some of user property is null - user default property defined in state.AppActiveUser
        state.AppActiveUser[property] = payload[property];
      }
    }
  },

  LOADING(state, payload) {
    console.log("changing loading" + payload);

    state.loading = payload;
  },
};
