import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import TimerLogo from '../../components/TimerLogo'
import WhiteCloud from '../../components/WhiteCloud'
import Ladybug from '../../components/Ladybug'
import BlueButterfly from '../../components/BlueButterfly'
import Fly from '../../components/Fly'
import BlackButterfly from '../../components/BlackButterfly'
import YellowButterfly from '../../components/YellowButterfly'
import Bee from '../../components/Bee'
import PinkFlower from '../../components/PinkFlower'
import YellowFlower from '../../components/YellowFlower'
import { position } from 'native-base/lib/typescript/theme/styled-system'

export default function QuizHome({ navigation }) {
  return (
    <View style={styles.container}>
      <WhiteCloud
        style={{
          position: 'absolute',
          top: 40,
          left: -50
        }}
      />

      <YellowButterfly
        style={{
          position: 'absolute',
          top: 100,
          right: 50
        }}
      />
      <WhiteCloud
        style={{
          position: 'absolute',
          top: 200,
          right: -60
        }}
      />

      <Image
        source={require('../../assets/pngs/BubbleDoggo.png')}
        style={{
          position: 'absolute',
          top: -100,
          left: 30,
          width: 180
        }}
        resizeMode="contain"
      />

      <BlackButterfly
        style={{
          position: 'absolute',
          top: 240,
          left: 80
        }}
      />
      <Text
        style={{
          position: 'absolute',
          top: 180,
          left: 50,
          fontFamily: 'PressStart2P',
          width: 150,
          fontSize: 12
        }}
      >
        Introspection is great!
      </Text>

      <View style={styles.appContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Anxiety quiz')}
          style={{
            position: 'absolute',
            top: -100,
            left: 50
          }}
        >
          <Fly />
          <Text style={styles.appName}>anxiety quiz</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.appContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Depression quiz')}
          style={{
            position: 'absolute',
            top: -20,
            right: 20
          }}
        >
          <BlueButterfly />
          <Text style={styles.appName}>depression quiz</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.appContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Psychosis quiz')}
          style={{
            position: 'absolute',
            top: 40,
            left: 70
          }}
        >
          <Ladybug />
          <Text style={styles.appName}>psychosis quiz</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.appContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ADHD quiz')}
          style={{
            position: 'absolute',
            top: 160,
            right: 60
          }}
        >
          <Bee />
          <Text style={styles.appName}>ADHD quiz</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          position: 'absolute',
          bottom: 20,
          fontFamily: 'Consolas',
          color: 'white',
          width: 150,
          textAlign: 'center'
        }}
      >
        Quizzes can’t replace a real diagnosis. It’s always better to see a therapist.
      </Text>
      <PinkFlower
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0
        }}
      />
      <YellowFlower
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAADFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  appContainer: {},
  appName: {
    fontFamily: 'Consolas',
    letterSpacing: -0.5,
    fontSize: 15
  },
  infoPressed: {
    position: 'absolute',
    bottom: 20,
    right: -20
  }
})
