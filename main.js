import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/app.styl'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImgInputer from 'vue-img-inputer'
import VuePageTransition from 'vue-page-transition'
import 'vue-img-inputer/dist/index.css'
import './plugins/axios.js'

import mixin from './mixin.js'

import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'G-M6ERTBTY3Q' }
})

Vue.use(VueSweetalert2)
Vue.component('ImgInputer', ImgInputer)
Vue.use(VuePageTransition)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mixin: [mixin],
  render: h => h(App)
}).$mount('#app')
