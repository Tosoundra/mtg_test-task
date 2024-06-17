import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsersFeedback = createAsyncThunk(
  'usersFeedback/fetchData',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('shared/constants/data.json');
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
