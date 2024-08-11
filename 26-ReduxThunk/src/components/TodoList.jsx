import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { todoActions } from "../slices/todoSlice";
import { removeTodo, updateToDo } from "../slices/todoSlice";

// const {removeTodo,handleComplete} = todoActions;
const TodoList = () => {
  const { todos, isLoading, isError } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>There is an Error</h1>;
  }

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              dispatch(
                updateToDo({ id: todo.id, status: !todo.completed })
              );
            }}
          />
          <span>{todo.title}</span>
          <button
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
