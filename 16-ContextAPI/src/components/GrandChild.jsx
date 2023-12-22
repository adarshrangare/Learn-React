import React from "react";

/*

    useContext(Consuming Context) => 

        1.> import useContext from react
        2.> import context created 
        3.>
    
    
   */

import { useContext } from "react";
import { MyAppContext } from "../App";

const GrandChild = () => {
  const contextValue = useContext(MyAppContext);

  console.log(contextValue);

  return (
    <div className="grandchild box">
      I am Grand Child
      <br />
      <button onClick={contextValue}>
        Call My Function <br /> from App
      </button>
    </div>
  );
};

export default GrandChild;
