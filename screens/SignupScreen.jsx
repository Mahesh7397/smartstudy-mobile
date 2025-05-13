import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import { useThemescontext } from '../context/ThemeContext'
import { Fonts } from '../constants/Fonts'
import { RFValue } from 'react-native-responsive-fontsize'

const { width } = Dimensions.get('window')

const SignupScreen = ({navigation}) => {

  const { theme } = useThemescontext()

  const [secure, setSecure] = useState(false);

  return (
    <Modal>
      
    </Modal>
  )
}

export default SignupScreen

const styles = StyleSheet.create({

})