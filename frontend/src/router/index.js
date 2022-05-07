import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestSurveyBuilder from '../components/pages/survey-builder/TestSurveyBuilder.vue';


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
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/login/Signup.vue')
  },
  {
    path: '/encuestas',
    name: 'Encuestas',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/VerEncuestas.vue')
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
  },{ 
    path: '/encuesta/:id', 
    name: 'encuestaId',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/VerEncuesta.vue') 
  },{
    path: '/done',
    name: 'done',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/Done.vue')
  },
  {
    path: '/crear-encuesta',
    name: 'CrearEncuestas',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/CrearEncuesta'),
    children: [
      {
        path: "/",
        name: "Create",
        component: TestSurveyBuilder,
      },
    ]
  },
  {
    path: '/estadisticas',
    name: 'Estadisticas',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/Estadisticas.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
