import React from 'react'

const Greeting2 = (props) => {
  return (
    <>
    <h3>Children Props</h3>

       <span> 
       {props.children} 
       </span> I am Children of Greeting2
    </>
    


  )
}

export default Greeting2