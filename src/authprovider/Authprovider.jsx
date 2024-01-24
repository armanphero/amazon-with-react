import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fromLogin, setFromLogin] = useState('/');
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const userInfo = {
        createNewUser,
        loginUser,
        signOutUser,
        setUser,
        setLoading,
        setFromLogin,
        user,
        loading,
        fromLogin
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (result) => {
            console.log(result);
            setUser(result);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;