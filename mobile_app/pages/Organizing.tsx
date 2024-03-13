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
        {orga.map((task: any, index: number) => (
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
