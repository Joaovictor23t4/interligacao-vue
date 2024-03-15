import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ExercicioUm.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExercicioDois.vue.vue')
    }
  ]
})

export default router
