import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false },
  reducers: {
    toggleModal(state, action) {
      console.log(state.isOpen);
      state.isOpen = !state.isOpen;
      console.log(state.isOpen);
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleModal } = modalSlice.actions;
