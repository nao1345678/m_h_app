import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import styles from "./quizzes_styles/resultStyle";
import YellowFlower from "../../components/YellowFlower";
import PinkFlower from "../../components/PinkFlower";

export default function DepressionResults({ route, navigation }) {
  const { selectedAnswers } = route.params;
  const [score, setScore] = useState(0);
  const [resultPhrase, setResultPhrase] = useState("");
  const [resultDescription, setResultDescription] = useState("");

  useEffect(() => {
    let sum = selectedAnswers.reduce(
      (accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      },
      0
    );

    console.log(sum);

    sum = sum / 10;
    sum = (sum * 10) / 3;
    let final = sum.toFixed(1);
    setScore(final);

    handleResult(score);
  }, [selectedAnswers]);

  const handleResult = (score: number) => {
    if (score < 2.5) {
      setResultPhrase("little to no depression symptoms");
    } else if (score >= 2.5 && score < 5) {
      setResultPhrase("mild depression symptoms");
    } else if (score >= 5 && score < 7.5) {
      setResultPhrase("moderately severe depression symptoms");
    } else if (score >= 7.5) {
      setResultPhrase("severe depression symptoms");
    }
  };



  return (
    <View style={styles.container}>
      <Text>Your score is :</Text>
      <Text>{score}/10</Text>
      <Text>According to your score, you have </Text>
      <Text>{resultPhrase}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz home")}>
        <Text>Back to home </Text>
      </TouchableOpacity>

      <Text style={styles.disclaimer}>Quizzes can’t replace a real diagnosis. It’s always better to see a therapist.</Text>
        <PinkFlower 
            style={{
                position : 'absolute',
                bottom: 0, 
                left : 0
            }}
        />
        <YellowFlower 
            style={{
                position : 'absolute',
                bottom: 0, 
                right : 0
            }}
        />

    </View>
  );
}

