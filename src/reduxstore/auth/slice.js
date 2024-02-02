import { createSlice } from '@reduxjs/toolkit';
import { handleAuth } from './handlers';

const { singInThunk, singUpThunk, userRefreshThunk } = require('./authThunks');

const initialState = {
  token: '',
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(singInThunk.fulfilled, handleAuth)
      .addCase(singUpThunk.fulfilled, handleAuth)

      .addCase(userRefreshThunk.fulfilled, handleAuth)
      .addCase(userRefreshThunk.rejected, state => {
        state.profile = null;
        state.token = '';
      });
  },
});

export const authReducer = authSlice.reducer;
