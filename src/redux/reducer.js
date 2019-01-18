import { ADD_EXERCISE } from './actionTypes';

const initialState = {
    allExercises: [],
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_EXERCISE:
            state.allExercises.push(action.payload);
            return state;
        default: 
            return state;
    }
}