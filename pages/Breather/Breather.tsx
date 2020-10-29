import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Start from "./components/Start";
import Animation from "./components/Amination";

export default function Breather() {
  const [status, setstatus] = useState("start");
  return (
    <View style={styles.container}>
      {status === "start" ? (
        <View>
          <Start />
          <Button title="Let's Start" onPress={() => setstatus("pulse")} />
          <Text style={styles.secondaryText}>
            Let's Use the Breather Anyway
          </Text>
          <Button title="Breather" onPress={() => setstatus("breather")} />
        </View>
      ) : null}
      {status === "pulse" ? (
        <View>
          <Text style={styles.baseText}>Relax</Text>
          <Image
            style={styles.image}
            source={require("./images/findPulse.png")}
          />
          <Button title="Checked" onPress={() => setstatus("count")} />
        </View>
      ) : null}
      {status === "count" ? (
        <View>
          <Text style={styles.baseText}>Focus</Text>
          <Image style={styles.image} source={require("./images/count.png")} />
          <Button title="Checked" onPress={() => setstatus("double")} />
        </View>
      ) : null}
      {status === "double" ? (
        <View>
          <Text style={styles.baseText}>Do Math</Text>
          <Image
            style={styles.image}
            source={require("./images/doubleIt.png")}
          />
          <Button title="Checked" onPress={() => setstatus("check")} />
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
          <Button title="YES" onPress={() => setstatus("breather")} />
          <Button title="NO" onPress={() => setstatus("start")} />
          <Button title="NOT SURE" onPress={() => setstatus("pulse")} />
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
          <Button title="I am Ready" onPress={() => setstatus("animation")} />
        </View>
      ) : null}
      {status === "animation" ? (
        <View>
          <Animation />
          <Button title="I feel Better!" onPress={() => setstatus("start")} />
        </View>
      ) : null}
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
    color: "lightgreen",
    fontSize: 50,
    alignSelf: "center",
  },
  secondaryText: {
    color: "lightgreen",
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
});

{
  /* <Image
style={{
  width: "100%",
}}
source={require("./images/check-your-pulse.png")}
/> */
}
