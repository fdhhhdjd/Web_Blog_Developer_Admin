//* LIBRARY
import { createAsyncThunk } from '@reduxjs/toolkit';

//* COMMONS
import { STATUS } from '@/commons';

//* PLUGINS
import { axiosInsV1 } from '@/plugins';

//* REDUX
import { clearAuth } from './auth_slice';

//* PROVIDERS
import store from '@/providers/store';

// Login account
export const loginAccountInitial = createAsyncThunk(
  'auth/login',
  async ({ email_or_username, password }, { rejectWithValue }) => {
    try {
      const responseData = await axiosInsV1.post('/auth/login', {
        email_or_username,
        password,
      });

      return responseData.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error);
      }
    }
  }
);

// Register account
export const registerAccountInitial = createAsyncThunk(
  'auth/register',
  async ({ username, email, full_name, password }, { rejectWithValue }) => {
    try {
      const responseData = await axiosInsV1.post('/auth/register', {
        username,
        email,
        full_name,
        password,
      });

      return responseData.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error);
      }
    }
  }
);

// Renew Token account
export const renewTokenAccountInitial = createAsyncThunk(
  'auth/renew-token',
  async (_, { rejectWithValue }) => {
    try {
      const responseData = await axiosInsV1.post('/auth/renew-token', {
        renew_token: STATUS.ENABLE,
      });

      return responseData.data;
    } catch (error) {
      if (error) {
        console.log(error);

        return rejectWithValue(error);
      }
    }
  }
);

// Forget Password account
export const forgetPasswordAccountInitial = createAsyncThunk(
  'auth/forget',
  async ({ email }, { rejectWithValue }) => {
    try {
      const responseData = await axiosInsV1.post('/auth/forget', {
        email,
      });

      return responseData.data;
    } catch (error) {
      if (error) {
        console.log(error);

        return rejectWithValue(error);
      }
    }
  }
);

// logout account
export const logoutAccountInitial = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const responseData = await axiosInsV1.get('/auth/logout');

      // Dispatch action clear account
      store.dispatch(clearAuth());

      return responseData.data;
    } catch (error) {
      if (error) {
        console.log(error);

        return rejectWithValue(error);
      }
    }
  }
);

// Verification OTP
export const verificationOTPAccountInitial = createAsyncThunk(
  'auth/otp',
  async ({ otp_code }, { rejectWithValue }) => {
    try {
      const responseData = await axiosInsV1.post('/auth/otp', {
        otp_code,
      });

      return responseData.data;
    } catch (error) {
      if (error) {
        console.log(error);

        return rejectWithValue(error);
      }
    }
  }
);

// Get Profile
export const getProfileAccountInitial = createAsyncThunk(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      const responseData = await axiosInsV1.get('/auth/profile');

      return responseData.data;
    } catch (error) {
      if (error) {
        console.log(error);

        return rejectWithValue(error);
      }
    }
  }
);

// Change Password
export const changePasswordAccountInitial = createAsyncThunk(
  'auth/change/password',
  async ({ old_password, new_password }, { rejectWithValue }) => {
    try {
      const responseData = await axiosInsV1.patch('/auth/change/password', {
        old_password,
        new_password,
      });

      // Dispatch action clear account
      store.dispatch(clearAuth());

      return responseData.data;
    } catch (error) {
      if (error) {
        console.log(error);

        return rejectWithValue(error);
      }
    }
  }
);

// Update Profile
export const updateProfileAccountInitial = createAsyncThunk(
  'auth/update/profile',
  async ({ full_name, avatar_uri, public_id }, { rejectWithValue }) => {
    try {
      const responseData = await axiosInsV1.patch('/auth/profile/upload', {
        full_name,
        avatar_uri,
        public_id,
      });

      // Get is refetch Profile
      store.dispatch(getProfileAccountInitial());

      return responseData.data;
    } catch (error) {
      if (error) {
        console.log(error);

        return rejectWithValue(error);
      }
    }
  }
);
