import { FETCH_ALL_USERS, START_LOADING, END_LOADING } from '../constants/actionTypes';
// eslint-disable-next-line
export default (state = { isLoading: true, users: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return {
                ...state,
                users: action.payload.data,
                totalPages: action.payload.total_pages
            }
        case START_LOADING: 
            return { ...state, isLoading:true };
        case END_LOADING: 
            return { ...state, isLoading:false };
        default:
            return state;
    }
}