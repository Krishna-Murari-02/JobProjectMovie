import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./pages/HomeScreen";
import MovieDetails from "./pages/MovieDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import YoutubeScreen from "./pages/YoutubeScreen";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User";

export default function App({}) {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Landing" component={HomeScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="YoutubeScreen" component={YoutubeScreen} />
          <Stack.Screen name="Movie" component={MovieDetails} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="User" component={User} />
          {/* <Stack.Screen name="Nothing" component={Nothing} /> */}
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 5,
  },
  tabNAvigation: {
    borderTopWidth: 1,
    borderColor: "gray",

    backgroundColor: "black",

    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
