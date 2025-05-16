import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartingScreen from '../screens/StartingScreen'
import { Alert, Modal, TouchableWithoutFeedback, View } from 'react-native'
import Email from '../components/Modal Pages/Signup/Email'
import { enableScreens } from 'react-native-screens'
import Password from '../components/Modal Pages/Signup/Password'
enableScreens()
import auth from '@react-native-firebase/auth'
import Login from '../components/Modal Pages/Login'
import ForgetPassword from '../components/Modal Pages/ForgetPassword'

const Stack = createNativeStackNavigator()

const StartScreen = () => {

  const [viewsignup, setviewsignup] = useState(false)
  const [Viewemail, setViewemail] = useState(false)
  const [viewpassword, setviewpassword] = useState(false)
  const [disable, setdisable] = useState(false)
  const [viewlogin, setviewlogin] = useState(false)
  const [Viewforget, setViewforget] = useState(false)

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const Signupwithemail = async () => {
    auth().createUserWithEmailAndPassword(email, password).then(() => {
      Alert.alert('Sign Up', 'Successfully User Created', [
        {
          text: 'Ok',
          onPress: () => {
            setemail("")
            setpassword("")
            setviewpassword(false)
            setviewlogin(true)
          }
        }
      ])

    }).catch((error) => {
      console.log(error)
      Alert.alert(error.nativeErrorMessage)
    })
  }


  useEffect(() => {
    console.log(email, email?.includes("@gmail.com"))
    if (email?.includes('@gmail.com')) {
      setdisable(false)
    }
    else {
      setdisable(true)
    }
  }, [email])


  return (
    <View style={{ flex: 1 }}>
      <StartingScreen view={viewsignup} setview={() => { setviewsignup(true); setViewemail(true) }} setviewlogin={setviewlogin} />
      <Email modalview={viewsignup} setnodalview={setviewsignup} emailview={Viewemail} setemailview={setViewemail} Email={email} setEmail={setemail} disable={disable} setviewpassword={setviewpassword} setlogin={setviewlogin} />
      <Password passwordview={viewpassword} setPasswordview={setviewpassword}
        setemail={setViewemail} disable={disable}
        password={password}
        setpassword={setpassword}
        onsignup={Signupwithemail}
      />
      <Login viewlogin={viewlogin} setviewlogin={setviewlogin} setviewforget={setViewforget} />
      <ForgetPassword viewforget={Viewforget} setviewforget={setViewforget} />
    </View>
  )
}

export default StartScreen
