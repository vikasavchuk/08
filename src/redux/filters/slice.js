import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filter",
  initialState: { name: "" },
  reducers: {
    changeFilterName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilterName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;