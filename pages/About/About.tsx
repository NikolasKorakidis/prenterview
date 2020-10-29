import React from "react";
import { View, Button, Image } from "react-native";
import { Avatar, Text, Tile } from "react-native-elements";

export default function About() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text h1>PreInterview</Text>
      <View>
        <Tile
          imageSrc={require("./pictures/theme.jpg")}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption="Some Caption Text"
        />
      </View>
      <View>
        <Text>
          This is an application for you to prepair the last minutes before you
          step into your job interview. You can check if you have everything you
          need, you can motivate yourself in case you feel a bit nervous and
          finally you can do some breathing exercises to drop your heart rate
          just bofore you step in the arena.
        </Text>
      </View>
      <View>
        <Text>
          PreInterview is part of the Group Assessment given to Group "Lead" as
          final project in Coddaiseur. Check bellow the members of Group "Lead"!
        </Text>
      </View>
      <View>
        <View>
          <Text>Nina</Text>
          <Avatar
            rounded
            source={{
              uri:
                "https://cdn.discordapp.com/attachments/751364932578050099/771362345938583562/IMG_20190925_214041_395.jpg",
            }}
          />
        </View>
        <View>
          <Text>Simone</Text>
          <Avatar
            rounded
            source={{
              uri:
                "https://cdn.discordapp.com/attachments/751364932578050099/771362345938583562/IMG_20190925_214041_395.jpg",
            }}
          />
        </View>
        <View>
          <Text>Nikolas</Text>
          <Avatar
            rounded
            source={{
              uri:
                "https://cdn.discordapp.com/attachments/751364932578050099/771362345938583562/IMG_20190925_214041_395.jpg",
            }}
          />
        </View>
      </View>
    </View>
  );
}
