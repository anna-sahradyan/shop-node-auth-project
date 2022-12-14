import {loginFailure, loginStart, loginSuccess} from "./userSlice";
import {publicRequest} from "../requestMethod";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const result = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(result.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}