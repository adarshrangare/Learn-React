import React, { createContext, useContext,useState } from 'react'


const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(false)

  return (
    <AuthContext.Provider value={{isLogged,setIsLogged}} >
        {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(){
    return useContext(AuthContext);
}

export default AuthProvider