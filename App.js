import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';


export default function App() {

  return (
    <>
      <Header title="Header param" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
              
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474A51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  }
});
