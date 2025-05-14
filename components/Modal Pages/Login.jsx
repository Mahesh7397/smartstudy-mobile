import { Modal, StyleSheet, Text, View, Pressable, TextInput, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useThemescontext } from '../../context/ThemeContext'
import { RFValue } from 'react-native-responsive-fontsize'
import { Fonts } from '../../constants/Fonts'
import auth from '@react-native-firebase/auth'

const Login = ({ viewlogin, setviewlogin ,setviewforget}) => {

    const { theme } = useThemescontext()

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [disable, setdisable] = useState(true)

    const Handlelogin=()=>{
        auth().signInWithEmailAndPassword(email,password).then((res)=>{
           console.log(res)
        }).catch((error)=>{
            console.log(error)
            Alert.alert(error.nativeErrorMessage)
        })
    }

    useEffect(() => {
        if (email.includes('@gmail.com') & (password.length >=6)) {
            setdisable(false)
        }
        else {
            setdisable(true)
        }
    }, [email, password])

    return (
        <Modal visible={viewlogin} transparent={true} onRequestClose={() => { setviewlogin(false) }} animationType='slide'>
            <Pressable style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(23, 26, 31, 0.4)', zIndex: -1 }} onPress={() => { setviewlogin(false) }} />
            <View style={{
                flex: 1, position: 'absolute', bottom: 0, top: '20%', right: 0, left: 0, backgroundColor: theme.colors.Modal, borderTopLeftRadius: 14, borderTopRightRadius: 14, justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <View style={{ height: '15%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.headertext, { color: theme.colors.text }]}>
                        Login to your account
                    </Text >
                </View>
                <View style={styles.loginbox}>
                    <View style={styles.inputbox}>
                        <Text style={{ color: theme.colors.text, fontSize: RFValue(16), fontFamily: Fonts.Roboto, fontWeight: 'bold', width: '80%', textAlign: 'left' }}>Email</Text>
                        <TextInput style={{
                            width: 350, borderColor: '#bcc1ca', borderWidth: 1, backgroundColor: theme.dark?theme.colors.Modal:'#ffffff', height: 46, borderRadius: 12, fontSize: 20, fontFamily: Fonts.Roboto, fontWeight: 'regular', paddingHorizontal: 10, shadowColor: 'black',
                            shadowOffset: { width: 2, height: 2 },
                            shadowOpacity: 0.5,
                            shadowRadius: 3,
                            elevation: 3
                        }} placeholder='Enter Your Email' value={email} onChangeText={(text) => setemail(text)} />
                    </View>
                    <View style={styles.inputbox}>
                        <Text style={{ color: theme.colors.text, fontSize: RFValue(16), fontFamily: Fonts.Roboto, fontWeight: 'bold', width: '80%', textAlign: 'left' }}>Password</Text>
                        <TextInput style={{
                            width: 350, borderColor: '#bcc1ca', borderWidth: 1,backgroundColor: theme.dark?theme.colors.Modal:'#ffffff', height: 46, borderRadius: 12, fontSize: 20, fontFamily: Fonts.Roboto, fontWeight: 'regular', paddingHorizontal: 10, shadowColor: 'black',
                            shadowOffset: { width: 2, height: 2 },
                            shadowOpacity: 0.5,
                            shadowRadius: 3,
                            elevation: 3
                        }} placeholder='Enter Password' secureTextEntry value={password} onChangeText={(text) => setpassword(text)} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: '50%' }}>
                       <Pressable onPress={()=>{
                        setviewlogin(false)
                        setviewforget(true)
                       }
                        }>
                        <Text style={{color:"#2148a5",fontSize:16,fontFamily:Fonts.Roboto,fontWeight:'regular',padding:5,
                            margin:5
                        }}>Forgot your password?</Text>
                       </Pressable>
                        <Pressable style={[styles.email_sigin, { backgroundColor: disable ? '#f3f4f6' : '#ffffff' }]} disabled={disable} onPress={()=>Handlelogin()}>
                            <Text style={{ color: '#000000', fontFamily: Fonts.Roboto, fontSize: RFValue(14), fontWeight: '800', textAlign: 'center', paddingHorizontal: 4 }}>Login</Text>
                        </Pressable>
                        <Pressable style={styles.google_login} >
                            <Image source={require('../../assets/images/Logo/Google.png')} style={styles.google_image} resizeMode='cover' />
                            <Text style={{ color: '#000000', fontFamily: Fonts.Roboto, fontSize: RFValue(14), fontWeight: '800', textAlign: 'center', paddingHorizontal: 4 }}>Continue with Google</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={{ color: theme.colors.text, fontFamily: Fonts.Roboto, fontWeight: '400', width: '90%', fontSize: RFValue(14), textAlign: 'center', padding: 2, margin: 2 }} onPress={()=>{
                        setviewlogin(false)
                    }}>Don't have an account ? <Text style={{ color: '#2148A5' }}>Sign up </Text></Text>
                </View>
            </View>
        </Modal>
    )
}

export default Login

const styles = StyleSheet.create({
    headertext: {
        fontSize: RFValue(20),
        fontFamily: Fonts.poppins.Bold,
        width: '100%',
        textAlign: 'center'
    },
    inputbox: {
        width: '100%',
        height: '25%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    google: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
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
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 2
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
        backgroundColor: '#ffffff',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,

    },
    google_image: {
        width: 30,
        height: 30,
    },
    loginbox: {
        width: '100%',
        height: '70%',
    }
})