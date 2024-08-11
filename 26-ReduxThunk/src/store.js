import {configureStore}  from "@reduxjs/toolkit"
import { todosReducers } from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        todos : todosReducers
    }
})

export default store;