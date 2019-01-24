import { ADD_EXERCISE, ADD_WORKOUT, EDIT_EXERCISES, SET_USER, ADD_USER } from "./actionTypes";

const initialState = {
  allExercises: [],
  allWorkouts: {},
  allUsers: [
    {userEmail: 'admin', userPassword: '1111'},
  ],
  loginedUser: null
};

const initialExercise = {
  exerciseName: "",
  measurementType: ""
};

/*
const initialWorkout = {
  exerciseIndex: '',
  repeats: '',
  measurementCount: ''
};
*/
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        loginedUser: action.payload
      };
    case ADD_EXERCISE:
      return {
        ...state,
        allExercises: [
          ...state.allExercises,
          {
            ...initialExercise,
            ...action.payload
          }
        ]
      };
    case EDIT_EXERCISES:
      return {
        ...state,
        allExercises: action.payload
      };
    case ADD_WORKOUT:
      return {
        ...state,
        allWorkouts: {
          ...state.allWorkouts,
          [Object.keys(action.payload)]: action.payload[Object.keys(action.payload)]
        }
      };
    default:
      return state;
  }
};
