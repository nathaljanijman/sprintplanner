import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Planner from '../pages/Planner.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'
import TermsOfService from '../pages/TermsOfService.vue'
import Service from '../pages/Service.vue'
import DataDeletion from '../pages/DataDeletion.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/planner',
    name: 'Planner',
    component: Planner
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/terms',
    name: 'TermsOfService',
    component: TermsOfService
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/data-deletion',
    name: 'DataDeletion',
    component: DataDeletion
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router