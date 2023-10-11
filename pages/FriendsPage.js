import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useFonts } from "expo-font";

const FriendsPage = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    JetBrainMonos: require("../assets/fonts/JetBrainsMono.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>fonts yet loaded</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textWhite}>Friends</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a2d0fa",
    justifyContent: "top",
  },
  textWhite: {
    fontFamily: "JetBrainMonos",
    fontSize: 40,
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 120,
  },
});

export default FriendsPage;
