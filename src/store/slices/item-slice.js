const { createSlice } = require("@reduxjs/toolkit");
import { HYDRATE } from "next-redux-wrapper";
import cogoToast from "@hasanm95/cogo-toast";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.items,
      };
    });
  },
});

export const { setItems } = itemSlice.actions;
export default itemSlice.reducer;
