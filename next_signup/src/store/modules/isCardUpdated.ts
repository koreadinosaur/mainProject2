import { RootState } from "./../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IsCardUpdatedState {
  value: boolean;
}

const initialState: IsCardUpdatedState = {
  value: false,
};

export const updateSlice = createSlice({
  name: "isCardUpdated",
  initialState,
  reducers: {
    isUpdated: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { isUpdated } = updateSlice.actions;
export const selectIsUpdated = (state: RootState) => state.isCardUpdated.value;
export default updateSlice.reducer;
