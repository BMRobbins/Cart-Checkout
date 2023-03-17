import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    shouldShowBanner: false,
  },
  reducers: {
    hideBanner(state) {
      state.shouldShowBanner = false;
    },
    showBanner(state) {
      state.shouldShowBanner = true;
    },
  },
});

export const bannerActions = bannerSlice.actions;

export default bannerSlice;
