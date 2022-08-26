import { REGISTER, LOGOUT, LOGIN } from '../constants/actionTypes';

const authReducer = (state = { authData:null }, action) => {
    switch(action.type) {
        case REGISTER:
            return state;
        case LOGIN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            localStorage.setItem('email', ( action?.email ));
            return { ...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        default:
            return state;
    }
}

export default authReducer;