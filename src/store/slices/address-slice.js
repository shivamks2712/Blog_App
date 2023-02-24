import cogoToast from "@hasanm95/cogo-toast";
import { v4 as uuidv4 } from "uuid";
const { createSlice } = require("@reduxjs/toolkit");
const addressSlice = createSlice({
  name: "address",
  initialState: {
    addressItems: [],
  },
  reducers: {
    addAddress(state, action) {
      const adrs = action.payload;
      state.addressItems.push({ ...adrs, addressId: uuidv4() });

      cogoToast.success("Address Added Sucessfully", {
        position: "bottom-left",
      });
    },
    deleteAddress(state, action) {
      state.addressItems = state.addressItems.filter(
        (address) => address.addressId != action.payload.addressId
      );
      cogoToast.error("Address Removed", { position: "bottom-left" });
    },
  },
});

export const { addAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
