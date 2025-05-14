import { Modal, StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useThemescontext } from '../../../context/ThemeContext'
import { RFValue } from 'react-native-responsive-fontsize'
import { Fonts } from '../../../constants/Fonts'

const Password = ({ passwordview, setPasswordview, setemail, password, setpassword, onsignup}) => {

    const { theme } = useThemescontext()
    const [disable,setdisable]=useState(true)

    useEffect(()=>{
        if(password.length>=6){
            setdisable(false)
        }
        else{
            setdisable(true)
        }
    },[password])

    return (
        <Modal visible={passwordview} transparent={true} onRequestClose={() => { setPasswordview(false); setemail(true) }}
            animationType='slide'>
            <Pressable style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(23, 26, 31, 0.4)', zIndex: -1 }} onPress={() => {
                setPasswordview(false);
            }} />
            <View style={{ flex: 1, position: 'absolute', bottom: 0, top: '40%', right: 0, left: 0, backgroundColor: theme.colors.Modal, borderTopLeftRadius: 14, borderTopRightRadius: 14, justifyContent: 'space-evenly' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: '15%' }}>
                    <Text style={[styles.headertext, { color: theme.colors.text }]}>
                        Create a password
                    </Text >
                </View>

                <View style={styles.inputbox}>
                    <Text style={{ color: theme.colors.text, fontSize: RFValue(18), fontFamily: Fonts.Roboto, fontWeight: 'bold', width: '80%', textAlign: 'left' }}>Password:</Text>
                    <TextInput style={{
                        width: 350, borderColor: '#bcc1ca', borderWidth: 1, backgroundColor: theme.dark?theme.colors.Modal:'#ffffff', height: 46, borderRadius: 12, fontSize: 20, fontFamily: Fonts.Roboto, fontWeight: 'regular', paddingVertical: 5, shadowColor: 'black',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 3,
                        elevation: 3,
                        color:theme.dark?'#ffffff':theme.colors.text
                    }} placeholder='Enter Password' value={password} onChangeText={(text) => setpassword(text)} secureTextEntry={true} />
                    <Text style={{ color: theme.colors.text, fontSize: RFValue(12), fontFamily: Fonts.Roboto, fontWeight: 'bold', padding: 4, margin: 4, width: '80%', textAlign: 'left' }}>Criteria</Text>
                    <View style={{ alignSelf: 'center', justifyContent: 'space-around', width: '80%' }}>
                        <Text style={{ fontSize: RFValue(12), fontStyle: Fonts.Roboto, fontWeight: 'regular',color:theme.dark?'#ffffff':theme.colors.text }}><Text style={{ fontSize: 20 }}>{'\u25CF'}</Text> at least 8 characters </Text>
                        <Text style={{ fontSize: RFValue(12), fontStyle: Fonts.Roboto, fontWeight: 'regular',color:theme.dark?'#ffffff':theme.colors.text }}><Text style={{ fontSize: 20 }}>{'\u25CF'}</Text> at least 1 letter </Text>
                        <Text style={{ fontSize: RFValue(12), fontStyle: Fonts.Roboto, fontWeight: 'regular',color:theme.dark?'#ffffff':theme.colors.text }}><Text style={{ fontSize: 20 }}>{'\u25CF'}</Text> at least 1 number or special character  </Text>
                    </View>
                    <Pressable style={[styles.email_sigin, { backgroundColor: disable? '#f3f4f6' : '#ffffff' }]} onPress={() => onsignup()} disabled={disable}>
                        <Text style={{ color: '#000000', fontFamily: Fonts.Roboto, fontSize: RFValue(14), fontWeight: '800', textAlign: 'center', paddingHorizontal: 4 }}>Sign up</Text>
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    <Text style={{ color: theme.colors.text, fontFamily: Fonts.Roboto, fontWeight: '400', width: '90%', fontSize: RFValue(10), textAlign: 'center', padding: 2, margin: 2 }}>By signing up, you agree to the <Text style={{ color: '#2148A5' }}>Terms and Conditions </Text>and the <Text style={{ color: '#2148A5' }}>Privacy Policy</Text> of Smart Study</Text>
                </View>
            </View>
        </Modal>

    )
}

export default Password

const styles = StyleSheet.create({
    headertext: {
        fontSize: RFValue(26),
        fontFamily: Fonts.poppins.Bold,
        width: '100%',
        textAlign: 'center'
    },
    inputbox: {
        width: '100%',
        height: '60%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
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
        elevation: 5
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