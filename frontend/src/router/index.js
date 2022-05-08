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
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/login/Signin.vue')
  },
  {
    path: '/vender',
    name: 'Vender',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/Vender.vue')
  },
  {
    path: '/historialVentas',
    name: 'historialVentas',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/HistorialVentas.vue')
  },
  {
    path: '/inventario',
    name: 'inventario',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/Inventario.vue')
  },
  {
    path: '/cargarProducto',
    name: 'cargarProducto',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/CargarProducto.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
