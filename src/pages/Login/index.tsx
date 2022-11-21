import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { styles } from './style';
import AxiosInstance from '../../api/AxiosInstance';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
      console.log(`E-mail: ${email} Senha: ${senha}`)

      try {
        const retorno = await AxiosInstance.post('/auth/login', {email:email, password: senha});
        
        if(retorno.status === 200){
          navigation.navigate('Home')
        }else{
          
          console.log('Erro ao realizar a autenticação')
        }
        
      } catch (errinho) {
        Alert.alert("Erro")
        console.log("Erro ao realizar a autenticação - " + JSON.stringify(errinho))
      }
  }


  return (
    <>
    <View style={styles.container}>
      
      <View style={styles.cabecalho}>
        <Text style={styles.BV}>Bem-Vindo</Text>
      </View>
      
      <View style={styles.conteudo}>
        
        <TextInput style={styles.input} placeholder='E-mail' onChangeText={setEmail} value={email}/>
        <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} onChangeText={setSenha} value={senha} />

      </View>
      
      <View style={styles.rodape}>
        
        <TouchableOpacity style={styles.Login} onPress={() => handleLogin()}>
          <Text style={styles.LogText} >Login</Text>
        </TouchableOpacity>

      </View>

    </View>
    
    </>
  );
};

export default Login;
