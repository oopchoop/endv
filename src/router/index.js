import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import AcceptLogin from "@/views/Accept-login.vue"
import ActiveOrders from "@/views/Active-orders.vue"
import Authorization from "@/views/Authorization.vue"
import Basket from "@/views/Basket.vue"
import Catalog from "@/views/Catalog.vue"
import Favorite from "@/views/Favorite.vue"
import Orders from "@/views/Orders.vue"
import Profile from "@/views/Profile.vue"
import Registration from "@/views/Registration.vue"
import Sale from "@/views/Sale.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/acceptLogin',
      name: 'acceptLogin',
      component: AcceptLogin
    },
    {
      path: '/activeOrders',
      name: 'activeOrders',
      component: ActiveOrders
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: Authorization
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/sale',
      name: 'sale',
      component: Sale
    },
  ]
})

export default router
