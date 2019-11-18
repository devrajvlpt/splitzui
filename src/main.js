import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from "./public/stylesheets/global.css";
import axios from "axios";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  global,
  axios,
  render: h => h(App)
}).$mount('#app')
