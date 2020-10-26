import React from "react";
import { Button, Text, View, Alert } from "react-native";
import ToDoList from "../ToDoList/ToDoList";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationScreenProp } from "react-navigation";

type RootStackParamList = {
  Profile: { userId: string };
};
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function HomePage({ navigation }: Props) {
  return (
    <View>
      <Text>This is homepage</Text>
      <Text>
        <Button
          title="To do list"
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
        />

        <Button
          title="How do you feel"
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
        />
        <Button
          title="Breather"
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
        />
      </Text>
    </View>
  );
}
