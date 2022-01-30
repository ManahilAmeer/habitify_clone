import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  id:"",
  habits: [],
  skips: [],
  fails:[],
  success:[]
};
const habitReducer = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits = action.payload;
    },
    addFail: (state, action) => {
      state.fails = action.payload;
    },
    addskips: (state, action) => {
      state.skips = action.payload;
    },
    addSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});
export const { addHabit, addFail,addskips,addSuccess } = habitReducer.actions;
export default habitReducer.reducer;