//* LIBRARY
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//* CONFIGS
import { Configs, NODE } from "../configs";

//* REDUX
import AuthSlice from "./redux/auth/auth_slice";

// Configs Destructuring object
const {
  app: { node_dev },
} = Configs;

// Create a Redux store using the `configureStore` function.
const store = configureStore({
  // Define the reducers for the store.
  reducer: {
    // Add the "auth" slice reducer to handle product-related state.
    auth: AuthSlice,
  },

  // Configure middleware for the store.
  middleware:
    // Check if the environment is not production (node_dev !== NODE.PRO).
    node_dev !== NODE.PRO
      ? // If not in production, add the "logger" middleware to log actions and state changes.
        (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
      : // If in production, use the default middleware without the "logger".
        (getDefaultMiddleware) => getDefaultMiddleware(),

  // Enable or disable Redux DevTools extension based on the environment.
  devTools: node_dev !== NODE.PRO,
});

export default store;

// Root Store
export const RootState = store.getState;
export const AppDispatch = store.dispatch;
