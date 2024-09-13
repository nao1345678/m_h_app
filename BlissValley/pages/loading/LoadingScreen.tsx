import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native'
import Tree from '../../components/Tree'
import { useFonts } from 'expo-font'
import styles from './LoadingScreenStyle'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [fontsLoaded] = useFonts({
    PressStart2P: require('../../assets/fonts/PressStart2P-Regular.ttf')
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

export default LoadingScreen
