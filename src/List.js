import React, { Component } from 'react';
import { View, Text } from 'react-native';

//import[Container] from './styles';

export default class List extends Component 
{
    render()
    {
        console.log
        return<view>
            <Text>Descriçao: {this.props.registro.descricao}|
                  Preço:{this.props.registro.preco}
            </Text>
        </view>
    }
}
