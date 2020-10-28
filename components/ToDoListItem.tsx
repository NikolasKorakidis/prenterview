import React, {useState} from "react";
import { View, Text, Button } from 'react-native'
import { CheckBox } from 'react-native-elements'



type Props = {
  todo: Todo;
  toggleTodo: ToggleTodo;
};


export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
  const [checked, set_checked] = useState(false);

  return(
      <View>
          <CheckBox
         onPress={() => toggleTodo(todo)}
         uncheckedIcon="circle-o"
         checkedColor="blue"
         checked={todo.complete}
          />
          <Text>
              {todo.text}
          </Text>
      </View>
  )
}
