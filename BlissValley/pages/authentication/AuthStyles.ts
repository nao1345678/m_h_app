import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb3f3'

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffb3f3'
    },
    logoContainer: {
       
    },
    logoShadow: {
       
    },
    logo: {
      
    },
    title: {
        fontFamily : 'PressStart2P',
        fontSize: 14,
        color: 'white',
        width: 200,
        textAlign: 'center',
        textShadowColor: '#a400af',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
        margin : 5
       
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
       fontFamily : 'Consolas',
       textAlign : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        margin : 10
    },
    buttonText: {
        position : 'absolute', 
        bottom : 15,
        zIndex : 2,
        fontFamily : 'PressStart2P',
        textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
        color : 'white',
        fontSize : 12
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffb3f3'
    },
    modalTitle: {
     
    },
    Titre: {
        fontFamily : 'Consolas'
     
    },
    input: {
        color: 'black',
        backgroundColor: 'white',
        fontFamily : 'Consolas',
        width: 250,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        padding: 0,
        margin: 10,
        marginHorizontal: 5, 
        textAlign: 'center',
    },
    modalButtonContainer: {
      
    },
    modalButton: {
        fontFamily : 'Consolas',
        textAlign : 'center',
         justifyContent : 'center',
         alignItems : 'center',
         margin : 5
    },
    errorText: {
        fontFamily : 'Consolas', 
        color : 'red',
        margin : 10
    },
});

export default styles;