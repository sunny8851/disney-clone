import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./CreateSlice";
import userSlice from "./userSlice";
const store = configureStore({
  reducer: {
    cart: cardSlice,
    name: userSlice,
  },
});
export default store;
