import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createContext } from "react";
import AuthProviderComponent from "./components/AuthProviderComponent.jsx";

// export const AuthContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthContext.Provider value={{
      username: "ad007",
      email: "adarsh@rangare.com"
    }}>
      <App />
    </AuthContext.Provider> */}

    <AuthProviderComponent>
      <App />
    </AuthProviderComponent>
  </React.StrictMode>
);
