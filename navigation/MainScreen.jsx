import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Taps/HomeScreen'
import ResourceScreen from '../screens/Taps/ResourceScreen'
import AiScreen from '../screens/Taps/AiScreen'
import TaskManagerScreen from '../screens/Taps/TaskManagerScreen'
import ProfileScreen from '../screens/Taps/ProfileScreen'
import { House ,Book ,OpenAiLogo,CalendarCheck, User } from 'phosphor-react-native'
import { useThemescontext } from '../context/ThemeContext'
import { Animated, TouchableWithoutFeedback } from 'react-native';


const Tab = createBottomTabNavigator()

const NoAnimationTabButton = ({ children, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>{children}</View>
    </TouchableWithoutFeedback>
  );
};


const MainScreen = () => {


  const { theme } = useThemescontext()

  return (
    <View style={{flex:1,backgroundColor:theme.colors.background}}>
      <Tab.Navigator initialRouteName='home' screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: theme.dark ? '#090B16' : '#184473',
        height: 80,
        borderWidth:1,
        borderColor:theme.dark?"#090B16":"#184473",
        borderTopLeftRadius:14,
        borderTopRightRadius:14
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#ffffff',
      tabBarInactiveTintColor: '#BCC1CA',
      tabBarButton: (props) => <NoAnimationTabButton {...props} />
    }} >
      <Tab.Screen name='home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <House size={32} color={color} weight={focused ? "fill" : "regular"} />
        }}
      />
      <Tab.Screen name='resource'
        component={ResourceScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <Book size={32} color={color} weight={focused ? "fill" : "regular"} />
        }}
      />
      <Tab.Screen name='ai'
        component={AiScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <OpenAiLogo  size={32} color={color} weight={focused ? "fill" : "regular"} />
        }}
      />
      <Tab.Screen name='task'
        component={TaskManagerScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <CalendarCheck size={32} color={color} weight={focused ? "fill" : "regular"} />
        }}
      />
      <Tab.Screen name='profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <User size={32} color={color} weight={focused ? "fill" : "regular"} />
        }}
      />
    </Tab.Navigator>
    </View>
    
  )
}

export default MainScreen

const styles = StyleSheet.create({

})