import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/HomePage/HomePage";
import HowDoYouFeel from "./pages/HowDoYouFeel/HowDoYouFeel";
import Breather from "./pages/Breather/Breather";
import ToDoList from "./pages/ToDoList/ToDoList";
import About from "./pages/About/About";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="HowDoYouFeel" component={HowDoYouFeel} />
        <Stack.Screen name="Breather" component={Breather} />
        <Stack.Screen name="Details" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
