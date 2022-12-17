import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cardReducer from "./slices/cardSlice";
import updateReducer from "./slices/isCardUpdated";

export const store = configureStore({
  reducer: {
    user: userReducer,
    toDoCard: cardReducer,
    isCardUpdated: updateReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
