import React from 'react'
import { Form } from 'react-router-dom'

const SearchForm = () => {
    function handleSubmit(e){
        // console.log(e.target.firstChild.value);
        // setTimeout(()=>{e.target.firstChild.value = "";},0)
    }
  return (
    <Form onSubmit={handleSubmit}>
        <input type="text" name='search' id='search' placeholder='Enter Movie Name' required/>
        <button type='submit'>Search</button>
    </Form>
  )
}

export default SearchForm