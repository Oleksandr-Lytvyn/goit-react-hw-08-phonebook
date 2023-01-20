import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
console.log(axios.defaults.baseURL);

const setAuthHeader = token => {
  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    const credentialsJSON = JSON.stringify(credentials);
    console.log(credentialsJSON);
    try {
      const res = await axios.post('/users/signup', credentialsJSON);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log('uffff');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
