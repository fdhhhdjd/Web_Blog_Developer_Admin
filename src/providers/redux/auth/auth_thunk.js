//* LIBRARY
import { createAsyncThunk } from '@reduxjs/toolkit';

// Add To Cart Muting Quantity
export const loginAccountInitialState = createAsyncThunk(
  'auth/login',
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      return {
        productId,
        quantity,
      };
    } catch (error) {
      if (error) {
        return rejectWithValue(error);
      }
    }
  }
);
