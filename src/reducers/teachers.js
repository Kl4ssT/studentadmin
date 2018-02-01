import { GET_TEACHERS, REMOVE_TEACHER, ADD_TEACHER, EDIT_TEACHER } from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TEACHERS:
            return action.payload;
        case REMOVE_TEACHER:
            return state.filter((item) => item.id !== action.payload);
        case ADD_TEACHER:
            return [...state, action.payload];
        case EDIT_TEACHER:
            const newState = initialState;
            state.map((item) => {
                if (item.id === action.payload.id)
                    newState.push(action.payload);
                else
                    newState.push(item);
            });
            console.log(newState);
            return newState;
        default:
            return state;
    }
};