import { ADD_EXERCISE, ADD_WORKOUT } from "./actionTypes";

export const addExercise = exercise => ({
  type: ADD_EXERCISE,
  payload: exercise
});

export const addWorkout = workout => ({ type: ADD_WORKOUT, payload: workout });
