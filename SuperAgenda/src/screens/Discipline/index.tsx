import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import reg from './Register/Reg'

export default function Discipline() {
    return (
      <View>
        <Text style={styles.font2}>
          Disciplina 1.
          Professor x.
        </Text>
        <Text style={styles.font2}>
          Disciplina 2.
          Professor y.
        </Text>
     <View style={styles.container}>      
      <TouchableOpacity
        style={styles.button}
        onPress={() => reg()}
        >
        <MaterialCommunityIcons name="plus" color={"white"} size={50} />             
      </TouchableOpacity>
    </View>
        </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    height: '60%',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  button: {
    opacity:100,
    width: 50,
    height: 50,
    backgroundColor: "#CF4646",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  font:{
    
      color: "white",
      fontSize: 50,
      
  },
  font2:{
    
    color: "#5F10FF",
    fontSize: 50,
    
},
 
});
