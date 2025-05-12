import { Image, SafeAreaView, StyleSheet, Text, View, Animated, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useThemescontext } from '../context/ThemeContext'
import { Fonts } from '../constants/Fonts'
import { useTypewriter } from '../hooks/useTypingEffect';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useAccountContext } from '../context/AccountContext';


const { width } = Dimensions.get('window');


const StartingScreen = ({ navigation }) => {

    const { theme } = useThemescontext()
    const typedText = useTypewriter(
        ['Study Planner',
            'Smart Quiz',
            'Study Resources', 'Notes', 'Syllabus', `PYQ's`, 'Videos', 'Smart Assistance', 'Grade Ninja', 'Smart Forum', 'News Bites'],
        { speed: 100, pause: 1500, loop: true }
    );

    const { onGoogleButtonPress } = useAccountContext()
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.box_1}>
                <Image source={require('../assets/images/adaptive-icon.png')} style={styles.logo_image} resizeMode='cover' />
                <Text style={{ color: theme.colors.secondary, fontFamily: Fonts.poppins.Regular, fontSize: RFValue(18) }}>Smart Study</Text>
                <Text style={{ color: theme.colors.primary, fontSize: RFValue(16), fontFamily: Fonts.Roboto, fontWeight: 'bold', }}>Your Study Companion</Text>
            </View>
            <View style={styles.box_2}>
                <Image source={require('../assets/images/ghost.png')} style={styles.ghost_image} resizeMode='cover' />
                <View style={{ width: '40%', height: 14, backgroundColor: '#CCF0FF', borderRadius: '100%' }} />
                <Text style={{ color: theme.colors.text, fontFamily: Fonts.poppins.Bold, fontSize: RFValue(18), width: '90%', textAlign: 'center' }}>All the Academic toolkit for learning success.</Text>
                <Text style={{ color: '#0021FF', fontSize: RFValue(22), fontFamily: Fonts.poppins.Bold }}>{typedText} <Animated.Text style={[styles.cursor, { opacity: 0.5 }]}>|</Animated.Text></Text>
            </View>
            <View style={styles.box_3}>
                <Pressable style={styles.google_login} onPress={() => onGoogleButtonPress()}>
                    <Image source={require('../assets/images/Logo/Google.png')} style={styles.google_image} resizeMode='cover' />
                    <Text style={{ color: '#000000', fontFamily: Fonts.Roboto, fontSize: RFValue(14), fontWeight: '800', textAlign: 'center', paddingHorizontal: 4 }}>Continue with Google</Text>
                </Pressable>
                <Pressable style={[styles.email_login, { borderColor: theme.colors.text }]} onPress={() => console.log('hii')}>
                    <Fontisto name="email" size={24} color="#ffffff" style={{ paddingHorizontal: 4 }} />
                    <Text style={{ color: '#ffffff', fontFamily: Fonts.Roboto, fontSize: RFValue(14), fontWeight: '800', textAlign: 'center', paddingHorizontal: 4 }}>Continue with Email</Text>
                </Pressable>
                <Pressable style={{ padding: 3, margin: 3 }} onPress={() => console.log('hii')}>
                    <Text style={{ color: theme.colors.text, fontFamily: Fonts.Roboto, fontSize: RFValue(14), fontWeight: '500', textAlign: 'center' }}>I already have an account </Text>
                </Pressable>
            </View>
            <View style={styles.box_4}>
                <Text style={{ color: theme.colors.text, fontFamily: Fonts.Roboto, fontWeight: '400', fontSize: RFValue(12), textAlign: 'center', padding: 2, margin: 2 }}>By signing up, you agree to the Terms and Conditions and the Privacy Policy of Smart Study</Text>
            </View>
        </SafeAreaView>
    )
}

export default StartingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_1: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: "center"
    },
    box_2: {
        height: '35%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_3: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_4: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo_image: {
        width: width * 0.25,
        height: width * 0.25,
    },
    ghost_image: {
        width: width * 0.45,
        height: width * 0.5,
    },
    google_image: {
        width: 40,
        height: 40,
    },
    cursor: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    google_login: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        width: '85%',
        height: 46,
        borderWidth: 1,
        borderColor: 'rgba(83, 83, 83, 0.34)',
        borderRadius: 20,
        marginVertical: 8,
        backgroundColor: '#ffffff'
    },
    email_login: {
        marginVertical: 8,
        backgroundColor: '#0f0f0f',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        width: '85%',
        height: 46,
        borderWidth: 1,
        borderRadius: 20,
    }
})