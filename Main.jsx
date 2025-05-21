import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StartScreen from './navigation/StartScreen'
import Loading from './components/Loading'
import { useFontsContext } from './context/FontsContext'
import { useSupplayContext } from './context/SupplayContext'
import StackScreen from './navigation/StackScreen'
import { useThemescontext } from './context/ThemeContext'
import WelcomeScreen from './navigation/WelcomeScreen'

const Main = () => {

  const {fontsloading}=useFontsContext()
  const { user , isloading }=useSupplayContext()

  const {theme}=useThemescontext()

  return (
    <View style={{flex:1,backgroundColor:theme.colors.background}}>{fontsloading & isloading?<Loading/>:
    //  user!==null? <StackScreen/>:
    // <StartScreen/>
    <WelcomeScreen/>
    }
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})