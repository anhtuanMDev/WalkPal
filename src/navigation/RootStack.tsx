import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PUBLIC_ROUTES } from './routes';
import LoginScreen from '../screens/LoginScreen';
const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <>
    <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'}/>
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name={PUBLIC_ROUTES.LOGIN_SCREEN} component={LoginScreen}/>
    </Stack.Navigator>
    </>
  )
}

export default RootStack