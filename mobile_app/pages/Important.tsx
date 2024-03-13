import { StyleSheet, Text, View, Image } from 'react-native'
import Task from '../types'

export default function Important() {
  const important: any = [
    'Complete my work presentation',
    'Pay my bills',
    "Schedule a doctor's appointment",
    'Call a family member',
    'Prepare for an important meeting',
    'Update my resume'
  ]
  return (
    <View style={styles.container}>
      <Text>Important tasks</Text>
      <View>
        {important.map((task: any, index: number) => (
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
