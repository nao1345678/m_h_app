import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import data from '../ressources/tasks.json'
import Task from '../types'

export default function Basic() {
  const basic: any = [
    'Organize my room',
    'Read my emails',
    'Go to the grocery store',
    'Make a gift for a friend',
    'Take a long walk outside',
    'Create a playlist',
    'Make a lunch for some people I like',
    'Spend less time on my phone',
    'Do some skincare'
  ]
  console.log(basic)

  return (
    <View style={styles.container}>
      <Text>Basic everyday tasks</Text>
      <View>
        {basic.map((task: Task, index: number) => (
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
    color: '#pink'
  }
})
