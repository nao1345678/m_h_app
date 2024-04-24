import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native'
import { Svg } from 'react-native-svg'
import BlissValley from '../../components/BlissValley'
import Tree from '../../components/Tree'

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
      <View style={styles.pics}>
        <Tree />
        <BlissValley />
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
    width: 20,
    height: 30
    // shadowColor: '#a400ff',
    // shadowOffset: {
    //   width: 0,
    //   height: 11
    // },
    // shadowOpacity: 1,
    // shadowRadius: 5,
    // elevation: 15
  },
  pics: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  }
})

export default LoadingScreen
