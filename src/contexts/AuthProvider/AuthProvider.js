import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //! for user login with google
    const providerLogin =(provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    //! for user login with github
    const githubProviderLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    //! for create user with register form
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //! for user login with email password
    const signIn =(email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    //! for update user profile
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }

    //! for user logout
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('inside auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    }, [])

    //! for send all functions
    const authInfo ={
        user, 
        providerLogin, 
        githubProviderLogin, 
        logOut, 
        updateUserProfile,
        createUser, 
        signIn, 
        loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;