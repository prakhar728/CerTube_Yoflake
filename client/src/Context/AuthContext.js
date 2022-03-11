import React, {  useContext,useEffect, useState } from 'react'
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase';

const authContext = React.createContext();

export function useAuth(){
    return useContext(authContext);
}

export function AuthProvider({children}){
    const [currentUser, setcurrentUser] = useState();
    function signUp(email,password){
        console.log('Ready to signup');
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth,user=>{
            setcurrentUser(user);
        })
        return unsuscribe;
    }, [])
    
    
    const value ={
        currentUser,
        signUp,
        login
    };
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}