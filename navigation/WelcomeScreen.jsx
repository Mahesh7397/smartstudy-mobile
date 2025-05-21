import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/Welcome/OnboardingScreen'
import Pageone from '../screens/Welcome/Pageone'
import Pagetwo from '../screens/Welcome/Pagetwo'
import Pagethree from '../screens/Welcome/Pagethree'
import Pagefour from '../screens/Welcome/Pagefour'
import Pagefive from '../screens/Welcome/Pagefive'
import Pagesix from '../screens/Welcome/Pagesix'
import NameForm from '../screens/Forms/NameForm'
import CollegeForm from '../screens/Forms/CollegeForm'
import DegreeForm from '../screens/Forms/DegreeForm'
import DegreeName from '../screens/Forms/DegreeName'
import YearForm from '../screens/Forms/YearForm'
import SubmitForm from '../screens/Forms/SubmitForm'

const Stack=createNativeStackNavigator()

const WelcomeScreen = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{
            headerShown:false
         }}>
            <Stack.Screen name='wellcome' component={OnboardingScreen}/>
            <Stack.Screen name='pageone' component={Pageone}/>
            <Stack.Screen name='pagetwo' component={Pagetwo}/>
            <Stack.Screen name='pagethree' component={Pagethree}/>
            <Stack.Screen name='pagefour' component={Pagefour}/>
            <Stack.Screen name='pagefive' component={Pagefive}/>
            <Stack.Screen name='pagesix' component={Pagesix}/>
            <Stack.Screen name='1' component={NameForm}/>
            <Stack.Screen name='2' component={CollegeForm}/>
            <Stack.Screen name='3' component={DegreeForm}/>
            <Stack.Screen name='4' component={DegreeName}/>
            <Stack.Screen name='5' component={YearForm}/>
            <Stack.Screen name='6' component={SubmitForm}/>
        </Stack.Navigator>   
    </NavigationContainer>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})