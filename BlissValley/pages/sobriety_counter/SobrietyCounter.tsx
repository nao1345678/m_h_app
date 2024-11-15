import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import PurpleButton from '../../components/PurpleButton';
import Previous from '../../components/Previous';
import styles from './SobrietyCounterStyle';
import Star from '../../components/Star';
import Moon from '../../components/Moon';
import Grass from '../../components/Grass';
import Fox from '../../components/Fox';
import Arbre from '../../components/Arbre';
import AddictionButton from '../../components/Add';
import BlueBoot from '../../components/AddictionButton';
import Add from '../../components/Add';

export default function Sobriety() {
  const [listAddedAddictions, setListAddedAddictions] = useState<any[]>([
    { addiction: 'coffee', startingDate: '2023-5-10', reason: '' },
    { addiction: 'alcohol', startingDate: '2024-10-10' },
  ]);
  const [pressed, setPressed] = useState(false);
  const [addictionClicked, setAddictionClicked] = useState(false);
  const [selectedAddiction, setSelectedAddiction] = useState<any>(null);
  console.log(listAddedAddictions);

  const updateAddiction = (addiction: any) => {
    setAddictionClicked(true);
    setSelectedAddiction(addiction);
  };

  const deleteAddiction = (addiction: any) => {
    setListAddedAddictions(listAddedAddictions.filter((item) => item !== addiction));
    setAddictionClicked(false);
    setSelectedAddiction(null);
  };

  const resetStartingDate = (addiction: any) => {
    addiction.startingDate = new Date().toISOString().split('T')[0];
    setListAddedAddictions([...listAddedAddictions]);
  };

  const handleAddNew = () => {
    setPressed(true);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      addiction: '',
      startingDate: '',
      reason: '',
    },
  });

  const handlePrevious = () => {
    setAddictionClicked(false);
    setSelectedAddiction(null);
    setPressed(false);
  };

  const onSubmit = (data: any) => {
    setListAddedAddictions([...listAddedAddictions, data]);
    console.log([...listAddedAddictions, data]);
    console.log(data);
  };

  const [elapsedTimes, setElapsedTimes] = useState({});
  const [isRunning, setIsRunning] = useState(false);
  const intervalIds = useRef({});

  useEffect(() => {
    listAddedAddictions.forEach((addiction) => {
      const startTime = new Date(addiction.startingDate).getTime();
      const initialElapsedTime = Date.now() - startTime;
      setElapsedTimes((prevElapsedTimes) => ({
        ...prevElapsedTimes,
        [addiction.addiction]: initialElapsedTime,
      }));
      startStopwatch(addiction.addiction, startTime);
    });

    return () => {
      Object.values(intervalIds.current).forEach(clearInterval);
    };
  }, [listAddedAddictions]);


  const startStopwatch = (addictionName, startTime) => {
    intervalIds.current[addictionName] = setInterval(() => {
      setElapsedTimes((prevElapsedTimes) => ({
        ...prevElapsedTimes,
        [addictionName]: Date.now() - startTime,
      }));
    }, 1000);
  };

  const formatTime = (elapsedTime) => {
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24)% 30);
    const months = Math.floor(elapsedTime / (1000 * 60 * 60 * 24* 30) % 12);
    const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24* 30* 12));

    return `${years}y ${months}m ${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  return (
    <View style={styles.container}>
      <Moon style={{
        position: 'absolute',
        top: 60,
        left : 50 
        }} />
      <Star style={{
        position: 'absolute',
        top: 100,
        left : 330 
        }} />
      <Star  style={{
        position: 'absolute',
        top: 123,
        left : 20 
        }} />
      <Star  style={{
        position: 'absolute',
        top: 200,
        left : 90 
        }} />
      <Star  style={{
        position: 'absolute',
        top: 60,
        left : 280 
        }}/>

      <Star style={{
        position: 'absolute',
        top: 103,
        left : 180 
        }}/>
      <Star style={{
      position: 'absolute',
      top: 240,
      left : 295 
      }}/>
      <Star style={{
      position: 'absolute',
      top: 180,
      left : 190 
      }}/>
      <Star style={{
      position: 'absolute',
      top: 260,
      left : 36 
      }}/>

      {pressed ? (
        <View>
          <View style={styles.form}>
            <Text style={styles.label}> I wanna be free from : </Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Addiction"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="addiction"
            />
            {errors.addiction && <Text style={styles.errorText}>This is required.</Text>}

            <Text style={styles.label}> Starting date : </Text>
            <Controller
              control={control}
              rules={{
                maxLength: 10,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Starting date (format : yyyy-mm-dd)"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              )}
              name="startingDate"
            />

            {errors.startingDate && <Text style={styles.errorText}>This is required.</Text>}
            <Text style={styles.label}>Why ?</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Reason"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="reason"
            />

            <TouchableOpacity onPress={() => { handleSubmit(onSubmit)(); setPressed(false); }}>
              <PurpleButton />
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <View>
            
          </View>
          
          {addictionClicked && selectedAddiction ? (
            <View>
             <View style={styles.addictionBox}>
             <Text style={styles.addictionText}>{selectedAddiction.addiction} free for</Text>
             <Text style={styles.addictionTime}>{formatTime(elapsedTimes[selectedAddiction.addiction]) || 0}</Text>
             </View>
              <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => { deleteAddiction(selectedAddiction); }}>
                <BlueBoot style={styles.buttonBoot}/>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => [resetStopwatch(), resetStartingDate(selectedAddiction)]}>
                <BlueBoot style={styles.buttonBoot} />
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
                 </View>
            
              <TouchableOpacity onPress={handlePrevious} style={styles.previous}>
                <Previous />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              
             
            <View style={styles.addictionList}>
              {listAddedAddictions.map((addiction, key) => {
                return (
                  <View key={key} style={styles.addictionBox}>
                    <TouchableOpacity onPress={() => updateAddiction(addiction)}>
                      <Text style={styles.addictionText}>{addiction.addiction} free for</Text>
                      <Text style={styles.addictionTime}>{formatTime(elapsedTimes[addiction.addiction]) || 0}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            <TouchableOpacity onPress={handleAddNew}>
            <View style={styles.addContainer}>
              <Add />
            </View>
          </TouchableOpacity>
               </View>
            
          )}
        </View>
      )}
      <Grass style={{
        position: 'absolute',
        bottom: -20,
      }} />
      <Fox style={{
        position: 'absolute',
        bottom: -5,
        left : 30
      }} 
      
      />
      <Arbre style={{
        position: 'absolute',
        bottom: -20,
        right : -50
      }}/>
    </View>
  );
}
