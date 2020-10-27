import React from "react";
import { Item } from "../models";
import { View, Text, Button } from 'react-native'


type Props = {
  // we should receive a todo item object
  item: Item;

  // and a function that we don't have to give
  //  anything, and doesn't return anything either
  //  (it "just does" something)
  toggleDone: () => void;

  // ..and maybe we'll add some more stuff later,
  //  this will be enough for now
};

export default function TodoItem(props: Props) {
  return(
      <View>
          <Button title={props.item.isDone === true ? "[ X ]" : "[ ]"}
         onPress={props.toggleDone}
          />
        <Text>
        {props.item.text}.
  <Text>{"/n"}</Text>
        {props.item.tags}

      </Text>
      </View>
  )
}
