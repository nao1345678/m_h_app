import { StyleSheet, Text, View, Image } from 'react-native'
import Task from '../types'

export default function Organizing() {
  const orga: any = [
    { id: 34, name: 'Wash my bed sheets', isChecked: false },
    { id: 35, name: 'Declutter my wardrobe', isChecked: false },
    { id: 36, name: 'Mop the floors', isChecked: false },
    { id: 37, name: 'Wash my makeup brushes', isChecked: false },
    { id: 38, name: 'Fold the laundry', isChecked: false },
    { id: 39, name: 'Clean out the refrigerator', isChecked: false },
    { id: 40, name: 'Organize my desk', isChecked: false },
    { id: 41, name: 'Sort through old paperwork', isChecked: false },
    { id: 42, name: 'Tidy up the living room', isChecked: false }
  ]
  return (
    <View style={styles.container}>
      <Text>Organizing tasks</Text>
      <View>
        {orga.map((task: any, index: number) => (
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
