import React from "react";
import { View, Image } from "react-native";
import { Avatar, Tile, AirbnbRating } from "react-native-elements";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#292929",
      }}
    >
      <Image source={require("../Breather/images/logo.png")} />
      <View>
        <Tile
          imageSrc={{
            uri:
              "https://www.efilecabinet.com/wp-content/uploads/2016/03/Blurry-Background-Gray.jpg",
          }}
          title="This is an application for you to prepare the last minutes before you
          step into your job interview. You can check if you have everything you
          need, you can motivate yourself in case you feel a bit nervous and
          finally you can do some breathing exercises to drop your heart rate
          just bofore you step in the arena."
          featured
          caption={`PreInterview is part of the Group Assessment given to Group "Lead" as final project in Coddaiseur. Check bellow the members of Group "Lead"!`}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View>
          <Avatar
            rounded
            source={{
              uri:
                "https://cdn.discordapp.com/attachments/751364932578050099/771362345938583562/IMG_20190925_214041_395.jpg",
            }}
          />
        </View>
        <View>
          <Avatar
            rounded
            source={{
              uri:
                "https://media.discordapp.net/attachments/760042936112250901/771369428674674728/sg.jpeg",
            }}
          />
        </View>
        <View>
          <Avatar
            rounded
            source={{
              uri:
                "https://media.discordapp.net/attachments/760042936112250901/771373281105674311/download.png",
            }}
          />
        </View>
      </View>
      <View>
        <AirbnbRating
          count={11}
          reviews={[
            "Terrible",
            "Bad",
            "Meh",
            "OK",
            "Good",
            "Hmm...",
            "Very Good",
            "Wow",
            "Amazing",
            "Unbelievable",
            "Jesus",
          ]}
          defaultRating={11}
          size={20}
        />
      </View>
    </View>
  );
}
