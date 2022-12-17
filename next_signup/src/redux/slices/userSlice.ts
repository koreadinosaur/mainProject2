import { RootState } from "../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoFormDataType } from "../../../components/boardlists/ToDoFormType";

interface UserState {
  value: {
    username: string;
    dateOfBirth: { year: string; month: string; date: string };
    email: string;
    gender: string;
    introduction: string;
    phone: string[];
    password: string;
    toDoList?: ToDoFormDataType[];
    inProgressList?: ToDoFormDataType[];
    doneList?: ToDoFormDataType[];
  };
}

const initialState: UserState = {
  value: {
    username: "",
    dateOfBirth: { year: "", month: "", date: "" },
    email: "",
    gender: "",
    introduction: "",
    phone: [],
    password: "",
    toDoList: [],
    inProgressList: [],
    doneList: [],
  },
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    // : PayloadAction<UserState>
    loginUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loginUser } = userSlice.actions;
export const selectCurrentUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
