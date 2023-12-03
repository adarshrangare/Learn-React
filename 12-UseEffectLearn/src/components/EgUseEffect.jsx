import {useEffect, useState} from 'react'

// useEffect Hook is used for side Effects (Not Directly related to own Componenet)
// additional work like fetching data , eventlistener etc.

// *********************** useEffect
    //* it takes callback function as parameter
    //* first arg : callback function
    //* second arg : dependancy Array
 
// ********************* Dependancy Array
    // []---> useEffect will be called only once   
    // []---> If there is any state change in element of Dependency array useEffect will call according to it



const EgUseEffect = () => {
    console.log("---------------------------------------")
    console.log("Component Render");

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    useEffect(()=>{
        console.log("inside useEffect")
        // Use Effect is Asynchronus
        // useEffect callback is called always when component renders

    })

    useEffect(()=>{
        console.log("inside useEffect with Dependancy Array")
    },[])


    useEffect(()=>{
        console.log("inside useEffect with Dependancy Array with Counter2 ")
    },[counter2])
    
    console.log("Statement After UseEffect Log");

    
    
  return (
    <>
        <h1>{counter} {" <==> "} {counter2}</h1>
        <button onClick={()=>{
            setCounter((prev)=>(prev+1))
        }} >++</button>
        {"<=======>"}
        <button onClick={()=>{
            setCounter2((prev)=>(prev+1))
        }} >++</button>
    </>
  )
}

export default EgUseEffect