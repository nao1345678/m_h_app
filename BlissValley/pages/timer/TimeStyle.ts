import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c982ff',
        alignItems: 'center',
        justifyContent: 'center'
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
        marginHorizontal: 5
    },
    buttonText: {
        color: 'black',
        fontSize: 14,
        letterSpacing: -0.2,
        textAlign: 'center',
        fontFamily: 'Consolas'
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
        bottom: 100
    },
    buttonTextPink: {
        position: 'relative',
        color: 'white',
        fontFamily: 'PressStart2P',
        bottom: 30,
        right: -90
    }
})
export default styles