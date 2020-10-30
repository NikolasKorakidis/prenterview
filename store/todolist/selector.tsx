import { RootState } from "../rootReducer";

export const selectAddedTodo = (state: RootState) => state.toDoReducer;
