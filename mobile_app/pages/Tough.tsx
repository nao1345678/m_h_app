import { StyleSheet, Text, View, Image } from 'react-native'
import Task from '../types'

export default function Tough() {
  const tough: any = [
    { id: 10, name: 'Take a shower', isChecked: false },
    { id: 11, name: 'Drink water', isChecked: false },
    { id: 12, name: 'Eat at least a meal', isChecked: false },
    { id: 13, name: 'Listen to music I like', isChecked: false },
    { id: 14, name: 'Get out of my bed', isChecked: false },
    { id: 15, name: 'Brush my teeth', isChecked: false },
    { id: 16, name: 'Wash my hair', isChecked: false },
    { id: 17, name: 'Take my medication', isChecked: false },
    { id: 18, name: 'Make my bed', isChecked: false },
    { id: 19, name: 'Take 10 deep breaths', isChecked: false },
    { id: 20, name: "Tell myself 'it's gonna be ok'", isChecked: false }
  ]

  return (
    <View style={styles.container}>
      <Text>On tough days </Text>
      <View>
        {tough.map((task: any, index: number) => (
          <View key={index} style={styles.taskBlock}>
            <Text key={index} style={styles.taskName}>
              {task.name}
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
