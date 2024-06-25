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
  appName: {},
  appContainer: {},
});
