import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo-app-loading';

const TitlePage = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    JetBrainMonos: require('../assets/fonts/JetBrainsMono.ttf')
  });

  if (!fontsLoaded) {
    return <Text>Testing</Text>;;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textWhite}>stash</Text>
      <Text style={styles.textGray}>your financial friend</Text>
      <Text style={styles.textLogo}>S</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a2d0fa',
      justifyContent: 'center',
    },
    textWhite: {
        fontFamily: 'JetBrainMonos',
        fontSize: 40,
        color: '#ffffff',
        textAlign: 'center',
        paddingTop: 120,
    },
    textGray: {
        fontFamily: 'JetBrainMonos',
        color: '#6a6a6a',
        fontSize: 20,
        textAlign: 'right',
        paddingRight: 8,
    },
    textLogo: {
        fontFamily: 'JetBrainMonos',
        fontSize: 600,
        color: '#ffffff',
        textAlign: 'center',
    },
  });

export default TitlePage;