//* LIBRARY
import { createRouter, createWebHistory } from 'vue-router';

//* CONFIGS
import { PRODUCTS } from '@/commons';

// Todo: Create router
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: import('@/pages/auth/index.vue'),
      alias: '/dashboard',
      meta: {
        layout: 'LayoutAuthenticated',
        title: PRODUCTS.LIST,
      },
    },
    {
      path: '/thankyou',
      component: import('@/pages/thankyou/index.vue'),
    },
    {
      path: '/login',
      component: import('@/pages/auth/login.vue'),
      meta: {
        layout: 'LayoutGuest',
        title: 'Login',
      },
    },
    // will match everything and put it under `$route.params.pathMatch`
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: import('@/pages/notfound/index.vue'),
    },
  ],
});
