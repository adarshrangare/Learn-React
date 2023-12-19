import React, { useState, useReducer } from "react";

/* 
    ! USE REDUCER
        * useReducer return Array
            0th-> state varriable,
            1th-> function to update varriable
            same as State
            but in Reducer genrally function is called as
            * dispatch 
        * takes args
            1. Reducer Function
            2. initial State

    */



const initialState = { count: 0 };

/*  dispatch function
        we pass object (action) as an argument in dispatch

    reducer function 
        parameters :-
            1.-> state,
            2.-> action    
*/
function reducer(state,action) {
    console.log(state,action)
    if(action.type === "INCREMENT"){
        
        return {...state, count: state.count+1}
    }
    if(action.type === "DECREMENT"){
        return {...state, count: state.count-1}
    }
    if(action.type === "RESET"){
        return { count: 0}
    }
    return state;
}
const App = () => {
  // State
  //   const [state, setState] = useState({count:0});

  // useReducer
  // const [state, functionToUpdateState] = useReducer(reducerFunction, initialState)

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInc = () => {
    // setState((prev) => ({ ...prev, count: prev.count + 1 }));
    dispatch({
      type: "INCREMENT",
    });
  };

  const handleDec = () => {
    //  setState((prev) => ({ ...prev, count: prev.count - 1 }));
    dispatch({
      type: "DECREMENT",
    });
  };
  const handleReset = () => {
    // setState({ count: 0 });
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div>
      <h1>Use Reducer</h1>
      <hr />
      <h2>Counter</h2>
      <h3>{state.count}</h3>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDec}>Decrease</button>
    </div>
  );
};

export default App;
