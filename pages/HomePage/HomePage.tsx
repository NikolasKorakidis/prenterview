import React from "react";
import { Button, Text, View, Alert } from "react-native";
import ToDoList from "../ToDoList/ToDoList";
import { StackNavigationProp } from "@react-navigation/stack";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function HomePage({}) {
  return (
    <View>
      <Text>This is homepage</Text>
      <Text>
        <Button
          title="To do list"
          onPress={() => Alert.alert("Simple Button pressed")}
        />

        <Button
          title="How do you feel"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
        <Button
          title="Breather"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </Text>
    </View>
  );
}
