import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useContext, useState } from "react"


const SupplayContext = createContext()

export const SupplayProvider = ({ children }) => {

    const [user, setuser] = useState(null)
    //loading
    const [isloading, setisloading] = useState(true)
    

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
        <SupplayContext.Provider value={{ user, isloading,StoreData
        }}>
            {children}
        </SupplayContext.Provider>
    )
}

export const useSupplayContext = () => useContext(SupplayContext)