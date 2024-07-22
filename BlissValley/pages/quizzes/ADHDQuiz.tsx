import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useEffect, useState } from "react";
import styles from "./quizzes_styles/questionsStyle";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import QuizButton from "../../components/QuizButton";

export default function ADHDQuiz({navigation}) {
 
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const answers = [
    { "never": 0 }, 
    { "rarely": 1 },
    { "sometimes": 2 },
    { "often": 3 },
    { "all the time" : 4 }
  ];
  

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const jsonData = require("../../ressources/quizzes.json");
        if (jsonData && jsonData.adhd_test) {
          setQuestions(jsonData.adhd_test);
        }
      } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON :", error);
      }
    };

    loadProducts();
  }, []);

  const handleAnswer = (value) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = value;
    setSelectedAnswers(updatedAnswers);
    console.log(value)
    console.log(updatedAnswers)
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishQuiz = () => {
    if (currentQuestionIndex == questions.length - 1) {
      navigation.navigate("ADHD results", {selectedAnswers : selectedAnswers} );
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.upView} >

        <Text style={styles.title}>ADHD Quiz</Text>
        <Text style={styles.indicator} >Question {currentQuestionIndex + 1}/18</Text>

        </View>
        
        <Text style={styles.generalQuestion}>
        As you answer each question, select the button that best describes how you have felt and conducted yourself over the past 6 months.
        </Text>
      
        {questions.length > 0 && (
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              {questions[currentQuestionIndex].question}
            </Text>
            {answers.map((answer, index) => {
              const key = Object.keys(answer)[0];
              const value = Object.values(answer)[0];
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.answerBox,
                    selectedAnswers[currentQuestionIndex] === value &&
                      styles.selectedAnswerBox,
                  ]}
                  onPress={() => handleAnswer(value)}
                >
                  <Text style={styles.answerText}>{key}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
          {currentQuestionIndex !=17 ? 
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
       :
      
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
        <Text style={styles.TouchableOpacityText} >Finish</Text>
        
        </TouchableOpacity>

      </View> 
        }
       
      </View>
    </GestureHandlerRootView>
  );
}

;
