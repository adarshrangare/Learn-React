import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,dispatch}) => {
  return (
    <div>
        {
            todos.map((todo,index)=>(
                <Todo key={todo.id} {...todo} dispatch={dispatch} number={index+1}/>
            ))
        }

    </div>
  )
}

export default TodoList