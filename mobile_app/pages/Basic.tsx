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

  return (
    <View style={styles.container}>
      <Text>Basic everyday tasks</Text>

      <View>
        {basic.map((task: any, index: number) => (
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
    width: 390,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'pink'
  }
})
