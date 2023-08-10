//* LIBRARY
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

//* CONFIGS
import { Configs } from '@/commons';

//* REDUX
import { AuthSlice } from './redux';

//* CONSTANTS
import { NODE } from '@/commons/constants';

// Configs Destructuring object
const {
  app: { node_dev },
} = Configs;

const customMiddleware =
  // Check if the environment is not production (node_dev !== NODE.PRO).
  node_dev !== NODE.PRO
    ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) // If not in production, add the "logger" middleware to log actions and state changes.
    : (getDefaultMiddleware) => getDefaultMiddleware(); // If in production, use the default middleware without the "logger".

// Create a Redux store using the `configureStore` function.
const store = configureStore({
  // Define the reducers for the store.
  reducer: {
    // Add the "auth" slice reducer to handle product-related state.
    auth: AuthSlice,
  },

  // Configure middleware for the store.
  middleware: customMiddleware,

  // Enable or disable Redux DevTools extension based on the environment.
  devTools: node_dev !== NODE.PRO,
});

export default store;

// Root Store
export const RootState = store.getState;
export const AppDispatch = store.dispatch;
