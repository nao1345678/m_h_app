import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { View, Text, Modal, StyleSheet, Button, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useFonts } from 'expo-font'

import Basic from './Basic'
import Kitty from '../../components/Kitty'
import Bubble1 from '../../components/Bubble1'
import Cloud from '../../components/Cloud'
import Tough from './Tough'
import Organizing from './Organizing'
import Hobbies from './Hobbies'
import GoodMood from '../../components/GoodMood'
import MidMood from '../../components/MidMood'
import BadMood from '../../components/BadMood'
import Important from './Important'

const Drawer = createDrawerNavigator()

export default function App() {
  const route = useRoute()
  const [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf')
  })

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

  const [modalVisible, setModalVisible] = useState(true)

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" options={{ title: '★ MH ★' }}>
          {() => (
            <ScrollView>
              <View>
                <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <Cloud />
                      <Bubble1 />
                      <Kitty />
                      <Text style={{ fontFamily: 'PressStart2P'  }}>How are you feeling, Boo ?</Text>

                      <View style={styles.moodcontainer}>
                        <TouchableOpacity style={styles.mood} onPress={closeModal}>
                          <BadMood />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mood} onPress={closeModal}>
                          <MidMood />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mood} onPress={closeModal}>
                          <GoodMood />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
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
  mood: {
    fontSize: 15,
    flex: 1,
    margin: 30
  },
  moodcontainer: {
    flex: 1
  },
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffb3f3',
    padding: 20,
    borderRadius: 0,
    elevation: 5
  }
})
