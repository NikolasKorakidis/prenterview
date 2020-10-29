import React, {useState} from 'react';
import { View, Button, Alert } from 'react-native';


interface Props {
    deleteTodo: DeleteTodo;
  }
    

export const DeleteTodoForm: React.FC<Props> = ({deleteTodo}) => {
     

  return (
      <View>

<Button
title="Detele complited Tasks"
onPress={()=> Alert.alert('Simple Button pressed')}/>
      </View>
  );
};