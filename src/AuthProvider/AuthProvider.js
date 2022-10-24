import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
  //login With email & password
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //signup with email & password
  const signup = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //logout
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  //signinwith google
  const singinWithGoogle = ()=>{
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  }
  //with facebook
  const signinWithFacebook = ()=>{
    setLoader(true)
    return signInWithPopup(auth, facebookProvider);
  }
  //onauthstatechange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loader,
    signup,
    login,
    logOut,
    singinWithGoogle,
    signinWithFacebook,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;