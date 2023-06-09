import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://6388d566a4bb27a7f79305ee.mockapi.io/contacts;
// axios.defaults.baseURL = 'https://nodejs-homework-2-6.onrender.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, email, phone }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name,
        email,
        phone,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
