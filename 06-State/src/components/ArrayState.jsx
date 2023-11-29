import { useState } from "react";
import { v4 as uuid } from "uuid";
const ArrayState = () => {
  const [arr, setArr] = useState(["Mango", "Orange"]);
  let [newItem,setNewitem] = useState("")

  function addItem(item){

    setArr([...arr,item]);

  }

  return (
    <>
      <ul>
        {arr.map((item) => {
          return <li key={uuid()}>{item}</li>;
        })}
      </ul>
      
      <input type="text" value={newItem} 
      onInput={
        (e)=>{
          setNewitem(e.target.value);
        }
      } />
      <button onClick={()=>{
        addItem(newItem);
        setNewitem("");
      }}>Add Item
      </button>

    </>
  );
};

export default ArrayState;
