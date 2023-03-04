import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from "@auth0/auth0-vue";
import HomeView from '../views/home-view.vue'
import AboutView from '../views/about-view.vue'
import Callback from '../views/callback-view.vue'
import Profile from '../views/profile-view.vue'
import AdminView from '../views/admin-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      beforeEnter: authGuard
    }
  ]
})

export default router
