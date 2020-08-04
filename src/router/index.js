import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import { token } from '@config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '主页'
    },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to && to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path !== '/login' && !Vue.ls.get(`${token}`)) {
    next({ replace: true, name: 'login', query: { redirect: to.path } })
  } else {
    next()
  }
})

export default router
