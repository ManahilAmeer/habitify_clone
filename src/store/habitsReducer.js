import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { habitDocRef, habitsRef } from "database/firebase";
import { getDocs } from "firebase/firestore";
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
    let allHabits = habitsRef(uid.uid);
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
    let allHabits = habitsRef(uid.uid);
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
    let allHabits = habitsRef(uid.uid);
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
    let allHabits = habitsRef(uid.uid);
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
    let allHabits = habitsRef(uid.uid);
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
        if (action.payload.category) {
          data.update({
            category: action.payload.category,
          });
        }
        if (action.payload.category === "Skip") {
          data.update({
            SkipLength: increment,
          });
        } else if (action.payload.category === "Fail") {
          data.update({
            FailLength: increment,
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
        const compDate = snapshot.data().completedDate;
        if (snapshot.data().completed === snapshot.data().goal) {
          if (compDate === yesterday) {
            data.update({
              completedDate: today,
              streak: increment,
              CompleteLength: increment,
              category: "Complete",
            });
          } else if (
            (compDate == undefined || compDate === today) 
          ) {
            data.update({
              CompleteLength: increment,
              category: "Complete",
              completedDate: today,
              streak: 1,
            });
          } else {
            data.update({
              completedDate: today,
              streak: 0,
            });
          }
        }
      });
    },
    updateComp: (state, action) => {
      try {
        const data = habitDocRef(action.payload.id);
        const increment = firebase.firestore.FieldValue.increment(1);
        data.update({
          total: increment,
          completed: increment,
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
        }).then(console.log("updated"));
      } catch (err) {
        console.log(err);
      }
    },
    deleteHabit: (state, action) => {
      habitDocRef(action.payload.id)
        .delete()
        .then(() => {})
        .catch((error) => {
          console.log("Error removing document:", error);
        });
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
