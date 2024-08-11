import React, { useState } from "react";
import { todoActions } from "../slices/todoSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const { addTodo } = todoActions;

const AddToDo = () => {
  const [title, setTitle] = useState("");

  const disptch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
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
        
      disptch(addTodo(title));


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
