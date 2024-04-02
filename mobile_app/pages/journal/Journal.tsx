import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function Journal() {
  const currentDate = new Date()

  const [data, setData] = useState('')
  const [listData, setListData] = useState([])

  useEffect(() => {
    console.log(listData)
  }, [listData])

  function saveButton() {
    if (data.trim() !== '') {
      setListData((prevListData) => [...prevListData, data])
      setData('')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Journal</Text>
      <Text>{currentDate.toDateString()}</Text>
      <TextInput style={styles.input} value={data} onChangeText={setData} placeholder="Write your thoughts here" />
      <TouchableOpacity onPress={saveButton} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: '#dbe9ff',
    width: 300,
    height: 600,
    marginBottom: 20
  },
  saveButton: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
