//* LIBRARY
import { reactive } from 'vue';

//* STORE KEY
export const storeKey = Symbol('Redux-Store');

//* CREATE REDUX
export const createRedux = (store) => {
  const rootStore = reactive({
    state: store.getState(),
  });

  return {
    install: (app) => {
      app.provide(storeKey, rootStore);

      store.subscribe(() => {
        rootStore.state = store.getState();
      });
    },
  };
};
