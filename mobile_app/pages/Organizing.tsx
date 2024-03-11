import { StyleSheet, Text, View, Image } from 'react-native'
import Task from '../types'

export default function Organizing() {
  const orga: any = [
    'Wash my bed sheets',
    'Declutter my wardrobe',
    'Mop the floors',
    'Wash my makeup brushes',
    'Fold the laundry',
    'Clean out the refrigerator',
    'Organize my desk',
    'Sort through old paperwork',
    'Tidy up the living room'
  ]
  return (
    <View style={styles.container}>
      <Text>Organizing tasks</Text>
      <View>
        {orga.map((task: Task, index: number) => (
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
