import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native'
import LineToDo from '../../components/LineToDo'
import { ImageBackground } from 'react-native'
import Doggo from '../../components/Doggo'
import { position } from 'native-base/lib/typescript/theme/styled-system'

export default function Journal() {
  const currentDate = new Date()

  const [data, setData] = useState('')
  const [listData, setListData] = useState([])

  useEffect(() => {
    console.log(listData)
  }, [listData])

  function saveButton() {
    if (data.trim() !== '') {
      setListData((prevListData) => [...prevListData, data])
      setData('')
    }
  }
  const items = Array.from({ length: 20 }, (_, i) => i + 1);


  return (
    <KeyboardAvoidingView 
      behavior='height'
      style={styles.container}
    >
        <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/pngs/Journal.png')} 
        resizeMode='cover' 
        style={styles.image}>

          <Text>Rumble bubble</Text>
                <Text
                  style={{
                    fontFamily : 'PressStart2P', 
                    color : '#ff638a',
                    fontSize : 15, 
                    position : 'absolute', 
                    top : 70, 
                    marginLeft : 47
                  }}
                >{currentDate.toDateString()}</Text>
                <ScrollView>
                  <TextInput
                    style={styles.input}
                    value={data}
                    onChangeText={setData}
                    multiline={true}
                    textAlignVertical='top'
                    placeholder="Write about your thoughts here..."
                  />
                </ScrollView>
                <TouchableOpacity onPress={saveButton} style={styles.saveButton}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
                <Image 
                  source={require('../../assets/pngs/BubbleDoggo.png')} 
                  resizeMode='contain'
                  style={{
                    width : 120,
                    position : 'absolute', 
                    top : 450, 
                    left : 30
                  }}
                  />
                <Text
                  style={{
                    fontFamily : 'PressStart2P',
                    position : 'absolute', 
                    top : 450, 
                    left : 30
                  }}
                >Waf</Text>
                <Doggo style={{
                  position : 'absolute', 
                  bottom : 0
                }} />
      </ImageBackground>
    </View>
    </KeyboardAvoidingView>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    width: "100%",
  },
  input: {
    marginLeft : 40,
    marginTop : 76,
    width: 330,
    height: 670,
    padding: 10,
    textAlignVertical: 'top',
    lineHeight : 54, 
    fontFamily : 'Consolas', 
    fontSize : 16, 
    letterSpacing : -0.7
  },
  saveButton: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width : 60
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
