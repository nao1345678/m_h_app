import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native'
import { Svg } from 'react-native-svg'
import BlissValley from '../../components/BlissValley'
import Tree from '../../components/Tree'
import { useFonts } from 'expo-font'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf')
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 10000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.pics}>
        <Tree />
        <Text style={styles.blissvalley}>Bliss Valley</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffb3f3'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  tree: {
    width: 40,
    height: 50
  },
  blissvalley: {
    width: 200,
    color: 'white',
    fontFamily: 'PressStart2P',
    fontSize: 20,
    textShadowColor: '#a400ff',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1
  },
  
  pics: {
    width : 200,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  }
})

export default LoadingScreen
