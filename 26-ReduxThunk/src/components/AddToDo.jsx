import React, { useState } from "react";
// import { todoActions } from "../slices/todoSlice";
import { useDispatch } from "react-redux";
import {addTodos} from "../slices/todoSlice"

// const { addTodo } = todoActions;

const AddToDo = () => {
  const [title, setTitle] = useState("");

  const disptch = useDispatch();
  
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (title.trim().length === 0) {
          return;
        }
        // const newTodo = {
        //   id: nanoid(),
        //   title: title,
        //   completed: false,
        // };

        // disptch(addTodo(newTodo));

     // using prepare in slice
        
      disptch(addTodos(title));


        setTitle("");
      }}
    >
      <input
        type="text"
        name="title"
        id="todo"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default AddToDo;
