import React, { useState } from 'react'

const AddTODOForm = ({dispatch}) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        dispatch({type:"ADD_TODO", payload: {
            title:input
        }})
        
    }

  return (
    <div>

        <form onSubmit={handleSubmit} >

            <input type="text" palceholder="task" value={input} onChange={e=>setInput(e.target.value)}/>
            <button type="submit">Add Todo</button>

        </form>

    </div>
  )
}

export default AddTODOForm