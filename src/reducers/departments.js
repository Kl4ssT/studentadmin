import { ADD_DEPARTMENT, GET_DEPARTMENTS, REMOVE_DEPARTMENT } from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DEPARTMENTS:
            return action.payload;
        case REMOVE_DEPARTMENT:
            return state.filter((item) => item.id !== action.payload);
        case ADD_DEPARTMENT:
            return [...state, action.payload];
        default:
            return state;
    }
};