import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/home/index'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/example/icons',
    name: 'icons',
    component: () => import('@/views/example/icons'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/example/navbar',
    name: 'navbar',
    component: () => import('@/views/example/navbar'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart/index'),
    meta: {
      keepAlive: false
    }
  }
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    // base: '/app/',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

export default createRouter()
