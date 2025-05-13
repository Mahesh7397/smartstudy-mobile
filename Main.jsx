import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StartScreen from './navigation/StartScreen'
import Loading from './components/Loading'
import { useFontsContext } from './context/FontsContext'

const Main = () => {

  const {fontsloading}=useFontsContext()

  return (
    <>{false?<Loading/>:<StartScreen/>}
    </>
  )
}

export default Main

const styles = StyleSheet.create({})