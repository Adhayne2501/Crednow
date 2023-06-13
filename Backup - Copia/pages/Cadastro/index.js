import React, { useState} from "react";
import { View, Text, TextInput, Button, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import Logo from '../images/logo.png'
import Header from '../../components/Header';
import Footer from '../../components/Footer';



const Cadastro = ({ navigation }) => {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [CPF, setCPF] = useState("");
    const [foto, setFoto] = useState(null);

    const handleCadastro = () => {
        console.log('Nome', nome);
        console.log('Senha', senha);
        console.log('CPF', CPF);
        console.log('Foto', foto);
    };

    const handleFoto = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted == false) {
            alert("Permissão para acessar a biblioteca de mídia é necessária!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled) {
            setFoto(result.uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4F4557', color: '#F4EEE0' }}>
            <View style={{flex:0.1, width: '100%', backgroundColor:'#F4EEE0'}}>
            <Header navigation={navigation}/>
            </View>
            <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor:'#4F4557'}}>
                <Image source={Logo} style={{ width: 500, height: 100 }} />
                <TextInput
                    placeholder="Nome do Usuário"
                    value={nome}
                    onChangeText={text => setNome(text)}
                    style={{ width: '70%', height: 40, borderColor: '#F4EEE0', color: '#F4EEE0', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                />
                <TextInput
                    placeholder="Senha"
                    value={senha}
                    onChangeText={text => setSenha(text)}
                    secureTextEntry
                    style={{ width: '70%', height: 40, borderColor: '#F4EEE0', color: '#F4EEE0', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                />
                <TextInput
                    placeholder="CPF"
                    value={CPF}
                    onChangeText={text => setCPF(text)}
                    style={{ width: '70%', height: 40, borderColor: '#F4EEE0', color: '#F4EEE0', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                />
                <TouchableOpacity onPress={handleFoto} style={{ marginBottom: 10 }}>
                    <Text style={{ color: 'white' }}>Selecionar Foto</Text>
                </TouchableOpacity>
                {foto && <Image source={{ uri: foto }} style={{ width: 200, height: 200, marginBottom: 10, paddingHorizontal: 10 }} />}
                <Button title="Cadastrar" onPress={handleCadastro} />
            </View>
            <View style={{flex:0.13, alignItems:'bottom', backgroundColor:'#F4EEE0', width:'100%'}}>
                <Footer />
            </View>
        </View>
    );
};

export default Cadastro;