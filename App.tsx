import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Breather from "./pages/Breather/Breather";
import HomePage from "./pages/HomePage/HomePage";
import HowDoYouFeel from "./pages/HowDoYouFeel/HowDoYouFeel";
import ToDoList from "./pages/ToDoList/ToDoList";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*    {/*    <View style={styles.container}>
          <HomePage /> */}
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="To do list" component={ToDoList} />

        {/* <HowDoYouFeel />
          <Breather />
          <HomePage />
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View> */}
      </Stack.Navigator>
    </NavigationContainer>
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
