import React from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google signUp
  const googleSignUp = () => {
    return signInWithPopup(auth, provider);
  };

  // signin user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    createUser,
    googleSignUp,
    signInUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
