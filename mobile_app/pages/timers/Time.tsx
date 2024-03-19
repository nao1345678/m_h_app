import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface TimerState {
  minutes: number
  seconds: number
}

export default function Timer() {
  const [timerState, setTimerState] = useState<TimerState>({
    minutes: 1,
    seconds: 0
  })

  return (
    <View style={styles.container}>
      <Text>Time</Text>
      <Text>{`${timerState.minutes}:${timerState.seconds < 10 ? `0${timerState.seconds}` : timerState.seconds}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
