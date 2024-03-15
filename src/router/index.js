import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ExercicioUmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'exercicio-um',
      component: HomeView
    },
    {
      path: '/exercicio-dois',
      name: 'exercicio-dois',
      component: () => import('../views/ExercicioDoisView.vue')
    }
  ]
})

export default router
