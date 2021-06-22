/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
==========================================================================================*/

import ability from './../../libs/acl/ability'

export default {
  SET_MELI_USER(state, user) {
    console.log('SET_MELI_USER')
    for (const property of Object.keys(user)) {
      if (user[property] != null) {
        // If some of user property is null - user default property defined in state.AppActiveUser
        state.AppActiveMeli[property] = user[property]
      }
    }
  },

  SET_AURUBE_USER(state, payload) {
    console.log('SET_AURUBE_USER')
    for (const property of Object.keys(payload)) {
      if (payload[property] != null) {
        // If some of user property is null - user default property defined in state.AppActiveUser
        state.AppActiveUser[property] = payload[property]
      }
    }
    ability.update(payload.ability)
  },

  RESET_AURUBE_USER(state) {
    console.log('RESET_AURUBE_USER')

    // If some of user property is null - user default property defined in state.AppActiveUser
    state.AppActiveUser = {}
  }
}
