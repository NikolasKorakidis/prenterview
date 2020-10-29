import React, {useState} from "react";
import { View, Text, Button } from 'react-native'
import { CheckBox } from 'react-native-elements'



type Props = {
  todo: Todo;
  toggleTodo: ToggleTodo;
};


export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {

  return(
      <View>
        <View>
           <View
           
>

          <CheckBox
         onPress={() => toggleTodo(todo)}
         uncheckedIcon="circle-o"
         checkedColor="blue"
         checked={todo.complete}
          />
          </View>
          <Text style={todo.complete === true ? {textDecorationLine: 'line-through'} : undefined}>
              {todo.text}
          </Text>
          </View>
      </View>
  )
}
