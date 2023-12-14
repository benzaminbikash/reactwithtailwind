import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    addCart: (state, action) => {
      state.carts.push(action.payload);
    },
    increaseCart: (state, action) => {
      const product = state.carts.find((d) => d.id === action.payload.id);
      product.qty++;
    },
    decreaseCart: (state, action) => {
      const product = state.carts.find((d) => d.id === action.payload.id);
      if (product.qty > 1) {
        product.qty--;
      }
    },
  },
});

export const { addCart, increaseCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;
