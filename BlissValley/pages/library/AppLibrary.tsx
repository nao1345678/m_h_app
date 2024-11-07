import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import JournalLogo from '../../components/JournalLogo'
import TimerLogo from '../../components/TimerLogo'
import styles from "./AppLibraryStyle";

export default function AppLibrary({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/pngs/library_bg.png')} resizeMode="cover" style={styles.image}>
        <View
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        ></View>
        <View style={styles.appRow1}>
          <View style={styles.appContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Journal')}>
            <Image source={require("../../assets/pngs/news.png")} resizeMode='contain' style={{width : 100, height : 100}}/>
              <Text style={styles.appName}>Journal</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.appContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Timers')}>
            <Image source={require("../../assets/pngs/horloge.png")} resizeMode='contain' style={{width : 100, height : 100}}/>
              <Text style={styles.appName}>Timers</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.appContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Sleep following')}>
              <Image source={require("../../assets/pngs/moon.png")} resizeMode='contain' style={{width : 100, height : 100}}/>
              <Text style={styles.appName}>Sleep Following</Text>
            </TouchableOpacity>
          </View>
        </View>

      <View style={styles.appRow1}>

      <View style={styles.appContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Quiz home')}>
          <Image source={require("../../assets/pngs/questionmark.png")} resizeMode='contain' style={{width : 100, height : 100}}/>
            <Text style={styles.appName}>Quiz Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.appContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Breathing exercise')}>
          <Image source={require("../../assets/pngs/bubbles.png")} resizeMode='contain' style={{width : 100, height : 100}}/>
            <Text style={styles.appName}>Breathing Exercise</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.appContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Lazy Cooker')}>
          <Image source={require("../../assets/pngs/pizza.png")} resizeMode='contain' style={{width : 100, height : 100}}/>
            <Text style={styles.appName}>Lazy cooker</Text>
          </TouchableOpacity>
        </View>

      </View>
       
       <View style={styles.appRow1}>
       <View style={styles.appContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('References')}>
          <Image source={require("../../assets/pngs/books.png")} resizeMode='contain' style={{width : 100, height : 100}}/>
            <Text style={styles.appName}>References</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.appContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Sobriety counter')}>
          <Image source={require("../../assets/pngs/brain.png")} resizeMode='contain' style={{width : 100, height : 100}}/>
            <Text style={styles.appName}>Sobriety counter</Text>
          </TouchableOpacity>
        </View>
       </View>

       
      </ImageBackground>
    </View>
  )
}

