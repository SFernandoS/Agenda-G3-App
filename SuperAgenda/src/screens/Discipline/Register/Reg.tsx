import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';


export default function Reg() {
  return (
      <View style={Styles.container}>
    <Text style={Styles.font}>
        salve.
    </Text>
      </View>
    );  
}

const Styles = StyleSheet.create({
    container: {
      alignItems: "center",
      padding: 10,
    },
   font:{
    color: "Black",
    fontSize: 50
   }
   
  });