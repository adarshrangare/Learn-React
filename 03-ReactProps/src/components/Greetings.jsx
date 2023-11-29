import React from 'react'
import ShowDetails from './ShowDetails'
// props is in Object 

const Greetings = (props) => {
  return (
    <>  
        
        {/* <h1>Hello {name}</h1> */}
        <h1>Hello {props.name} {props.lastName} </h1>
        <div> Props: {JSON.stringify(props)}</div>
        <ShowDetails {...props}/>
    </>
    
  )
}

export default Greetings