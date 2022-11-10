import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";

const Header = ({ navigation }) => {
  const [LoginName, setLoginName] = useState("Hello");
  return (
    <View style={tw`flex-row justify-between  w-full android:mt-8  border`}>
      <Image
        style={tw`w-5 h-8 `}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/640px-Netflix_2015_N_logo.svg.png",
        }}
      />
      <Text
        onPress={() => navigation.navigate("User")}
        style={tw`text-lg font-semibold text-white`}
      >
        Profile Page
      </Text>
      <Text style={tw`text-lg font-semibold text-white`}>Movies</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("User")}
        style={tw`flex-row`}
      >
        <Image
          style={tw`w-8 h-8 rounded-full `}
          source={{
            uri: `https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?auto=format&h=200`,
          }}
        />
        <Text
          onPress={() => navigation.navigate("Login")}
          style={tw`text-lg font-semibold text-white`}
        >
          @{LoginName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
// #242121
const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
  },
  flexItemCenter: {
    display: "flex",
    alignItems: "center",
  },
});
