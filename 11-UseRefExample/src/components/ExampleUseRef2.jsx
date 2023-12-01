import React, { useRef } from 'react'

const ExampleUseRef2 = () => {

    // we can store any html element in useRef and use it like JS later

    let textRef = useRef("");

    function textRefFunc(){

        console.log(textRef.current);
        
        const element = textRef.current;

        element.style.backgroundColor = "red";
        element.style.color = "white";
        element.style.padding = "15px";

    }

    textRefFunc();

  return (
    <>
        
        <h1>Use Ref 2 Example</h1>

        <h3 ref={textRef}>Hello I am textRef</h3>


    </>
  )
}

export default ExampleUseRef2