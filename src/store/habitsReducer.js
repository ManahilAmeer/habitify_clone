import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { progressDocRef, habitDocRef, habitsRef } from "database/firebase";
import {
  deleteDoc,
  getDocs,
  increment,
  snapshotEqual,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
export const initialState = {
  id: "",
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
    var allHabits = habitsRef(uid.uid);
    allHabits = allHabits.where("category", "==", "");
    const response = await getDocs(allHabits);
    const habits = response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return habits;
  } catch (err) {
    console.log(err);
  }
});
export const fetchSkips = createAsyncThunk("getSkips", async (uid) => {
  try {
    var allHabits = habitsRef(uid.uid);
    allHabits = allHabits.where("category", "==", "Skip");
    const response = await getDocs(allHabits);
    const habits = response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return habits;
  } catch (err) {
    console.log(err);
  }
});
export const fetchSuccess = createAsyncThunk("getSuccess", async (uid) => {
  try {
    var allHabits = habitsRef(uid.uid);
    allHabits = allHabits.where("category", "==", "Complete");
    const response = await getDocs(allHabits);
    const success = response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return success;
  } catch (err) {
    console.log(err);
  }
});
export const fetchFail = createAsyncThunk("getFail", async (uid) => {
  try {
    var allHabits = habitsRef(uid.uid);
    allHabits = allHabits.where("category", "==", "Fail");
    const response = await getDocs(allHabits);
    const habits = response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return habits;
  } catch (err) {
    console.log(err);
  }
});
export const changeHabits = createAsyncThunk("changeHabits", async (uid) => {
  try {
    // const date = new Date();
    // const increment = firebase.firestore.FieldValue.increment(1);
    // const yesterday =
    //   date.getFullYear() +
    //   "-" +
    //   (date.getMonth() + 1) +
    //   "-" +
    //   (date.getDate() - 1);
    // const today =
    //   date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    var allHabits = habitsRef(uid.uid);
    allHabits = allHabits.where("date", "==", yesterday);
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
const habitReducer = createSlice({
  name: "habit",
  initialState,
  reducers: {
    updateCateg: (state, action) => {
      try {
        const increment = firebase.firestore.FieldValue.increment(1);
        const data = habitDocRef(action.payload.id);
        data.update({
          category: action.payload.category,
        });
        if (action.payload.category === "Skip") {
          data.update({
            SkipLength: increment,
          });
        } else if (action.payload.category === "Fail") {
          data.update({
            FailLength: increment,
          });
          } else if (action.payload.category === "Complete") {
            data.update({
              CompleteLength: increment,
            });
          }
      } catch (err) {
        console.log(err);
      }
    },
    updateStreak: (state, action) => {
      const data = habitDocRef(action.payload.id);
      const increment = firebase.firestore.FieldValue.increment(1);
      data.get().then((snapshot) => {
        if (snapshot.data().completedDate === yesterday) {
          data.update({
            completedDate: today,
            streak: increment,
          });
        }
        else{
          data.update({
            completedDate: today,
            streak: 0,
          });
        }
      });
    },
    updateComp: (state, action) => {
      try {
        const data = habitDocRef(action.payload.id);
        const increment = firebase.firestore.FieldValue.increment(1);
        
        console.log(action.payload.completed);
        data.update({
          total:increment,
          completed: action.payload.completed,
          // CompleteLength: increment,
        });
      } catch (err) {
        console.log(err);
      }
    },
    updateHabit: (state, action) => {
      try {
        const data = action.payload;
        const ref = habitDocRef(action.payload.id);
        ref.update({
          Name: data.name,
          goal: data.goal,
        });
      } catch (err) {
        console.log(err);
      }
    },
    deleteHabit: (state, action) => {
      try {
        const data = habitDocRef(action.payload.id);
        deleteDoc(data);
      } catch (err) {
        console.log(err);
      }
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
          })
          .then(() => {});
        doc.update({
          id: doc.id,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  extraReducers: {
    [fetchHabits.pending]: (state) => {},
    [fetchHabits.fulfilled]: (state, action) => {
      state.habit = action.payload;
    },
    [fetchHabits.rejected]: (state) => {},
    [fetchSkips.fulfilled]: (state, action) => {
      state.skips = action.payload;
    },
    [fetchSuccess.fulfilled]: (state, action) => {
      state.success = action.payload;
    },
    [fetchFail.fulfilled]: (state, action) => {
      state.fails = action.payload;
    },
  },
});
export const {
  addHabit,
  updateCateg,
  updateComp,
  updateHabit,
  deleteHabit,
  updateStreak,
} = habitReducer.actions;
export default habitReducer.reducer;
