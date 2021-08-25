import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: {
      token: '',
      received: 0
    },
    user: {
      name: '',
      account: '',
      role: 0,
      email: '',
      donate_amount: '',
      change_amount: '',
      id: '',
      cart: ''
    }
  },
  mutations: {
    login (state, data) {
      state.jwt.token = data.token
      state.jwt.received = new Date().getTime()
      state.user.name = data.name
      state.user.account = data.account
      state.user.role = data.role
      state.user.email = data.email
      state.user.id = data.id
      state.user.donate_amount = data.donate_amount
      state.user.change_amount = data.change_amount
    },
    cart (state, data) {
      state.user.cart = data
    },
    logout (state) {
      state.jwt = {
        token: '',
        received: 0
      }
      state.user = {
        name: '',
        account: '',
        role: 0,
        email: '',
        donate_amount: '',
        change_amount: '',
        id: '',
        cart: ''
      }
    },
    extend (state, data) {
      state.jwt.token = data
      state.jwt.received = new Date().getTime()
    },
    getinfo (state, data) {
      state.user.account = data.account
      state.user.role = data.role
      state.user.email = data.email
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    user (state) {
      return { isLogin: state.user.account.length > 0, isAdmin: state.user.role === 1, ...state.user }
    }
  },
  plugins: [createPersistedState()]
})
