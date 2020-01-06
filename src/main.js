import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import css from './assets/css/main.css'
import axios from "axios";
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VModal)

new Vue({
  router,
  store,
  global,
  axios,
  css,
  render: h => h(App)
}).$mount('#app')
