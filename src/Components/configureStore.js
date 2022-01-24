 import { configureStore, combineReducers } from "@reduxjs/toolkit";
 import habitSlice from "./reducer"

 const store=configureStore({
     reducer:habitSlice
 })

 export default store;