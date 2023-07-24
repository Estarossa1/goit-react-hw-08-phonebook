import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://64a45e5ac3b509573b57718f.mockapi.io/contacts/';

// ! Add JWT

  const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

// ! Remove JWT

  function clearAuthHeader() {
  axios.defaults.headers.common.Authorization = ``;
}

export const singUp = createAsyncThunk(
  'auth/singup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/singup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const perssistedToken = state.auth.token;

    if (perssistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(perssistedToken);
      const { data } = await axios.get('/user/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);