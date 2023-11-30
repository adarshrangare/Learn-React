import React from "react";

const Todo = ({ title, id, complete, toggleStatus, removeTodo }) => {
  return (
    <div className="todoItem">
      <div className="todoTitle">
        <input
          type="checkbox"
          checked={complete}
          onChange={(e) => {
            toggleStatus(id);
          }}
        />
        <p>{title} </p>
      </div>

      <button
        onClick={() => {
          removeTodo(id);
        }}
      >
       &#10060; 
      </button>
      
    </div>
  );
};

export default Todo;
