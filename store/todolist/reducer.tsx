import {
  Todo,
  ADDTODO,
  DELETETODO,
  TodoListActionTypes,
  TOGGLETODO,
} from "./types";

const initialState: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

export default function (state = initialState, action: TodoListActionTypes) {
  switch (action.type) {
    case ADDTODO:
      return [...state, action.payload];
    case DELETETODO:
      return state.filter((todoToStay) => todoToStay.complete === false);
    case TOGGLETODO:
      return state.map((todo) => {
        if (todo === action.payload) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });

    default:
      return state;
  }
}
