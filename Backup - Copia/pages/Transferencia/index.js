import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Transferencia({navigation}){
  const [contaOrigem, setContaOrigem] = useState(0);
  const [contaDestino, setContaDestino] = useState(0);
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState('');

  const handleTransferencia = () => {
    
    const data = {
      conta_origem_id: parseInt(contaOrigem),
      conta_destino_id: parseInt(contaDestino),
      valor_transferencia: parseFloat(valor),
      descricao: descricao
    };

    axios.post('http://127.0.0.1:8000/crednow/transferencia/', data)
    .then(response => {
      console.log(response.data);
      alert('Transferencia realizada com sucesso');
    })
    .catch(error =>{
      console.log(error);
      alert('Erro ao realizar transferência');
    });
  };

  return (
    <View style={styles.caixa}>
       <Header navigation={navigation}/>
      <View style={styles.container}>
        <Text style={styles.title}>Transferência</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Valor:</Text>
            <TextInput
              style = {styles.input}
              value={valor}
              onChangeText={(e) => setValor(e)}
              placeholder='Valor'
              keyboardType='numeric'
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Conta Origem:</Text>
            <TextInput
              style = {styles.input}
              value={contaOrigem}
              onChangeText={(e) => setContaOrigem(e)}
              placeholder='Conta de Origem'
              keyboardType='numeric'
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Conta Destino:</Text>
            <TextInput
              style = {styles.input}
              value={contaDestino}
              onChangeText={(e) => setContaDestino(e)}
              placeholder='Conta de Destino'
              keyboardType='numeric'
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Descrilçao:</Text>
            <TextInput
              style = {styles.input}
              value={descricao}
              onChangeText={(e) => setDescricao(e)}
              placeholder='Descrição'
              keyboardType='text'
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleTransferencia}>
            <Text style={styles.buttonText}>Transferir</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer/>
    </View>
    );
  };

  const styles = {

    caixa: {
      flex: 1,
      backgroundColor: '#F4EEE0',
    },
    
    container: {
      flex: 1,
      backgroundColor: '#F4EEE0',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 32,
    },
    form: {
      width: '80%',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    label: {
      fontSize: 18,
      marginRight: 16,
    },
    input: {
      flex: 1,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#4F4557',
      padding: 8,
      borderRadius: 4,
    },
    button: {
      backgroundColor: '#4F4557',
      borderRadius: 4,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 32,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  };