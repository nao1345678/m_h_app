import { StyleSheet, Text, View, Image } from 'react-native'

export default function BreathingExercise() {
  return (
    <View style={styles.container}>
      <Text>Take a deep breath.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
