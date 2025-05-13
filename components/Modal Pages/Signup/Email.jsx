import { Modal, Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { useThemescontext } from '../../../context/ThemeContext'
import { RFValue } from 'react-native-responsive-fontsize'
import { Fonts } from '../../../constants/Fonts'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth';

const Email = ({ emailview, setemailview,Email,setEmail,disable,setviewpassword }) => {

    const { theme } = useThemescontext()

    const onGoogleButtonPress = async () => {
                    try {
                        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
                        const signInResult = await GoogleSignin.signIn();
                        idToken = signInResult.data?.idToken;
                        if (!idToken) {
                            idToken = signInResult.idToken;
                        }
                        if (!idToken) {
                            throw new Error('No ID token found');
                        }
                        console.log(idToken)
                        console.log(signInResult.data)
                        const googleCredential = GoogleAuthProvider.credential(signInResult.data.idToken);
                        return signInWithCredential(getAuth(), googleCredential);
                    }
            
                    catch (error) {
                        console.log(error)
                    }
                }
                
        
            
            useEffect(() => {
                GoogleSignin.configure({
                    webClientId: '486980675643-antjebufos64bv8837on6ctmufe7afh9.apps.googleusercontent.com',
                });
            }, [])

    return (
        <Modal visible={emailview} transparent={true} onRequestClose={() => { setemailview(false) }} animationType='slide'>
            <Pressable style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(23, 26, 31, 0.4)',zIndex:-1 }} onPress={() => { setemailview(false) }}/>
            <View style={{
                flex: 1, position: 'absolute', bottom: 0, top: '40%', right: 0, left: 0, backgroundColor: theme.colors.background, borderTopLeftRadius: 14, borderTopRightRadius: 14, justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <Text style={[styles.headertext, { color: theme.colors.text }]}>
                    What's your email?
                </Text >
                <View style={styles.inputbox}>
                    <Text style={{ color: theme.colors.text, fontSize: RFValue(18), fontFamily: Fonts.Roboto, fontWeight: 'bold', width: '90%', textAlign: 'left' }}>Email:</Text>
                    <TextInput style={{ width: 350, borderColor: '#bcc1ca', borderWidth: 1, backgroundColor: '#ffffff', height: 46, borderRadius: 12, fontSize: 20, fontFamily: Fonts.Roboto, fontWeight: 'regular', paddingVertical: 5 }} placeholder='Enter Your Email' value={Email} onChangeText={(text)=>setEmail(text)}/>
                    <Pressable style={[styles.email_sigin, { backgroundColor: disable ? '#f3f4f6' : '#ffffff' }]} disabled={disable} onPress={()=>{
                        setviewpassword(true)
                        setemailview(false)
                    }}>
                        <Text style={{ color: '#000000', fontFamily: Fonts.Roboto, fontSize: RFValue(14), fontWeight: '800', textAlign: 'center', paddingHorizontal: 4 }}>Continue</Text>
                    </Pressable>
                </View>
                <View style={styles.google}>
                    <Pressable style={styles.google_login} onPress={() => onGoogleButtonPress()}>
                        <Image source={require('../../../assets/images/Logo/Google.png')} style={styles.google_image} resizeMode='cover' />
                        <Text style={{ color: '#000000', fontFamily: Fonts.Roboto, fontSize: RFValue(14), fontWeight: '800', textAlign: 'center', paddingHorizontal: 4 }}>Continue with Google</Text>
                    </Pressable>
                    <Pressable style={{ padding: 3, margin: 3 }} >
                        <Text style={{ color: theme.colors.text, fontFamily: Fonts.Roboto, fontSize: RFValue(12), fontWeight: '500', textAlign: 'center' }}>Already have an account? Log in</Text>
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    <Text style={{ color: theme.colors.text, fontFamily: Fonts.Roboto, fontWeight: '400',width:'90%', fontSize: RFValue(10), textAlign: 'center', padding: 2, margin: 2 }}>By signing up, you agree to the Terms and Conditions and the Privacy Policy of Smart Study</Text>
                </View>
            </View>
        </Modal>

    )
}

export default Email

const styles = StyleSheet.create({
    headertext: {
        fontSize: RFValue(26),
        fontFamily: Fonts.poppins.Bold,
        width: '100%',
        height: '15%',
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
    },

})