import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/AuthProvider';
const Login = ({setLogin}) => {
   
    const {isLogged,setIsLogged} = useAuthContext();   
    const location = useLocation();
    function handleClick(){
        // setLogin(true);
        setIsLogged(true);
        // setLog(true);
    }

    if(isLogged){
        return <Navigate to="/Posts" replace state={{prevPath:location.pathName}}/>
    }


  return (
    <div> Please Log In <button onClick={handleClick}  >Login</button> </div>
  )
}

export default Login