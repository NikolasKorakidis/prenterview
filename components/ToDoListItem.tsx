import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

type Props = {
  todo: Todo;
  toggleTodo: ToggleTodo;
};

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  const [checked, set_checked] = useState(false);
  // console.log("todo", todo)

  return (
    <SafeAreaView /*  style={styles.container} */>
      <View style={styles.checkboxInput}>
        <CheckBox
          // style={todo.complete === true ? {textDecorationLine: "line-through"} : null}
          // style={{textDecorationLine: todo.complete === true ? 'line-through' : undefined}}
          onPress={() => toggleTodo(todo)}
          uncheckedIcon="circle-o"
          uncheckedColor="#ffa31a"
          checkedColor="#ffa31a"
          checked={todo.complete}
        />

        <Text
          style={
            todo.complete === true
              ? {
                  textDecorationLine: "line-through",
                  color: "#ffa31a",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : {
                  color: "#ffa31a",
                  alignItems: "center",
                  justifyContent: "center",
                }
          }
        >
          {todo.text}
        </Text>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkboxInput: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    margin: 8,
  },
});
