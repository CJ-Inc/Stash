import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

import TitlePage from "./pages/TitlePage";
import HomePage from "./pages/HomePage";
import FriendsPage from "./pages/FriendsPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Friends">
        <Stack.Screen name="Title" component={TitlePage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Friends" component={FriendsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
