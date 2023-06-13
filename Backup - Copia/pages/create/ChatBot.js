import React, {useState, useEffect} from "react";
import { View, TextInput, FlatList, TouchableOpacity, Text } from "react-native";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ChatBot = () => {
    const [mensagem, setMensagem] = useState('');
    const [chatHistoy, setChatHistory] = useState([]);

    useEffect(()=>{
        loadChatHistory();
    }, []);

    const loadChatHistory = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/crednow/chatbot/');
            const history = response.data;

            setChatHistory(history);
        }catch (error) {
            console.error(error);
        }
    };

    const sedMensagem = async () => {
        if (mensagem.trim() !== ''){
            try {
                const response = await axios.post('http://127.0.0.1:8000/crednow/chatbot/', {pergunta: mensagem, resposta: mensagem});
                const resposta = response.data.resposta;

                setChatHistory((prevChat) => [
                    ...prevChat,
                    {mensagem: mensagem, isUserMessage: true},
                    {mensagem: resposta, isUserMessage: false},
                ]);

                setMensagem('');
            }catch (error) {
                console.error(error);
            }
        }
    };

    const renderItem = ({item}) => (
        <View style={{padding: 10}}>
            <Text style={{fontWeight: item.isUserMessage ? 'bold': 'normal'}}>{item.mensagem}</Text>
        </View>
    );

return(
    <>
    <Header />
    <View style={{flex: 1, backgroundColor: '#F4EEE0'}}>
        <FlatList
            data={chatHistoy}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <TextInput
                style={{flex: 1, borderWidth: 1, borderColor: '#ccc', color: '#000' , borderRadius: 5, padding: 10}}
                placeholder="Digite sua pergunta..."
                value={mensagem}
                onChangeText={setMensagem}
            />

            <TouchableOpacity 
            style={{marginLeft: 10, backgroundColor: '#ccc', padding: 10, borderRadius: 5}}
            onPress={sedMensagem}
            >
                <Text style={{fontWeight: 'bold'}}>Enviar</Text>
            </TouchableOpacity>
        </View>
    </View>
    <Footer />
    </>
);
};

export default ChatBot;