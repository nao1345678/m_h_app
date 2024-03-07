import React, { useState } from 'react'
import Task from '../types'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native'

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 0, name: 'Commencer les décorations de Noel', isChecked: true, modified: false }
  ])
  const [inputTask, setInputTask] = useState('')
  const [updatedTask, setUpdatedTask] = useState('')

  const handleCheckboxChange = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isChecked: !task.isChecked } : task)))
  }

  const removeItem = (index: number) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }

  const removeAllItems = () => {
    setTasks([])
  }

  const addItem = () => {
    if (inputTask.trim() !== '') {
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
      setTasks([...tasks, { id: newId, name: inputTask, isChecked: false, modified: false }])
      setInputTask('')
    }
  }

  const handleAllCheckboxChange = () => {
    setTasks(tasks.map((task) => (task.isChecked ? task : { ...task, isChecked: !task.isChecked })))
  }

  const updateTask = (id: number, newName: string, task: any) => {
    task.modified = !task.modified
    const updatedTask = tasks.map((task) => (task.id === id ? { ...task, name: newName } : task))
    setTasks(updatedTask)
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text style={styles.heading}>ONGOING</Text>
          {tasks.map((task, index) => (
            <View key={task.id} style={styles.taskBlock}>
              <TouchableOpacity onPress={() => handleCheckboxChange(task.id)}>
                <Text style={styles.taskName}>{task.name}</Text>
              </TouchableOpacity>
              {task.modified && (
                <TextInput
                  style={styles.input}
                  value={updatedTask}
                  onChangeText={(text) => setUpdatedTask(text)}
                  placeholder="Update task..."
                />
              )}
              <View style={styles.buttons}>
                <Button title="Update" onPress={() => updateTask(task.id, updatedTask, task)} />
                <Button title="Remove" onPress={() => removeItem(index)} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputTask}
          onChangeText={(text) => setInputTask(text)}
          placeholder="Add task ..."
        />
        <Button title="Add" onPress={addItem} />
      </View>
      <View style={styles.footer}>
        <Button title="All done" onPress={() => handleAllCheckboxChange()} />
        <Button title="Delete all" onPress={() => removeAllItems()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  taskBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  taskName: {
    fontSize: 18
  },
  buttons: {
    flexDirection: 'row'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  }
})
