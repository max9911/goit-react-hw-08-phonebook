import { createAsyncThunk } from '@reduxjs/toolkit';
import { userLogin, userLogout, userRefresh, userRegister } from 'api/apiAuth';

export const singInThunk = createAsyncThunk(
  'auth/singIn',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await userLogin(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const singUpThunk = createAsyncThunk(
  'auth/singUp',
  async (newUser, { rejectWithValue }) => {
    try {
      return await userRegister(newUser);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const logOutThunk = createAsyncThunk(
  'auth/registr',
  async (token, { rejectWithValue }) => {
    try {
      return await userLogout(token);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const userRefreshThunk = createAsyncThunk(
  'auth/registr',
  async (token, { rejectWithValue }) => {
    try {
      return await userRefresh(token);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
