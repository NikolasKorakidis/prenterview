import React from "react";

import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { TodoListComponent } from "../../components/TodoListComponent";
import { AddTodoForm } from "../../components/AddTodoItem";
import { selectAddedTodo } from "../../store/todolist/selector";
import { useSelector, useDispatch } from "react-redux";
import {
  createTodo,
  toggledTodo,
  DeleteTodo,
} from "../../store/todolist/action";

export default function TodoList() {
  const todos = useSelector(selectAddedTodo);
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
    <SafeAreaView style={styles.container}>
      <TodoListComponent todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
      <TouchableOpacity onPress={() => deleteTodo(todos)} style={styles.button}>
        <Text style={styles.btntxt}>Detele complited Tasks</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  btntxt: {
    textAlign: "center",
    color: "#292929",
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    height: 40,
    marginBottom: 25,
    marginTop: 25,
    backgroundColor: "#ffa31a",
    alignSelf: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#292929",
  },
});
