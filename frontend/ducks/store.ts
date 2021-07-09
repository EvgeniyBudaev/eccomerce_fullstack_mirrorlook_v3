import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/reducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
