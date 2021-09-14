import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/Home/index'
import Times from './src/Times/index'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name='Home' 
          component = { Home }
          options={{
            title: 'Bem-vindo',
            headerStyle: {
              backgroundColor: '#111'
            },
            headerTintColor: '#FFF'
          }}
          />
          <Stack.Screen name='Times' component = { Times }/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
