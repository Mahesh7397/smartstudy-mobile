import { createContext, useContext, useEffect, useState } from "react"


const AccountContext = createContext()

export const AccountProvider = ({ Children }) => {

    const [isLoading, setisLoading] = useState(true)
    const [Account, setAccount] = useState({})


      

    return (
        <AccountContext.Provider value={{Account,isLoading}}>
            {Children}
        </AccountContext.Provider>
    )
}

export const useAccountContext = () => useContext(AccountContext)