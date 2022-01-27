import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  ID:"",
  photoURL: "",
  displayName: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addID: (state, action) => {
      state.ID = action.payload;
    },
    addPhoto: (state, action) => {
      state.photoURL = action.payload;
    },
    addDisplayName: (state, action) => {
      state.displayName= action.payload;
    },
  },
});
export const {addID,addPhoto,addDisplayName} = userSlice.actions;
export default userSlice.reducer;