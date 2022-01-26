 import { configureStore, combineReducers } from "@reduxjs/toolkit";
 import habitSlice from "@store/reducer";

 const store=configureStore({
     reducer:habitSlice
 })

 export default store;