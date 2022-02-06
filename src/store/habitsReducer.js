import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addHabits, db } from "@database/firebase";
import {
  collectionGroup,
  query,
  doc,
  deleteDoc,
  where,
  getDocs,
} from "firebase/firestore";
export const initialState = {
  id: "",
  habit: [],
  skips: [],
  fails: [],
  success: [],
};
export const fetchHabits = createAsyncThunk("getNotes", async (uid) => {
  try {
    var allHabits = query(
      collectionGroup(db, "habit"),
      where("category", "==", ""),
      where("uid", "==", uid.uid)
    );
    const response = await getDocs(allHabits);
    const notes = response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return notes;
  } catch (err) {
    console.log(err);
  }
});
export const fetchSkips = createAsyncThunk("getSkips", async (uid) => {
  try {
    var allHabits = query(
      collectionGroup(db, "habit"),
      where("category", "==", "Skip"),
      where("uid", "==", uid.uid)
    );
    const response = await getDocs(allHabits);
    const notes = response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return notes;
  } catch (err) {
    console.log(err);
  }
});
export const fetchSuccess = createAsyncThunk("getSuccess", async (uid) => {
  try {
    var allHabits = query(
      collectionGroup(db, "habit"),
      where("category", "==", "Complete"),
      where("uid", "==", uid.uid)
    );
    const response = await getDocs(allHabits);
    const notes = response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return notes;
  } catch (err) {
    console.log(err);
  }
});
export const fetchFail = createAsyncThunk("getFail", async (uid) => {
  try {
    var allHabits = query(
      collectionGroup(db, "habit"),
      where("category", "==", "Fail"),
      where("uid", "==", uid.uid)
    );
    const response = await getDocs(allHabits);
    const notes = response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return notes;
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
        const ref = db.collection("habit").doc(action.payload.ID);
        deleteDoc(doc(db, "habit", action.payload.ID));
      } catch (err) {
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
} = habitReducer.actions;
export default habitReducer.reducer;
