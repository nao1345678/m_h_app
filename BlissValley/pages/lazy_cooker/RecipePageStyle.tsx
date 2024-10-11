import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#db4900',
      alignItems: 'center',
      justifyContent: 'center'
    }, 
    title: {
      fontSize: 15,
      margin: 10,
      fontFamily: 'PressStart2P',
      color: '#07002b',
      textShadowColor: '#f2d2c2',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    recipe: {
        width: '88%',   
      fontSize: 16, 
      fontFamily: 'Consolas',
      letterSpacing: -0.9,
      color : '#07002b',
      textShadowColor: '#f2d2c2',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
      alignSelf: 'center',
      
    }, 
    book : {
        position: 'absolute',
        justifyContent: 'center',   
        height: '92%', 
        left: -410
    }, 
    

  })

export default styles;