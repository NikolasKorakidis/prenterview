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

{/* <TextInput
// placeholder={newTask}
            onChangeText={(text) => set_newTask(text)}
            value={newTask}
          />
<Button
title="Add new task"
// onPress={() => {setList({...list, text:newTask}}
/> */}

  </View>
  )}