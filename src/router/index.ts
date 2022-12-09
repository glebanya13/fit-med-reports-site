import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


import LoginView from '../views/LoginView.vue'
import RegView from '../views/RegView.vue'


import AwardsView from '../views/client/AwardsView.vue'
import HomeView from '../views/client/HomeView.vue'
import JournalView from '../views/client/JournalView.vue'
import TestsView from '../views/client/TestsView.vue'
import ChatView from '../views/client/ChatView.vue'
import RecommendationsView from '../views/client/RecommendationsView.vue'
import MyDoctorsView from '../views/client/MyDoctorsView.vue'

import ReportsView from '../views/doctor/ReportsView.vue'
import EditReportView from '../views/doctor/EditReportView.vue'

import StrView from '../views/doctor/edit/StrView.vue'
import IntView from '../views/doctor/edit/IntView.vue'
import SelectView from '../views/doctor/edit/SelectView.vue'


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
  {
    path: '/journal',
    name: 'journal',
    meta: {
      authRequired: true
    },
    component: JournalView
  },
  {
    path: '/awards',
    name: 'awards',
    meta: {
      authRequired: true
    },
    component: AwardsView
  },
  {
    path: '/tests',
    name: 'tests',
    meta: {
      authRequired: true
    },
    component: TestsView
  },
  {
    path: '/chat',
    name: 'chat',
    meta: {
      authRequired: true
    },
    component: ChatView
  },
  {
    path: '/recommendations',
    name: 'recommendations',
    meta: {
      authRequired: true
    },
    component: RecommendationsView
  },
  {
    path: '/doctors',
    name: 'doctors',
    meta: {
      authRequired: true
    },
    component: MyDoctorsView
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
  {
    path: '/edit-report',
    name: 'edit',
    meta: {
      authRequired: true,
      editMode: true
    },
    component: EditReportView
  },
  {
    path: '/edit-report/str',
    name: 'str',
    meta: {
      authRequired: true,
      editMode: true
    },
    component: StrView
  },
  {
    path: '/edit-report/int',
    name: 'int',
    meta: {
      authRequired: true,
      editMode: true
    },
    component: IntView
  },
  {
    path: '/edit-report/select',
    name: 'select',
    meta: {
      authRequired: true,
      editMode: true
    },
    component: SelectView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
