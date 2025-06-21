import { Button, Image, Pressable, StyleSheet, Text, Modal, View, Switch, TouchableOpacity, Animated, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { createStaticNavigation, NavigationContainer, useNavigationState } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './MainScreen'
import { useThemescontext } from '../context/ThemeContext'
import { Fonts } from '../constants/Fonts'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { getCurrentRouteName, navigationRef, } from '../hooks/navigationRef'
import { Streaks, Menuitem } from '../constants/SteactMenu'
import { useSupplayContext } from '../context/SupplayContext'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import CalculatorScreen from '../screens/stacks/CalculatorScreen'
import UploadScreen from '../screens/stacks/UploadScreen'
import NewsScreen from '../screens/stacks/NewsScreen'
import HelpScreen from '../screens/stacks/HelpScreen'
import NotificationScreen from '../screens/stacks/NotificationScreen'
import FAQsScreen from '../screens/stacks/FAQsScreen'
import ContactUsScreen from '../screens/stacks/ContactUsScreen'
import FeedBackScreen from '../screens/stacks/FeedBackScreen'



const Dwarer = createDrawerNavigator()
const { height, width } = Dimensions.get('window')


const HeaderLeft = ({ setstreakview }) => {
    const { theme } = useThemescontext()
    return (

        <Pressable style={{ height: 31, backgroundColor: theme.dark ? '#101327' : '#7FD6FF', width: 59, borderRadius: 14, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }} onPress={() => setstreakview(true)} >
            <Image source={require('../assets/images/fire.png')} style={{ width: 24, height: 24 }} />
            <Text style={{
                color: theme.colors.text, fontSize: 18, fontFamily: Fonts.Roboto, fontWeight: '400', lineHeight: 28, textAlign: 'center',
                paddingRight: 2
            }}>0</Text>
        </Pressable>
    )
}

const HeaderRight = ({ setisMenu }) => {
    const { theme } = useThemescontext()
    return (
        <View style={{ width: 90, eight: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Pressable onPress={() => navigationRef.navigate('notify')}>
                <MaterialIcons name="notifications-none" size={32} color={theme.colors.text} />
                {<View style={{
                    backgroundColor: 'red',
                    width: 12,
                    height: 12,
                    position: 'absolute',
                    right: 1,
                    top: 1,
                    borderRadius: '50%'
                }} />}
            </Pressable>
            <Pressable onPress={
                () => setisMenu()
            }>
                <MaterialCommunityIcons name="menu" size={38} color={theme.colors.text} />
            </Pressable>
        </View>
    )
}



const StackScreen = () => {

    const [streakview, setstreakview] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const [isMenu, setisMenu] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { theme } = useThemescontext()
    const { menustate } = useSupplayContext()

    const translateY = useRef(new Animated.Value(height)).current;

    const openModal = () => {
        setstreakview(true);
        Animated.timing(translateY, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
        }).start();
    };

    const closeModal = () => {
        Animated.timing(translateY, {
            toValue: height,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setstreakview(false));
    };

    const CustomHeader = ({ navigation, route, options }) => {
        const { Tabindex, scaleFont } = useSupplayContext()
        return (
            <View style={{
                height: height * 0.1, backgroundColor: theme.colors.background, flexDirection: 'row', paddingTop: height * 0.047, alignContent: 'center', paddingHorizontal: width * 0.05, justifyContent: 'center', alignItems: 'center'
            }}>
                <View style={{ width: Tabindex == 0 ? width * 0.72 : width * 0.81 }}>
                    <Pressable style={{ height: height * 0.036, backgroundColor: theme.dark ? '#101327' : '#7FD6FF', width: width * 0.151, borderRadius: 14, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }} onPress={() => openModal()} >
                        <Image source={require('../assets/images/fire.png')} style={{ width: width * 0.04, height: height * 0.024 }} />
                        <Text style={{
                            color: theme.colors.text, fontSize: scaleFont(18), fontFamily: Fonts.Roboto, fontWeight: '400', lineHeight: 28, textAlign: 'center',
                            paddingRight: 2
                        }}>0</Text>
                    </Pressable>
                </View>
                {Tabindex == 0 ? <View>
                    <MaterialIcons name="notifications-none" size={32} color={theme.colors.text} />
                    {<View style={{
                        backgroundColor: 'red',
                        width: 10,
                        height: 10,
                        position: 'absolute',
                        right: 1,
                        top: 1,
                        borderRadius: '50%',
                        margin: 2
                    }} />}
                </View> : null}
                <View>
                    <Pressable onPress={() => navigation.toggleDrawer()}>
                        <MaterialCommunityIcons name="menu" size={38} color={theme.colors.text} />
                    </Pressable>
                </View>
            </View>
        )
    }


    const CustomdrawerContainer = (props) => {
        const { state, navigation } = props;
        const focusedRoute = state.routeNames[state.index];
        console.log(state.index)
        const { Tabindex, scaleFont } = useSupplayContext()
        return (
            <View {...props} style={{ width: width * 0.55, backgroundColor: theme.dark ? theme.colors.Modal : '#B2E9FF', marginTop: height * 0.110, height: height * 0.385, borderRadius: 16, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ width: '90%', paddingHorizontal: '5%', marginHorizontal: '5%', height: height * 0.040 }}>
                    <Text style={{ fontSize: scaleFont(24), fontFamily: Fonts.Roboto, fontWeight: 'bold', color: theme.colors.text }}>Menu</Text>
                </View>
                <View style={{
                    height: height * 0.3, width: '90%', paddingHorizontal: '5%', marginHorizontal: '5%', justifyContent: 'space-evenly', alignItems: 'center'
                }}>
                    <Pressable style={[{ height: height * 0.033, width: '100%', borderRadius: 16 }, state.index === 1 ? { height: height * 0.059, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.dark ? '' : '#97D0FF' } : {paddingHorizontal:10}]} android_ripple={{ color: '#97D0FF' }} onPress={() => navigation.navigate('calculator')}>
                        <Text style={[state.index === 1 ? { color: '#005BFF', fontFamily: Fonts.Roboto, fontWeight: 'bold' } : { fontWeight: 'regular' }, { fontSize: scaleFont(18), fontFamily: Fonts.Roboto }]}>Grade Ninja</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('intpre')} style={[{ height: height * 0.033, width: '100%', borderRadius: 16 }, state.index === 2 ? { height: height * 0.059, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.dark ? '' : '#97D0FF' } : {paddingHorizontal:10}]} android_ripple={{ color: '#97D0FF' }}>
                        <Text style={[state.index === 2 ? { color: '#005BFF', fontFamily: Fonts.Roboto, fontWeight: 'bold' } : { fontWeight: 'regular' }, { fontSize: scaleFont(18), fontFamily: Fonts.Roboto }]}>Smart Prep</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('newbit')} style={[{ height: height * 0.033, width: '100%', borderRadius: 16 }, state.index === 3 ? { height: height * 0.059, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.dark ? '' : '#97D0FF' } : {paddingHorizontal:10}]} android_ripple={{ color: '#97D0FF' }}>
                        <Text style={[state.index === 3 ? { color: '#005BFF', fontFamily: Fonts.Roboto, fontWeight: 'bold' } : { fontWeight: 'regular' }, { fontSize: scaleFont(18), fontFamily: Fonts.Roboto }]}>News bites</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('feedback')} style={[{ height: height * 0.033, width: '100%', borderRadius: 16 }, state.index === 4 ? { height: height * 0.059, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.dark ? '' : '#97D0FF' } : {paddingHorizontal:10}]} android_ripple={{ color: '#97D0FF' }}>
                        <Text style={[state.index === 4 ? { color: '#005BFF', fontFamily: Fonts.Roboto, fontWeight: 'bold' } : { fontWeight: 'regular' }, { fontSize: scaleFont(18), fontFamily: Fonts.Roboto }]}>Feed back</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('help')} style={[{ height: height * 0.033, width: '100%', borderRadius: 16 }, state.index === 5 ? { height: height * 0.059, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.dark ? '' : '#97D0FF' } : {paddingHorizontal:10}]} android_ripple={{ color: '#97D0FF' }}>
                        <Text style={[state.index === 5 ? { color: '#005BFF', fontFamily: Fonts.Roboto, fontWeight: 'bold' } : { fontWeight: 'regular' }, { fontSize: scaleFont(18), fontFamily: Fonts.Roboto }]}>Help desk</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('calculator')} style={[{ height: height * 0.033, width: '100%', borderRadius: 16 }, state.index === 6 ? { height: height * 0.059, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.dark ? '' : '#97D0FF' } : {paddingHorizontal:10}]} android_ripple={{ color: '#97D0FF' }}>
                        <Text style={[state.index === 6 ? { color: '#005BFF', fontFamily: Fonts.Roboto, fontWeight: 'bold' } : { fontWeight: 'regular' }, { fontSize: scaleFont(18), fontFamily: Fonts.Roboto }]}>Setting</Text>
                    </Pressable>
                </View>
            </View>
        )
    }

    return (
        <NavigationContainer ref={navigationRef}>
            <Dwarer.Navigator
                screenOptions={{
                    header: (props) => <CustomHeader {...props} />,
                    drawerPosition: 'right',
                    drawerStyle: {
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        height: height * 0.49,
                        width: width * 0.617,

                    }
                }}

                drawerContent={(props) => <CustomdrawerContainer {...props} />}

                backBehavior='initialRoute'

                initialRouteName='Main'
            >
                <Dwarer.Screen name='Main' component={MainScreen} />
                <Dwarer.Screen name='calculator' component={CalculatorScreen} />
                <Dwarer.Screen name='intpre' component={UploadScreen} />
                <Dwarer.Screen name='newbit' component={NewsScreen} />
                <Dwarer.Screen name='feedback' component={FeedBackScreen} />
                <Dwarer.Screen name='help' component={HelpScreen} />
                <Dwarer.Screen name='notify' component={NotificationScreen} />
                <Dwarer.Screen name='faq' component={FAQsScreen} />
                <Dwarer.Screen name='contact' component={ContactUsScreen} />
            </Dwarer.Navigator>
            <Modal visible={streakview} onRequestClose={() => closeModal()} transparent={true}>
                <Pressable style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(23, 26, 31, 0.4)', zIndex: -1 }} onPress={() => closeModal()} />
                <Animated.View style={[{ position: 'absolute', top: '20%', bottom: '20%', right: '10%', left: '10%', backgroundColor: theme.dark ? "" : "#ffffff", borderRadius: 18, alignItems: 'center', justifyContent: 'space-evenly' },{ transform: [{ translateY }] }]}>
                    <View style={{ width: '95%', height: '30%' }}>
                        <View style={{ height: '60%', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '30%', height: '100%', backgroundColor: 'red' }}>

                            </View>
                            <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, fontFamily: Fonts.poppins.Bold, color: theme.colors.text }}>Study <Text style={{
                                    color: '#195EFFFF'
                                }}>Streak</Text></Text>
                            </View>
                        </View>
                        <Text style={{ width: '100%', height: '40%', fontSize: 18, fontFamily: Fonts.Roboto, fontWeight: '400', textAlign: 'center', padding: 5 }}>
                            Complete at least one task per day to keep your streak alive
                        </Text>
                    </View>
                    <View style={{ width: '95%', height: '30%', backgroundColor: '#FFFFFF00', borderRadius: 14, borderColor: '#CCCCCCFF', borderWidth: 2 }}>
                        <View style={{ width: '100%', height: '60%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            {Streaks.map((day, index) => {
                                return (
                                    <View key={index} style={{ width: '14%' }}>
                                        <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ width: 30, height: 30, backgroundColor: day.streak ? '#2E6073FF' : '#2591BBFF', borderRadius: '50%', justifyContent: 'center', alignItems: 'center' }}>{day.streak ? <Image source={require('../assets/images/blue_fire.png')} style={{ width: 18, height: 28 }} /> : null}</View>
                                        </View>
                                        <Text style={{ fontSize: 18, fontFamily: Fonts.poppins.Medium, color: theme.dark ? '' : '#73b1e7ff', width: '100%', textAlign: 'center' }}>{day.day}</Text>
                                    </View>
                                )
                            })}
                        </View>
                        <View style={{ width: '100%', height: '40%', borderWidth: 2, borderTopColor: '#CCCCCCFF', borderRightColor: 'rgba(0, 0, 0, 0)', borderBottomColor: 'rgba(0, 0, 0, 0)', borderLeftColor: 'rgba(0, 0, 0, 0)', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 16, width: '90%', fontFamily: Fonts.poppins.Regular, textAlign: 'center'
                            }}>Nothing Planed for today, enjoy your day off</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', height: '30%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '97%', height: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5 }}>
                            <Text style={{
                                fontSize: 14, fontFamily: Fonts.poppins.Bold, color: theme.colors.text
                            }}>Study reminders</Text>
                            <View style={{
                                padding: 5,
                                backgroundColor: isEnabled ? '#87D6F5FF' : '#F8F9FAFF', // Adds spacing around the Switch
                                borderRadius: 30,
                                height: 32,
                                width: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>
                                <Switch
                                    trackColor={{ false: 'rgba(0, 0, 0, 0)', true: 'rgba(0,0,0,0)' }}
                                    thumbColor={isEnabled ? '#2591BBFF' : '#F3F4F6FF'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                                />

                            </View>
                        </View>
                        <View style={{ width: '100%', height: '70%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 32, fontFamily: Fonts.poppins.Bold, color: theme.colors.text }}>
                                0 Day <Text style={{ color: '#195eff' }}>Streak</Text>
                            </Text>
                        </View>
                    </View>
                </Animated.View>
            </Modal>
        </NavigationContainer>
    )
}

export default StackScreen

const styles = StyleSheet.create({
    switchContainer: {
        width: 50,
        height: 28,
        borderRadius: 20,
        backgroundColor: '#f5f6f7',
        justifyContent: 'center',
        padding: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    thumb: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#eee',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    activeBox: {
        backgroundColor: '#90caf9',
    }, activeText: {
        color: '#0d47a1',
        fontWeight: 'bold',
    },
})