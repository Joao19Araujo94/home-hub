import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from "@auth0/auth0-vue";
import HomeView from '../views/home-view.vue'
import AboutView from '../views/about-view.vue'
import CallbackView from '../views/callback-view.vue'
import ProfileView from '../views/profile-view.vue'
import AdminView from '../views/admin-view.vue'
import DashboardView from '../views/dashboard-view.vue'
import ExpensesView from '../views/expenses-view.vue'
import DevicesView from '../views/devices-view.vue'
import SettingsView from '../views/settings-view.vue'

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
      component: CallbackView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      beforeEnter: authGuard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter: authGuard
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: ExpensesView,
      beforeEnter: authGuard
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      beforeEnter: authGuard
    },
    {
      path: '/devices',
      name: 'devices',
      component: DevicesView,
      beforeEnter: authGuard
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      beforeEnter: authGuard
    }
  ]
})

export default router
