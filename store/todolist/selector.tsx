import { Todo } from "./types";
import { RootState } from "../rootReducer";

export const selectAddedTodo = (state: RootState) => {
  //   console.log("selctor state", state);
  return state.toDoReducer;
};
