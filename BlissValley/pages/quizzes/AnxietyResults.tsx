import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function AnxietyResults({ route, navigation }) {
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

    sum = sum / 7;
    sum = (sum * 10) / 3;
    let final = sum.toFixed(1);
    setScore(final);

    handleResult(score);
  }, [selectedAnswers]);

  const handleResult = (score: number) => {
    if (score < 2.5) {
      setResultPhrase("no or little anxiety");
    } else if (score >= 2.5 && score < 5) {
      setResultPhrase("mild anxiety");
    } else if (score >= 5 && score < 7.5) {
      setResultPhrase("moderately severe anxiety");
    } else if (score >= 7.5) {
      setResultPhrase("severe anxiety");
    }
  };

  console.log(resultPhrase);

  return (
    <View style={styles.container}>
      <Text>Your score is :</Text>
      <Text>{score}/10</Text>
      <Text>According to your score, you may have </Text>
      <Text>{resultPhrase}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz home")}>
        <Text>Back to home </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
