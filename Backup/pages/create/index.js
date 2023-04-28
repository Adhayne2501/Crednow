import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import styles from './styles'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage, db } from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

export default function Create({ navigation }) {
  const CadastroUsuarioPage = () => {
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState(null);
  
    const handleNomeChange = (text) => {
      setNome(text);
    };
  
    const handleFotoChange = (text) => {
      setFoto(text);
    };
  

  //######################## Imagem ############################
  useEffect(() => {
    if (!foto) {
      setPreView(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(foto)
    setPreView(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [foto])

  //######################## Fim Imagem ########################

  const upload = e => {
    e.preventDefault()

    const file = foto

    if (!file) {
      console.log('Faltou imagem!')
      return
    }

    if (!nome) {
      console.log('Faltou nome!')
      return
    }

    if (foto == null) return

    const storageRef = ref(
      storage,
      `images/${nome.replace(/ +/g, '') + '_' + foto.name}`
    )
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed', snapshot => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      )
      setTimeout(() => {
        setProgressoPercent(progress), 1000
      })
    })
    adicionar()
  }

  async function adicionar(){
    await addDoc(collection(db, 'alunos'), {
      name: nome,
      email: email,
      status: false,
      image: nome.replace(/ +/g, '') + '_' + image.name
    })

    setNome('')
    setTexto('Cadastrado com Sucesso!')
    setPreView(undefined)
  }

  return (
    <View>
    <TextInput
      placeholder="Nome"
      value={nome}
      onChangeText={handleNomeChange}
    />
    <TextInput
      placeholder="URL da foto"
      value={foto}
      onChangeText={handleFotoChange}
    />
    {foto && <Image source={{ uri: foto }} style={{ width: 100, height: 100 }} />}
    <Button title="Cadastrar" onPress={handleCadastro} />
  </View>
);
  }
}

