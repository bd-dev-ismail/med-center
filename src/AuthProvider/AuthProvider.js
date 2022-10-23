import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    //signup with email & password
    const signup = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //login With email & password
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //logour
    const logOut = ()=>{
        return signOut(auth);
    }
    //onauthstatechange
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return ()=> unsubscribe();
    },[])
    const authInfo = { user, signup, login, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;