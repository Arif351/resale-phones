import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../../Components/Firebase/Firebase.confiq'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    // useEffect(() => {
    //     const unsunscribe = onAuthStateChanged(auth, currentUser => {
    //         console.log('user observing');
    //         setUser(currentUser);
    //         setLoading(false)
    //     });
    //     return () => unsunscribe();
    // }, [])

    const authInfo = { createUser, signIn, user, logout, updateUser, loading, googleLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;