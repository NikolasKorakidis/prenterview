import React, {useState} from "react";
import { View, Text, Button } from 'react-native'
import { CheckBox } from 'react-native-elements'



type Props = {
  // we should receive a todo item object
  todo: Todo;
  toggleTodo: ToggleTodo;


  // and a function that we don't have to give
  //  anything, and doesn't return anything either
  //  (it "just does" something)
//   toggleDone: () => void;

  // ..and maybe we'll add some more stuff later,
  //  this will be enough for now
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
