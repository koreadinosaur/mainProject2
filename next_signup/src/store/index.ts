import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/userSlice";
import cardReducer from "./modules/cardSlice";
import updateReducer from "./modules/isCardUpdated";

export const store = configureStore({
  reducer: {
    user: userReducer,
    toDoCard: cardReducer,
    isCardUpdated: updateReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
