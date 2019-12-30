import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Message from '../components/Message.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      { path: '/topic/:id/:topic_name', name: 'Message', component: Message },      
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
