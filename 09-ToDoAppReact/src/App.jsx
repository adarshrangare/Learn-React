import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Default Todo Items
  const defaultTodo = [
    {
      id: 1,
      title: "Learn JavaScript",
      complete: true,
    },
    {
      id: 2,
      title: "Learn React",
      complete: false,
    },
    {
      id: 3,
      title: "Read Novel",
      complete: false,
    },
  ];
  // useState for TodoItems
  const [todos, setTodos] = useState(defaultTodo);

  // function to Add new Items in Todo Items

  function addToDo(newTodo) {
    console.log(newTodo);

    setTodos((prev) => [...prev, newTodo]);
  }

  // Function to change state of complete (true/false)

  function toggleStatus(id) {
    console.log(id);

    setTodos((prev) => {
      return prev.map((pre) => {
        if (pre.id == id) {
          return { ...pre, complete: !pre.complete };
        } else {
          return pre;
        }
      });
    });
  }

  // function to Remove Todo items

  function removeTodo(id){
    console.log(id);
    
    setTodos((prev)=>{
      return prev.filter((prev)=>(prev.id != id));
    })


  }

  return (
    <div className="container">
        <ToastContainer/>
      <h1 className="main-title">ToDo List</h1>
      <TodoForm addToDo={addToDo} />
      <Todos todos={todos} toggleStatus={toggleStatus} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
