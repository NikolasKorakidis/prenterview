import React, {useState} from 'react';
import { View, TextInput, Button } from 'react-native';


interface Props {
    addTodo: AddTodo;
  }
    

export const AddTodoForm: React.FC<Props> = ({addTodo}) => {
    const [text, setText] = useState('');

  return (
      <View>

         <TextInput
placeholder="Input new note"
onChangeText={text => setText(text)}
value={text}

          />
<Button
title="Add new task"
onPress={()=> {addTodo(text)
    setText('')}}
/>
      </View>
    // <form>
    //   <input type="text" />
    //   <button type="submit">Add Todo</button>
    // </form>
  );
};
