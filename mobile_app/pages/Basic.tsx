import { StyleSheet, Text, View, Image } from 'react-native'

export default function Basic() {
  return (
    <View style={styles.container}>
      <Text>Basic</Text>
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
