import React from "react";
import { Button, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  // Styling Notes
  // BackGround: Moving Image?
  // Refactor main buttons || import material?
  // import Logo
  return (
    <View>
      <Text>This is homepage</Text>
      <Text>Welcome to Prenterview</Text>
      <Button
        title="Are you Ready?"
        onPress={() => navigation.navigate("ToDoList")}
      />
      <Button
        title="How do you feel?"
        onPress={() => navigation.navigate("HowDoYouFeel")}
      />
      <Button
        title="Are you Relaxed?"
        onPress={() => navigation.navigate("Breather")}
      />
      <Button
        title="About this App."
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
