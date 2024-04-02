import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

const LoadingScreen = () => {
  // État pour contrôler l'affichage du spinner de chargement
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulation d'un chargement en utilisant un délai de 3 secondes
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Nettoyage du timeout pour éviter les fuites de mémoire
    return () => clearTimeout(timeout)
  }, [])

  // Rendu conditionnel basé sur l'état de chargement
  return (
    <View style={styles.container}>
      <Text>BlissValley</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default LoadingScreen
