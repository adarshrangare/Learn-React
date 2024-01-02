import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import Login from '../pages/Login';

const RequireAuth = ({children}) => {
    const {isLogged, setIsLogged} = useAuthContext();
    const location = useLocation();
    if(isLogged){

        return children;

    }

  return (
    <Navigate to="/login" replace state={{prevPath:location.pathname}} />
  )
}

export default RequireAuth