import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Modal, StyleSheet, Button, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

import Basic from './Basic';
import Done from '../../components/Done';
import Remove from '../../components/Remove';
import Grass from '../../components/Grass';
import Sun from '../../components/Sun';
import Kitty from '../../components/Kitty';
import Cloud from '../../components/Cloud';
import Tough from './Tough';
import Organizing from './Organizing';
import Hobbies from './Hobbies';
import Bubble1 from '../../components/Bubble1';
import GoodMood from '../../components/GoodMood';
import MidMood from '../../components/MidMood';
import BadMood from '../../components/BadMood';
import Important from './Important';
import { Container } from 'native-base';

const Drawer = createDrawerNavigator();

export default function App({route}) {
  const [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
    'Consolas': require('../../assets/fonts/Consolas.ttf')
  });

  const [tasks, setTasks] = useState([{ id: 43, name: 'get Started', isChecked: false }]);
  const [inputTask, setInputTask] = useState('');


  const handleCheckboxChange = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isChecked: !task.isChecked } : task)));
  };

  const removeItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const removeAllItems = () => {
    setTasks([]);
  };

  const addItem = () => {
    if (inputTask.trim() !== '') {
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      setTasks([...tasks, { id: newId, name: inputTask, isChecked: false }]);
      setInputTask('');
    }
  };

 

  const handleAllCheckboxChange = () => {
    setTasks(tasks.map((task) => (task.isChecked ? task : { ...task, isChecked: !task.isChecked })));
  };

  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" options={{ headerShown : false }}>
          {() => (
            <View style={styles.mainBigContainer}>  
            <ScrollView style={styles.mainContainer}>
              <View >
                <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <Cloud style={styles.cloud} />
                      <Cloud style={styles.cloud2} />
                      <Sun style={styles.sun} />
                      <Cloud style={styles.cloud1} />
                      <Image source={require('../../assets/Bubble.png')} style={styles.bubble} resizeMode='contain' />
                     
                      <Kitty style={styles.kitty} />
                      <Text style={styles.modalText}>
                        Hi Boo, how are you feeling right now ?
                      </Text>

                      <View style={styles.moodContainer}>
                        <TouchableOpacity style={styles.mood} onPress={closeModal}>
                          <Image source={require('../../assets/badmoodblur.png')} style={styles.moodImage} resizeMode='contain' />
                          <BadMood />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mood} onPress={closeModal}>
                          <Image source={require('../../assets/midmoodblur.png')} style={styles.moodImage} resizeMode='contain' />
                          <MidMood />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mood} onPress={closeModal}>
                          <Image source={require('../../assets/goodmoodblur.png')} style={styles.moodImage} resizeMode='contain' />
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
                    placeholder='Add task ...'
                  />
                  <TouchableOpacity onPress={addItem} style={styles.addItem}>
                    <Text>+</Text>
                  </TouchableOpacity>
              </View>
               
                <Text style={styles.heading}>Tasks left for today :</Text>
                {tasks
                  .filter((task) => !task.isChecked)
                  .map((task) => (
                    <View key={task.id} style={styles.taskBlock}>
                      <Text style={styles.taskName}>{task.name}</Text>
                      <View style={styles.buttons}>
                        <TouchableOpacity style={{position : 'absolute', top : 12, left : -40}} onPress={() => handleCheckboxChange(task.id)} >
                            <Done />
                          </TouchableOpacity>
                        <TouchableOpacity style={{margin : 10}} onPress={() => removeItem(task.id)} >
                          <Remove />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
         
              </View>
              <Text style={styles.heading} >Done !</Text>
              {tasks
                .filter((task) => task.isChecked)
                .map((task) => (
                  <View key={task.id} style={styles.taskBlock}>
                    <Text style={styles.taskName}>{task.name}</Text>
                  </View>
                ))}
           
            </ScrollView>
           
            <Grass style={styles.grass2} />
            <Kitty style={styles.kitty2} />
            <Image source={require('../../assets/Bubble.png')} style={{position : 'absolute', top : 460, left: 60, resizeMode : 'contain', width : 150}} />
            <Text style={{fontFamily : 'PressStart2P', bottom : 90, left : 90, position : 'absolute'}}>Meow...</Text>
           
            </View>
          )}
        </Drawer.Screen>
        {/* <Drawer.Screen name="Basic tasks" component={Basic} />
        <Drawer.Screen name="On tough days" component={Tough} />
        <Drawer.Screen name="Important tasks" component={Important} />
        <Drawer.Screen name="Organizing tasks" component={Organizing} />
        <Drawer.Screen name="Hobbies" component={Hobbies} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer : {
    backgroundColor : '#ffa3e3',
    minHeight : 800
  },
  mainBigContainer : {
    backgroundColor : '#ffa3e3',
    minHeight : '100%'
    
  },
  addtask : {
    opacity : 0.7,
    backgroundColor : 'white',
    marginTop : 300,
    height : 50, 
    width : '75%', 
    marginLeft: 25, 
    borderColor : '#41004f', 
    borderWidth : 2,
    fontFamily : 'Consolas',
    paddingLeft : 10
    },
  input : {
    flexDirection : 'row'
  },
  addItem : {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'purple', 
    marginTop : 300,
    width : 50, 
    marginLeft : 5,
    borderColor : '#41004f', 
    borderWidth : 2,

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffa3e3',
    padding: 20,
    borderRadius: 0,

  },
  modalText: {
    fontFamily: 'PressStart2P',
    position: 'absolute',
    top: 315,
    width: 190,
    left: 110,
  },
  moodContainer: {
    position: 'absolute',
    bottom: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  mood: {
    margin: 28,
  },
  moodImage: {
    margin : 1,
    width: 120,
    height: 120,
    opacity: 1.5,
    position: 'absolute',
    top: -35,
    left: -27,
  },
  heading: {
    fontFamily : 'PressStart2P',
    marginHorizontal : 15,
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
    color : 'white', 
    textShadowColor : 'purple', 
    textShadowOffset : {width : 2, height: 2}, 
    textShadowRadius : 2
  },
  taskBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf : 'center',
    padding: 2,
    borderBottomColor: 'pink',
    backgroundColor : 'white',
    height : 65, 
    width : '92%', 
    borderColor : '#41004f', 
    borderWidth : 2,
    fontFamily : 'Consolas',
    paddingLeft : 10,
    marginVertical : 5, 
  },
  taskName: {
    fontSize: 18,
    fontFamily : 'Consolas'
  },
  buttons: {
    flexDirection: 'row',
  },
  sun: {
    position: 'absolute',
    top: 30,
  },
  cloud: {
    position: 'absolute',
    top: 80,
    right: -40,
  },
  cloud1: {
    position: 'absolute',
    top: 10,
    left: -120,
  },
  cloud2: {
    position: 'absolute',
    top: -50,
    right: -140,
  },
  kitty: {
    position: 'absolute',
    bottom: 230,
    left: 10,
  },
  kitty2: {
    position : 'absolute',
    bottom : -130, 
    left : -30
  },
  bubble: {
    position: 'absolute',
    top: 40,
    left: 70,
    width : 250

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
  
});
