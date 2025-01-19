import { createSlice } from '@reduxjs/toolkit';

const localCartItems = localStorage.getItem('cartItems');

const initialState = {
  items: localCartItems ? JSON.parse(localCartItems) : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      if (index > -1) {
        state.items[index].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      if (index > -1) {
        if (state.items[index].quantity <= 1) {
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        } else {
          state.items[index].quantity--;
        }
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    resetItems: (state) => {
      state.items = [];

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, resetItems } = cartSlice.actions;

export default cartSlice.reducer;
