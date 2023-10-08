import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    textWhite: {
        fontFamily: 'JetBrains Mono',
        fontSize: 48,
        color: '#ffffff',
        textAlign: 'center',
    },
    textGray: {
        fontFamily: 'JetBrains Mono',
        color: '#6a6a6a',
        fontSize: 48,
    },
    textLogo: {
        fontFamily: 'JetBrains Mono',
        fontSize: 600,
        color: '#ffffff',
        textAlign: 'center',
    },
  });

export default HomePage;