/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
==========================================================================================*/

export default {
  saveUser(state, payload) {
    console.log('saveUser');
    console.log(payload);
    for (const property of Object.keys(payload)) {
      if (payload[property] != null) {
        // If some of user property is null - user default property defined in state.AppActiveUser
        state[property] = payload[property];
      }
    }
    console.log(state);
  },

  LOADING(state, payload) {
    console.log('changing loading' + payload);
    state.loading = payload;
  },
};
