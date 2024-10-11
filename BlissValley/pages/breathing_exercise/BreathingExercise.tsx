import { Text, View, Image, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import styles from "./BreathingExerciseStyle";


interface ExerciseState {
  minutes: number
  seconds: number
}

export default function BreathingExercise() {
 
  

  return (
    <View style={styles.container}>
      <Text>Start timer</Text>
      
    
    </View>
  )
}


