import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { AuthReducer } from "./index";
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
  },
  devTools: true,
  middleware: [...middleware],
});
