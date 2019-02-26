import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Product from './views/Product.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'index',component: Index},
    {path: '/index',name: 'index',component: Index},
    {path:'/login',name:'login',component: Login},
    {path:'/product',name:'product',component: Product}
  ]
})
   /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about"  './views/About.vue')
}*/
