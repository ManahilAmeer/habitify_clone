import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  Name:"",
  uid: "",
  goal: "",
};
const habitReducer = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state = action.payload;
    },
    addPhoto: (state, action) => {
      state.photoURL = action.payload;
    },
    addDisplayName: (state, action) => {
      state.displayName= action.payload;
    },
  },
});
export const { addHabit, addPhoto, addDisplayName } = habitReducer.actions;
export default habitReducer.reducer;