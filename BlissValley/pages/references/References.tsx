import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './ReferencesStyle'

export default function References() {

const [references, setReferences] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const jsonData = require('../../ressources/references.json');
          setReferences(jsonData); 
      } catch (error) {
        console.error('Erreur lors du chargement du fichier JSON :', error);
      }
    };

    loadProducts(); 
  }, []);

  return (
        <ScrollView style={styles.container}>
            <Text>References</Text>
        </ScrollView>
  )
}


