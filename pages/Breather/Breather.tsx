import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Start from "./components/Start";
import Animation from "./components/Amination";
import { ScrollView } from "react-native-gesture-handler";

export default function Breather() {
  const [status, setstatus] = useState("start");
  return (
    <ScrollView style={styles.container}>
      {status === "start" ? (
        <View>
          <Start />
          <TouchableOpacity
            onPress={() => setstatus("pulse")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>Let's start</Text>
          </TouchableOpacity>

          <Text style={styles.secondaryText}>
            Let's Use the Breather Anyway
          </Text>
          <TouchableOpacity
            onPress={() => setstatus("breather")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>Breather</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {status === "pulse" ? (
        <View>
          <Text style={styles.baseText}>Relax</Text>
          <Image
            style={styles.image}
            source={require("./images/findPulse.png")}
          />
          <TouchableOpacity
            onPress={() => setstatus("count")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>Checked</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {status === "count" ? (
        <View>
          <Text style={styles.baseText}>Focus</Text>
          <Image style={styles.image} source={require("./images/count.png")} />
          <TouchableOpacity
            onPress={() => setstatus("double")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>Checked</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {status === "double" ? (
        <View>
          <Text style={styles.baseText}>Do Math</Text>
          <Image
            style={styles.image}
            source={require("./images/doubleIt.png")}
          />

          <TouchableOpacity
            onPress={() => setstatus("check")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>Checked</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {status === "check" ? (
        <View>
          <Text style={styles.baseText}>Heart Rate</Text>
          <Image
            style={styles.image}
            source={require("./images/question.png")}
          />
          <Text
            style={{
              color: "white",
              fontSize: 40,
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Is your heart Rate over 75 BPM
          </Text>
          <TouchableOpacity
            onPress={() => setstatus("breather")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setstatus("start")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>NO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setstatus("pulse")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>NOT SURE</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {status === "breather" ? (
        <View>
          <Text style={styles.baseText}>Breather</Text>
          <Image
            style={styles.image}
            source={require("./images/breathe.png")}
          />
          <Text style={styles.baseText}>Let's take some deep breaths</Text>
          <TouchableOpacity
            onPress={() => setstatus("animation")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>I am ready</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {status === "animation" ? (
        <View>
          <TouchableOpacity
            onPress={() => setstatus("start")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>I feel Better!</Text>
          </TouchableOpacity>
          <Animation />
        </View>
      ) : null}
    </ScrollView>
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
    fontSize: 40,
    alignSelf: "center",
    textAlign: "center",
  },
  secondaryText: {
    color: "#ffa31a",
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
  },
  logo: {
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    borderRadius: 50,
  },
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
