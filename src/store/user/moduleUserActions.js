/*=========================================================================================
  File Name: moduleUserActions.js
  Description: Auth Module Actions
==========================================================================================*/

import axios from 'axios'
import router from '../../router'

export default {
  registerUser({ commit }, payload) {
    const { firstName, lastName, email, password } = payload.userDetails
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/register', {
          firstName,
          lastName,
          email,
          password
        })
        .then(response => {
          let user = response.data
          commit('SET_AURUBE_USER', user)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/login', {
          email: payload.userDetails.email,
          password: payload.userDetails.password
        })
        .then(response => {
          console.log(response)

          if (response.data) {
            console.log('USER LOGGED IN')
            let aurubeUser = response.data.aurubeUser
            let meliUser = response.data.meliUser
            console.log(response.data)
            if (meliUser == null) {
              resolve('/meli-connect')
            } else {
              commit('SET_AURUBE_USER', aurubeUser)
              commit('SET_MELI_USER', meliUser)

              if (aurubeUser.firstLogin || aurubeUser.processingNewUser) {
                console.log('USER FIRST LOGIN')
                resolve('/newuser')
              } else {
                resolve('/')
              }
            }
          } else {
            reject()
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  logout({ commit }) {
    console.log('logging out...')
    return axios
      .get('/auth/logout')
      .then(() => {
        commit('SET_AURUBE_USER', {}, { root: true })
        this.$router.push({ name: 'auth-login' })
      })
      .catch(() => {})
  },

  meliConnect() {
    return new Promise((resolve, reject) => {
      axios
        .get('/auth/getCode')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  deleteSchedule(payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios
        .post('/deleteSchedule', payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  editSchedule(payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios
        .post('/editSchedule', payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  updateProfile({ commit }, payload) {
    return new Promise(resolve => {
      let user = payload

      commit('/SET_AURUBE_USER', user, { root: true })
      commit('/SET_AURUBE_USER', { loggedIn: true }, { root: true })

      // If reload is required to get fresh data after update
      // Reload current page
      if (payload.isReloadRequired) {
        router.push(router.currentRoute.query.to || '/')
      }
      resolve()
    })
  },

  async checkAuthentication({ commit }) {
    let response = await axios.get('/auth/checkAuthentication')
    if (response.data.authorized == false) {
      console.log('user not authorized')
      return false
    } else if (response.data.authorized == true) {
      console.log('user is authorized')
      commit('SET_AURUBE_USER', response.data.user)
      return true
    }
  },

  getAppActiveMeli({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/auth/getMeliUser`)
        .then(response => {
          console.log('getAppActiveMeli')
          console.log(response.data)
          commit('SET_MELI_USER', response.data)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
