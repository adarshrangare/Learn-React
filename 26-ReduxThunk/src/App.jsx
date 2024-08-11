import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./slices/todoSlice";
import TodoApp from "./components/TodoApp";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return <>
    <TodoApp/>
  </>;
};

export default App;
