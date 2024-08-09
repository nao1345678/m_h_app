import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import SaveButton from '../../components/SaveJournal'
import SaveSleep from '../../components/SaveButtonSleep'
import ModifySleep from '../../components/ModifySleep'
import styles from './SleepFollowingStyle'
import Flower4 from '../../components/Flower4'
import Flower3 from '../../components/Flower3'
import Flower2 from '../../components/Flower2'
import Flower1 from '../../components/Flower1'
import Bug from '../../components/Bug'

export default function SleepFollowing() {
  const currentDate = new Date()

  const [data, setData] = useState('')
  const [listData, setListData] = useState([])
  const [dataSaved, setdataSaved] = useState<boolean>(false)

  useEffect(() => {
    console.log(listData)
  }, [listData])

  function saveButton() {
    if (data.trim() !== '' && parseInt(data) >= 0 && parseInt(data) <= 24) {
      setListData((prevListData) => [...prevListData, parseInt(data)])
      setData('')
      setdataSaved(true)
    } else if (!(parseInt(data) >= 0 && parseInt(data) <= 24)) {
      console.log('Data must be an integer between 0 and 24')
    }
  }

  function modifyEntry() {
    listData.pop()
    console.log(listData)
    setdataSaved(false)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/pngs/GrassBackground.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <Flower1 style={styles.flower1} />
        <Flower3 style={styles.flower2} />
        <Flower1 style={styles.flower3} />

        {dataSaved ? (
          <View>
            <TouchableOpacity onPress={modifyEntry}>
              <ModifySleep />
              <Text
                style={{
                  position: 'relative',
                  bottom: 30,
                  left: 5,
                  fontFamily: 'PressStart2P',
                  fontSize: 11,
                  width: 200,
                  justifyContent: 'center',
                  alignSelf: 'center'
                }}
              >
                Modify today's entry
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Image source={require('../../assets/pngs/PinkBubble.png')} resizeMode="contain" style={styles.bubble} />
            <Text style={styles.question}>How long did you sleep for last night ?</Text>
            <TextInput
              value={data}
              style={styles.input}
              onChangeText={setData}
              multiline={true}
              textAlignVertical="top"
              placeholder="Hours of sleep ..."
              keyboardType="numeric"
            />

            <TouchableOpacity onPress={saveButton} style={styles.saveButton}>
              <SaveSleep />
            </TouchableOpacity>

            <Bug style={styles.bug} />
          </View>
        )}
        <Flower4 style={styles.flower4} />
        <Flower2 style={styles.flower5} />
        <Flower4 style={styles.flower6} />
      </ImageBackground>
    </View>
  )
}
