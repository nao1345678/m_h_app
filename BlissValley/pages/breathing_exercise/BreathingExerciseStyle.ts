import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F580FF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop : 30
    },
    buttonContainer: {
        flexDirection: 'column',
        marginTop: 10
    },
    button: {
        backgroundColor: 'white',
        width: 150,
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        padding: 15,
        margin: 20,
        marginHorizontal: 5, 
         
    },
    buttonText: {
        color: 'black',
        fontSize: 14,
        letterSpacing: -0.2,
        textAlign: 'center',
        fontFamily: 'Consolas'
    },
    buttonTextOption: {
        color: 'black',
        fontSize: 14,
        letterSpacing: -0.2,
        textAlign: 'center',
        fontFamily: 'Consolas'
    },
    buttonOption : {
        backgroundColor: 'white',
        width: 300,
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        padding: 15,
        margin: 5,
        marginHorizontal: 5
    },
    input: {
        backgroundColor: 'white',
        width: 150,
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
        margin: 20,
        marginHorizontal: 5,
        fontFamily: 'Consolas'
    },
    startButton: {
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 130
    },
    buttonTextPink: {
        position: 'relative',
        color: 'white',
        fontFamily: 'PressStart2P',
        bottom: 85,
        alignSelf : 'center',
        zIndex : 3
    }, 
    buttonPink : {
        alignSelf : 'center',
        zIndex : 2, 
        position : 'relative', 
        bottom : 55
    }, 
    disclaimer :  {position: 'absolute',
    bottom: 5,
    fontFamily: 'Consolas',
    color: 'white',
    width: 250,
    textAlign: 'center'}
})
export default styles