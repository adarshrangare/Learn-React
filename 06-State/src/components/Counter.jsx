import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
        //   setCount(count - 1); this is without Callback
            
            setCount((prevState)=>{
                console.log(prevState);
               return prevState-1;
            })

            // This is with Callback Function
            // This callbackfuntion gives previous State of varriable in parameter
        }}
      >
        Decrease
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Counter;
