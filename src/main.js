//* LIBRARY
import Toast, { POSITION } from 'vue-toastification';
import { createApp } from 'vue';

//* IMPORT CSS GLOBAL
import 'vue-toastification/dist/index.css';
import './index.css';

//* IMPORT FILE MAIN VUE
import App from './App.vue';

//* ROUTER
import router from './routers';

//* CONFIGS
import { DATA_TYPE, DEFAULT } from './configs';

//* PROVIDERS
import { createRedux } from './providers/storePlugin';
import store from './providers/store';

const options = {
  position: POSITION.TOP_RIGHT,
};

// This code sets the document title based on the route's meta information.
// The 'router.beforeEach' function is a navigation guard provided by Vue Router,
// which allows us to perform actions before each route navigation.
router.beforeEach((to, _, next) => {
  // Check if the 'title' meta information of the target route is of type 'string'.
  if (typeof to.meta.title === DATA_TYPE.STRING) {
    // If the 'title' meta information is of type 'string', set the document title to the provided title.
    document.title = to.meta.title;
  } else {
    // If the 'title' meta information is not of type 'string',
    // set the document title to a default title specified as 'TITLE.DEFAULT'.
    document.title = DEFAULT;
  }

  // Continue the navigation to the target route.
  next();
});

//* START ALL
createApp(App).use(router).use(createRedux(store)).use(Toast, options).mount('#app');
