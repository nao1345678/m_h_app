import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

interface TimerState {
  minutes: number
  seconds: number
}

export default function Timer() {
  const [timerState, setTimerState] = useState<TimerState>({
    minutes: 0,
    seconds: 0
  })

  const [customTime, setCustomTime] = useState('')

  function startTimer(minutes: number) {
    let timeLeft: number = minutes * 60

    const intervalId = setInterval(() => {
      timeLeft--
      setTimerState({ minutes: Math.floor(timeLeft / 60), seconds: timeLeft % 60 })

      if (timeLeft <= 0) {
        clearInterval(intervalId)
      }
    }, 1000)
  }

  function handleCustomTimeInput() {
    if (customTime !== '') {
      const minutes = parseInt(customTime)
      if (!isNaN(minutes)) {
        startTimer(minutes)
      }
    }
  }

  // arrêt  du timer
  // pause du timer
  // correction des bugs d'affichage

  return (
    <View style={styles.container}>
      <Text>
        {timerState.minutes} minutes {timerState.seconds} seconds remaining
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => startTimer(1)} style={styles.button}>
          <Text style={styles.buttonText}>1 Minute Timer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => startTimer(5)} style={styles.button}>
          <Text style={styles.buttonText}>5 Minutes Timer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => startTimer(10)} style={styles.button}>
          <Text style={styles.buttonText}>10 Minutes Timer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => startTimer(30)} style={styles.button}>
          <Text style={styles.buttonText}>30 Minutes Timer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCustomTimeInput} style={styles.button}>
          <Text style={styles.buttonText}>Start Custom Timer</Text>
        </TouchableOpacity>
        <TextInput
          onChangeText={setCustomTime}
          value={customTime}
          placeholder="Enter time (minutes)"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 10
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    marginHorizontal: 5,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'pink',
    width: 300,
    height: 50,
    fontSize: 20,
    padding: 15,
    marginBottom: 10
  }
})
