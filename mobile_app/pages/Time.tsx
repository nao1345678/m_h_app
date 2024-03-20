import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

interface TimerState {
  minutes: number
  seconds: number
}

export default function Timer() {
  const [timerState, setTimerState] = useState<TimerState>({
    minutes: 0,
    seconds: 0
  })

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
    fontWeight: 'bold'
  }
})
