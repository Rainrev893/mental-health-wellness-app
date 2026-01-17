import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Breathing from '../views/Breathing.vue'
import Wellness from '../views/Wellness.vue'
import AiSupport from '../views/AiSupport.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/breathing',
    name: 'Breathing',
    component: Breathing
  },
  {
    path: '/wellness',
    name: 'Wellness',
    component: Wellness
  },
  {
    path: '/ai-support',
    name: 'AiSupport',
    component: AiSupport
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router