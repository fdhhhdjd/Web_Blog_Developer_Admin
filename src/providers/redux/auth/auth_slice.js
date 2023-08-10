//* LIBRARY
import { createSlice } from '@reduxjs/toolkit';

//* REDUX THUNK
import {
  forgetPasswordAccountInitial,
  loginAccountInitial,
  renewTokenAccountInitial,
  logoutAccountInitial,
  verificationOTPAccountInitial,
  getProfileAccountInitial,
  registerAccountInitial,
} from './auth_thunk';

//* COMMONS
import {
  ACCESS_TOKEN,
  PERMISSION_KEY,
  REDUX_NAME,
  removeFromLocalStorage,
  saveToLocalStorage,
} from '@/commons';

const initialState = {
  loading: false,
  error: null,
  auth: null,
  info_profile: null,
  flag_forget: false,
  flag_logout: false,
  flag_veri_otp: false,
  flag_register: false,
};

const Auth = createSlice({
  name: REDUX_NAME.AUTH,
  initialState,
  reducers: {
    // Clear all auth
    clearAuth: (state) => {
      state.auth = [];
    },

    // Clear flag action success
    clearFlag: (state) => {
      state.flag_forget = false;
    },
  },
  extraReducers: {
    //* Login Account
    [loginAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'loginAccountInitialState' async action starts (is pending), set the loading state to true.
    },
    [loginAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'loginAccountInitialState' async action is fulfilled (successfully completed), set the loading state to false.
      state.auth = action.payload;

      // Save accessToken localsorage
      if (state.auth) {
        // Save AccessToken
        saveToLocalStorage(ACCESS_TOKEN, state.auth.metadata.access_token);

        // Save Permission
        saveToLocalStorage(PERMISSION_KEY, state.auth.metadata.permission_key);
      }
    },
    [loginAccountInitial.rejected]: (state, action) => {
      state.loading = false; // When the 'loginAccountInitialState' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Register Account
    [registerAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'registerAccountInitial' async action starts (is pending), set the loading state to true.
      state.flag_register = false; // When the 'registerAccountInitial' async action starts (is pending), set the loading state to true.
    },
    [registerAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'registerAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.flag_register = true;
    },
    [registerAccountInitial.rejected]: (state, action) => {
      state.loading = false; // When the 'registerAccountInitial' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
      state.flag_register = false;
    },

    //* Renew Token Account
    [renewTokenAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'renewTokenAccountInitial' async action starts (is pending), set the loading state to true.
    },
    [renewTokenAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'renewTokenAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.auth = action.payload;

      // Save accessToken localsorage
      if (state.auth) {
        saveToLocalStorage(ACCESS_TOKEN, state.auth.metadata.access_token);
      }
    },
    [renewTokenAccountInitial.rejected]: (state, action) => {
      state.loading = false; // When the 'renewTokenAccountInitial' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Forget Account
    [forgetPasswordAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'forgetPasswordAccountInitial' async action starts (is pending), set the loading state to true.
      state.flag_forget = false; // When the 'forgetPasswordAccountInitial' async action is rejected (encountered an error), set the loading state to false.
    },
    [forgetPasswordAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'forgetPasswordAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.flag_forget = true;
    },
    [forgetPasswordAccountInitial.rejected]: (state, action) => {
      state.loading = false;
      state.flag_forget = false; // When the 'forgetPasswordAccountInitial' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Logout Account
    [logoutAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'logoutAccountInitial' async action starts (is pending), set the loading state to true.
      state.flag_logout = false; // When the 'logoutAccountInitial' async action is rejected (encountered an error), set the loading state to false.
    },
    [logoutAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'logoutAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.flag_logout = true;

      // Clear accessToken
      removeFromLocalStorage(ACCESS_TOKEN);

      // Clear Permission Key
      removeFromLocalStorage(PERMISSION_KEY);
    },
    [logoutAccountInitial.rejected]: (state, action) => {
      state.loading = false;
      state.flag_logout = false; // When the 'logoutAccountInitial' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Verification OTP Account
    [verificationOTPAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'verificationOTPAccountInitial' async action starts (is pending), set the loading state to true.
      state.flag_veri_otp = false; // When the 'verificationOTPAccountInitial' async action is rejected (encountered an error), set the loading state to false.
    },
    [verificationOTPAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'verificationOTPAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.auth = action.payload;
      state.flag_veri_otp = true;

      // Save accessToken localsorage
      if (state.auth) {
        // Save AccessToken
        saveToLocalStorage(ACCESS_TOKEN, state.auth.metadata.access_token);

        // Save Permission
        saveToLocalStorage(PERMISSION_KEY, state.auth.metadata.permission_key);
      }
    },
    [verificationOTPAccountInitial.rejected]: (state, action) => {
      state.loading = false;
      state.flag_veri_otp = false; // When the 'verificationOTPAccountInitial' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Get Profile Account
    [getProfileAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'getProfileAccountInitial' async action starts (is pending), set the loading state to true.
    },
    [getProfileAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'getProfileAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.info_profile = action.payload;
    },
    [getProfileAccountInitial.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },
  },
});

const AuthSlice = Auth.reducer;
export const { clearAuth } = Auth.actions;
export default AuthSlice;
