import React, { useState } from "react";
import { Text, View, Button, Alert } from "react-native";

export default function HowDoYouFeel() {
  const [feeling, setFeeling] = useState<string>("");

  return (
    <View>
      <Text>Hello, how do you feel?</Text>

      <Button title="STRESSED" onPress={() => setFeeling("feeling stressed")} />

      <Button
        title="ANXIOUS"
        onPress={() => Alert.alert("Simple Button pressed")}
      />

      <Button
        title="PANICKY"
        onPress={() => Alert.alert("Simple Button pressed")}
      />

      <Button
        title="EXCITED"
        onPress={() => Alert.alert("Simple Button pressed")}
      />

      <Button
        title="HAPPY"
        onPress={() => Alert.alert("Simple Button pressed")}
      />

      <Text>Your feeling {feeling}</Text>
    </View>
  );
}

/*PLAN
X Add a button asking how do you feel
X On click
X Siplay a drop down option with good, bad, neutral,
On click (useEffect)
Use axios to dispatch a request
Set up this resquest
On response, console.log the response. 
Use setState to display the quote
Have string or a componenet under the button for displaying the quote
[ ] Add the two buttons linking back to the home, feature 1 and feature 2

 */
