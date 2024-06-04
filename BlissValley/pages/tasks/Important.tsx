import { StyleSheet, Text, View, Image } from 'react-native'
import Task from '../../types'

export default function Important() {
  const important: any = [
    { id: 28, name: 'Complete my work presentation', isChecked: false },
    { id: 29, name: 'Pay my bills', isChecked: false },
    { id: 30, name: "Schedule a doctor's appointment", isChecked: false },
    { id: 31, name: 'Call a family member', isChecked: false },
    { id: 32, name: 'Prepare for an important meeting', isChecked: false },
    { id: 33, name: 'Update my resume', isChecked: false }
  ]
  return (
    <View style={styles.container}>
      <Text>Important tasks</Text>
      <View>
        {important.map((task: any, index: number) => (
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
