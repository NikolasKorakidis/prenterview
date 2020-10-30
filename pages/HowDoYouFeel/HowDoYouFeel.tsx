import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import quotesJSON from "./dataBase.json";

export default function HowDoYouFeel() {
  const [quote, setQuote] = useState(["", ""]);

  type QuoteObject = {
    stressedArray: string[][];
    anxiousArray: string[][];
    panickyArray: string[][];
    excitedArray: string[][];
    happyArray: string[][];
  };

  const quoteObject: QuoteObject = quotesJSON;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How are you feeling?</Text>
      {/*      <Separator /> */}

      <TouchableOpacity
        onPress={() =>
          setQuote(
            quoteObject.stressedArray[
              Math.floor(Math.random() * quoteObject.stressedArray.length)
            ]
          )
        }
        style={{
          width: "80%",
          height: 25,
          marginBottom: 5,
          marginTop: 5,
          backgroundColor: "#fc3903",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.btntxt}>STRESSED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setQuote(
            quoteObject.anxiousArray[
              Math.floor(Math.random() * quoteObject.anxiousArray.length)
            ]
          )
        }
        style={{
          width: "80%",
          height: 25,
          marginBottom: 5,
          marginTop: 5,
          backgroundColor: "#fc6203",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.btntxt}>ANXIOUS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setQuote(
            quoteObject.panickyArray[
              Math.floor(Math.random() * quoteObject.panickyArray.length)
            ]
          )
        }
        style={{
          width: "80%",
          height: 25,
          marginBottom: 5,
          marginTop: 5,
          backgroundColor: "#fc8403",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.btntxt}>PANICKY</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setQuote(
            quoteObject.excitedArray[
              Math.floor(Math.random() * quoteObject.excitedArray.length)
            ]
          )
        }
        style={{
          width: "80%",
          height: 25,
          marginBottom: 5,
          marginTop: 5,
          backgroundColor: "#fca903",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.btntxt}>EXCITED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setQuote(
            quoteObject.happyArray[
              Math.floor(Math.random() * quoteObject.happyArray.length)
            ]
          )
        }
        style={{
          width: "80%",
          height: 25,
          marginBottom: 5,
          marginTop: 5,
          backgroundColor: "#fcce03",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.btntxt}>HAPPY</Text>
      </TouchableOpacity>

      {/*       <Separator /> */}
      <View>
        <Text style={styles.baseText}>{quote[0]}</Text>
        <Text style={styles.secondaryText}>{quote[1]}</Text>
      </View>
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
  },
  title: {
    textAlign: "center",
    color: "#ffa31a",
    fontSize: 25,
    alignSelf: "center",
    marginVertical: 8,
    width: "80%",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#292929",
  },

  baseText: {
    fontWeight: "bold",
    color: "#ffa31a",
    fontSize: 25,
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginVertical: 5,
    width: "80%",
  },
  secondaryText: {
    color: "#ffa31a",
    fontSize: 15,
    alignSelf: "center",
    textAlign: "center",
    width: "80%",
  },
});
