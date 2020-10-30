import React, { useState } from "react";
import { View, Button } from "react-native";
import { TodoListComponent } from "../../components/TodoListComponent";
import { AddTodoForm } from "../../components/AddTodoItem";
import { selectAddedTodo } from "../../store/todolist/selector";
import { useSelector, useDispatch } from "react-redux";
import {
  createTodo,
  toggledTodo,
  DeleteTodo,
} from "../../store/todolist/action";

const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];
export default function TodoList() {
  // const [todos, setTodos] = useState(initialTodos);
  const todos = useSelector(selectAddedTodo);
  console.log("added todos", todos);
  const dispatch = useDispatch();

  const toggleTodo = (selectedTodo: Todo) => {
    dispatch(toggledTodo(selectedTodo));
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    dispatch(createTodo(newTodo));
  };

  const deleteTodo: DeleteTodo = () => {
    dispatch(DeleteTodo());
  };

  return (
    <View>
      <TodoListComponent todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
      <Button
        title="Detele complited Tasks"
        onPress={() => deleteTodo(todos)}
      />
    </View>
  );
}
