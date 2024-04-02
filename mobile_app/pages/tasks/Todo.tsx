import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native'

import Basic from './Basic'
import Tough from './Tough'
import Organizing from './Organizing'
import Hobbies from './Hobbies'
import Important from './Important'

const Drawer = createDrawerNavigator()

export default function App() {
  const route = useRoute()

  // const { id } = route.params as { id: number }

  // useEffect(() => {
  //   setTasks(id)
  // }, [route.params])

  const [tasks, setTasks] = useState([{ id: 43, name: 'get Started', isChecked: false }])

  const [inputTask, setInputTask] = useState('')

  const handleCheckboxChange = (id: any) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isChecked: !task.isChecked } : task)))
  }

  const removeItem = (id: any) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const removeAllItems = () => {
    setTasks([])
  }

  const addItem = () => {
    if (inputTask.trim() !== '') {
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
      setTasks([...tasks, { id: newId, name: inputTask, isChecked: false }])
      setInputTask('')
    }
  }

  const handleAllCheckboxChange = () => {
    setTasks(tasks.map((task) => (task.isChecked ? task : { ...task, isChecked: !task.isChecked })))
  }

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" options={{ title: '★ MH ★' }}>
          {() => (
            <ScrollView>
              <View>
                <Text style={styles.heading}>Today's tasks</Text>
                {tasks
                  .filter((task) => !task.isChecked)
                  .map((task, index) => (
                    <View key={task.id} style={styles.taskBlock}>
                      <Text style={styles.taskName}>{task.name}</Text>
                      <View style={styles.buttons}>
                        <Button title="Done" onPress={() => handleCheckboxChange(task.id)} />
                        <Button title="Remove" onPress={() => removeItem(task.id)} />
                      </View>
                    </View>
                  ))}
              </View>
              <Text style={styles.heading}>Done !</Text>
              {tasks
                .filter((task) => task.isChecked)
                .map((task, index) => (
                  <View key={task.id} style={styles.taskBlock}>
                    <Text style={styles.taskName}>{task.name}</Text>
                  </View>
                ))}
            </ScrollView>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Basic tasks" component={Basic} />
        <Drawer.Screen name="On tough days" component={Tough} />
        <Drawer.Screen name="Important tasks" component={Important} />
        <Drawer.Screen name="Organizing tasks" component={Organizing} />
        <Drawer.Screen name="Hobbies" component={Hobbies} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 15
  },
  taskBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'pink'
  },
  taskName: {
    fontSize: 18
  },
  buttons: {
    flexDirection: 'row'
  }
})
