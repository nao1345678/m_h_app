import { StyleSheet, Text, View, Image } from 'react-native'
import Task from '../types'

export default function Tough() {
  const tough: any = [
    'Take a shower',
    'Drink water',
    'Eat at least a meal',
    'Listen to music I like',
    'Get out of my bed',
    'Brush my teeth',
    'Wash my hair',
    'Take my medication',
    'Make my bed',
    'Take 10 deep breaths',
    "Tell myself 'it's gonna be ok' "
  ]

  return (
    <View style={styles.container}>
      <Text>On tough days </Text>
      <View>
        {tough.map((task: any, index: number) => (
          <View key={index} style={styles.taskBlock}>
            <Text key={index} style={styles.taskName}>
              {task}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskName: {
    color: 'purple'
  },
  taskBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'pink'
  }
})
