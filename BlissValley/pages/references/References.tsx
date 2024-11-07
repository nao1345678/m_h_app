import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './ReferencesStyle';
import Reference from '../../components/Reference';

export default function References({ navigation }) {
    const [groupedReferences, setGroupedReferences] = useState({});
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadRefs = async () => {
            setLoading(true);
            try {
                const jsonData = require('../../ressources/references.json');
                if (jsonData) {
                    // Group references by disorder
                    const allRefs = Object.keys(jsonData).flatMap(key => jsonData[key]);
                    const grouped = allRefs.reduce((acc, reference) => {
                        const disorder = reference.disorder || "Unknown Disorder"; // Ensure each reference has a disorder
                        if (!acc[disorder]) {
                            acc[disorder] = [];
                        }
                        acc[disorder].push(reference);
                        return acc;
                    }, {});

                    console.log('Grouped References:', grouped); // Debug log to check structure
                    setGroupedReferences(grouped);
                } else {
                    console.error('JSON data is empty or invalid');
                }
            } catch (error) {
                console.error('Erreur lors du chargement du fichier JSON :', error);
            } finally {
                setLoading(false);
            }
        };

        loadRefs();
    }, []);

    function handlePress(reference) {
        navigation.navigate('Reference Details', { reference });
    }

    // Function to filter references based on the search query
    const filterReferences = () => {
        if (!searchQuery) return groupedReferences;

        const filtered = {};
        Object.entries(groupedReferences).forEach(([disorder, refs]) => {
            const matchedRefs = refs.filter(ref =>
                ref.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            if (matchedRefs.length > 0) {
                filtered[disorder] = matchedRefs;
            }
        });
        return filtered;
    };

    const filteredReferences = filterReferences();

    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <ImageBackground source={require('../../assets/pngs/references_background.png')} resizeMode="cover" style={{ width: 400 }}>
            <ScrollView style={styles.container}>
        
                {loading ?  (
                   <></>
                ) : (
                    <>
                    <TextInput
                   placeholder="Search by title"
                   value={searchQuery}
                   onChangeText={setSearchQuery}
                   style={styles.searchInput}
                    />
                   
                   {Object.keys(filteredReferences).length > 0 ? (
                       Object.entries(filteredReferences).map(([disorder, refs], disorderIndex) => (
                           <View key={disorderIndex}>
                               <Text style={styles.disorderTitle}>{disorder.toUpperCase().replace("_", " ")}</Text>

                               {refs.map((reference, refIndex) => (
                                   <View key={refIndex}>
                                       <TouchableOpacity onPress={() => handlePress(reference)}>
                                           <Reference reference={reference} />
                                       </TouchableOpacity>
                                       <View
                                           style={{
                                               borderBottomColor: 'black',
                                               borderBottomWidth: StyleSheet.hairlineWidth,
                                           }}
                                       />
                                   </View>
                               ))}
                           </View>
                       ))
                   ) : (
                    <View style={styles.loadingContainer}>
                          <Image
                        source={require("../../assets/pngs/loadingbook.gif")}
                        style={{ width: 100 }}
                        resizeMode="contain"
                    />
                    </View>
                   )}
                   </>
                )}
            </ScrollView>
        </ImageBackground>
        </KeyboardAvoidingView>
    );
}
