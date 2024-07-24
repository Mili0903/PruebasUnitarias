// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'; // Asegúrate de tener una vista Home configurada

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // Más rutas aquí si las necesitas
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;


