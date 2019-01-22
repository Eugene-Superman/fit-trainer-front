import { ADD_EXERCISE, ADD_WORKOUT, EDIT_EXERCISES } from "./actionTypes";

export const addExercise = exercise => ({
  type: ADD_EXERCISE,
  payload: exercise
});

export const editExercises = exercises => ({
  type: EDIT_EXERCISES,
  payload: exercises
});

export const addWorkout = workout => ({
  type: ADD_WORKOUT,
  payload: workout
});
