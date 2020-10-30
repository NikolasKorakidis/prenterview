import { combineReducers } from "redux";
import toDoReducer from "./todolist/reducer";

export const rootReducer = combineReducers({
  toDoReducer: toDoReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
