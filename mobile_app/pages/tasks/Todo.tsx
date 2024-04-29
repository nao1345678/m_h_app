import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { View, Text, Modal, StyleSheet, Button, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useFonts } from 'expo-font'
import { BlurView } from 'react-native-blur'

import Basic from './Basic'
import Grass from '../../components/Grass'
import Sun from '../../components/Sun'
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
                <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <Cloud style={styles.cloud} />
                      <Cloud style={styles.cloud2} />
                      <Sun style={styles.sun} />
                      <Cloud style={styles.cloud1}/>
                      <Bubble1 style={styles.bubble}/>
                      <Kitty style={styles.kitty}/>
                      <Text style={{ fontFamily: 'PressStart2P', position: 'absolute', top : 315, width : 190, left : 110  }}>Hi Boo, how are you feeling right now ?</Text>

                      <View style={styles.moodcontainer}>
                        <TouchableOpacity style={styles.mood} onPress={closeModal}>
                        <Image source={require('../../assets/badmoodblur.png')} style={styles.badmoodblur} resizeMode='contain'/>
                          <BadMood/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mood} onPress={closeModal}>
                        <Image source={require('../../assets/midmoodblur.png')} style={styles.midmoodblur} resizeMode='contain'/>
                          <MidMood />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mood} onPress={closeModal}>
                        <Image source={require('../../assets/goodmoodblur.png')} style={styles.goodmoodblur}  resizeMode='contain'/>
                          <GoodMood/>
                        </TouchableOpacity>

                        <Grass style={styles.grass}/>
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
  badmoodblur: {
    width : 120,
    position : 'absolute',
    right : -25,
    top : -50, 
    opacity : 1
  },
  
  midmoodblur: {
    width : 120,
    position : 'absolute',
    right : -25,
    top : -50, 
    opacity : 1
  }, 
  goodmoodblur : {
    width : 120,
    position : 'absolute',
    right : -25,
    top : -50, 
    opacity : 1
  },
  mood: {
    fontSize: 15,
    flex: 1,
    margin: 25
  },
  moodcontainer: {
    position : 'absolute',
    bottom : 200,
    display : 'flex', 
    flexDirection : 'row', 
    justifyContent : 'center', 
    alignItems : 'center',
    textAlign : 'center', 
    alignSelf : 'center',
    marginLeft : 10
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
  }, 
  sun : { 
    position : 'absolute', 
    top : 30
  }, 
  cloud : {
    position : 'absolute', 
    top : 150, 
    right : -60
  }, 
  cloud1 : {
    position : 'absolute',
    top : 70, 
    left : -50
  }, 
  cloud2 : {
    position : 'absolute',
    top : 0, 
    right : -50
  }, 
  kitty : {
    position : 'absolute',
    bottom : 300, 
    left : 50 
  }, 
  bubble: {
    position : 'absolute',
    top : 280,
    left : 70
  }, 
  grass: {
    position : 'absolute',
    bottom : -200
  }
  
})
