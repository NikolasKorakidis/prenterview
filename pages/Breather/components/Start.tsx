import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Start() {
  return (
    <View>
      <Image style={styles.logo} source={require("../images/logo.png")} />
      <Text style={styles.baseText}>
        Let's have a look at your heart rate before you walk in your interview,
        shall we?
      </Text>
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
    color: "tomato",
    fontSize: 50,
    alignSelf: "center",
    textAlign: "center",
  },
  logo: {
    alignSelf: "center",
  },
});
