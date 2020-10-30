import React from "react";
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../Breather/images/logo.png")}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("ToDoList")}
        style={styles.homeButton}
      >
        <Text style={styles.btntxt}>Are you ready?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("HowDoYouFeel")}
        style={styles.homeButton}
      >
        <Text style={styles.btntxt}>How do you feel?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Breather")}
        style={styles.homeButton}
      >
        <Text style={styles.btntxt}>Are you Relaxed?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style={styles.homeButton}
      >
        <Text style={styles.btntxt}>About us</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btntxt: {
    textAlign: "center",
    color: "#292929",
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#292929",
  },
  homeButton: {
    width: "80%",
    height: "10%",
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "#ffa31a",
    alignSelf: "center",
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
  },
});
