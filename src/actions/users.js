import { FETCH_ALL_USERS, FETCH_USER, START_LOADING, END_LOADING } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const getUsers = (page) =>  async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchUsers(page);
        dispatch({ type: FETCH_ALL_USERS, payload: data });
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error); 
    }
}

export const getUser = (id) =>  async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data }  = await api.fetchUser(id);
        dispatch({ type: FETCH_USER, payload: data });
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error); 
    }
}