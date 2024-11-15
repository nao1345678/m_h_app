import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        color : 'white',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#300961'
    },
    form : {
        width : '70%',
        backgroundColor : '#FFA0F0',
        padding : 20,
        borderWidth : 2,
        borderColor : 'black',
        zIndex : 4,
    },
    label: {
        fontSize: 12, 
        fontFamily : 'PressStart2P',
        margin : 10,
    },
    input: {
        height: 50,
        marginBottom: 10,
        paddingLeft: 10,
        color: 'black', 
        fontFamily : 'Consolas', 
        borderBottomColor: 'black',
        borderColor: 'transparent',
        borderWidth: 1.5,
    },
    errorText: {
        color: 'red',
        margin : 10, 
        textAlign : 'center', 
        fontFamily : 'Consolas',
    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        textAlign: 'center',
        position : 'relative', 
        bottom : 27,
        zIndex: 2, 
        fontFamily : 'PressStart2P',
        fontSize: 12
    },
    buttonBoot : {

    },
    addContainer: {
        position: 'absolute',
        bottom : -100,
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center',
    },
    addictionText: {
        color: 'black', 
        width: 150, 
        textAlign: 'center',
        fontFamily : 'Consolas', 
        fontSize: 15, 
        letterSpacing : -0.5
    },
    addictionTime: {
        color: 'black',
        fontFamily : 'PressStart2P',
        fontSize: 12,
        textAlign: 'center',
        margin : 5,
        textShadowColor: '#a400ff',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1, 
        letterSpacing : -2
    }, 
    buttonContainer: {
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20
    }, 
    addictionBox: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf : 'center',
        backgroundColor : "#BCBFFF",
        width : 170, 
        height : 120, 
        borderWidth : 1.5, 
        borderColor : 'black',
        margin : 10
    },
    addictionList: {
        display : 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin : 5
    }, 
    previous : {
        alignSelf : 'center'
    }
});



   

export default styles;