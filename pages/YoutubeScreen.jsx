import { View, Text, StatusBar, Alert } from "react-native";
import React, { useEffect, useState } from "react";

import YoutubePlayer from "react-native-youtube-iframe";
import tw from "tailwind-react-native-classnames";

const YoutubeScreen = () => {
  const [vid, setvid] = useState("EvOPoQrtFGI");
  let items = [
    "FUK2kdPsBws",
    "Q3EASLgzOcM",
    "862Pb9oDDAo",
    "7Zspy3-eFUY",
    "EvOPoQrtFGI",
  ];
  useEffect(() => {
    let d = items[Math.floor(Math.random() * items.length)];
    setvid(d);
    Alert.alert(d);
  }, []);
  return (
    <View style={tw` android:pt-10 flex-1 bg-black`}>
      <YoutubePlayer height={300} play={true} videoId={vid} />
    </View>
  );
};

const TopBar = ({ play, fullScreen }) => (
  <View
    style={{
      alignSelf: "center",
      position: "absolute",
      top: 0,
    }}
  >
    <Text style={{ color: "#FFF" }}> Custom Top bar</Text>
  </View>
);

export default YoutubeScreen;
