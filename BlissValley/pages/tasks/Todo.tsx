import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native'
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList
} from 'react-native'
import { useFonts } from 'expo-font'

import Basic from './Basic'
import Done from '../../components/Done'
import Remove from '../../components/Remove'
import Grass from '../../components/Grass'
import Sun from '../../components/Sun'
import Kitty from '../../components/Kitty'
import Cloud from '../../components/Cloud'
import Bubble1 from '../../components/Bubble1'
import GoodMood from '../../components/GoodMood'
import MidMood from '../../components/MidMood'
import BadMood from '../../components/BadMood'
import { Container } from 'native-base'
import Add from '../../components/Add'
import LineTodo from '../../components/LineToDo'
import Library from '../../components/LibraryBooks'

const Drawer = createDrawerNavigator()

export default function App({ navigation }) {
  const basic: any = [
    { id: 1, name: 'Organize my room', isChecked: false },
    { id: 3, name: 'Go to the grocery store', isChecked: false },
    { id: 4, name: 'Make a gift for a friend', isChecked: false },
    { id: 5, name: 'Take a long walk outside', isChecked: false },
    { id: 6, name: 'Create a playlist', isChecked: false },
    { id: 8, name: 'Spend less time on my phone', isChecked: false },
    { id: 9, name: 'Do some skincare', isChecked: false }
  ]

  const tough: any = [
    { id: 10, name: 'Take a shower', isChecked: false },
    { id: 11, name: 'Drink water', isChecked: false },
    { id: 12, name: 'Eat at least a meal', isChecked: false },
    { id: 13, name: 'Listen to music I like', isChecked: false },
    { id: 14, name: 'Get out of my bed', isChecked: false },
    { id: 15, name: 'Brush my teeth', isChecked: false },
    { id: 17, name: 'Take my medication', isChecked: false },
    { id: 18, name: 'Make my bed', isChecked: false }
  ]

  const important: any = [
    { id: 28, name: 'Complete my work presentation', isChecked: false },
    { id: 29, name: 'Pay my bills', isChecked: false },
    { id: 30, name: "Schedule a doctor's appointment", isChecked: false },
    { id: 31, name: 'Call a family member', isChecked: false },
    { id: 32, name: 'Prepare for an important meeting', isChecked: false },
    { id: 33, name: 'Update my resume', isChecked: false },
    { id: 2, name: 'Read my emails', isChecked: false }
  ]

  const orga: any = [
    { id: 34, name: 'Wash my bed sheets', isChecked: false },
    { id: 35, name: 'Declutter my wardrobe', isChecked: false },
    { id: 36, name: 'Mop the floors', isChecked: false },
    { id: 37, name: 'Wash my makeup brushes', isChecked: false },
    { id: 38, name: 'Fold the laundry', isChecked: false },
    { id: 39, name: 'Clean out the refrigerator', isChecked: false },
    { id: 41, name: 'Sort through old paperwork', isChecked: false },
    { id: 42, name: 'Tidy up the living room', isChecked: false }
  ]

  const [tasks, setTasks] = useState([])
  const [inputTask, setInputTask] = useState('')

  const handleCheckboxChange = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isChecked: !task.isChecked } : task)))
  }

  const removeItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const removeAllItems = () => {
    setTasks([])
  }

  const addItem = () => {
    if (inputTask.trim() !== '' && inputTask.length <= 95) {
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
      setTasks([...tasks, { id: newId, name: inputTask, isChecked: false }])
      setInputTask('')
    } else if (inputTask.length > 95) {
      console.log("Error : data's length must be under 95 characters")
    } else if (inputTask.trim() == '') {
      console.log('Error : cannot add empty task')
    }
  }

  const handleAllCheckboxChange = () => {
    setTasks(tasks.map((task) => (task.isChecked ? task : { ...task, isChecked: !task.isChecked })))
  }

  const [modalVisible, setModalVisible] = useState(true)

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleAddFromInspiration = (task) => {
    if (!tasks.some((t) => t.id === task.id)) {
      setTasks([...tasks, task])
      console.log(task)
    } else if (tasks.some((t) => t.id === task.id)) {
      console.log('Error : cannot add an already added task')
    }
  }

  return (
    <NavigationContainer independent={true}>
      <View style={styles.mainBigContainer}>
        <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={true}>
          <View>
            <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Cloud style={styles.cloud} />
                  <Cloud style={styles.cloud2} />
                  <Sun style={styles.sun} />
                  <Cloud style={styles.cloud1} />
                  <Image source={require('../../assets/pngs/Bubble.png')} style={styles.bubble} resizeMode="contain" />

                  <Kitty style={styles.kitty} />
                  <Text style={styles.modalText}>Hi Boo, how are you feeling right now ?</Text>

                  <View style={styles.moodContainer}>
                    <TouchableOpacity style={styles.mood} onPress={closeModal}>
                      <Image
                        source={require('../../assets/pngs/badmoodblur.png')}
                        style={styles.moodImage}
                        resizeMode="contain"
                      />
                      <BadMood />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mood} onPress={closeModal}>
                      <Image
                        source={require('../../assets/pngs/midmoodblur.png')}
                        style={styles.moodImage}
                        resizeMode="contain"
                      />
                      <MidMood />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mood} onPress={closeModal}>
                      <Image
                        source={require('../../assets/pngs/goodmoodblur.png')}
                        style={styles.moodImage}
                        resizeMode="contain"
                      />
                      <GoodMood />
                    </TouchableOpacity>
                  </View>
                  <Grass style={styles.grass} />
                </View>
              </View>
            </Modal>

            <Cloud style={styles.cloud} />
            <Cloud style={styles.cloud2} />
            <Sun style={styles.sun} />
            <Cloud style={styles.cloud1} />

            <View style={styles.input}>
              <TextInput
                style={styles.addtask}
                onChangeText={setInputTask}
                value={inputTask}
                placeholder="Add task ..."
              />
              <TouchableOpacity onPress={addItem} style={styles.addItem}>
                <Text>
                  <Add />
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Tasks left for today :</Text>
            {tasks
              .filter((task) => !task.isChecked)
              .map((task) => (
                <View key={task.id} style={styles.taskBlock}>
                  <Text style={styles.taskName}>{task.name}</Text>
                  <View style={styles.buttons}>
                    <TouchableOpacity
                      style={{ position: 'absolute', top: 6, left: -40 }}
                      onPress={() => handleCheckboxChange(task.id)}
                    >
                      <Done />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 5 }} onPress={() => removeItem(task.id)}>
                      <Remove />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </View>
          <View>
            <Text style={styles.heading}>Done !</Text>
            {tasks
              .filter((task) => task.isChecked)
              .map((task) => (
                <View key={task.id} style={styles.taskBlock}>
                  <Text style={styles.taskName}>{task.name}</Text>
                </View>
              ))}
          </View>
          <Text style={styles.heading}>Tasks inspiration...</Text>

          <ScrollView horizontal={true} style={{ marginLeft: 10, marginBottom: 150 }}>
            <View style={styles.taskInspoBlock}>
              <Text style={styles.inspoTitle}>For the daily</Text>
              {basic.map((task: any) => (
                <TouchableOpacity key={task.id} onPress={() => handleAddFromInspiration(task)}>
                  <Text style={styles.taskInspoName}>
                    <TouchableOpacity onPress={() => handleAddFromInspiration(task)}>
                      <Text
                        style={{
                          fontSize: 16,
                          marginHorizontal: 5
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                    {task.name}
                  </Text>

                  <LineTodo />
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.taskInspoBlock}>
              <Text style={styles.inspoTitle}>On tough days</Text>
              {tough.map((task: any) => (
                <TouchableOpacity key={task.id} onPress={() => handleAddFromInspiration(task)}>
                  <Text style={styles.taskInspoName}>
                    <TouchableOpacity onPress={() => handleAddFromInspiration(task)}>
                      <Text
                        style={{
                          fontSize: 16,
                          marginHorizontal: 5
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                    {task.name}
                  </Text>

                  <LineTodo />
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.taskInspoBlock}>
              <Text style={styles.inspoTitle}>Important tasks</Text>
              {important.map((task: any) => (
                <TouchableOpacity key={task.id} onPress={() => handleAddFromInspiration(task)}>
                  <Text style={styles.taskInspoName}>
                    <TouchableOpacity onPress={() => handleAddFromInspiration(task)}>
                      <Text
                        style={{
                          fontSize: 16,
                          marginHorizontal: 5
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                    {task.name}
                  </Text>

                  <LineTodo />
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.taskInspoBlock}>
              <Text style={styles.inspoTitle}>Need to organize?</Text>
              {orga.map((task: any) => (
                <TouchableOpacity key={task.id} onPress={() => handleAddFromInspiration(task)}>
                  <Text style={styles.taskInspoName}>
                    <TouchableOpacity onPress={() => handleAddFromInspiration(task)}>
                      <Text
                        style={{
                          fontSize: 16,
                          marginHorizontal: 5
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                    {task.name}
                  </Text>

                  <LineTodo />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </ScrollView>

        <Grass style={styles.grass2} />
        <Kitty style={styles.kitty2} />
        {/* <Image
          source={require("../../assets/pngs/Bubble.png")}
          style={{
            position: "absolute",
            top: 460,
            left: 30,
            resizeMode: "contain",
            width: 150,
          }}
        />
        <Text
          style={{
            fontFamily: "PressStart2P",
            bottom: 90,
            left: 60,
            position: "absolute",
          }}
        >
          Meow...
        </Text> */}
        <TouchableOpacity onPress={() => navigation.navigate('Library')}>
          <Library style={{ position: 'absolute', bottom: 10, right: 10 }} />
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fab1e1'
  },
  mainBigContainer: {
    backgroundColor: '#fab1e1',
    minHeight: '100%'
  },
  addtask: {
    opacity: 0.7,
    backgroundColor: 'white',
    marginTop: 300,
    height: 50,
    width: '78%',
    marginLeft: 15,
    borderColor: '#41004f',
    borderWidth: 2,
    fontFamily: 'Consolas',
    letterSpacing: -0.7,
    paddingLeft: 10
  },
  input: {
    flexDirection: 'row'
  },
  addItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9200ba',
    marginTop: 300,
    width: 50,
    marginLeft: 5,
    borderColor: '#41004f',
    borderWidth: 2
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
    backgroundColor: '#fab1e1',
    padding: 20,
    borderRadius: 0
  },
  modalText: {
    fontFamily: 'PressStart2P',
    position: 'absolute',
    top: 315,
    width: 190,
    left: 110
  },
  moodContainer: {
    position: 'absolute',
    bottom: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  mood: {
    margin: 28
  },
  moodImage: {
    margin: 1,
    width: 120,
    height: 120,
    opacity: 1.5,
    position: 'absolute',
    top: -35,
    left: -27
  },
  heading: {
    fontFamily: 'PressStart2P',
    marginHorizontal: 15,
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
    color: 'white',
    textShadowColor: '#9200ba',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2
  },
  taskBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: 2,
    borderBottomColor: 'pink',
    backgroundColor: 'white',
    height: 65,
    width: '92%',
    borderColor: '#41004f',
    borderWidth: 2,
    fontFamily: 'Consolas',
    letterSpacing: -0.7,
    paddingLeft: 10,
    marginVertical: 6
  },
  taskName: {
    fontSize: 17,
    fontFamily: 'Consolas',
    width: '69%',
    height: 'auto',
    letterSpacing: -0.7
  },
  buttons: {
    flexDirection: 'row'
  },
  sun: {
    position: 'absolute',
    top: 30
  },
  cloud: {
    position: 'absolute',
    top: 80,
    right: -40
  },
  cloud1: {
    position: 'absolute',
    top: 10,
    left: -120
  },
  cloud2: {
    position: 'absolute',
    top: -50,
    right: -140
  },
  kitty: {
    position: 'absolute',
    bottom: 230,
    left: 10
  },
  kitty2: {
    position: 'absolute',
    bottom: -130,
    left: -60
  },
  bubble: {
    position: 'absolute',
    top: 40,
    left: 70,
    width: 250
  },
  grass: {
    position: 'absolute',
    bottom: -20,
    right: -40
  },
  grass2: {
    position: 'absolute',
    bottom: -20,
    right: -40
  },
  taskInspoBlock: {
    backgroundColor: 'white',
    borderBlockColor: 'purple',
    borderWidth: 2,
    opacity: 0.8,
    margin: 5,
    paddingVertical: 7
  },
  taskInspoName: {
    letterSpacing: -0.5,
    fontFamily: 'Consolas',
    marginTop: 7,
    marginLeft: 5,
    marginRight: 8,
    fontSize: 15
  },
  inspoTitle: {
    fontFamily: 'Consolas',
    marginTop: 2,
    marginLeft: 5,
    marginRight: 8,
    fontSize: 16,
    color: '#ff2e85'
  }
})
