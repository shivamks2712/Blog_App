const { createSlice } = require("@reduxjs/toolkit");
import { HYDRATE } from "next-redux-wrapper";
import cogoToast from "@hasanm95/cogo-toast";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shops: [],
  },
  reducers: {
    setShops(state, action) {
      state.shops = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.shops,
      };
    });
  },
});

export const { setShops } = shopSlice.actions;
export default shopSlice.reducer;
