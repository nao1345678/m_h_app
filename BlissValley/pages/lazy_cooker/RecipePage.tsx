import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import  styles from './RecipePageStyle'
export default function RecipePage({route}) {
    const { recipe } = route.params


  return (
    <View style={styles.container}>
        <Image source={require("../../assets/pngs/dK58Rm.png")} style={styles.book} resizeMode='contain'/>
      <Text style={styles.title}>Recipe</Text>
        <Text style={styles.recipe}>{recipe}</Text>
    </View>
  )
}


