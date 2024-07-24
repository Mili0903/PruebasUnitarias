// tests/unit/router.spec.js
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'; // Asume que tienes una vista Home configurada

describe('Vue Router', () => {
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    // Más rutas aquí si las necesitas
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  it('renders Home view on / route', async () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    });

    await router.push('/');
    await router.isReady();

    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });
});





