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

const getCartFromLocalStorage = () => {
  const cart: string | null = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, { payload }: PayloadAction<HigherProduct>) => {
      const { product } = payload;
      const item = state.cartItems.find(
        (i: CartProduct) => i.cartID === product.cartID
      );
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += Number(product.price) * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success(`You added ${product.title} to your cart`);
    },
    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(initialState));
      return initialState;
    },
    removeItem: (state, { payload }: PayloadAction<CartProduct>) => {
      const { cartID } = payload;
      const product: CartProduct = state.cartItems.find(
        (i: CartProduct) => i.cartID === cartID
      );
      state.cartItems = state.cartItems.filter(
        (i: CartProduct) => i.cartID !== cartID
      );
      state.numItemsInCart -= product.amount;
      state.cartTotal -= Number(product.price) * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success(`You removed ${product.title} from your cart`);
    },
    editItem: (state, { payload }: PayloadAction<CartProduct>) => {
      const { cartID, amount } = payload;
      const item = state.cartItems.find(
        (i: CartProduct) => i.cartID === cartID
      );
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += Number(item.price) * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success(`Cart updated`);
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, editItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
