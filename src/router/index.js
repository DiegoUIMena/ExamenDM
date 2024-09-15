import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import calculoCalificacion from '../views/calculoCalificacion.vue';
import formularirRegistro from '../views/formularioRegistro.vue';
import EnConstruccion from '../views/enConstruccion.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'calculoCalificacion',
      component: calculoCalificacion
    },
    {
      path: '/formularioRegistro',
      name: 'formularioRegistro',
      component: () => import('../views/formularioRegistro.vue')
    },
    {
      path: '/enConstruccion',
      name: 'enConstruccion',
      component: () => import('../views/enConstruccion.vue')
    }
  ]
});

export default router
