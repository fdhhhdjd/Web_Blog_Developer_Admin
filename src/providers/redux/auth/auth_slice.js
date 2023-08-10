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
  changePasswordAccountInitial,
  updateProfileAccountInitial,
} from './auth_thunk';

//* COMMONS
import {
  ACCESS_TOKEN,
  PERMISSION_KEY,
  REDUX_NAME,
  removeFromLocalStorage,
  saveToLocalStorage,
  showErrorToast,
} from '@/commons';
import router from '@/routers';

const initialState = {
  loading: false,
  error: null,
  auth: null,
  info_profile: null,
  flag: false,
};

const Auth = createSlice({
  name: REDUX_NAME.AUTH,
  initialState,
  reducers: {
    // Clear all auth
    clearAuth: (state) => {
      clearInfoProfile();

      // Redirect login
      router.push('/login');

      // Clear accessToken
      removeFromLocalStorage(ACCESS_TOKEN);

      // Clear Permission Key
      removeFromLocalStorage(PERMISSION_KEY);

      state.auth = null;

      state.info_profile = null;

      state.flag = false;
    },

    // Clear info
    clearInfoProfile: (state) => {
      state.info_profile = null;
    },

    // Clear flag action success
    clearFlag: (state) => {
      state.flag = false;
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
        router.push('/dashboard');

        // Save AccessToken
        saveToLocalStorage(ACCESS_TOKEN, state.auth.metadata.access_token);

        // Save Permission
        saveToLocalStorage(PERMISSION_KEY, state.auth.metadata.permission_key);
      }
    },
    [loginAccountInitial.rejected]: (state, action) => {
      state.loading = false; // When the 'loginAccountInitialState' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
      // Show Toast error
      showErrorToast(action.payload.message);
    },

    //* Register Account
    [registerAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'registerAccountInitial' async action starts (is pending), set the loading state to true.
      state.flag = false; // When the 'registerAccountInitial' async action starts (is pending), set the loading state to true.
    },
    [registerAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'registerAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.flag = true;
    },
    [registerAccountInitial.rejected]: (state, action) => {
      state.loading = false; // When the 'registerAccountInitial' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
      state.flag = false;
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
      state.flag = false; // When the 'forgetPasswordAccountInitial' async action is rejected (encountered an error), set the loading state to false.
    },
    [forgetPasswordAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'forgetPasswordAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.flag = true;
    },
    [forgetPasswordAccountInitial.rejected]: (state, action) => {
      state.loading = false;
      state.flag = false; // When the 'forgetPasswordAccountInitial' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Logout Account
    [logoutAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'logoutAccountInitial' async action starts (is pending), set the loading state to true.
    },
    [logoutAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'logoutAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
    },
    [logoutAccountInitial.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Verification OTP Account
    [verificationOTPAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'verificationOTPAccountInitial' async action starts (is pending), set the loading state to true.
      state.flag = false; // When the 'verificationOTPAccountInitial' async action is rejected (encountered an error), set the loading state to false.
    },
    [verificationOTPAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'verificationOTPAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.auth = action.payload;
      state.flag = true;

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
      state.flag = false; // When the 'verificationOTPAccountInitial' async action is rejected (encountered an error), set the loading state to false.
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

    //* Change Password Account
    [changePasswordAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'changePasswordAccountInitial' async action starts (is pending), set the loading state to true.
    },
    [changePasswordAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'changePasswordAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
    },
    [changePasswordAccountInitial.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Update Profile Account
    [updateProfileAccountInitial.pending]: (state, action) => {
      state.loading = true; // When the 'updateProfileAccountInitial' async action starts (is pending), set the loading state to true.
    },
    [updateProfileAccountInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'updateProfileAccountInitial' async action is fulfilled (successfully completed), set the loading state to false.
    },
    [updateProfileAccountInitial.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },
  },
});

const AuthSlice = Auth.reducer;
export const { clearAuth, clearInfoProfile, clearFlag } = Auth.actions;
export default AuthSlice;
