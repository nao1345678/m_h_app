import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AAADFF",
        alignItems: "center",
        justifyContent: "center",
      }, 
    scoreText : {
        fontFamily : 'Consolas', 
        fontSize : 18, 
        color : 'white', 
        letterSpacing : -0.5, 
        margin : 10,
      }, 
    score : {
        fontFamily : 'PressStart2P', 
        fontSize : 25,
        color : 'white',
        letterSpacing : -0.3,
        textShadowColor : '#5d17cf',
        textShadowOffset : {width: 2, height: 2}, 
        textShadowRadius : 2, 
        justifyContent : 'center', 
        textAlign : 'center'
      }, 
    resultText : {
        fontFamily : 'Consolas', 
        fontSize : 18, 
        color : 'white', 
        letterSpacing : -0.8, 
        margin : 5,
    }, 
    result : {
        fontFamily : 'PressStart2P', 
        fontSize : 16, 
        color : 'white', 
        letterSpacing : -0.8, 
        margin : 5,
        textShadowColor : '#5d17cf',
        textShadowOffset : {width: 2, height: 2}, 
        textShadowRadius : 2, 
        justifyContent : 'center', 
        textAlign : 'center'
    }, 
    explanation : {
        margin : 10
    }, 
    scoreContainer :  {
        margin : 10
    }, 
    homeButtonText : {
        fontFamily : 'PressStart2P', 
        margin : 30
    }, 
    disclaimer : {
        position : 'absolute',
        bottom : 20, 
        fontFamily : 'Consolas', 
        color : 'white', 
        width : 150, 
        textAlign : 'center'
    }



    

});

export default styles;