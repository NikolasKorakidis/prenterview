import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { CheckBox } from "react-native-elements";
import { TodoListComponent } from "../../components/TodoListComponent";
import { AddTodoForm } from "../../components/AddTodoItem";
import { DeleteTodoForm } from "../../components/Delete";

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
  const [todos, setTodos] = useState(initialTodos);
  // console.log("todossss", todos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    if (text) {
      const newTodo = { text, complete: false };
      setTodos([...todos, newTodo]);
    } else {
      Alert.alert("Todo is Empty");
    }
  };

  const deleteTodo: DeleteTodo = (itemList: Todo[]) => {
    console.log("todos before", todos);
    setTodos(itemList.filter((todoToStay) => todoToStay.complete === false));
  };

  console.log("todos after", todos);

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
