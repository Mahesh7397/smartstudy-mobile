import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemescontext } from '../context/ThemeContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartingScreen from '../screens/StartingScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

const Stack=createNativeStackNavigator()

const StartScreen = () => {

  const { theme }=useThemescontext()

  return (
    <Stack.Navigator initialRouteName='start' screenOptions={{
      headerShown:false,
    }}>
      <Stack.Screen name='start' component={StartingScreen}/>
      <Stack.Screen name='login' component={LoginScreen}/>
      <Stack.Screen name='signup' component={SignupScreen}/>
    </Stack.Navigator>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
  },
})