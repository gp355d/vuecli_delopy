import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  },
  {
    path:'/product/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path:'/cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  }, 
  {
    path:'/admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Dashboard.vue'),
    children: [
      {
        path:'products',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Products.vue'),
      },
      {
        path:'coupons',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Coupons.vue'),
      }
    ]
  },
  {
    path: '*',
    redirect:'/'
    
  }
]

const router = new VueRouter({
  routes
})

export default router
