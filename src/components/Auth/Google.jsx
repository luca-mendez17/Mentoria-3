import { useContext, createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useEffect } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

        const [user, setUser] = useState ({});
        const googleSignIn = () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        };

        const logOut = () => {
            signOut(auth);
        };

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                console.log ('User', currentUser)
            });
            return () => {
                unsubscribe();
            };
        }, []);
    return(
        <AuthContext.Provider value= {{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(AuthContext)
}
