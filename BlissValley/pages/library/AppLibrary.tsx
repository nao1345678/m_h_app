import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import JournalLogo from '../../components/JournalLogo'
import TimerLogo from '../../components/TimerLogo'
import styles from "./AppLibraryStyle";

export default function AppLibrary({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/pngs/library.png')} resizeMode="cover" style={styles.image}>
        <View
          style={{ width: '100%', height: '100%', backgroundColor: 'rgba(61, 0, 62, 0.4)', position: 'absolute' }}
        ></View>
        <View style={styles.appRow1}>
          <View style={styles.appContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Journal')}>
              <JournalLogo />
              <Text style={styles.appName}>Journal</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.appContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Timers')}>
              <TimerLogo />
              <Text style={styles.appName}>Timers</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.appContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Sleep following')}>
              <JournalLogo />
              <Text style={styles.appName}>Sleep Following</Text>
            </TouchableOpacity>
          </View>
        </View>

      <View style={styles.appRow1}>

      <View style={styles.appContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Quiz home')}>
            <TimerLogo />
            <Text style={styles.appName}>Quiz Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.appContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Breathing exercise')}>
            <TimerLogo />
            <Text style={styles.appName}>Breathing Exercise</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.appContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Lazy Cooker')}>
            <TimerLogo />
            <Text style={styles.appName}>Lazy cooker</Text>
          </TouchableOpacity>
        </View>

      </View>
       

        <View style={styles.appContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('References')}>
            <TimerLogo />
            <Text style={styles.appName}>References</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

