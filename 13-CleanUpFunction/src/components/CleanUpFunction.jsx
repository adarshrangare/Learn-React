import { useState, useEffect } from "react";

// CleanUpFunction is get called when Component get unmount

function CleanUpFunction() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("effect callback function");

    return () => {
      console.log("I am Cleanup Function");
    };
  }, []);

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
