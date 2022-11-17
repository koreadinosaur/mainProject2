import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {
    username: null,
    email: null,
  },
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
