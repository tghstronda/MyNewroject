import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Add from './src/Add';
import List from './src/List';

const registros = 
[{
  descricao:'x-salada',
  valor:'10.00'
}]

export default function App() {

  /*state =
  {
    descricao:'',
    valor: '',
  }
  */

  _addDespesa = despesa =>
  {
    registros.push(despesa);
  }

  return(
    <View style={styles.container}>
      <Text>Quantidade de Registos: {registros.length}</Text>
      <Add addDespesa = {this._addDespesa} />
      {registros.map((row,index) =>(
        <List key={index} registro={row}/>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',

    justifyContent: 'flex-start',
    paddingTop: 30
  },
});
