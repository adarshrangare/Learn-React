import { useState } from "react";
import { v4 as uuid } from "uuid";
import {toast} from 'react-toastify';

const TodoForm = ({ addToDo }) => {
  let [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length == 0) {
      toast.error("Enter Valid Task Name",
      {
        autoClose:1000,
        position:"bottom-center",
        pauseOnHover:false,
        theme:"dark"

      })
      return;
    }

    console.log("submit clicked", title);

    const newTodo = {
      title: title,
      complete: false,
      id: uuid(),
    };

    addToDo(newTodo);

    setTitle("");

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit">Add </button>
    </form>
  );
};

export default TodoForm;
