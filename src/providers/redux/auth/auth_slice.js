//* LIBRARY
import { createSlice } from '@reduxjs/toolkit';

//* REDUX THUNK
import { loginAccountInitial } from './auth_thunk';

//* CONFIGS
import { REDUX_NAME } from '@/commons/constants';

const initialState = {
  loading: false,
  error: null,
  auth: [],
};

const Auth = createSlice({
  name: REDUX_NAME.AUTH,
  initialState,
  reducers: {
    // Clear all auth
    clearAuth: (state) => {
      state.auth = [];
    },
  },
  extraReducers: {
    //* Login Account
    [loginAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'loginAccountInitialState' async action starts (is pending), set the loading state to true.
    },
    [loginAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'loginAccountInitialState' async action is fulfilled (successfully completed), set the loading state to false.
    },
    [loginAccountInitial.rejected]: (state, action) => {
      state.loading = false; // When the 'loginAccountInitialState' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },
  },
});

const AuthSlice = Auth.reducer;
export const { clearAuth } = Auth.actions;
export default AuthSlice;
