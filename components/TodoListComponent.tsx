import React, {useState} from 'react'
import { View, Text } from 'react-native'
// import {ToDo} from "../../types"
import { CheckBox } from 'react-native-elements'
import { Item } from "../models";
import TodoItem from "../components/ToDoItem";

export default function TodoList() {
  // note the <Item[]> syntax!
  const [list, setList] = useState<Item[]>([
    {
      id: 0,
      text: "Make this app",
      tags: ["react", "typescript"],
      isDone: false,
    },
    {
      id: 1,
      text: "Fall in love with TypeScript",
      tags: ["romantic", "typescript"],
      isDone: false,
    },
  ]);

  const toggle = (id: number) => {
    const changeTheField = list.map((oneList)=> {
        if (oneList.id === id){
            return  {...oneList, isDone: !oneList.isDone};
        } else {
            return oneList
        }
    });
    setList(changeTheField)
  }
  return(
  <View>
{list.map((item) => {
        return (
          <View>
            {/* <button>{item.tags}</button> */}
            <TodoItem
              key={item.id}
              item={item}
              toggleDone={() => toggle(item.id)}
            />
          </View>
        );
      })}
  </View>
  )}