import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Login from '../components/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  // Другие маршруты
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router