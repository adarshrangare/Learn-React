import StateExample from "./components/StateExample";
import Counter from "./components/Counter";
import { useState } from "react";
import ArrayState from "./components/ArrayState";
import ObjectState from "./components/ObjectState";

// Hooks are used in Functional Statement
// Class Base components are used before hooks
// Life Cycle Methods are used in Class Base Components

// Now Only Hooks are used

// UseSate Hook is used for State Manage
// In react we can not use normal Varriable to make changes in UI or Dynamic Application

// state
// state ---> data
// when state changes --> Components render again and changes UI

// useState 
    // -- useState(defaultValue) = [stateValue, functionToUpdateStateValue]
    // -- only call inside the function body even not in return
    // 


const App = () => {
  return (
    <>
      <h1>State Example</h1>
      <StateExample/>
      <hr />
      <h1>Counter</h1>
      <Counter/>
      <hr />
      <h1>Array State Changes</h1>
      <ArrayState/>
      <hr />
      <h1>Object State Changes</h1>
      <ObjectState/>
    </>
  );
};

export default App;
