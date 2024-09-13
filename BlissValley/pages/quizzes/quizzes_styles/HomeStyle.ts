import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AAADFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    appContainer: {},
    appName: {
        fontFamily: 'Consolas',
        letterSpacing: -0.5,
        fontSize: 15
    },
    infoPressed: {
        position: 'absolute',
        bottom: 20,
        right: -20
    }
})

export default styles