import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import HomeScreen from "../HomeScreen";
import Register from "../Register";
import YoutubeScreen from "../YoutubeScreen";
import MovieDetails from "../MovieDetails";
import Login from "../Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function StackScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Landing" component={HomeScreen} />
      </Stack.Navigator>
    </View>
  );
}
