import { Modal, StyleSheet, Text, View ,TextInput,Pressable, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useThemescontext } from '../../context/ThemeContext'
import { RFValue } from 'react-native-responsive-fontsize'
import { Fonts } from '../../constants/Fonts'
import auth from '@react-native-firebase/auth'

const ForgetPassword = ({viewforget,setviewforget}) => {

    const {theme}=useThemescontext()
    const [Email,setEmail]=useState("")

const [disable,setdisable]=useState(true)

const forgetpassword=()=>{
    auth().sendPasswordResetEmail(Email).then((res)=>{
        Alert.alert('Password Reset Email is send')
    }).catch((error)=>{
        console.log(error)
        Alert.alert(error.nativeErrorMessage)
    })
}

    useEffect(()=>{
        if(Email.includes('@gmail.com')){
            setdisable(false)
        }
        else{
            setdisable(true)
        }
    },[Email])

    return (
        <Modal visible={viewforget} transparent={true} animationType='slide' onRequestClose={()=>setviewforget(false)} >
               <Pressable style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(23, 26, 31, 0.4)',zIndex:-1 }} onPress={() => { setviewforget(false) }}/>
                          <View style={{
                              flex: 1, position: 'absolute', bottom: 0, top: '40%', right: 0, left: 0, backgroundColor: theme.colors.Modal, borderTopLeftRadius: 14, borderTopRightRadius: 14, justifyContent: 'space-evenly',
                              alignItems: 'center'
                          }}>
                            <View style={{width:'100%',height:'20%'}}>
                                 <Text style={[styles.headertext, { color: theme.colors.text }]}>
                                  Forgot your password? 
                              </Text >
                               <Text style={{color:theme.colors.text,fontSize:RFValue(14) ,fontFamily:Fonts.Roboto,fontWeight:'bold',textAlign:'center'}}>
                                we can either send you a link to reset your password, or a magic link that logs you instantly. 
                              </Text>
                            </View>
                             
                              <View style={styles.inputbox}>
                                  <Text style={{ color: theme.colors.text, fontSize: RFValue(18), fontFamily: Fonts.Roboto, fontWeight: 'bold', width: '80%', textAlign: 'left' }}>Email</Text>
                                  <TextInput style={{ width: 350, borderColor: '#bcc1ca', borderWidth: 1, backgroundColor: theme.dark?theme.colors.Modal:'#ffffff', height: 46, borderRadius: 12, fontSize: 20, fontFamily: Fonts.Roboto, fontWeight: 'regular', paddingHorizontal:10 ,shadowColor: 'black',
                                          shadowOffset: { width: 2, height: 2 },
                                          shadowOpacity: 0.5,
                                          shadowRadius: 3,
                                          elevation: 3,
                                          color:theme.dark?'#ffffff':theme.colors.text}} placeholder='Enter Your Email' value={Email} onChangeText={(text)=>setEmail(text)}/>
                                  <Pressable style={[styles.email_sigin, { backgroundColor: disable ? '#F3F4F6' : '#ffffff' }]} disabled={disable} onPress={()=>{
                                     forgetpassword()
                                     setviewforget(false)
                                  }}>
                                      <Text style={{ color: disable?'#9095A0':'#000000', fontFamily: Fonts.Roboto, fontSize: RFValue(14), fontWeight: '800', textAlign: 'center', paddingHorizontal: 4 }}>Reset password</Text>
                                  </Pressable>
                              </View>
                              <View style={styles.footer}>
                                  <Text style={{ color: theme.colors.text, fontFamily: Fonts.Roboto, fontWeight: '400',width:'90%', fontSize: RFValue(10), textAlign: 'center', padding: 2, margin: 2 }}>By signing up, you agree to the <Text style={{ color: '#2148A5' }}>Terms and Conditions </Text>and the <Text style={{ color: '#2148A5' }}>Privacy Policy</Text> of Smart Study</Text>
                              </View>
                          </View>
        </Modal>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
     headertext: {
        fontSize: RFValue(26),
        fontFamily: Fonts.poppins.Bold,
        width: '100%',
        textAlign: 'center'
    },
    inputbox: {
        width: '100%',
        height: '40%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    google: {
        width: '100%',
        height: '20%',
        justifyContent:'center',
        alignItems:'center'
    },
    footer: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    email_sigin: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        width: '80%',
        height: 46,
        borderWidth: 1,
        borderColor: 'rgba(73, 72, 72, 0.34)',
        borderRadius: 20,
        marginVertical: 8,
    },
     google_login: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        width: '80%',
        height: 46,
        borderWidth: 1,
        borderColor: 'rgba(83, 83, 83, 0.34)',
        borderRadius: 20,
        marginVertical: 8,
        backgroundColor: '#ffffff'
    },   
     google_image: {
        width: 30,
        height: 30,
    }
})