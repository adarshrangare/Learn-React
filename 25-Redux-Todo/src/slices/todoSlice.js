import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "1", title: "play guitar", completed: true },
    { id: "2", title: "learn DEV", completed: false },
  ],
};

// const addTodo = (state, action) => {
//   state.todos.push(action.payload);
// };


const removeTodo = (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
};

const handleComplete = (state, action) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === action.payload) {
      return { ...todo, completed: !todo.completed };
    } else {
      return { ...todo };
    }
  });
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo : {
        reducer: (state, action) => {
            console.log("reducer");
            state.todos.push(action.payload);
        },
        prepare : (payload)=>{
            // take payload as arg
            console.log("prepare",payload);
            return { payload : {
                id : nanoid(),
                title : payload,
                completed : false
            } }
        }

    } ,removeTodo,handleComplete
  },
});

export default todoSlice.reducer;

export const todoActions = todoSlice.actions;