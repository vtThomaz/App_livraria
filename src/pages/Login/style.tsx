import React from "react";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#252525'
    },
    cabecalho:{
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
  
    },
    conteudo:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    rodape:{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
  
    },
    BV:{
      color:'#fff0a6',
      fontSize: 40,
      fontWeight: 'bold'
  
    },
    input:{
      color:'black',      
      backgroundColor: '#fff',
      opacity:0.8,
      borderRadius: 25,
      width: Dimensions.get('window').width * 0.9,
      marginVertical:10,
      paddingVertical:13,
      paddingHorizontal:15,
      fontWeight: 'bold'
    },
    Login:{
        backgroundColor:'#eaeaea',
        width: Dimensions.get('window').width * 0.9,
        padding: 20,
        borderRadius: 50

    },
    LogText:{
        color:'#000000',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 18
    }
  });