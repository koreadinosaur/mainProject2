import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  value: {},
};

export const cardSlice = createSlice({
  name: "CardList",
  initialState,
  reducers: {
    toDoCardLists: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toDoCardLists } = cardSlice.actions;
export default cardSlice.reducer;
