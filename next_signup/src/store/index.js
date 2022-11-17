import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
