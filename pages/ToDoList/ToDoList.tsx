import React, {useState} from 'react'
import { View, Button} from 'react-native'
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

  const deleteTodo: DeleteTodo = (itemList: Todo[]) => {
    setTodos(itemList.filter(todoToStay => todoToStay.complete === false));

  };

  return(
  <View>
    <TodoListComponent todos={todos} toggleTodo={toggleTodo}/>
    <AddTodoForm addTodo={addTodo} />
<Button
title="Detele complited Tasks"
onPress={()=> deleteTodo(todos)}/>
  </View>
  )}