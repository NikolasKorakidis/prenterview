import React, {useState} from "react";
import { View, Text, Button } from 'react-native'
import { CheckBox } from 'react-native-elements'



type Props = {
  todo: Todo;
  toggleTodo: ToggleTodo;
};


export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
  const [checked, set_checked] = useState(false);
  // console.log("todo", todo)

  return(
      <View>
        <View>
           <View
           
>

          <CheckBox
          // style={todo.complete === true ? {textDecorationLine: "line-through"} : null}
          // style={{textDecorationLine: todo.complete === true ? 'line-through' : undefined}}
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
