import {combineReducers} from "@reduxjs/toolkit";
import cart from "./cartRedux";


const rooterReducer = combineReducers({
    cart,
    devTools:true
});
export default rooterReducer;