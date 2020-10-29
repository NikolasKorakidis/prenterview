import React, { useState } from "react";
import {
  View,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

interface Props {
  deleteTodo: DeleteTodo;
}

export const DeleteTodoForm: React.FC<Props> = ({ deleteTodo }) => {
  const [text, setText] = useState("");

  // console.log("todosssss", todos)

  return (
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert("Simple Button pressed")}
        style={styles.button}
      >
        <Text style={styles.btntxt}>Detele complited Tasks</Text>
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
});
