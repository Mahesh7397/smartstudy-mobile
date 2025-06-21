import { Dimensions, SafeAreaView, StyleSheet, Text, View, TouchableOpacity ,Platform } from 'react-native'
import React, { useRef ,useEffect, useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Taps/HomeScreen'
import ResourceScreen from '../screens/Taps/ResourceScreen'
import AiScreen from '../screens/Taps/AiScreen'
import TaskManagerScreen from '../screens/Taps/TaskManagerScreen'
import ProfileScreen from '../screens/Taps/ProfileScreen'
import { House, Book, OpenAiLogo, CalendarCheck, User } from 'phosphor-react-native'
import { useThemescontext } from '../context/ThemeContext'
import { useLinkBuilder } from '@react-navigation/native'
import TabBarBotton from '../components/TabBarBotton'
import { useNavigation, useRoute } from '@react-navigation/native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import { useSupplayContext } from '../context/SupplayContext'

const { width, height } = Dimensions.get('window')
const TAB_WIDTH = (width-40)/ 5;
const Tab = createBottomTabNavigator()

const CousomTabbar=({ state, descriptors, navigation })=>{
  const { theme } = useThemescontext()
  const { buildHref } =useLinkBuilder();
  const { setTabindex } =useSupplayContext()

  const [dimensions,setdimensions]=useState({height:20,width:100})
  
  const buttonWidth = dimensions.width / state.routes.length

  const onTabbarlayout=(e)=>{
      setdimensions({
        height:e.nativeEvent.layout.height,
        width:e.nativeEvent.layout.width
      })
  }

  const tabPositionX=useSharedValue(0)

  const animatedstyle=useAnimatedStyle(()=>{
    return {
      transform:[{translateX:tabPositionX.value}]
    }
  })
  
 
  useEffect(()=>{
      console.log(state.index)
      setTabindex(state.index)
      tabPositionX.value=withSpring(buttonWidth * state.index,{duration:1500})
  },[state.index])

  return(
    <View onLayout={onTabbarlayout} style={{ flexDirection: 'row' ,position:'absolute',bottom:20,marginHorizontal:20,borderRadius:20,backgroundColor:theme.colors.Navbar, elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:15,
}}>
  <Animated.View style={[animatedstyle,{
    position:'absolute',
    backgroundColor:theme.colors.Focus,
    borderRadius:15,
    marginHorizontal:7,
    height:dimensions.height-15,
    width:buttonWidth-15,
    opacity:theme.dark?0.5:1
  }]} />
     {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          // tabPositionX.value=withSpring(buttonWidth * index,{duration:1500})
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TabBarBotton 
          key={route.name}
          href={buildHref(route.name, route.params)}
            onPress={onPress}
            onLongPress={onLongPress}
            color={theme.colors.ActIcon}
            isFocused={isFocused}
            label={label}
          />
        );
      })}
    </View>
  )
}

const MainScreen = () => {


  const { theme } = useThemescontext()

  return (
      <Tab.Navigator initialRouteName='Home'
       tabBar={(props) => <CousomTabbar {...props} />}
      screenOptions={{
        headerShown: false,
      }} >
        <Tab.Screen name='Home'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }) =>
                <House size={32} color={color} weight={focused ? "fill" : "regular"} />

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
            tabBarIcon: ({ focused, color }) => <OpenAiLogo size={32} color={color} weight={focused ? "fill" : "regular"} />
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

  )
}

export default MainScreen

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2e64e5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
  },
  buttonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
    tabBar: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 65,
    borderRadius: 20,
    backgroundColor: '#d3efff',
    borderTopWidth: 0,
    elevation: 4,
  },
   floatingBox: {
    width: TAB_WIDTH,
    height: 60,
    backgroundColor: '#007bff',
    borderRadius: 30,
    zIndex: 0,
  },
})