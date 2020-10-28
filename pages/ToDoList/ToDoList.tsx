import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { TodoListComponent } from "../../components/TodoListComponent"
import {AddTodoForm} from "../../components/AddTodoItem"

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];
export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
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
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return(
  <View>
    <TodoListComponent todos={todos} toggleTodo={toggleTodo}/>
    <AddTodoForm addTodo={addTodo} />
  </View>
  )}