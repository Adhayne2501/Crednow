import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";

const BalanceScreen = () => {
    const [saldo, setSaldo] = useState(null);
    const [cliente, setCliente] = useState(null);
    const [agencia, setAgencia] = useState(null);
    const [conta, setConta] = useState(null);

    useEffect(() => {
        const fetchSaldo = async () => {
            try {
                // const response = await axios.get('http://127.0.0.1:8000/crednow/conta/')
                await axios.get('http://127.0.0.1:8000/crednow/conta/')
                    .then((response) => {
                        console.log(response.data)
                        setSaldo(response.data[0].saldo);
                        setCliente(response.data[0].cliente);
                        setAgencia(response.data[0].agencia);
                        setConta(response.data[0].conta);
                    })
                
            }catch (error) {
                console.error('Erro ao obter dados: ', error);
            }
    };

    fetchSaldo();
}, []);

    return(
        <>
            <Header navigation={navigation}/>
        <View style={styles.container}>
            <Text style={styles.Text}>Saldo Atual: R${saldo !== null? saldo: '-'}</Text> 
            <Text style={styles.Text}>Cliente: {cliente !== null? cliente: '-'}</Text> 
            <Text style={styles.Text}>Agência: {agencia !== null? agencia: '-'}</Text> 
            <Text style={styles.Text}>Conta: {conta !== null? conta: '-'}</Text> 
        </View>
        < Footer />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393646'
    },
    Text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eaeaea'
    },
});

export default BalanceScreen;