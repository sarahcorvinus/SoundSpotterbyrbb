import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../lib/firebaseConfig';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const handleSignIn = async () => {
    setIsSubmitting(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('(tabs)', { screen: 'Karte' });
    } catch (error) {
      alert('Error registering user: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.SoundSpotterLogo} resizeMode='contain' className="w-[140px] h-[40px]" />

          <Text className="text-xl text-white mt-8 font-psemibold">Melde dich bei SoundSpotter an</Text>

          <FormField
            title="Email"
            value={email}
            handleChangeText={setEmail}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Passwort"
            value={password}
            handleChangeText={setPassword}
            otherStyles="mt-7"
            secureTextEntry={!isPasswordVisible}
            toggleSecureEntry={() => setIsPasswordVisible(!isPasswordVisible)}
          />

          <CustomButton
            title="Anmelden"
            handlePress={handleSignIn}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flew-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Noch kein Account?
            </Text>
            <Link href="/SignUp" className="text-lg font-psemibold text-secondary">Registieren</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
