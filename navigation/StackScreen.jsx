import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './MainScreen'
import { useThemescontext } from '../context/ThemeContext'
import { Fonts } from '../constants/Fonts'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator()


const HeaderLeft = () => {
    const { theme } = useThemescontext()
    return (

        <View style={{ height: 31, backgroundColor: theme.dark ? '#101327' : '#7FD6FF', width: 59, borderRadius: 14, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/images/fire.png')} style={{ width: 24, height: 24 }} />
            <Text style={{
                color: theme.colors.text, fontSize: 18, fontFamily: Fonts.Roboto, fontWeight: '400', lineHeight: 28, textAlign: 'center',
                paddingRight: 2
            }}>0</Text>
        </View>
    )
}

const HeaderRight = () => {
    const { theme } = useThemescontext()
    return (
        <View style={{ width:90,eight: 40,flexDirection:'row',justifyContent:'space-between' ,alignItems:'center'}}>
            <Pressable>
                <MaterialIcons name="notifications-none" size={32} color={theme.colors.text} />
                {<View style={{
                    backgroundColor:'red',
                    width:12,
                    height:12,
                    position:'absolute',
                    right:1,
                    top:1,
                    borderRadius:'50%'
                }}/>}
            </Pressable>
            <Pressable>
                <MaterialCommunityIcons name="menu" size={38} color={theme.colors.text} />
            </Pressable>
        </View>
    )
}


const StackScreen = () => {

    const { theme } = useThemescontext()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='main' screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.background
                },
                headerShadowVisible: false,
                headerTitle: '',
                headerRight: () => <HeaderRight />,
                headerLeft: () => <HeaderLeft />,

            }}>
                <Stack.Screen name='main' component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreen

const styles = StyleSheet.create({})