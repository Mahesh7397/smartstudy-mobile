import { BackHandler, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Percentage from './CalculationScreeens/Percentage'
import GPA from './CalculationScreeens/GPA'
import Predictor from './CalculationScreeens/Predictor'
import { navigationRef } from '../../hooks/navigationRef'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useThemescontext } from '../../context/ThemeContext';
import {Fonts} from '../../constants/Fonts'
import { useNavigation } from '@react-navigation/native'

// const GradeStack=createNativeStackNavigator()
const GradeStack=createMaterialTopTabNavigator()

const {width,height}=Dimensions.get('screen')

const CalculatorScreen = (navigation) => {
  const {theme}=useThemescontext()
  
  return (
    <>
    <View style={{width:'100%',height:'40',justifyContent:'center',alignItems:'center',backgroundColor:theme.colors.background}}>
      <Text style={{fontSize:24,fontFamily:Fonts.poppins.Bold,color:theme.colors.text}}>Grade <Text style={{color:'#195EFF'}}>Ninja</Text></Text>
    </View>
    <GradeStack.Navigator screenOptions={{
      tabBarItemStyle:{width:width*0.32},
      tabBarStyle:{width:'100%',height:55,justifyContent:'space-evenly',alignItems:"center",backgroundColor:theme.colors.background, elevation: 0,
      shadowOpacity: 0, },
      tabBarScrollEnabled:true,
      tabBarIndicatorStyle: { backgroundColor: '#37648A', height: 4 ,width:width*0.32,marginHorizontal:width*0.02,borderRadius:'20%'},
      tabBarIndicatorContainerStyle:{
        width:'100%',
      },
      tabBarActiveTintColor:'#37648A',
      tabBarInactiveTintColor:theme.colors.text,
      tabBarPressColor:'rgba(0, 0, 0, 0)',
      tabBarAllowFontScaling:true,
    }}>
       <GradeStack.Screen name='percentage' component={Percentage} options={{
        tabBarLabel:({focused})=>(
          <Text style={{color:focused?"#37648A":theme.colors.text,fontFamily:Fonts.Roboto,fontWeight:focused?"bold":"400",fontSize:16}}>
            Percentage
          </Text>
        )
       }}/>
       <GradeStack.Screen name='gpa' component={GPA} options={{
        title:'GPA',
        tabBarLabel:({focused})=>(
          <Text style={{color:focused?"#37648A":theme.colors.text,fontFamily:Fonts.Roboto,fontWeight:focused?"bold":"400",fontSize:16}}>
            GPA
          </Text>
        )
       }}/>
       <GradeStack.Screen name='predictor' component={Predictor} options={{
        title:'Predictor',
        tabBarLabel:({focused})=>(
          <Text style={{color:focused?"#37648A":theme.colors.text,fontFamily:Fonts.Roboto,fontWeight:focused?"bold":"400",fontSize:16}}>
            Predictor
          </Text>
        )
       }} />
    </GradeStack.Navigator >
    </>
    
  )
}

export default CalculatorScreen

const styles = StyleSheet.create({})