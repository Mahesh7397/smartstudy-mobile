import { createContext, useContext, useState } from "react"


const SupplayContext=createContext()

export const SupplayProvider=({Children})=>{

    const [add,setadd]=useState({})

   return(
       <SupplayContext.Provider value={{ add , setadd}}>
        {Children}
       </SupplayContext.Provider>
   )
}

export const useSupplayContext=()=>useContext(SupplayContext)