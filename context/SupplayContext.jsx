import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useContext, useState } from "react"
import { Dimensions } from "react-native"


const SupplayContext = createContext()

const {width,height}=Dimensions.get("window")

export const SupplayProvider = ({ children }) => {

    const [user, setuser] = useState(null)
    const [Tabindex,setTabindex]=useState(null)
    //loading
    const [isloading, setisloading] = useState(true)

    //startpage
      const [name,setname]=useState('')

      const scaleFont = (size) => (width / 390) * size; 

    const StoreData=async(userdata)=>{
        setisloading(true)
       try {
          await AsyncStorage.setItem("userdata",JSON.stringify(userdata))
          setuser(userdata)
          setisloading(false)
          console.log(userdata,'hjhk')
       } catch (error) {
          console.log(error)
       }
    }
    
    const getuser=async()=>{
        try {
            const data=JSON.parse(await AsyncStorage.getItem('userdata'))
            if(data===null){
                setuser(null)
            }
            else{
                setuser(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(user)

    useState(()=>{
       getuser()
    },[])

    return (
        <SupplayContext.Provider value={{ user, isloading,StoreData,name,setname,setTabindex,Tabindex
        ,scaleFont}}>
            {children}
        </SupplayContext.Provider>
    )
}

export const useSupplayContext = () => useContext(SupplayContext)