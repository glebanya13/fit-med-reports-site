import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegView from '../views/RegView.vue'
import HomeView from '../views/client/HomeView.vue'
import ReportsView from '../views/doctor/ReportsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/reg',
    name: 'reg',
    component: RegView
  },
  // Client
  {
    path: '/',
    name: 'home',
    meta: {
      authRequired: true
    },
    component: HomeView
  },
  // Doctor
  {
    path: '/reports',
    name: 'reports',
    meta: {
      authRequired: true
    },
    component: ReportsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
