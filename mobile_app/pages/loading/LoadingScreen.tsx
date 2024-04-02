import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tree.png')} style={styles.tree} resizeMode="contain" />
      <Image source={require('../../assets/BlissValley.png')} style={styles.blissvalley} resizeMode="contain" />
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
    width: 50,
    height: 50
  },
  blissvalley: {
    width: 150,
    height: 30
  }
})

export default LoadingScreen
