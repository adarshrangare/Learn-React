import { useState } from "react"

const StateDemo2 = () => {
    let [name, setName] = useState("Adarsh");

    function handleClick(){
        console.log("Clicked");
        // name = name=="Adarsh" ? setName("Rangare") : setName("Adarsh");

        setName(name=="Adarsh" ? "Rangare" : "Adarsh" )
        
        console.log(name);
    }

    // console.log(useState("Adarsh")), It returning Array of value and function to update the value

  return (
    <>
        <h2>{name}</h2>
        <button 
        onClick={()=>{
            handleClick();
        }}
        >Change Name</button>
    </>
  )
}

export default StateDemo2