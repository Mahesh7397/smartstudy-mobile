import { createContext, useContext } from "react"


const SupplayContext=createContext()

export const SupplayProvider=({Children})=>{


   return(
       <SupplayContext.Provider value={{}}>
        {Children}
       </SupplayContext.Provider>
   )
}

export const useSupplayContext=()=>useContext(SupplayContext)