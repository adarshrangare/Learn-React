import React from "react";
import Todo from "./Todo";
const Todos = ({ todos, toggleStatus, removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            {...todo}
            key={todo.id}
            toggleStatus={toggleStatus}
            removeTodo={removeTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
