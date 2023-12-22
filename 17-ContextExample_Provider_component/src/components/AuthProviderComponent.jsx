import React from "react";
import { createContext } from "react";

export const AuthProviderContext = createContext();

const AuthProviderComponent = ({ children }) => {
  return (
    <AuthProviderContext.Provider
      value={{
        username: "adarsh007",
        email: "adarsh@rangare",
      }}
    >
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthProviderComponent;
