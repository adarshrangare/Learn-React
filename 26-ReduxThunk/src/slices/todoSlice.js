import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const response = await fetch("http://localhost:3000/todos");
  const data = await response.json();
  // console.log(data);
  return data;
});

export const addTodos = createAsyncThunk("todos/add", async (title) => {
  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      completed: false,
      id: nanoid(),
    }),
  });

  const data = await response.json();

  console.log({ data });
  return data;
});

export const removeTodo = createAsyncThunk("todos/delete", async (id) => {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  console.log(data);
  return data;
});

export const updateToDo = createAsyncThunk("todos/patch", async ({id,status}) => {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: status
      })
    });
  
    const data = await response.json();
    console.log(data);
    return data;
  });



const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builders) => {
    builders.addCase(fetchTodos.pending, (state, action) => {
      console.log("loading...");
      state.isLoading = true;
    });
    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("loaded");
      console.log(action.payload);
      state.todos = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      console.log("rejected");
      console.log(action);
      state.isError = true;
    });

    builders.addCase(addTodos.pending, (state, action) => {
      console.log("adding...");
      state.isLoading = true;
      state.isError = false;
    });
    builders.addCase(addTodos.fulfilled, (state, action) => {
      console.log("added");
      state.isError = false;
      state.isLoading = false;
      console.log(action);
      //   state.todos = action.payload;
      state.todos.push(action.payload);
    });
    builders.addCase(addTodos.rejected, (state, action) => {
      console.log("unable to add");
      console.log(action);
      state.isLoading = false;
      state.isError = true;
    });

    builders.addCase(removeTodo.pending, (state, action) => {
      console.log("adding...");
      state.isLoading = true;
      state.isError = false;
    });
    builders.addCase(removeTodo.fulfilled, (state, action) => {
      console.log("added");
      state.isError = false;
      state.isLoading = false;
      console.log(action);

      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    });
    builders.addCase(removeTodo.rejected, (state, action) => {
      console.log("unable to add");
      // console.log(action);
      state.isLoading = false;
      state.isError = true;
    });


    
    builders.addCase(updateToDo.pending, (state, action) => {
        console.log("adding...");
        state.isLoading = true;
        state.isError = false;
      });
      builders.addCase(updateToDo.fulfilled, (state, action) => {
        console.log("added");
        state.isError = false;
        state.isLoading = false;
        console.log(action);
  
         state.todos.forEach((todo) => {
            if(todo.id === action.payload.id){
                todo.completed = action.payload.completed
            }
        });
      });
      builders.addCase(updateToDo.rejected, (state, action) => {
        console.log("unable to add");
        // console.log(action);
        state.isLoading = false;
        state.isError = true;
      });

  },
});

export const todosReducers = todoSlice.reducer;
