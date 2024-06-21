import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import JournalLogo from '../../components/JournalLogo'

export default function AppLibrary({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/pngs/library.png')} resizeMode="cover" style={styles.image}>
      
        <TouchableOpacity onPress={() => navigation.navigate("Journal")}>
          <JournalLogo  />
          <Text style={styles.appName}>Journal</Text>
        </TouchableOpacity>
        <View style={{width : '100%', height : '100%', opacity : 0.3, backgroundColor : '#cf69ff'}}>
      </View>
      </ImageBackground>
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
  image : {
    flex : 1, 
    width : '100%'
  }, 
  appName : {

  }
})
