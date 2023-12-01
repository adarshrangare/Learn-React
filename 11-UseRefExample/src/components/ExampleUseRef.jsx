import { useState, useRef } from "react";

// useRef
// example
// diff b/w useRef and useState
// handle from input with useRef

const ExampleUseRef = () => {
  console.log("componentRender");
  let [counter, setCounter] = useState(0);

    // useRef
    // it returns Object
    // In case of useRef Change Component does not render
    const useRefObj = useRef("Adarsh");

    console.log(useRefObj);

    

  return (
    <>
      <div>
        <h1>Use State</h1>
        <h2> {counter}</h2>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
        
        <div>
            <h1>Use Ref</h1>

            <h2>Hello {useRefObj.current}</h2>
            <button onClick={()=>{
                
                useRefObj.current = "Rangare"
                console.log(useRefObj);
            }}>Button</button>

        </div>


    </>
  );
};

export default ExampleUseRef;
