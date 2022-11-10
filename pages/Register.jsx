import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

import React, { useLayoutEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [isClick, setisClick] = useState(false);

  const Register = async () => {
    Alert.alert("Register Sucessfully");
    navigation.navigate("Login");
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
        Please Sign Up
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
          onChangeText={(text) => setEmail(text)}
          value={Email}
          //   keyboardType="email-address"
          placeholder="Enter Your Email"
        />
        <TextInput
          style={styles.text}
          onChangeText={(text) => setPassword(text)}
          value={Password}
          //   keyboardType="password"
          placeholder="Enter Your Password"
        />
        <TextInput
          style={styles.text}
          onChangeText={(text) => setCPassword(text)}
          value={CPassword}
          //   keyboardType="password"
          placeholder="Enter Your Conform Password"
        />
        <TextInput
          style={styles.text}
          onChangeText={(text) => setPhone(text)}
          value={Phone}
          placeholder="Enter Your Phone"
          keyboardType="phone-pad"
        />
        <TouchableOpacity
          onPress={() => {
            Register();
            setisClick(!isClick);
          }}
          style={styles.button}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

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
