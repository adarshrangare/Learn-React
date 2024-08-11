import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const increment = (state, action) => {
  console.log(action);
  state.count += 1;
};
const decrement = (state, action) => {
  console.log(action);
  state.count -= 1;
};
const reset = (state, action) => {
  console.log(action);
  state.count = 0;
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment,decrement,reset
  },
});

const counterReducer = counterSlice.reducer;

export const counterActions = counterSlice.actions;

export default counterReducer;
