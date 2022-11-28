import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';

import AuthService, { ICredentials, TLogin } from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user') ?? '');

export const register = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }: ICredentials, thunkAPI) => {
    try {
      const response = await AuthService.register({
        username,
        email,
        password,
      });
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message =
        (err.message && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: TLogin, thunkAPI) => {
    try {
      const data = await AuthService.login({ username, password });
      return { user: data };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
