import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firbase/firebase.config';
import { createContext } from 'react';

export const AuthContext = createContext()

const UserContext = ({childern}) => {
  const auth= getAuth(app)
  const provider= new GoogleAuthProvider();
  //sign up with google;
  const usersignUpwithGoogle =()=>{
    return signInWithPopup(auth,provider)

  }
  //send all
  const authInfo={
    usersignUpwithGoogle
  }
  return (
    <div>
    <AuthContext.Provider value={authInfo}>
          {childern}
        </AuthContext.Provider>
    </div>
  );
};

export default UserContext;