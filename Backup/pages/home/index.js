import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo.png';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Login from '../login';
// import NaveBarra from '../Main/naveBarra';

const Home = ({navigation}) => {

    const [agencia, setAgencia] = useState('');
    const [conta, setConta] = useState('');
    const goLogin = ()=>{
        navigation.navigate('Login')
    }
    const handleAgenciaChange = (text) => {
        setAgencia(text);
    };

    const handleContaChange = (text) => {
        setConta(text);
    };

    const acessar =() => {
        navigation.navigate('Main')
    }

    return (
        <View style={styles.container}>
            <View style={{alignItems:'flex-end', padding:10, backgroundColor: '#F4EEE0',}}>
                <Header goLogin={goLogin}/>
            </View>
            <View style={styles.background}>
                <View style={styles.logo}>
                    <img style={styles.Logo} src={Logo}></img>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Agência:</Text>
                    <TextInput
                        style={styles.input}
                        value={agencia}
                        onChangeText={handleAgenciaChange}
                        keyboardType='numeric'
                        placeholder='Digite a agência'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Conta:</Text>
                    <TextInput
                        style={styles.input}
                        value={conta}
                        onChangeText={handleContaChange}
                        keyboardType='numeric'
                        placeholder='Digite a conta'
                    />
                    <TouchableOpacity onPress={acessar}>
                        <Text style={styles.buttonText}>acessar conta</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: "#4F4557",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    inputContainer: {
        marginBottom: 16,
        width: '100%',
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
        color: '#F4EEE0',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
    logo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    Logo: {
        width: "300px",
        height: "200px",
    },
    buttonText: {
        padding: "20px",
        color: "#F4EEE0",
        fontSize: 25,
    },
    buttonText2: {
        padding: "20px",
        color: "#F4EEE0",
        fontSize: 12,
    },
    figura: {
        width: '15%',
        height: 40,
        alignItems: 'center',
    },
});

export default Home;
