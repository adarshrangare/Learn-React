import {configureStore} from '@reduxjs/toolkit'
import todoSliceReducer from './slices/todoSlice'


const store = configureStore({
    reducer : {
        todos : todoSliceReducer
    }
})


export default store