import { View, Text } from 'native-base';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import styles from '../../pages/lazy_cooker/LazyCooker';

const LazyCooker = () => {
    
    const cookingTimesOptions = ["under 20 minutes", "under 30 minutes", "under 45 minutes", "over 45 minutes"]
    const mealTypeOptions = ["breakfast", "lunch", "dinner", "snack"]
    const [budgetOptions, setBudgetOptions] = useState("")
    const [caloriesLimitOptions, setCaloriesLimitsOptions] = useState("")
    const [ingredientsOptions, seIngredientsOptions] = useState("")


    return (
        <View>
            <View style={styles.timeView}>
                <Text style={styles.timeText}>Select a cooking time</Text>
                <View style={styles.timeOptionsView}>
                    {cookingTimesOptions.map((option, index) => (
                        <TouchableOpacity key={index} style={styles.timeOption}>
                            <Text style={styles.timeOptionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.mealTypeView}>
                <Text style={styles.mealTypeText}>Select a meal type</Text>
                <View style={styles.mealTypeOptionsView}>
                    {mealTypeOptions.map((option, index) => (
                        <TouchableOpacity key={index} style={styles.mealTypeOption}>
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
                        placeholder="Enter budget"
                        onChangeText={(text) => setBudgetOptions(text)}
                    />
                </View>
            </View>
            <View style={styles.caloriesLimitView}>
                <Text style={styles.caloriesLimitText}>Enter a calories limit</Text>
                <View style={styles.caloriesLimitOptionsView}>
                    <TextInput
                        style={styles.caloriesLimitInput} 
                        placeholder="Enter calories limit"
                        onChangeText={(text) => setCaloriesLimitsOptions(text)}
                    />
                </View>
            </View>
            <View style={styles.ingredientsView}>
                <Text style={styles.ingredientsText}>Enter ingredients (separate each ingredient with a coma)</Text>
                <View style={styles.ingredientsOptionsView}>
                    <TextInput
                        style={styles.ingredientsInput}
                        placeholder="Enter ingredients"
                        onChangeText={(text) => seIngredientsOptions(text)}
                    />
                </View>

            <TouchableOpacity>
                <Text>Generate a recipe</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

export default LazyCooker;