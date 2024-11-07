import { Text, View, TextInput, Button, Alert, TouchableOpacity } from "react-native"
import { useForm, Controller } from "react-hook-form"
import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";


export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      addiction: "",
      startingDate: "",
      reason: "",
    },
  })
  const onSubmit = (data: any) => console.log(data)

  const addictions = [
    "Alcohol",
    "Barbiturates",
    "Caffeine",
    "Cannabis",
    "Cocaine",
    "Crack",
    "Drugs",
    "Ecstasy (MDMA)",
    "Exercise Addiction",
    "Fentanyl",
    "Food Addiction",
    "Gambling",
    "GHB (Gamma-Hydroxybutyrate)",
    "Heroin",
    "Inhalants (e.g., Glue, Paint Thinners)",
    "Internet",
    "Ketamine",
    "LSD",
    "Magic Mushrooms (Psilocybin)",
    "Methadone",
    "Methamphetamine",
    "Nicotine",
    "PCP (Phencyclidine)",
    "Pornography",
    "Prescription Benzodiazepines",
    "Prescription Drugs",
    "Prescription Opioids",
    "Prescription Stimulants (e.g., Adderall, Ritalin)",
    "Self-Harm",
    "Sex",
    "Shopping",
    "Smartphone",
    "Social Media",
    "Spice (Synthetic Cannabinoids)",
    "Streaming",
    "Sugar",
    "Synthetic Cathinones (e.g., Bath Salts)",
    "Television",
    "Tobacco",
    "Vaping",
    "Video Games",
    "Workaholism"
  ];
  

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Addiction"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="addiction"
      />
      {errors.addiction && <Text>This is required.</Text>}


      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <RNDateTimePicker 
                value={new Date()} 
                mode="date" 
                display="spinner" 
                minimumDate={new Date(1970, 0, 1)}
                maximumDate={new Date()} 
                onChange={onChange} />
  )}
        name="startingDate"
      />
      {errors.startingDate && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Reason"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="startingDate"
      />

        <TouchableOpacity  onPress={handleSubmit(onSubmit)}>
            <Text>Add</Text>
        </TouchableOpacity>
    </View>
  )
}