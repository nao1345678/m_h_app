import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
    },
    loadingContainer: {
      position: 'relative',
      flex : 1,
      alignContent : 'center',
      alignItems : 'center',
      justifyContent: 'center',

      width : 400, 
      height : 900,
      bottom : 100,
      left : 0

  },
      disorderTitle : {
        fontFamily : 'PressStart2P',
        fontSize : 18, 
        color : 'white',
        marginTop : 35, 
        marginBottom : -5,
        marginLeft : 10, 
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1
      },
      searchInput: {
        height: 45,
        borderColor: 'black',
        backgroundColor : 'rgba(233, 217, 255, 0.62)',
        borderWidth: 1,
        margin: 10,
        width : '90%',
        alignSelf : 'center',
        paddingHorizontal: 10,
        marginTop : 70, 
        fontFamily : 'Consolas'
    },
    
    
  })

export default styles;
  