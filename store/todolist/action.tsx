import {
  Todo,
  ADDTODO,
  DELETETODO,
  TodoListActionTypes,
  TOGGLETODO,
} from "./types";

export function createTodo(newTodo: Todo): TodoListActionTypes {
  return {
    type: ADDTODO,
    payload: newTodo,
  };
}

export function DeleteTodo(): TodoListActionTypes {
  return {
    type: DELETETODO,
  };
}

export function toggledTodo(ToggleTodo: Todo): TodoListActionTypes {
  return {
    type: TOGGLETODO,
    payload: ToggleTodo,
  };
}
