import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { TodoListComponent } from "../../components/TodoListComponent";
import { AddTodoForm } from "../../components/AddTodoItem";
import { selectAddedTodo } from "../../store/todolist/selector";
import { useSelector, useDispatch } from "react-redux";

import {
  createTodo,
  toggledTodo,
  DeleteTodo,
} from "../../store/todolist/action";
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
    <SafeAreaView style={styles.container}>
      <TodoListComponent todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
      {/*       <Button
        title="Detele complited Tasks"
        onPress={() => deleteTodo(todos)}
      /> */}

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
