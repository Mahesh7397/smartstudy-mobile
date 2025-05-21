// OnboardingScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemescontext } from '../../context/ThemeContext';
import {Fonts} from '../../constants/Fonts'

export default function OnboardingScreen({navigation}) {
    const {theme}=useThemescontext()
  return (
    <LinearGradient
      colors={theme.dark?['#000000','#000000','#302E2E','#666666']:['#8AE0FF', '#BDEEFF','#F1F8FD']} // light blue gradient
      style={styles.container}
    >
      {/* Book Icon */}
      <View style={{width:'100%',height:'20%',justifyContent:'center',alignItems:'center'}}>
        <Image
        source={require('../../assets/images/icon.png')} // Your top book icon
        style={styles.bookIcon}
        resizeMode="contain"
      />
      </View>
      

      {/* Text */}
      <View style={{width:'100%',height:'60%',justifyContent:'center',alignItems:'center'
      }}>
        <Text style={[styles.title,{color:theme.colors.text
        }]}>
        Welcome to <Text style={styles.highlight}>Smart Study!</Text>
      </Text>
      <Text style={[styles.subtitle,{color:theme.colors.text}]}>Let me show you how things work around here</Text>
      </View>
      
      {/* Progress Dots */}
      <View style={{width:'100%',height:'20%',alignItems:'center',justifyContent:'center'}}>
      <View style={styles.dots}>
        <View style={[styles.activeDot,{backgroundColor:theme.dark?"#101327":"#184473"}]} />
        {[...Array(6)].map((_, index) => (
          <View key={index} style={[styles.inactiveDot]} />
        ))}
      </View>

      {/* Next Button */}
      
        <TouchableOpacity style={[styles.button,{backgroundColor:theme.dark?"#101327":"#184473"}]} onPress={()=>navigation.navigate('pageone')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookIcon: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    fontFamily:Fonts.poppins.Bold,
    textAlign: 'center',
    color: '#000',
  },
  highlight: {
    color: '#2962FF',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 20,
    fontFamily:Fonts.poppins.SemiBold,
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 5,
  },
  character: {
    width: 120,
    height: 120,
    marginVertical: 30,
  },
  dots: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 8,
  },
  activeDot: {
    width: 30,
    height: 6,
    borderRadius: 5,
  },
  inactiveDot: {
    width: 30,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#CFD8DC',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 40,
    width:'90%',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontFamily:Fonts.poppins.Bold
  },
});
