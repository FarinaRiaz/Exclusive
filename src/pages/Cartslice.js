import { createSlice } from "@reduxjs/toolkit";
import Product from "../pages/ProductFile";

const initialState = {
  cart: [],
  favi: [],
  items: Product.map((product) => ({ ...product, quantity: 0 })), // Initialize quantity for each item
  totalPrice: 0,
  totalQuantity: 0,
};

const Cartslice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
        state.totalQuantity += 1;
      } else {
        const itemToAdd = { ...action.payload, quantity: 1 };
        state.cart.push(itemToAdd);
        state.totalQuantity += 1;
      }
    },
    getCartTotal: (state) => {
      let { totalPrice, totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        { totalPrice: 0, totalQuantity: 0 }
      );
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },
    addheart: (state, action) => {
      state.favi.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});
export const { addToCart, removeItem, addheart, clearCart } = Cartslice.actions;
export default Cartslice.reducer;
