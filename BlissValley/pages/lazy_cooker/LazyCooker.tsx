import { View, Text,  TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { } from 'react-native';
import styles from './LazyCookerStyle';
import axios from 'axios';
import DownloadButton from '../../components/DownloadButton';
import Piggy from '../../components/Piggy';
import Generate from '../../components/Generate';


export default function LazyCooker () {

    async function generateRecipe() {
        try {
            const response = await axios.post(
                'https://api.ai21.com/studio/v1/j2-ultra/complete',
                
                {
                  prompt: `Generate a short recipe, with only ingredients and directions that takes ${chosenCookingTime} to make, is a ${chosenMealType}, costs ${budgetOptions}, has a calories limit of ${caloriesLimitOptions}, and includes the following ingredients: ${ingredientsOptions}. Skip a line at every steps.`,
                  maxTokens: 500,
                },
                {
                    headers: {
                      'Authorization': `Bearer YgOTTBGg7TiGBpkJ7KUK2CRNQFRXfjkS
`, 
                    },
                }
                
              );

              console.log(response.data);
              setRecipe(response.data.completions[0].data.text);
        } catch (error) {
          console.error("Erreur lors de la génération du texte :", error);
        }
    }
   
    
    const cookingTimesOptions = ["under 15 minutes", "under 30 minutes", "under 45 minutes", "over 45 minutes"]
    const [chosenCookingTime, setChosenCookingTime] = useState("")
    const mealTypeOptions = ["breakfast", "lunch", "dinner", "snack"]
    const [chosenMealType, setChosenMealType] = useState("")
    const [budgetOptions, setBudgetOptions] = useState("")
    const [caloriesLimitOptions, setCaloriesLimitsOptions] = useState("")
    const [ingredientsOptions, seIngredientsOptions] = useState("")
    let generalPrompt = `Generate a recipe that takes ${cookingTimesOptions[0]} to make, is a ${mealTypeOptions[0]}, costs under ${budgetOptions} euros, has a calories limit of ${caloriesLimitOptions}, and includes the following ingredients: ${ingredientsOptions}`
   
    const [recipe, setRecipe] = useState("")

    console.log(budgetOptions)
    console.log(caloriesLimitOptions)
    console.log(ingredientsOptions)
    console.log(generalPrompt)

    function handleTimeOptionPress(option : string) {
        setChosenCookingTime(option)
    }

    function handleMealTypeOptionPress(option : string) {
        setChosenMealType(option)
    }

    console.log(recipe)

    return (
        <View style={styles.container}>


            <View style={styles.ingredientsView}>
                <Text style={styles.ingredientsText}>Enter ingredients</Text>
                <View style={styles.ingredientsOptionsView}>
                    <TextInput
                        style={styles.ingredientsInput}
                        placeholder="Enter ingredients"
                        onChangeText={(text) => seIngredientsOptions(text)}
                    />
                </View>
                </View>

            <View style={styles.timeView}>
                <Text style={styles.timeText}>Select a cooking time</Text>
                <View style={styles.timeOptionsView}>
                    {cookingTimesOptions.map((option, index) => (
                        <TouchableOpacity key={index} style={styles.timeOption} onPress={() => handleTimeOptionPress(option)}>
                            <Text style={styles.timeOptionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.mealTypeView}>
                <Text style={styles.mealTypeText}>Select a meal type</Text>
                <View style={styles.mealTypeOptionsView}>
                    {mealTypeOptions.map((option, index) => (
                        <TouchableOpacity key={index} style={[styles.mealTypeOption, chosenMealType === option && styles.selectedMealOption]} onPress={() => handleMealTypeOptionPress(option)}>
                            <Text style={styles.mealTypeOptionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.budgetView}>
                <Text style={styles.budgetText}>Enter a budget</Text>
                <View style={styles.budgetOptionsView}>
                    <TextInput
                        style={styles.budgetInput}
                        placeholder="Enter budget (optional)"
                        onChangeText={(text) => setBudgetOptions(text)}
                    />
                </View>
            </View>
            <View style={styles.caloriesLimitView}>
                <Text style={styles.caloriesLimitText}>Enter a calories limit</Text>
                <View style={styles.caloriesLimitOptionsView}>
                    <TextInput
                        style={styles.caloriesLimitInput} 
                        placeholder="Enter calories limit (optional)"
                        onChangeText={(text) => setCaloriesLimitsOptions(text)}
                    />
                </View>
            </View>
          

            <TouchableOpacity onPress={generateRecipe}>
                <Generate />
                <Text style={styles.generateText}>Let him cook !</Text>
            </TouchableOpacity>

       
            <View style={styles.recipeView}>
                <Text style={styles.recipeText}>{recipe}</Text>
                </View>

        </View>
    
    );
}