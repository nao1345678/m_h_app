import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    background : {
        padding : 10,
        width : '95%',
        height : '80%',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
        marginRight : 15, 
        borderRadius : 3

    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        fontFamily : 'PressStart2P', 
        color : 'white',
        marginBottom: 5,
        marginTop: 15,
        width : 210,
        textShadowColor: 'black',
        textShadowOffset: { width:2, height: 2 },
        textShadowRadius: 2, 
        letterSpacing : 0.5
    },
    type : {
        fontSize: 10,
        fontFamily : 'PressStart2P', 
        marginTop : 10,
        color : '#a491cf',
    },
    description: {
        fontSize: 17,
        fontFamily : 'Consolas',
        color: '#f4edff',
        width : '97%',
        textAlign : 'justify', 
        marginTop : 8, 
        letterSpacing : -0.2
    },
    topView : {
        display : "flex", 
        flexDirection : 'row',
        marginBottom : 10
    },
    nav : {
       position : "relative",
       right : 60, 
    }, 
    url : {
        color : 'transparent'
    }, 
    buttonText : {
        color : 'white',
        fontFamily : 'PressStart2P', 
        fontSize : 12,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2, 
        position : 'absolute', 
        top : 30, 
        right : 175
    }, 
    descTitle : {
        fontFamily : 'PressStart2P',
        color : '#a491cf', 
        fontSize : 12
    },
    
 

})

export default styles