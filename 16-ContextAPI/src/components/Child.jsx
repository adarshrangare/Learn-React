import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div className='child box'>
        I am child
        <GrandChild/>

    </div>
  )
}

export default Child