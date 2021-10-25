import React from 'react';
import { StatusBar } from 'expo-status-bar'
import AppNavigator from './navigation/AppNavigator';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Fonts from './constants/Fonts';
export default function App() {
  const [loaded, error] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  if (!loaded) return <View />
  if (error) return <View>
    <Text>There was an error in loading the required fonts. Please close the app from the app drawer and launch it again.</Text>
  </View>
  Fonts.fontsLoaded = true;
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <AppNavigator />
    </NavigationContainer>
  );
}
