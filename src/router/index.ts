import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DevView from '../views/DevView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: HomeView
    },{
      path: '/home',
      name: 'home',
      component: HomeView
    },{
      path: '/dev',
      name: 'dev',
      component: DevView
    },
   //  {
   //    path: '/about',
   //    name: 'about',
   //    // route level code-splitting
   //    // this generates a separate chunk (About.[hash].js) for this route
   //    // which is lazy-loaded when the route is visited.
   //    component: () => import('../views/AboutView.vue')
   //  }
  ]
})

export default router
