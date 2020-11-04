export interface Todo {
  text: string;
  complete: boolean;
}

interface AddTodo {
  type: typeof ADDTODO;
  payload: Todo;
}

interface DeleteTodo {
  type: typeof DELETETODO;
}
interface ToggleTodo {
  type: typeof TOGGLETODO;
  payload: Todo;
}

export interface TodoListState {
  todoList: Todo[];
}
export const ADDTODO = "ADDTODO";
export const TOGGLETODO = "TOGGLETODO";

export const DELETETODO = "DELETETODO";

export type TodoListActionTypes = AddTodo | DeleteTodo | ToggleTodo;
