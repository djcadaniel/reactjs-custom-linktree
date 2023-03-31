import React, { useReducer } from 'react'
import { types } from '../types/types';
import { AuthContext } from './AuthContext'
import {authReducer} from './authReducer';

const initialState = {
  logged: false,
}

export const AuthProvider = ({children} : {children:any}) => {

  //El useReducer manejara mis estados, el authReducer, es donde jugare con mis estados conmi switch
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = (name = '') =>{
    const user = {id:'ABC', name}
    const action =  {
      type: types.login,
      payload: user,
    }
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      authState,
      login:login
    }}> 
      {children}
    </AuthContext.Provider>
  )
}
