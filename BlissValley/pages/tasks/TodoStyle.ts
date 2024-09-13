import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fab1e1'
    },
    mainBigContainer: {
        backgroundColor: '#fab1e1',
        minHeight: '100%'
    },
    addtask: {
        opacity: 0.7,
        backgroundColor: 'white',
        marginTop: 300,
        height: 50,
        width: '78%',
        marginLeft: 15,
        borderColor: '#41004f',
        borderWidth: 2,
        fontFamily: 'Consolas',
        letterSpacing: -0.7,
        paddingLeft: 10
    },
    input: {
        flexDirection: 'row'
    },
    addItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9200ba',
        marginTop: 300,
        width: 50,
        marginLeft: 5,
        borderColor: '#41004f',
        borderWidth: 2
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fab1e1',
        padding: 20,
        borderRadius: 0
    },
    modalText: {
        fontFamily: 'PressStart2P',
        position: 'absolute',
        top: 315,
        width: 190,
        left: 110
    },
    moodContainer: {
        position: 'absolute',
        bottom: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    mood: {
        margin: 28
    },
    moodImage: {
        margin: 1,
        width: 120,
        height: 120,
        opacity: 1.5,
        position: 'absolute',
        top: -35,
        left: -27
    },
    heading: {
        fontFamily: 'PressStart2P',
        marginHorizontal: 15,
        fontSize: 16,
        marginTop: 15,
        marginBottom: 10,
        color: 'white',
        textShadowColor: '#9200ba',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2
    },
    taskBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        padding: 2,
        borderBottomColor: 'pink',
        backgroundColor: 'white',
        height: 65,
        width: '92%',
        borderColor: '#41004f',
        borderWidth: 2,
        fontFamily: 'Consolas',
        letterSpacing: -0.7,
        paddingLeft: 10,
        marginVertical: 6
    },
    taskName: {
        fontSize: 17,
        fontFamily: 'Consolas',
        width: '69%',
        height: 'auto',
        letterSpacing: -0.7
    },
    buttons: {
        flexDirection: 'row'
    },
    sun: {
        position: 'absolute',
        top: 30
    },
    cloud: {
        position: 'absolute',
        top: 80,
        right: -40
    },
    cloud1: {
        position: 'absolute',
        top: 10,
        left: -120
    },
    cloud2: {
        position: 'absolute',
        top: -50,
        right: -140
    },
    kitty: {
        position: 'absolute',
        bottom: 230,
        left: 10
    },
    kitty2: {
        position: 'absolute',
        bottom: -130,
        left: -60
    },
    bubble: {
        position: 'absolute',
        top: 40,
        left: 70,
        width: 250
    },
    grass: {
        position: 'absolute',
        bottom: -20,
        right: -40
    },
    grass2: {
        position: 'absolute',
        bottom: -20,
        right: -40
    },
    taskInspoBlock: {
        backgroundColor: 'white',
        borderBlockColor: 'purple',
        borderWidth: 2,
        opacity: 0.8,
        margin: 5,
        paddingVertical: 7
    },
    taskInspoName: {
        letterSpacing: -0.5,
        fontFamily: 'Consolas',
        marginTop: 7,
        marginLeft: 5,
        marginRight: 8,
        fontSize: 15
    },
    inspoTitle: {
        fontFamily: 'Consolas',
        marginTop: 2,
        marginLeft: 5,
        marginRight: 8,
        fontSize: 16,
        color: '#ff2e85'
    }
})

export default styles