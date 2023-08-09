//* LIBRARY
import { createApp } from 'vue';
import Toast from 'vue-toastification';

//* IMPORT CSS GLOBAL
import 'vue-toastification/dist/index.css';
import './index.css';

//* MAIN
import App from './App.vue';

//* ROUTER
import router from './routers';

//* PROVIDERS
import store from './providers/store';
import { createRedux } from './providers/storePlugin';

//* PLUGINS
import { options } from './plugins';

// TITLE ROUTER
import '@/routers/title';

//* START ALL
createApp(App).use(router).use(createRedux(store)).use(Toast, options).mount('#app');
