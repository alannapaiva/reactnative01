import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';


export default function App() {
  
  const [Contadora, setContador] = useState(0);
  function incrementar(){
    setContador(Contadora+1);
  }

  return (
    <>
      <Header title="Header param" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <Text>{Contadora} toques!</Text>
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text>Press Here</Text>
        </TouchableOpacity>

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
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
