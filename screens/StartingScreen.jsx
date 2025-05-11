import { Image, SafeAreaView, StyleSheet, Text, View, Animated, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useThemescontext } from '../context/ThemeContext'
import { Fonts } from '../constants/Fonts'
import { useTypewriter } from '../context/useTypingEffect';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const StartingScreen = () => {

    const { theme } = useThemescontext()
    const typedText = useTypewriter(
        ['Study Planner',
            'Smart Quiz',
            'Study Resources', 'Notes', 'Syllabus', `PYQ's`, 'Videos', 'Smart Assistance', 'Grade Ninja', 'Smart Forum', 'News Bites'],
        { speed: 100, pause: 1500, loop: true }
    );

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
                <View style={styles.google_login}>
                    <Image source={require('../assets/images/Logo/Google.png')} style={styles.google_image} resizeMode='cover' />
                    <Text style={{ color: '#000000', fontFamily: Fonts.Roboto, fontSize: RFValue(14), fontWeight: '800', textAlign: 'center', paddingHorizontal: 4 }}>Continue with Google</Text>
                </View>
                <View style={styles.email_login}>
                    
                </View>
            </View>
            <View style={styles.box_4}>

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
        height: '15%',
        backgroundColor: 'plum',
        width: '100%'
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
        borderColor:'rgba(83, 83, 83, 0.34)',
        borderRadius: 20,
        
    },
    email_login: {

    }
})