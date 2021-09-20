import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import reg from './Register/Reg'

export default function Discipline() {
    return (
      <View>
        <Text style={styles.font2}>
          Disciplina 1.<br />
          Professor x.
        </Text>
        <Text style={styles.font2}>
          Disciplina 2.<br />
          Professor y.
        </Text>
     <View style={styles.container}>      
      <TouchableOpacity
        style={styles.button}
        onPress={() => reg()}
        >
        <Text
        style={styles.font}
        >+</Text>       
      </TouchableOpacity>
    </View>
        </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    
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
  font2:{
    
    color: "#1E90FF",
    fontSize: 50,
    
},
 
});