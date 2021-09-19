import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Discipline() {
    return (
     <View style={styles.container}>      
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Você apertou o botao')}
      >
        <Text
        style={styles.font}
        >+</Text>       
      </TouchableOpacity>
    </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    paddingHorizontal: 100,
    paddingVertical: 700,


  },
  button: {
    opacity:110,
    width: 60,
    height: 60,
    backgroundColor: "#CF4646",
    alignItems: 'center',
    justifyContent: 'center',
  paddingBottom: 10
    
  },
  font:{
    
      color: "white",
      fontSize: 50,
      
  },
 
});