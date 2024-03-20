import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

import Todo from './pages/Todo'
import Timer from './pages/Time'
import Following from './pages/Following'
import Basic from './pages/Basic'
import Tough from './pages/Tough'
import Organizing from './pages/Organizing'
import Hobbies from './pages/Hobbies'
import Important from './pages/Important'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

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
      <Tab.Screen name="Timers" component={Timer} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
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
