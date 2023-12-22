import { useReducer } from "react";
import AddTODOForm from "./components/AddTODOForm";
import TodoList from "./components/TodoList";

const initialTodos = [
  {
    id: "1",
    title: "Grab Wallet and Keys",
    done: true,
  },
  {
    id: "2",
    title: "Complete React Course",
    done: false,
  },
];

function reducer(state, action) {
  console.log("inside reducer");
  console.log(action);

  if(action.type === "ADD_TODO"){
    
    const newTodo = {
        id : crypto.randomUUID(),
        title : action.payload.title,
        done : false,
    }

    const newState = [...state,newTodo];

    return newState;

  }

  if (action.type === "DELETE_TODO") {
    console.log("true");
    const newState = state.filter((st) => st.id != action.payload.id);
    return newState;
  }
  if (action.type === "TOGGLE_TODO") {
    const newState = state.map((st) => {
      if (st.id == action.payload.id) {
        return { ...st, done: !st.done };
      } else {
        return st;
      }
    });

    return newState;
  }

  return state;
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <div>
      <AddTODOForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default App;
