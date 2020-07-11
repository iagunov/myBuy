import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    meta: {layout: 'auth'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    meta: {layout: 'auth'},
    component: () => import('@/views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
