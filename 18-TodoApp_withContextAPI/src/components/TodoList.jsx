import React,{useContext} from 'react'
import Todo from './Todo'
import { TodoContext } from '../App'



const TodoList = () => {
  const {todos} = useContext(TodoContext);
  return (
    <div>
        {
            todos.map((todo,index)=>(
                <Todo key={todo.id} {...todo} number={index+1}/>
            ))
        }

    </div>
  )
}

export default TodoList