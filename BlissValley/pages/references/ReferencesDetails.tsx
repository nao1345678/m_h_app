import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native'
import React from 'react'
import styles from './ReferencesDetailsStyle';


export const imagesMapping = {
    'medcentralmd_logo.png': require('../../assets/pngs/medcentralmd_logo.png'),
    'dsm5.png': require('../../assets/pngs/dsm5.png'),
    'who.png': require('../../assets/pngs/who.png'),
    'beyondblue.png': require('../../assets/pngs/beyondblue.png'),
    'youtube.png': require('../../assets/pngs/youtube.png'),
    'vwm.png': require('../../assets/pngs/vwm.png'),
    'doctolib.png': require('../../assets/pngs/doctolib.png'),
    'heart.png': require('../../assets/pngs/heart.png'),
    'AAFP.png': require('../../assets/pngs/AAFP.png'),
    'nih.png': require('../../assets/pngs/nih.png'),
    'alicelogo.webp': require('../../assets/pngs/alicelogo.webp'),
    'doctolib.webp': require('../../assets/pngs/doctolib.webp'),
    'NAS.png': require('../../assets/pngs/NAS.png'),
    'autism360.png': require('../../assets/pngs/autism360.png'), 
    'journal.png': require('../../assets/pngs/journal.png'),
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

import { RouteProp } from '@react-navigation/native';
import Navigate from '../../components/Navigate';

type ReferencesDetailsRouteProp = RouteProp<{ params: { reference: ReferenceProps['reference'] } }, 'params'>;

export default function ReferencesDetails({ route }: { route: ReferencesDetailsRouteProp }) {

    const {reference} = route.params;
    const imageSource = imagesMapping[reference.image];

    function handlePress() { 
        Linking.openURL(reference.url);
    }

    return (
        <ImageBackground source={require("../../assets/pngs/references_background.png")} style={styles.container}>
            <View style={styles.background}>
                <View style={styles.topView}> 
                <Image source={imageSource} style={styles.image} />
                <View style={styles.rightView}>
                    <Text style={styles.title}>{reference.title}</Text>
                <Text style={styles.type}>{reference.type}</Text>
                <TouchableOpacity onPress={handlePress}>
                        <Navigate style={styles.nav}/>
                    <Text style={styles.url}>{reference.url}</Text>
                </TouchableOpacity>
               </View>
               
                     </View>
             
                <Text style={styles.descTitle}>Description  </Text>
                <Text style={styles.description}>{reference.description}</Text>

        </View>
        </ImageBackground>
    )
}


