import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { todoActions } from "../slices/todoSlice";

const {removeTodo,handleComplete} = todoActions;
const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={()=>{
            dispatch(handleComplete(todo.id))
          }} />
          <span>{todo.title}</span>
          <button onClick={()=>{
            dispatch(removeTodo(todo.id))
          }} >Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
