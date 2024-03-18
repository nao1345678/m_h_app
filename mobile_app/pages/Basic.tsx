import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native'
import data from '../ressources/tasks.json'
import Task from '../types'

export default function Basic({ navigation }: { navigation: any }) {
  const basic: any = [
    { id: 1, name: 'Organize my room', isChecked: false },
    { id: 2, name: 'Read my emails', isChecked: false },
    { id: 3, name: 'Go to the grocery store', isChecked: false },
    { id: 4, name: 'Make a gift for a friend', isChecked: false },
    { id: 5, name: 'Take a long walk outside', isChecked: false },
    { id: 6, name: 'Create a playlist', isChecked: false },
    { id: 7, name: 'Make a lunch for some people I like', isChecked: false },
    { id: 8, name: 'Spend less time on my phone', isChecked: false },
    { id: 9, name: 'Do some skincare', isChecked: false }
  ]

  const handleAddTask = (id: number) => {
    navigation.navigate('Todo', { id })
  }

  return (
    <View style={styles.container}>
      <Text>Basic everyday tasks</Text>
      <View>
        {basic.map((task: Task, index: number) => (
          <View key={index} style={styles.taskBlock}>
            <Text key={index} style={styles.taskName}>
              {task.name}
            </Text>
            <Button title="ajoute pitié" onPress={() => handleAddTask(task.id)} />
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
