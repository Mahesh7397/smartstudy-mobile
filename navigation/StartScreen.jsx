import React, { useEffect, useState } from 'react'
import { useThemescontext } from '../context/ThemeContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartingScreen from '../screens/StartingScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import { Alert, Modal, TouchableWithoutFeedback, View } from 'react-native'
import Email from '../components/Modal Pages/Signup/Email'
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import Password from '../components/Modal Pages/Signup/Password'
enableScreens()
import auth from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator()

const StartScreen = () => {

  const { theme } = useThemescontext()
  const [viewsignup, setviewsignup] = useState(false)
  const [Viewemail,setViewemail]=useState(false)
  const [viewpassword,setviewpassword]=useState(false)
  const [disable,setdisable]=useState(false)

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const Signupwithemail=async()=>{
     auth().createUserWithEmailAndPassword(email,password).then(()=>{
        Alert.alert('User created')
     }).catch((error)=>{
      console.log(error)
     })
  }


  useEffect(()=>{
    console.log(email,email?.includes("@gmail.com"))
     if(email?.includes('@gmail.com')){
      setdisable(false)
     }
     else{
      setdisable(true)
     }
  },[email])

  return (
    <View style={{ flex: 1 }}>
      <StartingScreen view={viewsignup} setview={()=>{setviewsignup(true);setViewemail(true)}} />
          <Email modalview={viewsignup} setnodalview={setviewsignup} emailview={Viewemail} setemailview={setViewemail} Email={email} setEmail={setemail}  disable={disable} setviewpassword={setviewpassword}/>
          <Password passwordview={viewpassword} setPasswordview={setviewpassword}
          setemail={setViewemail} disable={disable}
          password={password}
          setpassword={setpassword}
          onsignup={Signupwithemail}
          />
    </View>
  )
}

export default StartScreen
