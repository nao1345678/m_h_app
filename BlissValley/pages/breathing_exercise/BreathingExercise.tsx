import React, { useState } from 'react'
import {Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import StartTime from '../../components/StartTime'
import PurpleButton from '../../components/PurpleButton'
import Chick from '../../components/Chick'
import styles from './BreathingExerciseStyle'
import Piou from '../../components/Piou'
import Previous from '../../components/Previous'


interface TimerState {
  minutes: number
  seconds: number
}

export default function BreathingExercise() {
  const [timerState, setTimerState] = useState<TimerState>({
    minutes: 0,
    seconds: 0
  })

  const [intervalId, setIntervalId] = useState<number | null>()
  const [customTime, setCustomTime] = useState('')
  const [timerRunning, setTimerRunning] = useState<boolean>(false)
  const [pausedTime, setPausedTime] = useState<number>(0)
  const [calmChosen, setCalmChosen] = useState(false)
  const [sleepChosen, setSleepChosen] = useState(false)


  function startTimer(minutes: number) {
    let timeLeft: number = minutes * 60

    const id = setInterval(() => {
      timeLeft--
      setTimerState({
        minutes: Math.floor(timeLeft / 60),
        seconds: timeLeft % 60
      })

      if (timeLeft <= 0) {
        clearInterval(id)
        setTimerRunning(false)
      }
    }, 1000)

    setIntervalId(id)
    setTimerRunning(true)
  }

  function resetTimer() {
    setTimerState({ minutes: 0, seconds: 0 })
    clearInterval(intervalId)
    setIntervalId(null)
    setTimerRunning(false)
  }

  function handleCustomTimeInput() {
    if (customTime !== '') {
      const minutes = parseInt(customTime)
      if (!isNaN(minutes)) {
        startTimer(minutes)
      }
    }
  }

  function handleCalmOption() {
    setCalmChosen(true)
  }

  function handleSleepOption() {
    setSleepChosen(true)
  }

  function handlePrevious() {
    setCalmChosen(false)
    setSleepChosen(false)
  }

  return (
    <View style={styles.container}>
      <Piou
        style={{
          position: 'absolute',
          top: 190,
          left: 65
        }}
      />
      <Image
        source={require('../../assets/pngs/Bubble.png')}
        resizeMode="contain"
        style={{
          width: 160,
          position: 'absolute',
          top: -130,
          left: 35
        }}
      />
      <Text
        style={{
          fontFamily: 'PressStart2P',
          fontSize: 13,
          color: 'black',
          position: 'absolute',
          width: 130,
          top: 155,
          left: 55
        }}
      >
        Take a deep breath.
      </Text>
      {timerRunning ? (
        <Text
          style={{
            fontFamily: 'Consolas',
            letterSpacing: -0.5,
            color: '#B000EB', 
            position : 'relative', 
            zIndex : 2, 
            top : 220
          }}
        >
          {' '}
          {timerState.minutes} minutes {timerState.seconds} seconds remaining{' '}
        </Text>
      ) : (
        <Text> </Text>
      )}

      <View style={styles.buttonContainer}>

      {!timerRunning && (!calmChosen && !sleepChosen) && (
          <>
            <View
              style={{
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                marginBottom: 70
              }}
            >

              <Text
                style={{
                fontFamily: 'PressStart2P',
                fontSize: 13,
                color: 'white',
                textShadowColor: '#8a00b0',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1, 
                margin : 10
              }}
              >Choose an option :</Text>
              <TouchableOpacity onPress={() => handleCalmOption()} style={styles.buttonOption}>
                <Text style={styles.buttonTextOption}>Get calm and focus</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSleepOption()} style={styles.buttonOption}>
                <Text style={styles.buttonTextOption}>Reduce anxiety and fall asleep</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {!timerRunning && calmChosen && (
          <>
            <View
              style={{
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                marginBottom: 70
              }}
            >
              <TouchableOpacity onPress={() => startTimer(2)} style={styles.button}>
                <Text style={styles.buttonText}>2 Minutes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => startTimer(5)} style={styles.button}>
                <Text style={styles.buttonText}>5 Minutes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => startTimer(10)} style={styles.button}>
                <Text style={styles.buttonText}>10 Minutes</Text>
              </TouchableOpacity>

              {!timerRunning && (
                <TextInput
                  onChangeText={setCustomTime}
                  value={customTime}
                  placeholder="Enter time (minutes)"
                  keyboardType="numeric"
                  style={styles.input}
                />
              )}
            </View>

            <TouchableOpacity onPress={handleCustomTimeInput} style={styles.startButton}>
              <Text style={{position : 'absolute', bottom : 185, alignSelf : 'center', zIndex: 2, fontFamily: 'PressStart2P', color : 'white', fontSize : 12 }}>Start custom time</Text>
              <PurpleButton style={{position : 'absolute', bottom : 170, alignSelf : 'center'}}/>
            </TouchableOpacity>

            <Previous style={{position : 'absolute', bottom : 170, alignSelf : 'center'}} onPress={handlePrevious}/>
          </>
        )}


      {!timerRunning && sleepChosen && (
          <>
            <View
              style={{
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                marginBottom: 70
              }}
            >
              <TouchableOpacity onPress={() => startTimer(1)} style={styles.button}>
                <Text style={styles.buttonText}>1 Minute</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => startTimer(2)} style={styles.button}>
                <Text style={styles.buttonText}>2 Minutes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => startTimer(3)} style={styles.button}>
                <Text style={styles.buttonText}>3 Minutes</Text>
              </TouchableOpacity>

              <Previous style={{position : 'absolute', bottom : 170, alignSelf : 'center'}} onPress={handlePrevious}/>

              <Text style={styles.disclaimer}>Doing this exercise for too long may cause dizziness.</Text>

            </View>
          </>
        )}

        {timerRunning && calmChosen && (
          <View>

          <Image source={require("../../assets/pngs/4-4-4-4.gif")} resizeMode='contain' style={{width : 300, height : 300}}/>
          <View>
           
            <TouchableOpacity onPress={resetTimer}>
              <PurpleButton style={styles.buttonPink}/>
              <Text style={styles.buttonTextPink}>Reset</Text>
            </TouchableOpacity>
          </View>

          </View>
           
        )}


        {timerRunning && sleepChosen && (
          <View>

          <Image source={require("../../assets/pngs/4-7-8.gif")} resizeMode='contain' style={{width : 300, height : 300}}/>
          <View>
           
            <TouchableOpacity onPress={resetTimer}>
              <PurpleButton style={styles.buttonPink}/>
              <Text style={styles.buttonTextPink}>Reset</Text>
            </TouchableOpacity>
          </View>

          </View>
           
        )}
      </View>
    </View>
  )
}

