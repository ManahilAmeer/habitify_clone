import { createSlice } from "@reduxjs/toolkit";
import { addHabits } from "@database/firebase";
import { fetchHabits, db } from "@database/firebase";
import { collectionGroup, query, doc, deleteDoc } from "firebase/firestore";
export const initialState = {
  id: "",
  habits: [],
  skips: [],
  fails: [],
  success: [],
};
const habitReducer = createSlice({
  name: "habit",
  initialState,
  reducers: {
    updateCateg: (state, action) => {
      // console.log(action.payload);
      try {
        const data = db.collection("habit").doc(action.payload.id);
        data.update({
          category: action.payload.category,
        });
      } catch (err) {
        alert(err);
      }
    },
    updateComp: (state, action) => {
      try {
        console.log(action.payload.id);
        const data = db.collection("habit").doc(action.payload.id);
        data.update({
          completed: action.payload.completed,
        });
      } catch (err) {
        alert(err);
      }
    },
    updateHabit: (state, action) => {
      try {
        const data = action.payload;
        // console.log(data.ID)
        const ref = db.collection("habit").doc(data.ID);
        ref.update({
          Name: data.name,
          goal: data.goal,
        });
      } catch (err) {
        alert(err);
      }
    },
    deleteHabit: (state, action) => {
      try {
        const data = action.payload;
        console.log(action.payload.ID);
        const ref = db.collection("habit").doc(action.payload.ID);
        deleteDoc(doc(db, "habit", action.payload.ID));
        // querySnapshot.docs[0].ref.delete();
      } catch (err) {
        // ref.update({
        //   Name: data.name,
        //   goal: data.goal,
        // });
        alert(err);
      }
    },
    addHabit: (state, action) => {
      const data = action.payload;
      addHabits(
        data.name,
        data.goal,
        data.uid,
        data.category,
        data.completed,
        data.date
      );
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
export const {
  setHabit,
  addHabit,
  addFail,
  addskips,
  addSuccess,
  updateCateg,
  updateComp,
  updateHabit,
  deleteHabit,
} = habitReducer.actions;
export default habitReducer.reducer;
