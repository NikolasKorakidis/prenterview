import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Animation from "./components/Amination";

export default function Breather() {
  const [ready, setready] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Take a Breath</Text>
      <View>{ready ? <Animation /> : <Text>HELLO</Text>}</View>
      <Button
        onPress={() => setready(!ready)}
        title={!ready ? "Click me When you are Ready" : "Go Back"}
        color="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
  },
  baseText: {
    fontWeight: "bold",
    color: "#ffa31a",
  },
});
