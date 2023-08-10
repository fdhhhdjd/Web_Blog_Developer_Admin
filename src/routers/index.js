//* LIBRARY
import { createRouter, createWebHistory } from 'vue-router';

//* CONFIGS
import { PRODUCTS } from '@/commons';

//* PLUGIN
import NProgress from '@/plugins/nprogress';

// Todo: Create router
const router = createRouter({
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
      path: '/',
      component: import('@/pages/profile/index.vue'),
      alias: '/profile',
      meta: {
        layout: 'LayoutAuthenticated',
        title: 'Profile',
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

router.beforeEach((to, _from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
