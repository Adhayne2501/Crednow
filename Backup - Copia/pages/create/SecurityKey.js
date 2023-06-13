import React, {useState} from "react";
import { View, TextInput, Button } from "react-native";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SecurityKey = () => {
    const [securityKey, setSecurityKey] = useState('');

    const handleSaveKey = () => {
        axios.post('http://127.0.0.1:8000/crednow/securitykey/', {securityKey})
        .then(response => {
            console.log('Chave de Segurança salva com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao salvar a chave de segurança: ', error);
});
    };

    return(
        <>
        <Header />
        <View>
            <TextInput
                style= {{height: 700, backgroundColor: '#F4EEE0'}}
                value={securityKey}
                onChangeText={setSecurityKey}
                placeholder="Digite a chave de segurança"
            />
            <Button title="Salvar" onPress={handleSaveKey} />
        </View>
        <Footer />
        </>
    );
    };

    export default SecurityKey;