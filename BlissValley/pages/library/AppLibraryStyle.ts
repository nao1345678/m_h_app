import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    appName: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontFamily: 'Consolas',
        fontSize: 13,
        color: 'white',
        width: 105,
        textAlign: 'center',
        textShadowColor: '#693301',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    appContainer: {
        margin: 10,
    },
    appRow1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
    },
});

export default styles