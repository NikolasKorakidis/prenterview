import React, { useState } from "react";
import { Text, View, Button, SafeAreaView, StyleSheet } from "react-native";
import quotesJSON from "./dataBase.json";

const HowDoYouFeel = () => {
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
    <SafeAreaView>
      <View>
        <Text style={styles.title}>How are you feeling?</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            title="STRESSED"
            onPress={() =>
              setQuote(
                quoteObject.stressedArray[
                  Math.floor(Math.random() * quoteObject.stressedArray.length)
                ]
              )
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="ANXIOUS"
            onPress={() =>
              setQuote(
                quoteObject.anxiousArray[
                  Math.floor(Math.random() * quoteObject.anxiousArray.length)
                ]
              )
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="PANICKY"
            onPress={() =>
              setQuote(
                quoteObject.panickyArray[
                  Math.floor(Math.random() * quoteObject.panickyArray.length)
                ]
              )
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="EXCITED"
            onPress={() =>
              setQuote(
                quoteObject.excitedArray[
                  Math.floor(Math.random() * quoteObject.excitedArray.length)
                ]
              )
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="HAPPY"
            onPress={() =>
              setQuote(
                quoteObject.happyArray[
                  Math.floor(Math.random() * quoteObject.happyArray.length)
                ]
              )
            }
          />
        </View>
      </View>
      <View style={styles.container}>
        {/*        <Text>Your quote: </Text> */}
        <Text>{quote[0]}</Text>
        <Text /* style='strong' */>{quote[1]}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export default HowDoYouFeel;
