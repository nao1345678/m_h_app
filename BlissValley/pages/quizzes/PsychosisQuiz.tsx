import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { useEffect, useState } from 'react'
import styles from './quizzes_styles/questionsStyle'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import QuizButton from '../../components/QuizButton'

export default function DepressionQuiz({ navigation }) {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const answers = [{ no: 0 }, { yes: 1 }]

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const jsonData = require('../../ressources/quizzes.json')
        if (jsonData && jsonData.psychosis_test) {
          setQuestions(jsonData.psychosis_test)
        }
      } catch (error) {
        console.error('Erreur lors du chargement du fichier JSON :', error)
      }
    }

    loadProducts()
  }, [])

  const handleAnswer = (value) => {
    const updatedAnswers = [...selectedAnswers]
    updatedAnswers[currentQuestionIndex] = value
    setSelectedAnswers(updatedAnswers)
    console.log(value)
    console.log(updatedAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleFinishQuiz = () => {
    if (currentQuestionIndex == questions.length - 1) {
      navigation.navigate('Psychosis results', {
        selectedAnswers
      })
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.upView}>
          <Text style={styles.title}>Psychosis and schizophrenia Quiz</Text>
        </View>

        <Text style={styles.indicator}>Question {currentQuestionIndex + 1}/21</Text>

        <Text style={styles.generalQuestion}>
          In the past month, have you had the following thoughts, feelings, or experiences? Check “yes” or “no” for each
          item. Do not include experiences that occur only while under the influence of alcohol, drugs or medications
          that were not prescribed to you.
        </Text>

        {questions.length > 0 && (
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{questions[currentQuestionIndex].question}?</Text>
            {answers.map((answer, index) => {
              const key = Object.keys(answer)[0]
              const value = Object.values(answer)[0]
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.answerBox,
                    selectedAnswers[currentQuestionIndex] === value && styles.selectedAnswerBox
                  ]}
                  onPress={() => handleAnswer(value)}
                >
                  <Text style={styles.answerText}>{key}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        )}
        {currentQuestionIndex != 20 ? (
          <View style={styles.TouchableOpacityContainer}>
            <TouchableOpacity
              style={styles.textContainer}
              onPress={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <QuizButton style={styles.quiz} />
              <Text style={styles.TouchableOpacityText}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.textContainer}
              onPress={handleNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              <QuizButton style={styles.quiz} />
              <Text style={styles.TouchableOpacityText}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.TouchableOpacityContainer}>
            <TouchableOpacity
              style={styles.textContainer}
              onPress={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <QuizButton style={styles.quiz} />
              <Text style={styles.TouchableOpacityText}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.textContainer}
              onPress={handleFinishQuiz}
              disabled={currentQuestionIndex === 0}
            >
              <QuizButton style={styles.quiz} />
              <Text style={styles.TouchableOpacityText}>Finish</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </GestureHandlerRootView>
  )
}
