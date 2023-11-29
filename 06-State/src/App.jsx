import { useState } from "react";

// Hooks are used in Functional Statement
// Class Base components are used before hooks
// Life Cycle Methods are used in Class Base Components

// Now Only Hooks are used

// UseSate Hook is used for State Manage
// In react we can not use normal Varriable to make changes in UI or Dynamic Application
const App = () => {
    let name = "Adarsh";
    function handleClick(){
        console.log("Clicked");
        name = name=="Adarsh" ? "Rangare" : "Adarsh";
        console.log(name);
    }

    // By changing the Varriable Value {name} it won't render in UI
    // to change in UI have to use Hooks ig useState

  return <>
        <h2>{name}</h2>
        <button 
        onClick={()=>{
            handleClick();
        }}
        >Change Name</button>
  </>;
};

export default App;
