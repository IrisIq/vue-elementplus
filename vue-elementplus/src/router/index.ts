import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/loginRegister.vue'),
  },
  {
    path: '/:cathAll(.*)',
    name: '404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/test',
    name: 'testa',
    component: () => import('../views/testView.vue'),
  },
  {
    path: '/forgetpwd',
    name: 'forgetpwd',
    component: () => import('../views/forgetPassword.vue'),
  },
  {
    path: '/restPassword',
    name: 'restPassword',
    component: () => import('../views/restPassword.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
