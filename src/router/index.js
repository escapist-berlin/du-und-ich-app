import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome.vue'
import AppAbout from '../views/AppAbout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        home: AppHome,
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        about: AppAbout,
      }
    }
  ]
})

export default router
