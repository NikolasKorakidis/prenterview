import React, { useState } from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";


interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput

        style={styles.textInput}

        placeholder="Input new note"
        onChangeText={(text) => setText(text)}
        value={text}
      />


      <TouchableOpacity

        onPress={() => {
          addTodo(text);
          setText("");
        }}

        style={styles.button}
      >
        <Text style={styles.btntxt}>Add task!</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  btntxt: {
    textAlign: "center",
    color: "#292929",
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    height: 40,
    marginBottom: 25,
    marginTop: 25,
    backgroundColor: "#ffa31a",
    alignSelf: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "80%",
    height: 40,
    borderColor: "#ffa31a",
    backgroundColor: "#c2c0be",
    borderWidth: 1,
    color: "black",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    textAlign: "center",
  },
});
