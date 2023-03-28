import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OurView from "@/views/OurView.vue"
import SportView from "@/views/SportView.vue"
import ArticleDetailView from "@/views/ArticleDetailView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/world',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/our',
      name: 'our',
      component: OurView
    },
    {
      path: '/sport',
      name: 'sport',
      component: SportView
    },
    {
      path: '/article/:id',
      name: 'article-detail',
      component: ArticleDetailView,
    }
  ]
})

export default router
