import { Button, Image, Modal, Pressable, StyleSheet, Text, View, Switch ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './MainScreen'
import CalculatorScreen from '../screens/stacks/CalculatorScreen'
import NewsScreen from '../screens/stacks/NewsScreen'
import UploadScreen from '../screens/stacks/UploadScreen'
import FeedBackScreen from '../screens/stacks/FeedBackScreen'
import HelpScreen from '../screens/stacks/HelpScreen'
import NotificationScreen from '../screens/stacks/NotificationScreen'
import { useThemescontext } from '../context/ThemeContext'
import { Fonts } from '../constants/Fonts'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { navigationRef } from '../hooks/navigationRef'
import FAQsScreen from '../screens/stacks/FAQsScreen'
import ContactUsScreen from '../screens/stacks/ContactUsScreen'
import {Streaks,Menuitem } from '../constants/SteactMenu'

const Stack = createNativeStackNavigator()

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
            <Pressable onPress={()=>navigationRef.navigate('notify')}>
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
            <Pressable onPress={() => {
                setisMenu(true)
            }}>
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
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='main' screenOptions={{
               headerShown:true,
                    headerStyle: {
                    backgroundColor: theme.colors.background,
                    height:60
                },
                headerShadowVisible: false,
                headerTitle: '',
                headerRight: () => <HeaderRight setisMenu={setisMenu} />,
                headerLeft: () => <HeaderLeft setstreakview={setstreakview} />,
            }}>
                <Stack.Screen name='main' component={MainScreen} options={{
                    headerShown:true,
                }}/>
                {/* <Stack.Screen name='calculator' component={CalculatorScreen}  options={{
                    headerShown:true,
                }} />
                <Stack.Screen name='news' component={NewsScreen}  options={{
                    headerShown:true,
                }}/>
                <Stack.Screen name='upload' component={UploadScreen}  options={{
                    headerShown:true,
                }}/>
                <Stack.Screen name='feedback' component={FeedBackScreen}  options={{
                    headerShown:false,
                }}/>
                <Stack.Screen name='help' component={HelpScreen}  options={{
                    headerShown:false,
                }}/>
                <Stack.Screen name='notify' component={NotificationScreen}  options={{
                    headerShown:false,
                }}/>
                <Stack.Screen name='faq' component={FAQsScreen}  options={{
                    headerShown:false,
                }}/>
                <Stack.Screen name='contact' component={ContactUsScreen}  options={{
                    headerShown:false,
                }}/> */}
            </Stack.Navigator>
            <Modal visible={streakview} animationType='none' onRequestClose={() => setstreakview(false)} transparent={true}>
                <Pressable style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(23, 26, 31, 0.4)', zIndex: -1 }} onPress={() => { setstreakview(false) }} />
                <View style={{ position: 'absolute', top: '20%', bottom: '20%', right: '10%', left: '10%', backgroundColor: theme.dark ? "" : "#ffffff", borderRadius: 18, alignItems: 'center', justifyContent: 'space-evenly' }}>
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
                </View>
            </Modal>
            <Modal visible={isMenu} transparent={true} animationType='none' onRequestClose={() => setisMenu(false)}>
                <Pressable style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(23, 26, 31, 0.4)', zIndex: -1 }} onPress={() => { setisMenu(false) }} />
                <View style={{ position: 'absolute', top: "5%", right: '10%', left: "40%", bottom: '55%', backgroundColor: theme.dark ? theme.colors.Modal : '#B8D9E6', borderRadius: 15 ,alignItems:'center',justifyContent:'space-evenly',paddingLeft:20}}>
                    <View style={{ width: '90%', height: '15%',justifyContent:'center' }}>
                        <Text style={{ fontSize: 24, fontFamily: Fonts.Roboto, fontWeight: 'bold',color:theme.colors.text }}>Menu</Text>
                    </View>
                    <View style={{ width: '90%', height: '80%',justifyContent:'space-evenly'}}>
                        {Menuitem.map((item, index) => {
                            return (
                                <Pressable key={index} onPress={() => {
                                    navigationRef.navigate("home", {screen: item.path,})
                                    setisMenu(false)
                                }} style={{width:'100%',height:'18%',justifyContent:'center'}} >
                                    <Text style={{fontSize:18,fontFamily:Fonts.Roboto,fontWeight:'400',color:theme.colors.text}}>{item.title}</Text>
                                </Pressable>
                            )
                        })}
                    </View>
                </View>
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
})