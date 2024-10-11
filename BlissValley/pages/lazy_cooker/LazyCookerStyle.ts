import sizes from 'native-base/lib/typescript/theme/base/sizes'
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f56b02',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeView: {
        justifyContent: 'center',
        alignItems: 'center',
        margin : 10
    },
    timeText: {
        fontFamily: 'PressStart2P',
        fontSize: 13,
        letterSpacing: -0.3,
        margin: 1,
        alignSelf: 'center', 
        color : 'white', 
        textShadowColor : '#b31e00',
        textShadowOffset : { width: 2, height: 2 },
        textShadowRadius : 2,
    },
    timeOptionsView: {
         display : 'flex',
         flexDirection: 'row',
         flexWrap: 'wrap',
         justifyContent: 'center',
         alignItems: 'center',
    },
    timeOption: {
        backgroundColor : 'white', 
        padding : 10,
        paddingHorizontal : 20,
        margin : 5,
        borderWidth: 1, 
        borderColor: 'black',        
    },
    selectedTimeOption: {
        backgroundColor : '#ffaf87' 
    },
    timeOptionText: {
        fontFamily: 'Consolas',
    },
    mealTypeView: {
        justifyContent: 'center',
        alignItems: 'center',
        margin : 10
    },
    mealTypeText: {
        fontFamily: 'PressStart2P',
        fontSize: 13,
        letterSpacing: -0.3,
        margin: 1,
        alignSelf: 'center', 
        color : 'white', 
        textShadowColor : '#b31e00',
        textShadowOffset : { width: 2, height: 2 },
        textShadowRadius : 2,
    },
    mealTypeOptionsView: {
        display : 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mealTypeOption: {
        backgroundColor : 'white', 
        padding : 10,
        paddingHorizontal : 20,
        margin : 5,
        borderWidth: 1, 
        borderColor: 'black',
    },
    mealTypeOptionText: {
        fontFamily: 'Consolas',
    },
    selectedMealOption: {
        backgroundColor : '#ffaf87' 
    },
    budgetView: {
        justifyContent: 'center',
        alignItems: 'center',
        margin : 10
    },
    budgetText: {
        fontFamily: 'PressStart2P',
        fontSize: 13,
        letterSpacing: -0.3,
        margin: 1,
        alignSelf: 'center', 
        color : 'white', 
        textShadowColor : '#b31e00',
        textShadowOffset : { width: 2, height: 2 },
        textShadowRadius : 2,
    },
    budgetOptionsView: {
        display : 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',   
    },
    budgetInput: {
        backgroundColor : 'white', 
        padding : 5,
        paddingHorizontal : 10,
        width : 200,
        margin : 5,
        borderWidth: 1, 
        fontFamily: 'Consolas',
        fontSize: 12,
        borderColor: 'black',
    },
    caloriesLimitView: {
        justifyContent: 'center',
        alignItems: 'center',
        margin : 10
    },
    caloriesLimitText: {
        fontFamily: 'PressStart2P',
        fontSize: 13,
        letterSpacing: -0.3,
        margin: 1,
        alignSelf: 'center', 
        color : 'white', 
        textShadowColor : '#b31e00',
        textShadowOffset : { width: 2, height: 2 },
        textShadowRadius : 2,

    },
    caloriesLimitOptionsView: {
        display : 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caloriesLimitInput: {
        backgroundColor : 'white', 
        padding : 5,
        paddingHorizontal : 10,
        width : 200,
        margin : 5,
        borderWidth: 1, 
        fontFamily: 'Consolas',
        fontSize: 12,
        borderColor: 'black',
    },
    ingredientsView: {
        justifyContent: 'center',
        alignItems: 'center',
        margin : 10
    },
    ingredientsText: {
        fontFamily: 'PressStart2P',
        fontSize: 13,
        letterSpacing: -0.3,
        margin: 1,
        alignSelf: 'center', 
        color : 'white', 
        textShadowColor : '#b31e00',
        textShadowOffset : { width: 2, height: 2 },
        textShadowRadius : 2,
    },
    ingredientsOptionsView: {
        display : 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
         
    },
    ingredientsInput: {
        backgroundColor : 'white', 
        padding : 5,
        paddingHorizontal : 10,
        width : 200,
        margin : 5,
        borderWidth: 1, 
        fontFamily: 'Consolas',
        fontSize: 12,
        borderColor: 'black',
    }, 
    generateText : {
        fontFamily: 'PressStart2P',
        fontSize: 12,
        letterSpacing: -0.3,
        margin: 5,
        alignSelf: 'center', 
        position : 'relative', 
        bottom : 35, 
        color : 'white', 
        textShadowColor : 'black',
        textShadowOffset : { width: 2, height: 2 },
        textShadowRadius : 2,
    },
    rat : {
        position : 'relative',
        top : 30,
        left : 90
    }, 
    bubble : {
        position : 'absolute',
        width : 200,
        bottom : -110,
        left : 190
    }, 
    ratText : {
        fontFamily: 'PressStart2P',
        fontSize: 11,
        letterSpacing: -0.3,
        margin: 5,
        alignSelf: 'center', 
        bottom : 77,
        right : 10, 
        color : 'black', 
        width : 160, 
        position : 'absolute'
        
    }
})

export default styles