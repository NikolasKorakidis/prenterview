import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import Breather from "./pages/Breather/Breather";
import HomePage from "./pages/HomePage/HomePage";
import HowDoYouFeel from "./pages/HowDoYouFeel/HowDoYouFeel";
import ToDoList from "./pages/ToDoList/ToDoList";




export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <ToDoList/>
      <HowDoYouFeel/>
      <Breather/>
      <HomePage/>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
