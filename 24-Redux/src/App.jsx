import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./slices/counterSlice";
const { increment, decrement, reset } = counterActions;
const App = () => {
  const { count } = useSelector((state) => state.counter);
  // console.log(count)

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>

      <h2>Count : {count}</h2>

      <div>
        <button
          onClick={() => {
            dispatch(decrement(count + 1));
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            dispatch(reset(count + 1));
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch(increment(count + 1));
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default App;
