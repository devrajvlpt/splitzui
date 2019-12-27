import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../views/Navbar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Navbar',
    component: Navbar
  },
]

const router = new VueRouter({
  routes
})

export default router
