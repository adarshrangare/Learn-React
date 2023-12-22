import React from "react";

const Todo = ({ done, id, title, dispatch,number }) => {
  const handleDelete = () => {
    console.log("delete func");
    dispatch({ type: "DELETE_TODO", payload: { id: id } });
  };

  const handleToggle = ()=>{
    dispatch({type:"TOGGLE_TODO", payload: {
        id:id
    }})
  }
  return (
    <div className="todo-item">
      <h5>{number}</h5>
      <h4>{title}</h4>
      <h6>{done ? "completed" : "pending"}</h6>
      <button onClick={handleDelete}>Remove</button>
      <input type="checkbox" onChange={handleToggle} checked={done} />
    </div>
  );
};

export default Todo;
