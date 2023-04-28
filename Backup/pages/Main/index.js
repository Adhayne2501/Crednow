import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../components/Footer';

const Main = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  // Código para obter informações da conta da API do banco
  // ...

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Crednow</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="piggy-bank" size={25} color="#4F4557" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="credit-card" size={25} color="#4F4557" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={25} color="#4F4557" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="dollar" size={25} color="#4F4557" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Saldo</Text>
        <Text style={styles.balanceValue}>R${balance.toFixed(2)}</Text>
        <TouchableOpacity style={styles.transferButton}>
          <Text style={styles.transferButtonText}>Transferência</Text>
        </TouchableOpacity>
      </View>
      {/* Código para exibir a lista de transações */}
      {/* ... */}
      <Footer />
    </View>
  );
};

const styles = {

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4EEE0',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F4557',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
  },
  balanceContainer: {
    backgroundColor: '#F4EEE0',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  balanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balanceValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 10,
  },
  transferButton: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 5,
  },
  transferButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default Main;