import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

//import[Container] from './styles';

const{height, width} = Dimensions.get('window');

export default class Add extends Component 
{
    state=
    {
        descricao:'',
        valor:''
    }
    render()
    {
        return (<View style ={{ /*backgroundColor: 'orange',*/ width: width,
                                                     paddingLeft:10,
                                                     paddingTop:0}}>
                    <Text>Cadastro Despesas</Text>
                    <TextInput placeholder = "Descrição" 
                                            onChangeText={(descricao)=>this.setState
                                            ({descricao})}
                                            style=
                                            {{borderWidth:1, borderColor:"#e5e5e5", 
                                            borderRadius:10,
                                            marginTop:10}}/>
                    <TextInput placeholder = "R$" 
                                            onChangeText={(valor)=>this.setState
                                                ({valor})}
                                            style=
                                            {{borderWidth:1, borderColor:"#e5e5e5", 
                                            borderRadius:10,
                                            marginTop:10}}/>
                    <TouchableOpacity onPress={() => this.props.addDespesa(this.state)} 
                                                        style={{backgroundColor:'red', width:width * 0.84,
                                                                    borderWidth:1,borderColor:"e5e5e5",
                                                                    borderRadius:10,padding:10,
                                                                    marginTop:10}}>
                        <Text style={{textAlign:'center',color:'white'}}>Salvar</Text>
                    </TouchableOpacity>
            </View>);
    }
}
