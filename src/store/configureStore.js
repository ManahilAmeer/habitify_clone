import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "@store/usersReducer";
import habitSlice from "@store/habitsReducer";

const store = configureStore({
  reducer: { users: userSlice, habits: habitSlice },
});

export default store;
