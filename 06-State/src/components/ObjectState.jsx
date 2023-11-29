import {useState} from 'react'
import {v4 as uuid} from 'uuid'

function ObjectState() {

    const personObj = {
        id:"1",
        firstName:"Uhbjsk",
        lastName:"Yvshnssd",
        email:"idnuan@sdadsdd.duc",
        phone:"9876543320",
        age:"25"
    }

    const [object, setObject] = useState(personObj);

    

  return (
    <>
          <b>First Name: </b><span> {object.firstName}</span> <br /> 
          <b>Last Name: </b><span> {object.lastName}</span>  <br />
          <b>Email: </b><span> {object.email}</span>  <br />
          <b>Age: </b><span> {object.age}</span>  <br />
          <button onClick={(e)=>{
                setTimeout(()=>{
                    setObject({...object,firstName:"Adarsh"})
                },400)

                // Added SetTimeout for just fun

                setTimeout(()=>{
                    setObject({...object,firstName:"Adarsh",
                lastName:"Rangare",
                })
                },800)
                setTimeout(()=>{
                    setObject({...object,firstName:"Adarsh",
                lastName:"Rangare",
                email:"adarsh@rangare.com"})
                },1200)
                
                e.target.textContent = "Encode Details";
                console.log(e.target.textContent)
            
          }}>Decode Details</button>
    </>
  )
}

export default ObjectState