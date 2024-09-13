import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    image: {
        flex: 1,
        width: '100%'
    },
    inputContainer: {
        marginLeft: 40,
        marginTop: 90,
        width: 330,
        height: 670,
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        lineHeight: 54,
        fontFamily: 'Consolas',
        fontSize: 16,
        letterSpacing: -0.7,
        borderRadius: 8,
        paddingTop: 10
    },
    saveButton: {
        position: 'absolute',
        right: 10,
        bottom: -20
    }
})

export default styles