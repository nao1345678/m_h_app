import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import StartTime from "../../components/StartTime";
import TimerButton from "../../components/TimerButton";
import Chick from "../../components/Chick";
import { position } from "native-base/lib/typescript/theme/styled-system";

interface TimerState {
  minutes: number;
  seconds: number;
}

export default function Timer() {
  const [timerState, setTimerState] = useState<TimerState>({
    minutes: 0,
    seconds: 0,
  });

  const [intervalId, setIntervalId] = useState<number | null>();
  const [customTime, setCustomTime] = useState("");
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [pausedTime, setPausedTime] = useState<number>(0);

  function startTimer(minutes: number) {
    let timeLeft: number = minutes * 60;

    const id = setInterval(() => {
      timeLeft--;
      setTimerState({
        minutes: Math.floor(timeLeft / 60),
        seconds: timeLeft % 60,
      });

      if (timeLeft <= 0) {
        clearInterval(id);
        setTimerRunning(false);
      }
    }, 1000);

    setIntervalId(id);
    setTimerRunning(true);
  }

  function pauseTimer() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setPausedTime(timerState.minutes + timerState.seconds / 60);
      setIntervalId(null);
      setTimerRunning(true);
    }
  }

  function resumeTimer() {
    startTimer(pausedTime);
  }

  function resetTimer() {
    setTimerState({ minutes: 0, seconds: 0 });
    clearInterval(intervalId);
    setIntervalId(null);
    setTimerRunning(false);
  }

  function handleCustomTimeInput() {
    if (customTime !== "") {
      const minutes = parseInt(customTime);
      if (!isNaN(minutes)) {
        startTimer(minutes);
      }
    }
  }

  return (
    <View style={styles.container}>

      <Chick 
      style={{
        position : 'absolute', 
        top : 200, 
        left : 95
      }} />
      <Image 
        source={require('../../assets/pngs/Bubble.png')} 
        resizeMode="contain"
        style={{
          width : 150, 
          position : 'absolute', 
          top : -130, 
          left : 55
        }}
        />
      <Text 
       style={{
        fontFamily : 'PressStart2P',
        fontSize : 13, 
        color : 'black',
        position : 'absolute',
        width : 130, 
        top : 155, 
        left : 75
      }}
      >Take your time.</Text>
      {timerRunning ? (
        <Text
          style={{
            fontFamily: "Consolas",
            letterSpacing: -0.5,
            color: "white",
          }}
        >
          {" "}
          {timerState.minutes} minutes {timerState.seconds} seconds remaining{" "}
        </Text>
      ) : (
        <Text> </Text>
      )}

      <View style={styles.buttonContainer}>
        {!timerRunning && (
          <>
            <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent : 'center', alignContent : 'center', marginBottom : 70}}>
              <TouchableOpacity
                onPress={() => startTimer(5)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>5 Minutes Timer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => startTimer(10)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>10 Minutes Timer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => startTimer(30)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>30 Minutes Timer</Text>
              </TouchableOpacity>

              {!timerRunning && (
                <TextInput
                  onChangeText={setCustomTime}
                  value={customTime}
                  placeholder="Enter time (minutes)"
                  keyboardType="numeric"
                  style={styles.input}
                />
              )}
            </View>

            <TouchableOpacity
              onPress={handleCustomTimeInput}
              style={styles.startButton}
            >
              <StartTime />
            </TouchableOpacity>
          </>
        )}

        {timerRunning && (
          <View>
            {pausedTime > 0 && (
              <TouchableOpacity onPress={resumeTimer}>
                <TimerButton />
                <Text style={styles.buttonTextPink}>Resume</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={pauseTimer}>
              <TimerButton />
              <Text style={styles.buttonTextPink}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={resetTimer}>
              <TimerButton />
              <Text style={styles.buttonTextPink}>Reset</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c982ff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    marginTop: 10,
  },
  button: {
    backgroundColor: "white",
    width: 150,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    padding: 15,
    margin: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 14,
    letterSpacing: -0.2,
    textAlign: "center",
    fontFamily: "Consolas",
  },
  input: {
    backgroundColor: "white",
    width: 150,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    margin: 20,
    marginHorizontal: 5,
  },
  startButton: {
    justifyContent : 'center', 
    alignSelf : 'center', 
    position : 'absolute', 
    bottom : 100
  },
  buttonTextPink: {
    position: "relative",
    color: "white",
    fontFamily: "PressStart2P",
    bottom: 30,
    right: -90,
  },
});
