import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "@store/usersReducer";
import habitSlice from "@store/habitsReducer";
const store = configureStore({
  reducer: { users: userSlice, habit: habitSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    }),
});

export default store;
