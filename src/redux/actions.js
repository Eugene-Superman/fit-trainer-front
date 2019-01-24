import { ADD_EXERCISE, ADD_WORKOUT, EDIT_EXERCISES, SET_USER, ADD_USER } from "./actionTypes";

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

export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const addUser = user => ({
  type: ADD_USER,
  payload: user
});

