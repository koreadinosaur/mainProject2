import { RootState } from "./../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  value: {
    toDoList: {}[];
    username: string;
    dateOfBirth: {};
    email: string;
    gender: string;
    introduction: string;
    phone: string[];
    password: string;
  };
}

const initialState: UserState = {
  value: {
    toDoList: [],
    username: "",
    dateOfBirth: {},
    email: "",
    gender: "",
    introduction: "",
    phone: [],
    password: "",
  },
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<object>) => {
      state.value = action.payload;
    },
  },
});

export const { loginUser } = userSlice.actions;
export const selectCurrentUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
