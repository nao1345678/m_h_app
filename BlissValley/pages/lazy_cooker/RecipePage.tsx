import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import  styles from './RecipePageStyle'
export default function RecipePage({route}) {
    const { recipe } = route.params


  return (
    <View style={styles.container}>
      <Text>Recipe</Text>
        <Text>{recipe}</Text>
    </View>
  )
}


