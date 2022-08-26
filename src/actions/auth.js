import { REGISTER, LOGIN } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (email, password, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(email, password,);
        dispatch({ type: LOGIN, data, email })
        navigate("/");
    } catch (error) {
        console.log(error)
    }
}

export const signup = (email, password, navigate) => async (dispatch) => {
    try {
        const { data } = api.signUp(email, password,);
        dispatch({ type: REGISTER, data })
        navigate("/login");
    } catch (error) {
        console.log(error)
    }
}