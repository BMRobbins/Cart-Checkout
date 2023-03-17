import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import bannerSlice from "./banner_slice";

const store = configureStore({
  reducer: { banner: bannerSlice.reducer, cart: cartSlice.reducer },
});

export default store;
