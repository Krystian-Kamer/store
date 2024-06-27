import { createSlice } from '@reduxjs/toolkit';

const initialState: string = 'cart';

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

console.log(cartSlice);
export default cartSlice.reducer;
