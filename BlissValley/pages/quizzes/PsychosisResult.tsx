import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import styles from './quizzes_styles/resultStyle'
import { Float } from 'react-native/Libraries/Types/CodegenTypes'
import YellowFlower from '../../components/YellowFlower'
import PinkFlower from '../../components/PinkFlower'
import YellowButterfly from '../../components/YellowButterfly'
import BlackButterfly from '../../components/BlackButterfly'
import WhiteCloud from '../../components/WhiteCloud'
import QuizButton from '../../components/QuizButton'

export default function PsychosisResults({ route, navigation }) {
  const { selectedAnswers } = route.params
  const [score, setScore] = useState(0)
  const [resultPhrase, setResultPhrase] = useState('')

  const handleResult = (score: Float) => {
    if (score < 2.5) {
      setResultPhrase('little to no risk for psychosis')
    } else if (score >= 2.5 && score < 5) {
      setResultPhrase('possible risk for psychosis')
    } else if (score >= 5 && score < 7.5) {
      setResultPhrase('moderately high risk for psychosis')
    } else if (score >= 7.5) {
      setResultPhrase('severe risk for psychosis')
    } else if (score === 0.0) {
      setResultPhrase('no risk of psychosis')
    }
  }

  useEffect(() => {
    let sum = selectedAnswers.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)

    sum = sum / 21
    sum = (sum * 10) / 1
    const final = parseFloat(sum.toFixed(1))
    setScore(final)
    handleResult(final)
  }, [selectedAnswers])

  return (
    <View style={styles.container}>
      <WhiteCloud
        style={{
          position: 'absolute',
          top: 40,
          left: -50
        }}
      />

      <YellowButterfly
        style={{
          position: 'absolute',
          top: 100,
          right: 50
        }}
      />
      <WhiteCloud
        style={{
          position: 'absolute',
          top: 200,
          right: -60
        }}
      />

      <BlackButterfly
        style={{
          position: 'absolute',
          top: 240,
          left: 80
        }}
      />

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your score is :</Text>
        <Text style={styles.score}>{score}/10</Text>
      </View>

      <View style={styles.explanation}>
        <Text style={styles.resultText}>According to your score, you may have</Text>
        <Text style={styles.result}>{resultPhrase}</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Quiz home')} style={styles.homeButton}>
        <QuizButton style={{ position: 'absolute', alignSelf: 'center' }} />
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>

      <Text style={styles.disclaimer}>
        Quizzes can’t replace a real diagnosis. It’s always better to see a therapist.
      </Text>
      <PinkFlower
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0
        }}
      />
      <YellowFlower
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0
        }}
      />
    </View>
  )
}
