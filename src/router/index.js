import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import CreateEvent from '../views/CreateEvent.vue'
import Register from '../views/Register.vue'
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
    path:'/create-event',
    name:'create-event',
    component: CreateEvent
  },
  {
    path: '/home',
    name: 'home',
    component: Home
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
