import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import JournalLogo from "../../components/JournalLogo";
import TimerLogo from "../../components/TimerLogo";

export default function AppLibrary({ navigation }) {
  return (
    <View style={styles.container}>

      <ImageBackground
        source={require("../../assets/pngs/library.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ width : '100%', height : '100%', backgroundColor : 'rgba(61, 0, 62, 0.4)', position : 'absolute'}}></View>
        <View style={styles.appRow1}>

          <View style={styles.appContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Journal")}>
              <JournalLogo />
              <Text style={styles.appName}>Journal</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.appContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Timers")}>
              <TimerLogo />
              <Text style={styles.appName}>Timers</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.appContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Sleep following")}>
              <JournalLogo />
              <Text style={styles.appName}>Sleep Following</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.appContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Quiz home")}>
            <TimerLogo />
            <Text style={styles.appName}>Quiz Home</Text>
          </TouchableOpacity>
        </View>



      </ImageBackground>

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
  image: {
    flex: 1,
    width: "100%",
  },
  appName: {alignSelf: 'center', justifyContent: "center"},
  appContainer: {},
  appRow1 : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin : 30
  }
});
