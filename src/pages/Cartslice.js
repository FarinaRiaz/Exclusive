import { createSlice } from "@reduxjs/toolkit";
import Product from "../pages/ProductFile";

const initialState = {
  cart: [],
  favi: [],
  items: Product.map((product) => ({ ...product, quantity: 0 })),
  totalPrice: 0,
  totalQuantity: 0,
  search: "",
};

const Cartslice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
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
    searchBar(state, action) {
      state.search = action.payload;
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});
export const {
  addToCart,
  removeItem,
  addheart,
  clearCart,
  searchBar,
  increaseItemQuantity,
  decreaseItemQuantity,
} = Cartslice.actions;
export default Cartslice.reducer;
