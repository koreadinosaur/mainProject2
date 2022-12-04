import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {},
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
