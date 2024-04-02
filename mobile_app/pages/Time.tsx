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

  const [intervalId, setIntervalId] = useState<number | null>()
  const [customTime, setCustomTime] = useState('')
  const [timerRunning, setTimerRunning] = useState<boolean>(false)
  const [pausedTime, setPausedTime] = useState<number>(0)

  function startTimer(minutes: number) {
    let timeLeft: number = minutes * 60

    const id = setInterval(() => {
      timeLeft--
      setTimerState({ minutes: Math.floor(timeLeft / 60), seconds: timeLeft % 60 })

      if (timeLeft <= 0) {
        clearInterval(id)
        setTimerRunning(false)
      }
    }, 1000)

    setIntervalId(id)
    setTimerRunning(true)
  }

  function pauseTimer() {
    if (intervalId !== null) {
      clearInterval(intervalId)
      setPausedTime(timerState.minutes + timerState.seconds / 60)
      setIntervalId(null)
      setTimerRunning(true)
    }
  }

  function resumeTimer() {
    startTimer(pausedTime)
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

  return (
    <View style={styles.container}>
      <Text>
        {timerState.minutes} minutes {timerState.seconds} seconds remaining
      </Text>
      <View style={styles.buttonContainer}>
        {!timerRunning && (
          <>
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
          </>
        )}
        {!timerRunning && (
          <TextInput
            onChangeText={setCustomTime}
            value={customTime}
            placeholder="Enter time (minutes)"
            keyboardType="numeric"
            style={styles.input}
          />
        )}
        {timerRunning && (
          <View>
            {pausedTime > 0 && (
              <TouchableOpacity onPress={resumeTimer} style={styles.button}>
                <Text style={styles.buttonText}>Resume</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={pauseTimer} style={styles.button}>
              <Text style={styles.buttonText}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={resetTimer} style={styles.button}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        )}
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
