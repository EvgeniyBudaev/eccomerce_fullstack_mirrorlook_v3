import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { productsReducer } from "./products/reducer";
import { rootReducer } from "./rootReducer";

// export const store = configureStore({
//   reducer: {
//     products: productsReducer,
//   },
// });

export const store = createStore(rootReducer);

// export type RootState = ReturnType<typeof productsReducer>;
