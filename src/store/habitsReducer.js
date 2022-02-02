
import { createSlice } from "@reduxjs/toolkit";
import { addHabits } from "@database/firebase";
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
    addHabit:(state,action)=>{
      const data = action.payload;
      addHabits(data.name,data.goal,data.uid,data.category,data.completed)
    },
    setHabit: (state, action) => {
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
export const { setHabit,addHabit, addFail,addskips,addSuccess } = habitReducer.actions;
export default habitReducer.reducer;