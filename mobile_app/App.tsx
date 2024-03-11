import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, Image } from 'react-native'

import Todo from './pages/Todo'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginBottom: 5
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#ccc'
      })}
    >
      <Tab.Screen name="List" component={Todo} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: '★ MH ★',
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerShadowVisible: true,
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen name="Home" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
