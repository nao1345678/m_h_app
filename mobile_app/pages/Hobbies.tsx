import { StyleSheet, Text, View, Image } from 'react-native'
import Task from '../types'

export default function Hobbies() {
  const hobbies: any = [
    'Take a run',
    'Create some artpieces',
    'Read a book',
    'Finish my ongoing project',
    'Hang out with my friends',
    'Compose music',
    'Meditate'
  ]
  return (
    <View style={styles.container}>
      <Text>Hobbies</Text>
      <View>
        {hobbies.map((task: Task, index: number) => (
          <Text style={styles.taskName}>{task.name}</Text>
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
  }
})
