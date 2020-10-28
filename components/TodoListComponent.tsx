import React, {useState} from 'react'
import { View,Button, TextInput} from 'react-native'
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
          <View>
            {/* <button>{item.tags}</button> */}
            <TodoListItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}/>
            
          </View>
        );
      })}

  </View>
  )}