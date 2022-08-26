import { FETCH_ALL_USERS, START_LOADING, END_LOADING } from '../constants/actionTypes';
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