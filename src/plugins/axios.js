import VueAxios from 'vue-axios'
import axios from 'axios'
import Vue from 'vue'
import store from '../store'
import router from '../router'

axios.defaults.baseURL = process.env.VUE_APP_API

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      const extendUrl = '/users/extend'
      if (error.config.url !== extendUrl) {
        const originalRequest = error.config
        return axios.post(extendUrl, {}, {
          headers: {
            authorization: 'Bearer ' + store.state.jwt.token
          }
        }).then((response) => {
          store.commit('extend', response.data.result)
          originalRequest.headers.authorization = 'Bearer ' + store.state.jwt.token
          return axios(originalRequest)
        }).catch((error) => {
          store.commit('logout')
          router.push('/login')
          return Promise.reject(error)
        })
      }
    }
  } else {
    if (error.code === 'ECONNABORTED' && error.message && error.message.includes('timeout')) {
      alert('請求逾時')
    } else {
      alert('網路不穩定')
    }
  }
  return Promise.reject(error)
})

Vue.use(VueAxios, axios)
