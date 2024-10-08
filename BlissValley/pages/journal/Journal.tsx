import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Image
} from 'react-native'
import Doggo from '../../components/Doggo'
import SaveButton from '../../components/SaveJournal'
import styles from "./JournalStyle";

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
    } else if (data.trim() == '') {
      console.log("Error : journal's entry can't be empty")
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ImageBackground source={require('../../assets/pngs/Journal.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.innerContainer}>
          <Text
            style={{
              fontFamily: 'PressStart2P',
              color: 'red',
              fontSize: 12,
              position: 'absolute',
              top: 75,
              marginLeft: 47,
              letterSpacing: -0.5
            }}
          >
            Rumble bubble - {currentDate.toDateString()}
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={data}
              onChangeText={setData}
              multiline={true}
              textAlignVertical="top"
              placeholder="Write about your thoughts here..."
            />
          </View>
          <TouchableOpacity onPress={saveButton} style={styles.saveButton}>
            <SaveButton />
          </TouchableOpacity>
          <Image
            source={require('../../assets/pngs/BubbleDoggo.png')}
            resizeMode="contain"
            style={{
              width: 120,
              position: 'absolute',
              top: 450,
              left: 30
            }}
          />
          <Text
            style={{
              fontFamily: 'PressStart2P',
              position: 'absolute',
              bottom: 100,
              left: 60
            }}
          >
            Waf...
          </Text>
          <Doggo
            style={{
              position: 'absolute',
              bottom: 0
            }}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}


