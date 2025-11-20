import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    product: productSlice,
  },
});
