import Reducer from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";


const store = configureStore({
    reducer: Reducer,
    applyMiddleware:applyMiddleware(thunk)

})



export default store