import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { icons } from '../../constants';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../lib/firebaseConfig';

const SignUpFan = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const auth = FIREBASE_AUTH;
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('Die Passwörter stimmen nicht überein!');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('User registered successfully!');
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
          <TouchableOpacity onPress={() => router.push('/index')}>
            <Image 
              source={images.SoundSpotterLogo} 
              resizeMode='contain' 
              className="w-[140px] h-[40px]" 
            />
          </TouchableOpacity>

          <Text className="text-xl text-white mt-8 font-psemibold">Registriere dich bei SoundSpotter</Text>

          <FormField
            title="Email"
            value={email}
            handleChangeText={setEmail}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <View className="relative mt-7">
            <FormField
              title="Passwort"
              value={password}
              handleChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
              toggleSecureEntry={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </View>

          <View className="relative mt-7">
            <FormField
              title="Passwort bestätigen"
              value={confirmPassword}
              handleChangeText={setConfirmPassword}
              secureTextEntry={!isConfirmPasswordVisible}
              toggleSecureEntry={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
            />
          </View>

          <CustomButton
            title="Registrieren"
            handlePress={handleSignUp}
            containerStyles="mt-12"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-8 flex-row gap-2 mb-10">
            <Text className="text-lg text-gray-100 font-pregular">
              Account schon vorhanden?
            </Text>
            <Link href="/SignIn" className="text-lg font-psemibold text-secondary">Anmelden</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpFan;