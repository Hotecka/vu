import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IphoneView from '../views/IphoneView.vue'
import AndroidView from '../views/AndroidView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/Iphone',
    name: 'IphoneView',
    component: IphoneView
  },
  {
    path: '/Android',
    name: 'AndroidView',
    component: AndroidView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
