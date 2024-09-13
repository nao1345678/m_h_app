import { Text, View, Image, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import styles from "./BreathingExerciseStyle";

export default function BreathingExercise() {
  const [ExerciseState, setExerciseState] = useState<ExerciseState>({
    minutes: 0,
    seconds: 0
  })

  const [intervalId, setIntervalId] = useState<number | null>()
  const [customTime, setCustomTime] = useState('')
  const [ExerciseRunning, setExerciseRunning] = useState<boolean>(false)

  function startBoxBreathingExercise(minutes: number) {
    let timeLeft: number = minutes * 60
    const [keywords, setKeywords] = ['Breathe in', 'Hold it', 'Breathe out', 'Hold it']
    let keywordIndex: number = 0

    const changeKeyword = () => {
      setKeywords(keywords[keywordIndex])
      keywordIndex = (keywordIndex + 1) % keywords.length
    }

    const keywordIntervalId = setInterval(changeKeyword, 4000);

    const id = setInterval(() => {
      timeLeft--
      setExerciseState({
        minutes: Math.floor(timeLeft / 60),
        seconds: timeLeft % 60
      })

      if (timeLeft <= 0) {
        clearInterval(id)
        clearInterval(keywordIntervalId)
        setExerciseRunning(false)
      }
    }, 1000)

    setIntervalId(id)
    setExerciseRunning(true)
    changeKeyword() // Initialise avec le premier mot-clé
  }

  function resetExercise() {
    setExerciseState({ minutes: 0, seconds: 0 })
    clearInterval(intervalId)
    setIntervalId(null)
    setExerciseRunning(false)
  }

  function handleCustomTimeInput() {
    if (customTime !== '') {
      const minutes = parseInt(customTime)
      if (!isNaN(minutes)) {
        startBoxBreathingExercise(minutes)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>Start timer</Text>
      <TouchableOpacity onPress={startBoxBreathingExercise}>Start</TouchableOpacity>
      <Text>{ExerciseState}</Text>
      <Text>{keyword}</Text>
    </View>
  )
}


