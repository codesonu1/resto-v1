import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { AuthReducer, ProductReducer, ReviewReducer } from "./index";
const middleware = [thunk];

const token = localStorage.getItem("token");
const initialState = {
  auth: {
    token: token,
  },
};
export const store = configureStore({
  preloadedState: initialState,
  reducer: {
    auth: AuthReducer,
    product: ProductReducer,
    review: ReviewReducer,
  },
  devTools: true,
  middleware: [...middleware],
});
