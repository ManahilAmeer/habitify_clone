import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { habitDocRef, habitsRef } from "database/firebase";
import { getDocs } from "firebase/firestore";
import firebase from "firebase/compat/app";
export const initialState = {
  id: "",
  allHabits:[],
  habit: [],
  skips: [],
  fails: [],
  success: [],
};
const date = new Date();
const yesterday =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() - 1);
const today =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
export const fetchHabits = createAsyncThunk("getNotes", async (uid) => {
  try {
    let allHabits = habitsRef(uid.uid);
    const response = await getDocs(allHabits);
    const habits = response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return habits;
  } catch (err) {
    console.log(err);
  }
});
export const changeHabits = createAsyncThunk("changeHabits", async (data) => {
  try {
    let allHabits = habitsRef(data.uid);
    allHabits = allHabits.where("date", "!=", today);
    const response = await getDocs(allHabits);
    const habits = response.docs.map((docs) => {
      const doc = habitDocRef(docs.data().id);
      doc.update({
        category: "",
        completed: 0,
        date: today,
      });
    });
    return habits;
  } catch (err) {
    console.log(err);
  }
});
export const updateStrk = createAsyncThunk("updateStrk", async (param) => {
});
const habitReducer = createSlice({
  name: "habit",
  initialState,
  reducers: {
    updateStreak:(state,action)=>{
      const data = habitDocRef(action.payload.id);
      const increment = firebase.firestore.FieldValue.increment(1);
      const compDate = action.payload.completedDate;
      if (compDate === yesterday) {
        data.update({
          CompleteLength: increment,
          category: "Complete",
          completedDate: today,
          streak: increment,
        });
        state.habit[action.payload.index].streak++;
      } else if (compDate === undefined || compDate === today) {
        data.update({
          CompleteLength: increment,
          category: "Complete",
          completedDate: today,
          streak: 1,
        });
        state.habit[action.payload.index].streak=1;
      } else {
        data.update({
          CompleteLength: increment,
          category: "Complete",
          completedDate: today,
          streak: 0,
        });
        state.habit[action.payload.index].streak=0;
      }state.habit[action.payload.index].completedDate = today;
      state.habit[action.payload.index].CompleteLength++;
      state.habit[action.payload.index].category = "Complete";
      state.success.push(state.habit[action.payload.index]);
      state.habit.splice(action.payload.index, 1);
    },
    updateCategory:(state,action)=>{
      try {
        const increment = firebase.firestore.FieldValue.increment(1);
        const data = habitDocRef(action.payload.id);
        if (action.payload.category) {
          data.update({
            category: action.payload.category,
          });
          state.habit[action.payload.index].category = action.payload.category;
        }
        if (action.payload.category === "Skip") {
          data.update({
            SkipLength: increment,
          });
          state.habit[action.payload.index].SkipLength++
          state.skips.push(state.habit[action.payload.index]);
        } else if (action.payload.category === "Fail") {
          data.update({
            FailLength: increment,
          });
          state.habit[action.payload.index].FailLength++;
          state.fails.push(state.habit[action.payload.index]);
        }
        state.habit.splice(action.payload.index,1);
      } catch (err) {
        console.log(err);
      }
    },
    updateCompleted: (state, action) => {
      try {
        const data = habitDocRef(action.payload.id);
        const increment = firebase.firestore.FieldValue.increment(1);
        data.update({
          total: increment,
          completed: increment,
        });
        state.habit[action.payload.index].completed++;
      } catch (err) {
        console.log(err);
      }
    },
    updateHabit: (state, action) => {
      try {
        let obj;
        if(action.payload.category==="Complete"){
          obj = state.success.find((o) => o.id === action.payload.id);
        }
        if (action.payload.category === "Skip") {
          obj = state.skips.find((o) => o.id === action.payload.id);
        }
        if (action.payload.category === "Fail") {
          obj = state.fails.find((o) => o.id === action.payload.id);
        }
        if (action.payload.category === "") {
          obj = state.habit.find((o) => o.id === action.payload.id);
        }
        const data = action.payload;
        const ref = habitDocRef(action.payload.id);
        ref
          .update({
            Name: data.name,
            goal: data.goal,
          })
          .then((obj.Name = data.name), (obj.goal = data.goal));
      } catch (err) {
        console.log(err);
      }
    },
    deleteHabit: (state, action) => 
    {
      let obj;
      if (action.payload.category === "Complete") {
        obj = state.success
      }
      if (action.payload.category === "Skip") {
        obj = state.skips;
      }
      if (action.payload.category === "Fail") {
        obj = state.fails;
      }
      if (action.payload.category === "") {
        obj = state.habit;
      }
      habitDocRef(action.payload.id)
        .delete()
        .then(() => {})
        .catch((error) => {
          console.log("Error removing document:", error);
        });
        obj.splice(action.payload.index, 1);
    },
    addHabit: (state, action) => {
      const data = action.payload;
      try {
        const doc = habitDocRef();
        doc
          .set({
            Name: data.name,
            goal: data.goal,
            uid: data.uid,
            category: data.category,
            completed: data.completed,
            date: data.date,
            CompleteLength:0,
            FailLength:0,
            SkipLength:0,
          })
          .then(() => {});
        doc.update({
          id: doc.id,
        });
        state.habit.push({
          Name: data.name,
          goal: data.goal,
          uid: data.uid,
          category: data.category,
          completed: data.completed,
          date: data.date,
          id: doc.id,
          CompleteLength: 0,
          FailLength: 0,
          SkipLength: 0,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  extraReducers: {
    [fetchHabits.pending]: (state) => {},
    [fetchHabits.fulfilled]: (state, action) => {
      state.allHabits = action.payload;
      state.habit = action.payload.filter(function (value, index, arr) {
        return value.category === "";
      });
      state.skips = action.payload.filter(function (value, index, arr) {
        return value.category === "Skip";
      });
      state.fails = action.payload.filter(function (value, index, arr) {
        return value.category === "Fail";
      });
      state.success = action.payload.filter(function (value, index, arr) {
        return value.category === "Complete";
      });
    },
  },
});
export const { addHabit, updateCompleted, updateCategory,updateHabit, deleteHabit,updateStreak } =
  habitReducer.actions;
export default habitReducer.reducer;
