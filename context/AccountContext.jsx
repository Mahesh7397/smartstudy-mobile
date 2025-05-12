import { createContext, useContext, useEffect, useState } from "react"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth';


const AccountContext = createContext()

export const AccountProvider = ({ Children }) => {

    const [isLoading, setisLoading] = useState(true)
    const [Account, setAccount] = useState({})


        const onGoogleButtonPress = async () => {
            try {
                await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
                const signInResult = await GoogleSignin.signIn();
                idToken = signInResult.data?.idToken;
                if (!idToken) {
                    idToken = signInResult.idToken;
                }
                if (!idToken) {
                    throw new Error('No ID token found');
                }
                console.log(idToken)
                console.log(signInResult.data)
                const googleCredential = GoogleAuthProvider.credential(signInResult.data.idToken);
                return signInWithCredential(getAuth(), googleCredential);
            }
    
            catch (error) {
                console.log(error)
            }
        }
        

    
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '486980675643-antjebufos64bv8837on6ctmufe7afh9.apps.googleusercontent.com',
        });
    }, [])


    return (
        <AccountContext.Provider value={{Account,isLoading,onGoogleButtonPress}}>
            {Children}
        </AccountContext.Provider>
    )
}

export const useAccountContext = () => useContext(AccountContext)