import React, {useState} from 'react'
import { View} from 'react-native'
import {TodoListItem} from "./ToDoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoListComponent: React.FC<Props> = ({todos, toggleTodo}) => {
    return(
  <View>
{todos.map((todo) => {
        return (
          <View key={todo.text}>
            <TodoListItem
            todo={todo}
            toggleTodo={toggleTodo}/>
          </View>
        );
      })}

  </View>
  )}