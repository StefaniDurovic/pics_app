import { createContext, useContext, useMemo, useState } from 'react';
import { FirebaseAuth } from '../handlers/auth'; 

const { signIn, signOut, getCurrentUser } = FirebaseAuth;
const Context = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const login = () => signIn().then(setCurrentUser); // this will set the result of the signIn promise to as the new value for currentUser
    const logout = () => {
        signOut().then(() => setCurrentUser(null));
        window.location.href = "/";
    };
    const authenticate = () => getCurrentUser().then(setCurrentUser);
    
    const value = useMemo(() => {
        return{
            login, 
            logout,
            authenticate,
            currentUser
        }
    }, [login, logout, currentUser, authenticate])

    return <Context.Provider value={value}>{children}</Context.Provider>
}

// custom hook
export const useAuthContext = () => {
    return useContext(Context)
}