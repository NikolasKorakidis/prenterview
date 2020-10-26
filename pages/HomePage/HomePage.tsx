import React from "react";
import { Button, Text, View, Alert } from "react-native";
import ToDoList from "../ToDoList/ToDoList";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationScreenProp } from "react-navigation";

export default function HomePage({ navigation }) {
  return (
    <View>
      <Text>This is homepage</Text>
      <Text>Welcome to Prenterview</Text>
      <Button
        title="Checklist"
        onPress={() => navigation.navigate("ToDoList")}
      />
      <Button
        title="How do you feel?"
        onPress={() => navigation.navigate("HowDoYouFeel")}
      />
      <Button
        title="Take a deep Breath!"
        onPress={() => navigation.navigate("Breather")}
      />
      <Button
        title="About this App."
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
