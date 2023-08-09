//* LIBRARY
import { createAsyncThunk } from '@reduxjs/toolkit';

//* COMMONS
import { STATUS, headerBrowser } from '@/commons';

//* PLUGINS
import { axiosInsV1 } from '@/plugins';

// Login account
export const loginAccountInitial = createAsyncThunk(
  'auth/login',
  async ({ email_or_username, password }, { rejectWithValue }) => {
    try {
      console.log(headerBrowser(), '---');

      const responseData = await axiosInsV1.post(
        '/auth/login',
        {
          headers: headerBrowser(),
        },
        {
          email_or_username,
          password,
        }
      );

      return responseData.data;
    } catch (error) {
      if (error) {
        console.log(error);

        return rejectWithValue(error);
      }
    }
  }
);
