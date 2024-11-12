import React, { useState } from 'react';
import { View, Text, TextInput, Modal, Image, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './AuthStyles';
import PurpleButton from '../../components/PurpleButton';
import Previous from '../../components/Previous';
import { useFonts } from 'expo-font';
import bcrypt from 'react-native-bcrypt';


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

  const hashPassword = async (password: string)  => {
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0/\/", salt);
    console.log(hash);
    return hash;
  };

const handleSignup = (
  firstName: string,
  emailOrPhone: string,
  password: string,
  confirmPassword: string,
  navigation: any,
  setShowSignupModal: (value: boolean) => void,
  setFirstName: (value: string) => void,
  setEmailOrPhone: (value: string) => void,
  setPassword: (value: string) => void,
  setConfirmPassword: (value: string) => void
) => {
  if (!firstName || !emailOrPhone || !password || !confirmPassword) {
    console.error('Tous les champs doivent être remplis.');
    return;
  }

  if (password !== confirmPassword) {
    console.error('Les mots de passe ne correspondent pas.');
    return;
  }

  navigation.navigate('Home' as never);
  setFirstName('');
  setEmailOrPhone('');
  setPassword('');
  setConfirmPassword('');
  setShowSignupModal(false);
};


const handleLogin = (emailOrPhone: string, password: string, navigation: any, setShowLoginModal: (value: boolean) => void, setEmailOrPhone: (value: string) => void, setPassword: (value: string) => void) => {
    if (emailOrPhone === 'test@example.com' && password === 'password') {
        navigation.navigate('Home' as never);
        setEmailOrPhone('');
        setPassword('');
        setShowLoginModal(false);
    } else {
        setLoginError('Email or password is incorrect.');
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

  const handleSignupValidation = () => {
    const errors: { [key: string]: boolean } = {
      firstName: !firstName,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword || password !== confirmPassword,
    };

    setFieldErrors(errors);

    if (Object.values(errors).some(error => error)) {
      return;
    }

    handleSignup(firstName, email, password, confirmPassword, navigation, setShowSignupModal, setFirstName, setEmail, setPassword, setConfirmPassword);
  };

  const handleLoginValidation = () => {
    const errors: { [key: string]: boolean } = {
      email: !email,
      password: !password,
    };

    setFieldErrors(errors);

    if (Object.values(errors).some(error => error)) {
      return;
    }

    handleLogin(email, password, navigation, setShowLoginModal, setEmail, setPassword);
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
              <TouchableOpacity style={styles.modalButton} onPress={handleSignupValidation}>
                <PurpleButton/>
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
            <TouchableOpacity style={styles.modalButton} onPress={handleLoginValidation}>
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
