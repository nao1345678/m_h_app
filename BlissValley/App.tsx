import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useState, useEffect } from 'react'

import Todo from './pages/tasks/Todo'
import Timer from './pages/timer/Time'
import Journal from './pages/journal/Journal'
import Basic from './pages/tasks/Basic'
import Tough from './pages/tasks/Tough'
import Organizing from './pages/tasks/Organizing'
import Hobbies from './pages/tasks/Hobbies'
import Important from './pages/tasks/Important'
import LoadingScreen from './pages/loading/LoadingScreen'
import BreathingExercise from './pages/breathing_exercise/BreathingExercise'
import AppLibrary from './pages/library/AppLibrary'

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
      <Tab.Screen name="Journal" component={Journal} />
      <Tab.Screen name="Breathing exercise" component={BreathingExercise} />
    </Tab.Navigator>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

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
        {loading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : (
          <Stack.Screen name="Home" component={MainTabNavigator} />
        )}
        <Stack.Screen name="Library" component={AppLibrary} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
