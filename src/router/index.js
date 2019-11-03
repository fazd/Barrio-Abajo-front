import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import PickEvent from '../views/PickEvent.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    path: '/home',
    name: 'home',
    component: Home
  },
  {
>>>>>>> 760f3a5d80d130315edd5408a3df19bcf7c4765c
    path: '/pick-event',
    name: 'pick-event',
    component: PickEvent
=======
    path: '/home',
    name: 'home',
    component: Home
>>>>>>> Event component
  },
  {
    path:'/register',
    name:'register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
