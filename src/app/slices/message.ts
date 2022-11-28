import { createSlice } from '@reduxjs/toolkit';

export interface IMessageState {
  message: string;
}

const initialState: IMessageState = {
  message: '',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: '' };
    },
  },
});

const { actions } = messageSlice;

export const { setMessage, clearMessage } = actions;

export default messageSlice.reducer;
