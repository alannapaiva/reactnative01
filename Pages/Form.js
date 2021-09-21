import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';


function Form() {
  const navigation = useNavigation();
  return (
      <>
        <Header title="Cadastro" />
        <View style={styles.container}>
            <Text>Teremos um formulário aqui!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack('Home')}>
              <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
        
      </>
  );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      marginTop: 20,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    }
  });
 
export default Form;