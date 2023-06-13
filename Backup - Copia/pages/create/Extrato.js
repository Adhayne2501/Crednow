import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
// import styles from "../read/styles";

const Extrato = () => {
    const [extrato, setExtrato] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/crednow/transferencia/')
            .then((response) => setExtrato(response.data))
            .catch((error)=> console.log(error));
    }, []);    

    return(
        <>
        <Header navigation={navigation}/>
        <View style={styles.container}>
            <Text style={styles.titulo}>Extrato</Text>
            {extrato.map((item)=>(
                <View key={item.id} style={styles.item}>
                    <Text style={styles.itemData}>{item.data}</Text>
                    <Text style={styles.itemDescricao}>{item.descricao}</Text>
                    <Text style={styles.itemValor}>{item.valor_transferencia}</Text>
                </View>
    ))}
    </View>
    <Footer />
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#393646'
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#eaeaea'
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    itemDescricao: {
        flex: 1,
        marginRight: 8,
        color: "#F4EEE0",
    },

    itemData: {
        flex: 1,
        marginRight: 8,
        color: "#F4EEE0",
    },

    itemValor: {
        fontWeight: 'bold',
        color: "#F4EEE0",
    },
});

export default Extrato;