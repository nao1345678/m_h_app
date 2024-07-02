import { StyleSheet, Text, View, Image } from 'react-native'
import { useEffect, useState } from 'react';

export default function SleepFollowing() {

    const currentDate = new Date();

    const [data, setData] = useState('');
    const [listData, setListData] = useState([]);
  
    useEffect(() => {
      console.log(listData);
    }, [listData]);
  
    function saveButton() {
      if (data.trim() !== '') {
        setListData((prevListData) => [...prevListData, data]);
        setData('');
      }



  return (
    <View style={styles.container}>
      <Text>Zzzzz</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
