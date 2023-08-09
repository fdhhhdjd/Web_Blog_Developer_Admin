//* LIBRARY
import { inject, computed } from 'vue';

//* PROVIDERS
import store from '@/providers/store';
import { storeKey } from '@/providers/storePlugin';

// A custom hook that provides access to the Redux store's 'dispatch' function.
// It allows components to dispatch actions to update the Redux store.
export const useDispatch = () => store.dispatch;

// A custom hook that provides access to the Redux store's state using the 'inject' and 'computed' functions from Vue.
// It takes a function 'fn' as an argument, which is used to select specific data from the Redux store state.
// 'fn' is expected to be a selector function that takes the root store state as input and returns the selected data.
export const useSelector = (fn) => {
  // Use the 'inject' function to retrieve the root store from the Vue context.
  const rootStore = inject(storeKey);

  // Use the 'computed' function to create a reactive computed property.
  // The computed property is based on the 'fn' selector function and re-computes whenever the Redux store state changes.
  // It returns the selected data from the Redux store state, making it reactive and automatically updating in components when the underlying state changes.
  return computed(() => fn(rootStore.state));
};
