//* LIBRARY
import { createRouter, createWebHistory } from 'vue-router';

//* CONFIGS
import { PRODUCTS } from '../configs';

// Todo: Create router
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: import('@/pages/auth/index.vue'),
      meta: {
        layout: 'default',
        title: PRODUCTS.LIST,
      },
    },
    {
      path: '/thankyou',
      component: import('@/pages/thankyou/index.vue'),
    },
    // will match everything and put it under `$route.params.pathMatch`
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: import('@/pages/notfound/index.vue'),
    },
  ],
});
