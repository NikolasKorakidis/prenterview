import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/HomePage/HomePage";
import HowDoYouFeel from "./pages/HowDoYouFeel/HowDoYouFeel";
import Breather from "./pages/Breather/Breather";
import ToDoList from "./pages/ToDoList/ToDoList";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./store/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="ToDoList" component={ToDoList} />
          <Stack.Screen name="HowDoYouFeel" component={HowDoYouFeel} />
          <Stack.Screen name="Breather" component={Breather} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
