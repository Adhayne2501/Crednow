import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../images/logo.png';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const auth = getAuth();

  const btLogin = () => {
    console.log('Entrou');
      signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
              const user = userCredential.user;
              navigation.navigate('Home')
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
          });
  }
  const Cad = () => {
    navigation.navigate('Cadastro')
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems:'flex-end', padding:10, backgroundColor: '#F4EEE0',}}>
          <Header navigation={navigation}/>
      </View>
      <View style={styles.background}>
        <View style={styles.content}>
          <View style={styles.logo}>
            <img style={styles.Logo} src={Logo}></img>
          </View>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Agencia</Text>
              <TextInput
                style={[styles.input, !username ? styles.inputError : null]}
                value={username}
                onChangeText={setUsername}
                placeholder="Digite seu nome de usuário"
                placeholderTextColor="#a8a8a8"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Conta</Text>
              <TextInput
                style={[styles.input, !password ? styles.inputError : null]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholder="Digite sua senha"
                placeholderTextColor="#a8a8a8"
              />
            </View>
            {errorMessage ? (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
            <TouchableOpacity
              style={[styles.button, (!username || !password) ? styles.buttonDisabled : null]}
              onPress={btLogin}
              disabled={!username || !password}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <button style={styles.link} onClick={Cad}>Ainda não tenho conta :(</button>
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor:"#4F4557",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoIcon: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#F4EEE0",
    marginRight: 10,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F4EEE0",
  },
  form: {
    width: "100%",
    backgroundColor: "#393646",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#F4EEE0",
  },
  input: {
    backgroundColor: "#f3f3f3",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },

  buttonText: {
    color: "#F4EEE0"
  },

  errorMessage: {
    color: "#FF0000"
  },

  Logo:{
    width: "300px",
    height: "200px"
  },
  link: {
    color: "#393646",
    marginTop: 10
  }
});

export default Login;