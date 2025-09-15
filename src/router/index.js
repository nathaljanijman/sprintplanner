import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/planner',
    name: 'Planner',
    component: () => import('../pages/Planner.vue')
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: () => import('../pages/PrivacyPolicy.vue')
  },
  {
    path: '/terms',
    name: 'TermsOfService',
    component: () => import('../pages/TermsOfService.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../pages/Service.vue')
  },
  {
    path: '/data-deletion',
    name: 'DataDeletion',
    component: () => import('../pages/DataDeletion.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router