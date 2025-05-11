import { createContext, useContext, useEffect, useState } from "react"
import * as Font from 'expo-font'

const FontsContext = createContext()

export const FontsProvider = ({ children }) => {

  const [fontsloading, setFontsloading] = useState(true)

  const loadFonts = () => {
    Font.loadAsync({
      'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
      'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
      'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      'Roboto': require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf")
    }).then(() => {
      setFontsloading(false)
    }).catch((error) => {
      console.log(error)
    })
  };
  useEffect(() => {
    loadFonts()
  }, [])

  return (
    <FontsContext.Provider value={{ fontsloading }}>
      {children}
    </FontsContext.Provider>
  )
}

export const useFontsContext = () => useContext(FontsContext)