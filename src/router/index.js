import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cultura from '../views/Cultura.vue'
import Musica from '../views/Musica.vue'
import Literatura from '../views/Literatura.vue'
import Comida from '../views/Comida.vue'
import Fotografia from '../views/Fotografia.vue'
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
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path:'/register',
    name:'register',
    component: Register
  },
  {
    path:'/cultura',
    name:'cultura',
    component: Cultura
  },
  {
    path:'/musica',
    name:'musica',
    component: Musica
  },
  {
    path:'/literatura',
    name:'literatura',
    component: Literatura
  },
  {
    path:'/comida',
    name:'comida',
    component: Comida
  },
  {
    path:'/fotografia',
    name:'fotografia',
    component: Fotografia
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
