import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AccountCreatedScreen from './src/screens/AccountCreatedScreen';
import HomeScreen from './src/screens/HomeScreen';
import AgendaScreen from './src/screens/AgendaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={RegisterScreen} />
        <Stack.Screen name="ContaCriada" component={AccountCreatedScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Agenda" component={AgendaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}