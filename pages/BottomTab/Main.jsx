import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Login";
import Register from "../Register";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <View>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
