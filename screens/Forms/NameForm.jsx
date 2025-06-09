import { View, Text, TextInput, StyleSheet, Image, SafeAreaView, Pressable  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useThemescontext } from '../../context/ThemeContext'
import {ArrowRight} from 'phosphor-react-native'
import { Fonts } from '../../constants/Fonts'
import { useSupplayContext } from '../../context/SupplayContext'

const NameForm = ({navigation}) => {
  const {theme}=useThemescontext()
  const {name,setname}=useSupplayContext()
  const [disable,setdisable]=useState(true)
  useEffect(()=>{
     if(name.length>3){
      setdisable(false)
     }
     else{
           setdisable(true)
     }
  },[name])
  return (
    <LinearGradient 
    colors={theme.dark?['#000000','#000000','#302E2E','#666666']:['#8AE0FF', '#BDEEFF','#F1F8FD']} // light blue gradient
      style={styles.container}
    >
    <SafeAreaView style={styles.safeArea}>
        <View style={[styles.messageBox,{backgroundColor:theme.dark?'#3A6678':'#B2EAFF'}]}>
          <Image
            source={require('../../assets/images/ghost.png')} // Replace with your own asset if needed
            style={styles.emoji}
            resizeMode='contain'
          />
          <Text style={[styles.message,{color:theme.colors.text}]}>
            Let's get started,{"\n"}
            <Text style={styles.boldText}>What's your name?</Text>
          </Text>
        </View>

        <TextInput
          placeholder="Your first name..."
          placeholderTextColor="#888"
          style={[styles.input,{backgroundColor:theme.dark?'#1E2128':'#E5F8FF',color:theme.colors.text
          }]}
          value={name}
          onChangeText={(text)=>setname(text)}
        />
        <Pressable style={[styles.button,{backgroundColor:theme.dark?"#101327":"#184473"}]} onPress={()=>navigation.navigate('2')
        } disabled={disable}>
              <ArrowRight size={38} color="#fcfcfc" weight='bold'/>              
        </Pressable>
      </SafeAreaView>

    </LinearGradient>
  )
}

export default NameForm

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    width:'100%',
    height:'100%'
  },  
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  },
  messageBox: {
    backgroundColor: '#b3e5fc',
    borderRadius: 20,
    padding: 20,
    position:'absolute',
    top:'30%',
    bottom:'53%',
    width:'90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  emoji: {
    width: '40%',
    height:'160%' ,
    marginRight: 15,
  },
  message: {
    fontSize: 20,
    fontFamily:Fonts.poppins.Bold,
    width:'60%'
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#184473',
    borderRadius: 20,
    padding: 15,
    fontSize: 20,
    paddingHorizontal:10,
    position:'absolute',
    top:'47%',
    bottom:'47%'
  },
  button:{
    width:'80',
    height:'80',
    borderRadius:20,
    position:'absolute',
    right:'10%',
    bottom:'5%',
    justifyContent:'center',
    alignItems:"center"
  }
})