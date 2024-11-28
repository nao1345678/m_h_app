import React, { useState } from 'react';
import { View, Text, TextInput, Modal, Image, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './AuthStyles';
import PurpleButton from '../../components/PurpleButton';
import Previous from '../../components/Previous';
import { useFonts } from 'expo-font';
import axios from 'axios';



const Auth: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Consolas': require('../../assets/fonts/Consolas.ttf'),
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),

  });

  const navigation = useNavigation();
  const [showSignupModal, setShowSignupModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: boolean }>({
    firstName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });


const handleLogin = async () => {
  if (!email || !password) {
    setLoginError('Tous les champs doivent être remplis.');
    return;
  }

  try {
    const response = await fetch('http://172.28.8.36:2999/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      console.log('Connexion réussie');
      navigation.navigate('Home' as never); 
    } else {
      const errorMessage = await response.text();
      setLoginError(errorMessage);
    }
  } catch (error) {
    console.error('Erreur réseau :', error);
    setLoginError('Une erreur est survenue. Veuillez réessayer.');
  }
};


  const handleSignupModalClose = () => {
    setShowSignupModal(false);
    setFirstName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFieldErrors({
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      confirmPassword: false,
    });
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
    setEmail('');
    setPassword('');
    setLoginError('');
  };

  const handleSignupWithXHR = async () => {
    const xhr = new XMLHttpRequest();
  
    xhr.open('POST', 'http://172.28.8.36:2999/signup');
  
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) { // Requête terminée
        if (xhr.status === 200) {
          console.log('Inscription réussie :', xhr.responseText);
          navigation.navigate('Home' as never);
        } else {
          console.error('Erreur lors de l\'inscription :', xhr.responseText);
          setLoginError(xhr.responseText || 'Une erreur est survenue.');
        }
      }
    };
  
    xhr.onerror = (error) => {
      console.error('Erreur réseau :', error);
      console.error('Erreur réseau :', error);
      console.log('URL appelée :', xhr._url); // Vérifiez l’URL
      console.log('Méthode utilisée :', xhr._method);
      console.log('Headers envoyés :', xhr._headers);
      console.log('Données envoyées :', xhr._body); // Ajoutez si nécessaire
      setLoginError('Une erreur réseau est survenue. Veuillez réessayer.');
      setLoginError('Une erreur réseau est survenue. Veuillez réessayer.');
    };
  
    xhr.send(
      JSON.stringify({
        firstName,
        email,
        password,
      })
    );
  };
  
  
  

  const handleLoginWithXHR = async () => {
    const xhr = new XMLHttpRequest();
  
    xhr.open('POST', 'http://172.28.8.36:2999/login');
  
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Connexion réussie :', xhr.responseText);
          navigation.navigate('Home' as never);
        } else {
          console.error('Erreur de connexion :', xhr.responseText);
          setLoginError(xhr.responseText || 'Une erreur est survenue.');
        }
      }
    };
  
    xhr.onerror = (error) => {
      console.error('Erreur réseau :', error);
      setLoginError('Une erreur réseau est survenue. Veuillez réessayer.');
    };
  
    xhr.send(
      JSON.stringify({
        email,
        password,
      })
    );
  };
  

  return (
   
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <View style={styles.logoShadow}>
            <Image source={require('../../assets/pngs/tree.png')} style={styles.logo} />
          </View>
        </View>


        <Text style={styles.title}>Authentication</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setShowSignupModal(true)}>
            <PurpleButton/>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setShowLoginModal(true)}>
            <PurpleButton/>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => navigation.navigate('Home' as never)}>
            <Text>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Modale d'inscription */}
        <Modal visible={showSignupModal} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.Titre}>Name:</Text>
            <TextInput style={[styles.input, fieldErrors.firstName ? { borderColor: 'red', color: 'black' } : { color: 'black' }]} value={firstName} onChangeText={(text) => {
              setFirstName(text);
              setFieldErrors({ ...fieldErrors, firstName: false });
            }} />
            <Text style={styles.Titre}>Email:</Text>
            <TextInput style={[styles.input, fieldErrors.email ? { borderColor: 'red', color: 'black' } : { color: 'black' }]} value={email} onChangeText={(text) => {
              setEmail(text);
              setFieldErrors({ ...fieldErrors, email: false });
            }} />
            <Text style={styles.Titre}>Password:</Text>
            <TextInput style={[styles.input, fieldErrors.password ? { borderColor: 'red', color: 'black' } : { color: 'black' }]} value={password} onChangeText={(text) => {
              setPassword(text);
              setFieldErrors({ ...fieldErrors, password: false });
            }} secureTextEntry />
            <Text style={styles.Titre}>Confirm password:</Text>
            <TextInput style={[styles.input, fieldErrors.confirmPassword ? { borderColor: 'red', color: 'black' } : { color: 'black' }]} value={confirmPassword} onChangeText={(text) => {
              setConfirmPassword(text);
              setFieldErrors({ ...fieldErrors, confirmPassword: false });
            }} secureTextEntry />
            <View style={styles.modalButtonContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={handleSignupWithXHR}>
            <PurpleButton />
            <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={handleSignupModalClose}>
              <Previous/>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modale de connexion */}
        <Modal visible={showLoginModal} animationType="slide">
          <View style={styles.modalContainer}>
            {loginError !== '' && <Text style={styles.errorText}>{loginError}</Text>}
            <Text style={styles.Titre}>Email :</Text>
            <TextInput style={[styles.input, fieldErrors.email ? { borderColor: 'red', color: 'black' } : { color: 'black' }]} value={email} onChangeText={(text) => {
              setEmail(text);
              setFieldErrors({ ...fieldErrors, email: false });
            }} />
            <Text style={styles.Titre}>Password:</Text>
            <TextInput style={[styles.input, fieldErrors.password ? { borderColor: 'red', color: 'black' } : { color: 'black' }]} value={password} onChangeText={(text) => {
              setPassword(text);
              setFieldErrors({ ...fieldErrors, password: false });
            }} secureTextEntry />
            <View style={styles.modalButtonContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={handleLoginWithXHR}>
            <PurpleButton/>
                <Text style={styles.buttonText}>Connexion</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleLoginModalClose}>
              <Previous/>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

  );
};

export default Auth;
