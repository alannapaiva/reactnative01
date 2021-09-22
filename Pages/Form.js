import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Picker from 'react-native-picker-select';
import Header from './Header';
import logo from './Assets/user_group_new.png';

function Form() {
  return (
	<>
		<Header title="Cadastro" />
		<View style={styles.container}>
			<Image source={logo} style={styles.topImage} />
			<Text style={styles.title}>Preencha o formulário abaixo:</Text>
		</View>
		<View style={styles.inputContainer}>
			<TextInput style={styles.input} placeholder = "Digite o nome" /> 
			<TextInput style={styles.input} placeholder = "Digite a idade" keyboardType={'numeric'}/>
			<TouchableOpacity style={styles.button}>
        		<Text style={styles.buttonText}>Salvar</Text>
    		</TouchableOpacity>

		</View>
	</>
	 
	  
  );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	},
	topImage: {
		margin: 20,
	},
	title: {
		fontSize: 20,
	}
  });

export default Form;