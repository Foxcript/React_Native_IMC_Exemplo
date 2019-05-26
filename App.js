/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Um toque duplo sobre o botao R para dar reload,\n' +
    'Movimente o celular para abrir o DEV Menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state={altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let imc = this.state.massa / (this.state.altura * this.state.altura)
    
    let result = this.state
    result.resultado = imc

    if (result.resultado<16)
    {
      result.resultadoText = "Magreza Grave"
    }
    else if (result.resultado<17)
    {
      result.resultadoText = "Magreza Moderada"
    }
    else if (result.resultado<18.5)
    {
      result.resultadoText = "Magreza Leve"
    }
    else if (result.resultado<25)
    {
      result.resultadoText = "Saudável"
    }
    else if (result.resultado<30)
    {
      result.resultadoText = "Sobrepeso"
    }
    else if (result.resultado<35)
    {
      result.resultadoText = "Obesidade Grau I"
    }
    else if (result.resultado<40)
    {
      result.resultadoText = "Obesidade Grau II (Severa)"
    }
    else if (result.resultado>40)
    {
      result.resultadoText = "Obesidade Grau III (Morbida)"
    }
    else{
      result.resultadoText =""
      result.resultado=0.0      
    }

    this.setState(result)
    Keyboard.dismiss()
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.entrada}>

          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} 
           onChangeText={(altura)=>{this.setState({altura})}}
           />
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} 
           onChangeText={(massa)=>{this.setState({massa})}}
          />
        </View>
         
        <Text style={styles.labelResultadoText}>Resultado</Text>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize:40}]}>{this.state.resultadoText}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.calcular} onLongPress={this.clearFocus}>
          <Text style={styles.botaoText}>Calcular</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20c997',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 80,
    textAlign: "center",
    width:"50%",
    fontSize:50,
    marginTop:24,
  },

  botao:{
    backgroundColor: "#28a745",
    width: '80%',
    position: 'absolute',
    bottom: 20,
    borderRadius: 90,
    alignSelf: 'center'
  },

  botaoText:{
    alignSelf: 'center',
    padding: 30,
    fontSize:25,
    color: "#fff",
    fontWeight: 'bold',
  },

  entrada:{
    flexDirection: 'row',
  },

  resultado:{
    textAlign: 'center',
    color:"lightgray",
    fontSize:65,
    padding:15,
  },

  labelResultadoText:{
    backgroundColor: "#2999",
    color: "#fff",
    textAlign:"center",
    fontSize: 26,
    padding: 13,
  }

});
