import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/screens/Home/index'
import Times from './src/screens/Times/index'
import Discipline from './src/screens/Discipline/index';
import Calendar from './src/screens/Calendar/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name=' ' 
          component = { Tabs }
          options={{
            headerTransparent: true,
          }}
          />
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

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen
        name="Bem vindo(a)"
        component={ Home }
        options={{
          headerTitleAlign: 'center',
          headerStatusBarHeight: 30,
          headerTintColor:"#FFFFFF",
          headerStyle: {
          backgroundColor: "#CF4646",
          },
        }}
        />
      <Tab.Screen
        name="Horários"
        component={ Times }
        options={{
          headerTitleAlign: 'center',
          headerStatusBarHeight: 30,
          headerTintColor:"#FFFFFF",
          headerStyle: {
          backgroundColor: "#CF4646",
          },
        }}
        />
      <Tab.Screen
        name="📚Disciplinas"
        component={ Discipline }
        options={{
          headerTitleAlign: 'center',
          headerStatusBarHeight: 30,
          headerTintColor:"#FFFFFF",
          headerStyle: {
          backgroundColor: "#CF4646",
          },
        }}
        />
      <Tab.Screen
        name="Calendário"
        component={ Calendar }
        options={{
          headerTitleAlign: 'center',
          headerStatusBarHeight: 30,
          headerTintColor:"#FFFFFF",
          headerStyle: {
          backgroundColor: "#CF4646",
          },
        }}
        />
    </Tab.Navigator>
  )
}