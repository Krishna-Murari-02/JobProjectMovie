import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [Name, setName] = useState("");

  const [Password, setPassword] = useState("");

  const login = async () => {
    try {
      await AsyncStorage.setItem("username", Name);

      await AsyncStorage.setItem("userpassword", Password);
      Alert.alert("Login Successfully");
      navigation.navigate("Landing");
    } catch (error) {
      Alert.alert("Something Went Worng");
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "600",
          marginBottom: 20,
        }}
      >
        Please SignIn
      </Text>
      <View style={styles.main}>
        <TextInput
          style={styles.text}
          onChangeText={(text) => setName(text)}
          value={Name}
          placeholder="Enter Your Username"
        />

        <TextInput
          style={styles.text}
          onChangeText={(text) => setPassword(text)}
          value={Password}
          // keyboardType="password"
          placeholder="Enter Your Password"
        />

        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: 300,
    height: 400,
    borderWidth: 3,
  },
  text: {
    fontSize: 15,
    color: "#86888A",
    borderWidth: 2,
    backgroundColor: "#404040",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#357EC7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
});
