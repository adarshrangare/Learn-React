import React from "react";
import MyComponent from "./components/MyComponent";

// ContextAPI =>
// It is used to remove the Props drilling in React Components

/*
    *How to use ContextAPI
      
    1.> createContext in GrandParent or Ancestor Component (provider)
    2.> useContext in any child Component (consumer)

    createContext => 

        1.> import createContext from react
        2.> create a context intance with createContext outside of function component and export it
        3.> wrap the application inside the context.Provider
              --> It has value prop where we can provide props for child components

*/

import { createContext } from "react";

export const MyAppContext = createContext();

const App = () => {

  const myFunction = ()=>{
      console.log("I am My Function",this)
      alert("I am My Function called via Grandchild")
  }

  return (
    <MyAppContext.Provider value={myFunction}>
      <div className="box app">
        I am App
        <MyComponent />
      </div>
    </MyAppContext.Provider>
  );
};

export default App;
