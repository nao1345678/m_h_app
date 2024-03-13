import { StyleSheet, Text, View, Image } from 'react-native'

export default function Following() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
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
