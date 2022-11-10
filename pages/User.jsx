import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const User = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewmain}>
        <Image
          style={tw`w-32 h-32 mx-2 rounded-full mx-auto -mt-16 `}
          source={{
            uri: `https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?auto=format&h=200`,
          }}
        />

        <View style={styles.itemDiv}>
          <Text style={styles.itemhed}>User Name: </Text>
          <Text style={styles.itemtext}>Ram </Text>
        </View>
        <View style={styles.itemDiv}>
          <Text style={styles.itemhed}>Email: </Text>
          <Text style={styles.itemtext}>Ram </Text>
        </View>
        <View style={styles.itemDiv}>
          <Text style={styles.itemhed}>Phone No: </Text>
          <Text style={styles.itemtext}>Ram </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Landing")}
          style={tw`bg-blue-300 mx-auto px-8 py-3 mt-20 rounded-lg`}
        >
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  viewmain: {
    width: 300,
    height: 400,
    borderWidth: 3,
    borderColor: "#404040",
  },
  itemDiv: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    marginTop: 20,
  },
  itemhed: {
    fontWeight: "700",
    marginRight: 10,
    color: "white",
    fontSize: 18,
  },
  itemtext: {
    color: "white",
    fontSize: 18,
  },
});
