import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Message from '../components/Message.vue'
import Login from '../components/login'
import Register from '../components/Register'
import PaymentStart from '../components/PaymentStart.vue'
import AccountSettings from '../components/AccountSettings'

Vue.use(VueRouter)
function authGaurd(to, from, next){
  if (localStorage.getItem('token') == undefined){
    next('/login');
  }else{
    next();
  }
}

// function beforeEnterLogin(to, from , next){
//   if(localStorage.getItem('token') == undefined){
//     next();
//   }else{
//     if (from.path='/login'){
//       next('/dashboard');
//     }else{
//       next(from.path);
//     }
//   }
// }

const routes = [
  
  { 
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: authGaurd,
    children: [
      { path: '/topic/:id/:topic_name', name: 'Message', component: Message, beforeEnter: authGaurd},      
      { path: '/user/:id',  name: 'Message', component: Message,  beforeEnter: authGaurd},
      { path:'/payment/listoptions',   name: 'PaymentStart', component: PaymentStart, beforeEnter: authGaurd},
      
    ]
  },
  { 
      path:'/accounts/settings',   
      name: 'AccountSettings', 
      component: AccountSettings, 
      beforeEnter: authGaurd
  },
  {
    path:'/login',
    name:'Login',
    component:Login,
    // beforeEnter: beforeEnterLogin
  },
  {
    path:'/register',
    name:'Register',
    component:Register,
    // beforeEnter: beforeEnterLogin
  },
  

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
