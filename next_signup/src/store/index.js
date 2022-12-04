import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/userSlice";
import cardReducer from "./modules/cardSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    isCardUpdated: cardReducer,
  },
});
