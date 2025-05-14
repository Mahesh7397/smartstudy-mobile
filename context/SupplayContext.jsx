import { createContext, useContext, useState } from "react"


const SupplayContext=createContext()

export const SupplayProvider=({Children})=>{

    const [user,setuser]=useState({})
     //loading
     const [isloading,setisloading]=useState(true)
 
   return(
       <SupplayContext.Provider value={{user,isloading}}>
        {Children}
       </SupplayContext.Provider>
   )
}

export const useSupplayContext=()=>useContext(SupplayContext)