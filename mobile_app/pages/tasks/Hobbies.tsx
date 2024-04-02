import { StyleSheet, Text, View, Image } from 'react-native'
import Task from '../../types'

export default function Hobbies() {
  const hobbies: any = [
    { id: 21, name: 'Take a run', isChecked: false },
    { id: 22, name: 'Create some artpieces', isChecked: false },
    { id: 23, name: 'Read a book', isChecked: false },
    { id: 24, name: 'Finish my ongoing project', isChecked: false },
    { id: 25, name: 'Hang out with my friends', isChecked: false },
    { id: 26, name: 'Compose music', isChecked: false },
    { id: 27, name: 'Meditate', isChecked: false }
  ]
  return (
    <View style={styles.container}>
      <Text>Hobbies</Text>
      <View>
        {hobbies.map((task: any, index: number) => (
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
