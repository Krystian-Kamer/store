import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  type CartState,
  type CartProduct,
  type HigherProduct,
} from '../../types';
import { toast } from 'react-toastify';

const initialState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<HigherProduct>) => {
      const { product } = action.payload as { product: CartProduct };
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
    },
    clearCart: (state) => {
      console.log(state);
    },
    removeItem: (state, action) => {
      console.log(action.payload);
    },
    editItem: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addItem, clearCart, editItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
