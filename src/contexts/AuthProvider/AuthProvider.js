import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //! for user login with google
    const providerLogin =(provider)=>{
        return signInWithPopup(auth, provider);
    }
    //! for user login with github
    const githubProviderLogin = (provider) =>{
        return signInWithPopup(auth,provider);
    }
    //! for create user with register form
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //! for user login with email password
    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    //! for user logout
    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect( () =>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
        });
        return () =>{
            unsubscribe();
        }
    }, [])

    //! for send all functions
    const authInfo ={user, providerLogin,githubProviderLogin,logOut,createUser,signIn};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;