import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import styles from './quizzes_styles/questionsStyle'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import QuizButton from '../../components/QuizButton'

export default function AnxietyQuiz({ navigation }) {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const answers = [
    { 'not at all': 0 },
    { 'several days': 1 },
    { 'more than half of the days': 2 },
    { 'basically everyday': 3 }
  ]

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const jsonData = require('../../ressources/quizzes.json')
        if (jsonData && jsonData.anxiety_test) {
          setQuestions(jsonData.anxiety_test)
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
      navigation.navigate('Anxiety results', { selectedAnswers })
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.upView}>
          <Text style={styles.title}>Anxiety Quiz</Text>
          <Text style={styles.indicator}>Question {currentQuestionIndex + 1}/7</Text>
        </View>

        <Text style={styles.generalQuestion}>
          Over the last 2 weeks, how often have you been bothered by the following problems?
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
        {currentQuestionIndex != 6 ? (
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
