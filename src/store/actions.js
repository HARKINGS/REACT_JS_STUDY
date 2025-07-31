import { ADD_TODO, REMOVE_TODO, SET_TODO } from "./constants";

export const setTodo = (payload) => ({
  type: SET_TODO,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});
