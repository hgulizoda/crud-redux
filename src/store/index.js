import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import productSlice from "./slices/productSlice";
import userSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    product: productSlice,
    auth: userSlice,
  },
});
