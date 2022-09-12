import {combineReducers} from "@reduxjs/toolkit";
import cart from "./cartSlice";
import user from "./userSlice";

const rooterReducer = combineReducers({
    cart,
    user,
    devTools: true
});
export default rooterReducer;