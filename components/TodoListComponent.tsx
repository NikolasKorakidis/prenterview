import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { TodoListItem } from "./ToDoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoListComponent: React.FC<Props> = ({ todos, toggleTodo }) => {
  // console.log("todos",todos)
  return (
    <View>
      {todos.map((todo) => {
        return (
          <View style={styles.todoList}>
            <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  todoList: {
    /*   alignSelf: "center", */
    justifyContent: "center",
    width: "80%",
    marginBottom: 2,
    marginTop: 2,
  },
});
