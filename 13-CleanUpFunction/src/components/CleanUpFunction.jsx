import { useState, useEffect } from "react";

// CleanUpFunction is get called when Component get unmount
//

// CleanUp Function
// * 1. before component unmount
// * 2. when there is value inside Dependency arry
// When Value change in dep arr
// a=> components re-render
// b=> cleanup function will run
// c=> useEffect callback runs

      // function CleanUpFunction() {
      //   console.log("component render");
      //   const [counter, setCounter] = useState(0);

      //   useEffect(() => {
      //     console.log("effect callback function");

      //     return () => {
      //       console.log("I am Cleanup Function");
      //     };
      //   }, []);

function CleanUpFunction() {
  console.log("component render");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("effect callback function");

    return () => {
      console.log("I am Cleanup Function");
    };
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default CleanUpFunction;
