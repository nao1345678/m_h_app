import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


export const imagesMapping = {
    'medcentralmd_logo.png': require('../assets/pngs/medcentralmd_logo.png'),
    'dsm5.png': require('../assets/pngs/dsm5.png'),
    'who.png': require('../assets/pngs/who.png'),
    'beyondblue.png': require('../assets/pngs/beyondblue.png'),
    'youtube.png': require('../assets/pngs/youtube.png'),
    'vwm.png': require('../assets/pngs/vwm.png'),
    'doctolib.png': require('../assets/pngs/doctolib.png'),
    'heart.png': require('../assets/pngs/heart.png'),
    'AAFP.png': require('../assets/pngs/AAFP.png'),
    'nih.png': require('../assets/pngs/nih.png'),
    'alicelogo.webp': require('../assets/pngs/alicelogo.webp'),
    'doctolib.webp': require('../assets/pngs/doctolib.webp'),
    'NAS.png': require('../assets/pngs/NAS.png'),
    'autism360.png': require('../assets/pngs/autism360.png'), 
    'journal.png': require('../assets/pngs/journal.png'),
};



interface ReferenceProps {
    reference: {
        id : number;
        title : string;
        type : string;
        description: string;
        image: keyof typeof imagesMapping;
        url : string;
        
        
    };
}

export default function Reference({ reference }: ReferenceProps) {

    const imageSource = imagesMapping[reference.image];
    const truncatedDescription = 
    reference.description.length > 120 
        ? `${reference.description.slice(0, 120)}...`
        : reference.description;

    return (
        <View style={styles.container}>
                 <Image source={imageSource} style={styles.image} />
                <View style={styles.textContainer}>
                        <Text style={styles.title}>{reference.title}</Text>
                        <Text style={styles.description}>{truncatedDescription}</Text>
                </View>
               
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        display : 'flex',
        flexDirection : 'row',
        width : 350,
        padding : 3,
        paddingLeft : 30
    },
    image: {
        width: 72,
        height: 72,
        marginBottom: 10,
        borderRadius : 4,
        margin : 15
    },
    textContainer: {
        width : '90%'
    },
    title: {
        fontSize: 15,
        marginBottom: 5,
        color : "white",
        letterSpacing: -0.6,
        fontFamily : 'Consolas',
        textShadowColor: '#d4d4ff',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1
    },
    description: {
        fontSize: 12,
        color: '#cfbee6',
        letterSpacing : -0.6,
        fontFamily : 'Consolas'

    },
})
